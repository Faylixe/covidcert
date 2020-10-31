# Générateur alternatif d'attestation dérogatoire COVID-19

Ce repository fourni une version alternative du générateur d'attestation
dérogatoire de déplacement COVID-19. Il est consituté d'une simple page HTML
qui génère l'attestation au format PDF via du _modern Javascript_, les données
d'entrées étant transmises via un objet _JSON_ encodé en _base64_. Cela permet
d'automatiser la génération d'attestation sans avoir à remplir le formulaire
et de fournir des actions de type
[iOS shortcuts](https://support.apple.com/fr-fr/guide/shortcuts/welcome/ios) ou
encore [Google action blocks](https://support.google.com/accessibility/android/answer/9711267?hl=en).

## Raccourcis iOS

Des [raccourcis iOS](https://support.apple.com/fr-fr/guide/shortcuts/welcome/ios)
basé sur ce générateur sont disponibles via les liens iCloud suivants<sup>1</sup>:

<table>
    <tr>
        <td>
            <a href="https://www.icloud.com/shortcuts/2dbfef97eb544e6f8d60c3afe10ff918">
                <figure class="image">
                    <img src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/shopping.png"><br>
                    <figcaption>Courses</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/d52f0aead99542e9a80b439c78e9a652">
                <figure class="image">
                    <img src="https://raw.githubusercontent.com/Faylixe/covidcert/main/docs/images/activity.png"><br>
                    <figcaption>Activité</figcaption>
                </figure>
            </a>
        </td>
    </tr>
</table>

Lors de l'import vos informations personnelles vous seront demandés afin de pouvoir
générer les attestations automatiquement. Ces données sont stockées sur votre téléphone
et ne peut être utilisé par des tiers.

> <sup>1</sup> un raccourci est proposé par type de déplacement ce qui permet une
génération instantanée au besoin.

## Developpement

L'application web est herbergé sur [Github Pages](https://pages.github.com)
et reprend le code source de l'application officielle pour la génération du
PDF. En revanche elle ne dispose pas de formulaire de saisie manuelle pour
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
    "reason":       0,
    "delta":        10
}
```

Le champ `reason` est un entier qui reprend la codification original de
l'application officielle disponible
[ici](https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020).
En voici la liste:

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

Le champ `delta` permet d'antidater la date de création et l'heure de sortie de
l'attestation en nombre de minute.