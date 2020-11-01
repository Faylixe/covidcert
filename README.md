# Générateur alternatif d'attestation dérogatoire COVID-19

Ce repository fourni une version alternative du générateur d'attestation
dérogatoire de déplacement COVID-19. Il est constitué d'une simple page HTML
qui génère l'attestation au format PDF via du _modern Javascript_, les données
d'entrées étant transmises via un objet _JSON_ encodé en _base64_. Cela permet
d'automatiser la génération d'attestation sans avoir à remplir le formulaire
et de fournir des actions de type
[iOS shortcuts](https://support.apple.com/fr-fr/guide/shortcuts/welcome/ios).

## Raccourcis iOS

Des [raccourcis iOS](https://support.apple.com/fr-fr/guide/shortcuts/welcome/ios)
basé sur ce générateur sont disponibles via les liens iCloud suivants<sup>1</sup>:

> :gear: Pour pouvoir importer ces raccourcis vous devez activer au préalable
l'option `Réglages > Raccourcis > Autoriser les raccourcis non fiables`

<table>
    <tr>
        <td>
            <a href="https://www.icloud.com/shortcuts/0ad1cf2c9c63492fabf7015fff5e2a43">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/work.png"><br>
                    <figcaption>Travail</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/f121c12e8657460390e31821d79845a3">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/shopping.png"><br>
                    <figcaption>Courses</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/94a3b4e54f064d409c270fb0bbc69dfe">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/health.png"><br>
                    <figcaption>Santé</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/c3abac207887495e83141c3cdad036e4">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/family.png"><br>
                    <figcaption>Famille</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/6e948bb10cee41ffb5c3457ca1020828">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/disability.png"><br>
                    <figcaption>Handicap</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/3d77b2f1184a430da52eb44768ef0659">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/activity.png"><br>
                    <figcaption>Activité</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/7314d130eb884ec7bc474b9aec1bd27a">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/justice.png"><br>
                    <figcaption>Convocation</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/dea407dfcdc34fc4acad5cbf16f09ecb">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/mission.png"><br>
                    <figcaption>Mission</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/b71de4b7db454c77b2a4c5aab7af2d83">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/children.png"><br>
                    <figcaption>Enfants</figcaption>
                </figure>
            </a>
        </td>
    </tr>
</table>

Lors de l'import vos informations personnelles vous seront demandées afin de pouvoir
générer les attestations automatiquement. Ces données sont stockées sur votre téléphone
et ne peut être utilisé par des tiers.

> <sup>1</sup> un raccourci est proposé par type de déplacement ce qui permet une
génération instantanée au besoin.

## Developpement

L'application web est hérbergée sur [Github Pages](https://pages.github.com)
et reprend le code source de l'application officielle pour la génération du
PDF. En revanche, elle ne dispose pas de formulaire de saisie manuelle pour
remplir les champs nécessaires, mais utilise à la place un message JSON
encodé en _base64_. Ce message JSON est attendu dans le paramètre URL `payload`.
Le messsage JSON attendu doit respecter le format suivant :

```json
{
    "firstname":    "Prénom du titulaire",
    "lastname":     "Nom du titulaire",
    "birthday":     "Date de naissance du titulaire au format ISO8601",
    "placeofbirth": "Lieu de naissance du titulaire",
    "address":      "Adresse du titulaire",
    "city":         "Ville liée à l'adresse du titulaire",
    "zipcode":      "Code postal liée à l'adresse du titulaire",
    "reason":       0
}
```

Le champ `reason` est un entier qui reprend la codification originale de
l'application officielle disponible
[ici](https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020).
En voici la liste :

| Code | Raison invoqué |
| ---- | -------------- |
| `0`  | Déplacement professionnel, éducatif ou liée à la formation |
| `1`  | Achats de première necessité                               |
| `2`  | Consultations, Examen de santé                             |
| `3`  | Motif familial impérieux                                   |
| `4`  | Handicap                                                   |
| `5`  | Activité physique                                          |
| `6`  | Convocation judiciaire ou administrative                   |
| `7`  | Mission d'intérêt général                                  |
| `8`  | Déplacement relatif aux enfants                            |
