const ereignisPlural = [
    {"name":"Abenteuer","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Abstiege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Aufbrüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Aufgaben","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Aufstände","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Aufstiege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Ausbrüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Auslöschungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Auslöser","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Befreiungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Belagerungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Einigungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Entdeckungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Entfremdungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Enthüllungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Entscheidungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Entwurzelungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Erbauungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Erkundungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Erlösungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Ernten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Eroberungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Erwachen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Existenzen","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Explosionen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Flammen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Flüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Fluchten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Geburten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Gefangennahmen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Geheimnisse","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Grenzüberschreitungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Gründungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Heilungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Heimkehrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Herausforderungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Hinterhalte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Hochzeiten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Intrigen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Konflikte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Konfrontationen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Kriege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Lügen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Morde","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Niederlagen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Offenbarungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Opfer","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Plagen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Prophezeiungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Rachenahmen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Rebellionen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Rückkehrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Ruhen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Schicksale","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Schicksalsschläge","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Schicksalswenden","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Siege","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Sonnenfinsternisse","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Spaltungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Stürme","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Täuschungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Tode","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Überraschungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Umkehrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Untreuen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Veränderungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verbannungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verbindungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verbündungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verdammnisse","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verdrängungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verfluchungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verführungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Vergebungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Vergeltungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verhandlungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verirrungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verleumdungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verlockungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verluste","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verrate","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verstoße","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verstrickungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Versuchungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verwandlungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verwundungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Verzauberungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wandlungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wendepunkte","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Widerstände","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wiedergeburten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wiedergutmachungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wiederherstellungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wiedersehungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wiedervereinigungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Wunder","genus":"neutrum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Zeremonien","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Zerstörungen","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Zusammenarbeiten","genus":"femininum","numerus":"plural","adjektiv":"","präfix":"","suffix":""},
    {"name":"Zusammenbrüche","genus":"maskulinum","numerus":"plural","adjektiv":"","präfix":"","suffix":""}
   ];
  
   const ereignisPluralData = getRandomText(ereignisPlural);
   const ereignisPluralName = ereignisPluralData.name;
   const ereignisPluralGeschlecht = ereignisPluralData.genus;
   const ereignisPluralAnzahl = ereignisPluralData.numerus;
   const ereignisPluralAdjektiv = ereignisPluralData.adjektiv;
   const ereignisPluralPräfix = ereignisPluralData.präfix;
   const ereignisPluralSuffix = ereignisPluralData.suffix;