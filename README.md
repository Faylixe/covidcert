# Générateur alternatif d'attestation dérogatoire COVID-19

Ce repository fourni une version alternative du générateur d'attestation
dérogatoire de déplacement COVID-19. Il est constitué d'une simple page HTML
qui génère l'attestation au format PDF via du _modern Javascript_, les données
d'entrées étant transmises via un objet _JSON_ encodé en _base64_. Cela permet
d'automatiser la génération d'attestation sans avoir à remplir le formulaire
et de fournir des actions de type
[iOS shortcuts](https://support.apple.com/fr-fr/guide/shortcuts/welcome/ios).

## Raccourcis iOS

Vous devez au préalable installer l'application
[Raccourcis](https://apps.apple.com/fr/app/raccourcis/id915249334) sur votre
device iOS. Vous pouvez ensuite installer les raccourcis disponible via les
liens iCloud mis à disposition.

> :gear: Pour pouvoir importer ces raccourcis vous devez activer au préalable
l'option `Réglages > Raccourcis > Autoriser les raccourcis non fiables`

Lors de l'import vos informations personnelles vous seront demandées afin de
pouvoir générer les attestations automatiquement. Ces données sont stockées sur
votre téléphone et ne peut être utilisé par des tiers.

> :warning: Lors de l'éxécution de votre raccourci, un différé d'heure de sortie
vous sera proposé, l'utilisation d'un différé négatif demeure votre
responsabilité personnelle.

> <sup>1</sup> un raccourci est proposé par type de déplacement ce qui permet une
génération instantanée au besoin.

### Lien iCloud

<table>
    <tr>
        <td>
            <a href="https://www.icloud.com/shortcuts/f4975d211a614cb6abfa63f85bee70cc">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/work.png"><br>
                    <figcaption>Travail</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/572c8e8ff4b94c279d3c226edf10b6f3">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/shopping.png"><br>
                    <figcaption>Courses</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/c4cddd0e259c431990247eb60f7d57fb">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/health.png"><br>
                    <figcaption>Santé</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/624fd52f188a4fb59be221865c32e2cf">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/family.png"><br>
                    <figcaption>Famille</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/f9fea98a27a94315a1e22e7f8f849afb">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/disability.png"><br>
                    <figcaption>Handicap</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/d44f2830d97848ce8a1598430ad4bff3">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/activity.png"><br>
                    <figcaption>Activité</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/43d5f7ba21ca4123990456b21be6edea">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/justice.png"><br>
                    <figcaption>Convocation</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/1a80f03f393c48d2b7df0ddb92e3d367">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/mission.png"><br>
                    <figcaption>Mission</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://www.icloud.com/shortcuts/e954dbf0a9b7421fbe50c39a38b31348">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/children.png"><br>
                    <figcaption>Enfants</figcaption>
                </figure>
            </a>
        </td>
    </tr>
</table>

### Fichier .shortcut

En cas d'indisponibilité du service iCloud vous pouvez également utiliser directement les fichiers `shortcut`:

<table>
    <tr>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/work.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/work.png"><br>
                    <figcaption>Travail</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/shopping.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/shopping.png"><br>
                    <figcaption>Courses</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/health.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/health.png"><br>
                    <figcaption>Santé</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/family.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/family.png"><br>
                    <figcaption>Famille</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/disability.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/disability.png"><br>
                    <figcaption>Handicap</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/activity.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/activity.png"><br>
                    <figcaption>Activité</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/justice.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/justice.png"><br>
                    <figcaption>Convocation</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/mission.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/mission.png"><br>
                    <figcaption>Mission</figcaption>
                </figure>
            </a>
        </td>
        <td>
            <a href="https://raw.githubusercontent.com/Faylixe/covidcert/main/shortcuts/children.shortcut">
                <figure class="image">
                    <img width="64" height="44" src="https://raw.githubusercontent.com/Faylixe/covidcert/main/images/ios/children.png"><br>
                    <figcaption>Enfants</figcaption>
                </figure>
            </a>
        </td>
    </tr>
</table>

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
    "reason":       0,
    "delta":        null,
    "hours":        null,
    "minutes":      null
}
```

Si les champs `hours` et `minutes` sont non nul, alors l'heure de sortie générée sera
celle correspondante.

> :warning: Le champ `delta` est optionel, il correspond au nombre de minute de différé à
utiliser pour l'heure de sortie générée.

Le champ `reason` est un entier qui reprend la codification originale de
l'application officielle disponible
[ici](https://github.com/LAB-MI/attestation-deplacement-derogatoire-q4-2020).
En voici la liste :

| Code | Raison invoquée |
| ---- | --------------- |
| `0`  | Déplacement professionnel, éducatif ou lié à la formation |
| `1`  | Achats de première necessité                              |
| `2`  | Consultations, Examen de santé                            |
| `3`  | Motif familial impérieux                                  |
| `4`  | Handicap                                                  |
| `5`  | Activité physique                                         |
| `6`  | Convocation judiciaire ou administrative                  |
| `7`  | Mission d'intérêt général                                 |
| `8`  | Déplacement relatif aux enfants                           |


### Service worker

Un service worker est installé au démarrage de la page afin de mettre en cache les ressources
nécessaire pour générer une attestation même en mode _offline_.