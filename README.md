eAmbulanta je jednostavna i jedinstvena web applikacija koja je kreirana radi olakšanog rada medinicinskim tehničarima, kao i pacijentima, u cilju što bolje organizovanosti i efikasnosti zdravstvenog sistema.

## Installation

Prvi korak jeste da cijeli code clone u odgovarajući folder.

Sve što je potrebno jeste da imate instaliran Visual Studio Code (https://code.visualstudio.com/download). 

Zatim na sljedećem linku instalirajte Node.js (https://nodejs.org/en/download/). Otvorite Node.js Command Prompt i upišite sljedeći kod:

npm install -g @angular/cli


Otvorite cijeli folder aplikacije u Visual Studio Code, pronađete file pod nazivom "package.json", a zatim otvorite Terminal i kucajte:

ng serve --o


Nakon ovog unesenog koda, aplikacija bi Vam se trebala automatski otvoriti u browser - u kao: http://localhost:4200/


## Usage

Aplikacija je vrlo jednostavna za korištenje. U lijevom dijelu imate sidebar, te odabirom odgovarajuće stavke, vodi vas na određenu stranicu:

1. Statistika - na ovoj stranici naći ćete sve potrebne informacije koje se dnevno ažuriraju

2. Preporuka doktora - par savjeta od stručnih osoba, kako da zaštitite što bolje sebe i svoje bližnje

3. Naručivanje - forma koja Vam omogućava da zakažete termin u odgovarajućem gradu i ambulanti bez telefonskog razgovora

4. Popunjenost - tabela koja sadrži informacije o stanju u ambulanti kako bi Vam omogućila što bolju organizaciju vremena

5. Mapa ambulanti - mapa svih ambulanata širom BiH i njihove lokacije

6. Lijekovi - kratka forma koja Vam omogućava da naručite lijekovi koju su hitno potrebni

7. Termini - tabela u kojoj možete vidjeti sve (ne)popunjene termine radi lakšeg vlastitog organizovanja vremena
