[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/e_MbbZ7I)
# Basic REST-API

**Läs igenom hela uppgiftsbeskrivningen noggrant innan du börjar.**

## Beskrivning

I den här laborationen ska du individuellt skapa ett enklare REST-API i NodeJS med Express och Typescript. Då API:et skall har funktionalitet för CRUD skall det finnas endpoints inkluderat GET, DELETE, PUT och POST för en resurs. Varje endpoint skall utföra vad dess anropsmetod ämnar att utföra, dvs. POST för att lägga till, PUT för att uppdatera, GET för att hämta osv. Vad API:et hanterar för typ av resurs väljer du själva, dock ska det finns minst 4 st egenskaper för ett objekt varav en egenskap är id. Projektet skall inte ha någon databas utan istället ha all data sparad lokalt i serverprogrammet (exempelvis en array med produkter).

## Kodbasen

Kör `npm install` för att komma igång. Det är rekommenderas du använder `npm test` för att utveckla ditt API. Det går även bra att starta dev-servern med `npm run dev` och manuellt testa API'et med VS Code tilläget REST Client.

Utgå ifrån [app.ts](./src/app.ts) när du bygger din serverapplikation. Det finns även en [mock.ts](./src/mock.ts) fil där du kan beskriva hur ditt API ser ut för testerna.

Om du har tänkt spara datan till fil behöver den filen heta `db.json` och ligga i rootmappen.

## Inlämning

För att bli godkänd på den här uppgiften MÅSTE du använda GIT och GitHub. Inlämningen sker som vanligt via läroplattformen där du ska zippa ihop din projektmapp. I din projektmapp ska det finnas (utöver all kod) en README.md fil. Den ska innehålla en titel, beskrivning av projektet, vilka krav som är uppfyllda, info om hur projektet byggs och körs. Kom ihåg att ta bort node_modules!!!

**Krav för godkänt:**

- [ ] Projektet innehåller CRUD endpoints (GET, POST, PUT & DELETE) för en resurs
- [ ] Datan som API:et hanterar sparas lokalt i serverfilen
- [ ] APIét ska svara med 404 om datan saknas.
- [ ] Git & GitHub har använts
- [ ] Projektmappen innehåller en README.md fil - (läs ovan för mer info)
- [ ] Uppgiften lämnas in i tid!

_Gjorda krav ska kryssas för_

**Krav för väl godkänt:**

- [ ] Alla punkter för godkänt är uppfyllda
- [ ] Dina enpoints ska ha validering
- [ ] Datan som API:et hanterar sparas till disk

_Gjorda krav ska kryssas för_

_Do you have any questions or need something explained in English? - Please feel free to ask me during a lecture._

**Good luck!**
