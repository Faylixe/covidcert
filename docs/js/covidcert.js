// Simplified COVID-19 certificate generator
// Author: Félix Voituret (felix@voituret.fr)

function Position(x, y) {
    return { x: x, y: y };
}

function Size(width, height) {
    return { width: width, height: height };
}

const DEFAULT_FONT_SIZE = 11;
const MIN_FONT_SIZE = 7;
const MAX_FONT_WIDTH = 83;
const NAME_POSITION = Position(119, 696);
const BIRTHDAY_POSITION = Position(119, 674);
const PLACE_OF_BIRTH_POSITION = Position(297, 674);
const ADDRESS_POSITION = Position(133, 652);
const CITY_POSITION = Position(105, 177);

/**
 * 0: Travail
 * 1: Achats
 * 2: Santé
 * 3: Famille
 * 4: Handicap
 * 5: Activité
 * 6: Convocation
 * 7: Mission
 * 8: Enfants
 */
const REASONS = [
    'travail',
    'achats',
    'sante',
    'famille',
    'handicap',
    'sport_animaux',
    'convocation',
    'missions',
    'enfants'
];
const REASON_POSITIONS = [
    Position(78, 578),
    Position(78, 533),
    Position(78, 477),
    Position(78, 435),
    Position(78, 396),
    Position(78, 358),
    Position(78, 295),
    Position(78, 255),
    Position(78, 211)
];
const REASON_SIZE = 18;
const DATE_POSITION = Position(91, 153);
const DATE_SIZE = 11;
const TIME_POSITION = Position(264, 153);
const TIME_SIZE = 11;
const QRCODE_POSITIONS = [
    Position(156, 100),
    Position(50, 350),
];
const QRCODE_SIZES = [
    Size(92, 92),
    Size(300, 300)
];

const PDF_BASE_URL = "base.pdf";
const PDF_TITLE = "COVID-19 - Déclaration de déplacement";
const PDF_SUBJECT = "Attestation de déplacement dérogatoire";
const PDF_PRODUCER = "COVID Certificate generator";
const PDF_AUTHOR = "Félix Voituret";
const PDF_CREATOR = "";
const PDF_KEYWORDS = [
    'covid19',
    'covid-19',
    'attestation',
    'déclaration',
    'déplacement',
];

const QRCODE_OPTIONS = {
    errorCorrectionLevel: 'M',
    type: 'image/png',
    quality: 0.92,
    margin: 1
};

/**
 * Load base PDF files and returns it with appropriate metadata settled.
 * 
 * @returns loaded PDFDocument instance.
 */
async function loadPDF() {
    const base = await fetch(PDF_BASE_URL).then((
        response) => response.arrayBuffer());
    const document = await PDFLib.PDFDocument.load(base);
    document.setTitle(PDF_TITLE);
    document.setSubject(PDF_SUBJECT);
    document.setKeywords(PDF_KEYWORDS);
    document.setProducer(PDF_PRODUCER);
    document.setCreator(PDF_CREATOR);
    document.setAuthor(PDF_AUTHOR);
    document.addPage();
    return document;
}

/**
 * Generate QRCode for the given profile.
 * 
 * @param {*} profile Profile to generate QRCode from.
 * @returns Generated QRcode.
 */
async function generateCertificateQRCode(profile) {
    let data = [
        `Cree le: ${profile.date} a ${profile.time}`,
        `Nom: ${profile.lastname}`,
        `Prenom: ${profile.firstname}`,
        `Naissance: ${profile.birthday} a ${profile.placeofbirth}`,
        `Adresse: ${profile.address} ${profile.zipcode} ${profile.city}`,
        `Sortie: ${profile.date} a ${profile.time}`,
        `Motifs: ${REASONS[profile.reason]}`,
    ];
    data = data.join(';\n ');
    return QRCode.toDataURL(data, QRCODE_OPTIONS);
}

/**
 * Compute optimal font size for city display.
 * 
 * @param {*} city City to compute font size for.
 * @param {*} font Font to compute size from.
 * @returns Font size to be used.
 */
function getCitySize(city, font) {
    let currentSize = DEFAULT_FONT_SIZE;
    let textWidth = font.widthOfTextAtSize(city, DEFAULT_FONT_SIZE);
    while (textWidth > MAX_FONT_WIDTH && currentSize > MIN_FONT_SIZE) {
        textWidth = font.widthOfTextAtSize(city, --currentSize);
    }
    let citySize = textWidth > MAX_FONT_WIDTH ? null : currentSize;
    if (!citySize) {
        citySize = 7;
    }
    return citySize;
}

/**
 * Generate target certificate as PDF.
 * 
 * @param {*} profile Profile to generate PDF from.
 */
async function generateCertificatePDF(profile) {
    const document = await loadPDF();
    const qrcode = await generateCertificateQRCode(profile);
    const font = await document.embedFont(PDFLib.StandardFonts.Helvetica);
    const image = await document.embedPng(qrcode);
    const pages = document.getPages();
    const print = (text, position, size = 11) => {
        pages[0].drawText(
            text,
            {
                x: position.x,
                y: position.y,
                size: size,
                font: font
            }
        );
    };
    const citySize = getCitySize(profile.city, font);
    print(`${profile.firstname} ${profile.lastname}`, NAME_POSITION);
    print(profile.birthday, BIRTHDAY_POSITION);
    print(profile.placeofbirth, PLACE_OF_BIRTH_POSITION);
    print(`${profile.address} ${profile.zipcode} ${profile.city}`, ADDRESS_POSITION);
    print(profile.city, CITY_POSITION, citySize);
    print(`${profile.date}`, DATE_POSITION, DATE_SIZE);
    print(`${profile.time}`, TIME_POSITION, TIME_SIZE);
    print('x', REASON_POSITIONS[profile.reason], REASON_SIZE);
    pages[0].drawImage(image, {
        x: pages[0].getWidth() - QRCODE_POSITIONS[0].x,
        y: QRCODE_POSITIONS[0].y,
        width: QRCODE_SIZES[0].width,
        height: QRCODE_SIZES[0].height,
    });
    pages[1].drawImage(image, {
        x: QRCODE_POSITIONS[1].x,
        y: pages[1].getHeight() - QRCODE_POSITIONS[1].y,
        width: QRCODE_SIZES[1].width,
        height: QRCODE_SIZES[1].height,
    });
    const bytes = await document.save();
    return new Blob([bytes], { type: 'application/pdf' });
}

/**
 * Generate certificate as PDF and trigger file download.
 * 
 * @param {*} payload Received URL payload as Base64 encoded JSON string.
 */
async function generateAndDownload(payload) {
    const decoded = decodeURIComponent(escape(atob(payload)));
    const profile = JSON.parse(decoded);
    profile.birthday = moment(profile.birthday).format("DD/MM/YYYY");
    let now = moment();
    if (profile.delta) {
        now = now.subtract(profile.delta, 'minutes');
    }
    profile.date = now.format("DD/MM/YYYY");
    profile.time = now.format("HH:mm")
    const blob = await generateCertificatePDF(profile);
    const url = URL.createObjectURL(blob);
    window.open(url);
    //const link = document.createElement('a');
    //link.href = url;
    //link.download = `attestation-${profile.date}_${profile.time}.pdf`;
    //document.body.appendChild(link);
    //link.click();
}
