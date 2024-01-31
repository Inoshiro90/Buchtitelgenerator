function generateRandomQuirk() {
	randomNumber = d100()
	if (randomNumber <= 99) {
		return generateDescriptiveQuirk();
	} else {
		return `Übernatürlich - ${generateRandomSupernaturalQuirk()}`
	}
}

function generateDescriptiveQuirk() {
	randomNumber = d100();
	if (randomNumber <= 12) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkCover.length);
		return descriptiveQuirkCover[randomIndex];
	} else if (randomNumber <= 15) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkSpine.length);
		return descriptiveQuirkSpine[randomIndex];
	} else if (randomNumber <= 17) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkWeight.length);
		return descriptiveQuirkWeight[randomIndex];
	} else if (randomNumber <= 21) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkSmell.length);
		return descriptiveQuirkSmell[randomIndex];
	} else if (randomNumber <= 53) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkPage.length);
		return descriptiveQuirkPage[randomIndex];
	} else if (randomNumber <= 55) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkTexture.length);
		return descriptiveQuirkPage[randomIndex];
	} else if (randomNumber <= 59) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkTitle.length);
		return descriptiveQuirkTitle[randomIndex];
	} else if (randomNumber <= 64) {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkText.length);
		return descriptiveQuirkText[randomIndex];
	} else {
		const randomIndex = Math.floor(Math.random() * descriptiveQuirkMiscellaneous.length);
		return descriptiveQuirkMiscellaneous[randomIndex];
	}
}

function generateRandomSupernaturalQuirk() {
	randomNumber = d100();
	if (randomNumber <= 15) {
		const randomIndex = Math.floor(Math.random() * supernaturalQuirkMiscellaneous.length);
		return supernaturalQuirkMiscellaneous[randomIndex];
	} else if (randomNumber <= 30) {
		const randomIndex = Math.floor(Math.random() * supernaturalQuirkImmunity.length);
		return supernaturalQuirkImmunity[randomIndex];
	} else if (randomNumber <= 40) {
		const randomIndex = Math.floor(Math.random() * supernaturalQuirkAura.length);
		return supernaturalQuirkAura[randomIndex];
	} else if (randomNumber <= 60) {
		const randomIndex = Math.floor(Math.random() * supernaturalQuirkCommand.length);
		return supernaturalQuirkCommand[randomIndex];
	} else if (randomNumber <= 80) {
		const randomIndex = Math.floor(Math.random() * supernaturalQuirkPasswordProtected.length);
		return supernaturalQuirkPasswordProtected[randomIndex];
	} else {
		const randomIndex = Math.floor(Math.random() * supernaturalQuirkTextProperty.length);
		return supernaturalQuirkTextProperty[randomIndex];
	}
}

const descriptiveQuirkCover = [
	'Einband hat einen Fleck - Feuchtigkeit/Schimmel',
	'Einband hat eine Delle',
	'Einband hat Brandspuren',
	'Einband hat eine Klappe',
	'Einband hat Metallecken',
	'Einband ist gefälscht/aus einem anderen Buch',
	'Einband ist lose',
	'Einband ist nicht lang genug',
	'Einband ist nicht breit genug',
	'Der Einband ist ziemlich dünn',
	'Einband ist dick',
	'Vorderer Einband lässt sich nicht richtig schließen',
];

const descriptiveQuirkSpine = [
	'Buchrücken trägt ein Symbol',
	'Buchrücken ist rissig',
	'Buchrücken ist hohl',
];

const descriptiveQuirkWeight = [
	'Wiegt das Doppelte dessen, was es sollte',
	'Wiegt nur die Hälfte dessen, was es sollte',
];

const descriptiveQuirkSmell = [
	'Riecht nach Schimmel',
	'Riecht nach etwas Angenehmem',
	'Riecht nach etwas Unangenehmem',
	'Riecht nach Vanille',
];

const descriptiveQuirkPage = [
	`${d10(1) + 1} Seiten sind zusammengeklebt`,
	`${d10(1) + 1} Seiten haben Risse\\Beschädigungen`,
	`${d10(1) + 1} Seiten sind mit Blut markiert`,
	`${d10(1) + 1} Seiten sind geknickt/zerbrochen`,
	`${d10(1) + 1} Seiten fehlen`,
	`${d4(1) + 1} Seiten sind doppelt`,
	`${d4(1) + 1} Seiten stehen auf dem Kopf`,
	`${d6(1) + 1} zusätzliche leere Seiten`,
	'Seitenränder sind sehr scharf',
	'Seiten sind beschädigt, aber brauchbar',
	'Seiten lassen sich nur schwer umblättern',
	'Seiten sind sechseckig',
	'Seiten können sich entfalten',
	'Seiten sind lose',
	'Seiten sind achteckig',
	'Seiten sind herausnehmbar - richtige Reihenfolge',
	'Seiten sind herausnehmbar - in falscher Reihenfolge',
	'Seiten sind abgerundet',
	'Die Seiten sind doppelt so dick wie erwartet',
	'Seiten sind stark abgenutzt, aber noch brauchbar',
	'Seiten sind mit Puder bedeckt',
	'Seiten fühlen sich lose an',
	'Seiten haben einen Farbrand',
	'Seiten haben einen glänzenden Schimmer',
	'Seiten haben einen offensichtlichen Farbstich',
	'Seiten haben einen subtilen Farbstich',
	`Einkerbungen sind auf jeder ${d10(1) + 20}. Seite zu finden.`,
	'Seiten haben eine unregelmäßige Form',
	'Seiten haben abgerundete Ecken',
	'Vergoldeter Rand an allen Seiten des Buches',
	'Vergoldete Ränder an einer Seite des Buches',
	'Vergoldete Ränder oben und unten am Buch',
];

const descriptiveQuirkTexture = [
	'Fühlt sich kalt an', 
	'Fühlt sich warm an'
];

const descriptiveQuirkTitle = [
	'Titel hat einen Rechtschreibfehler',
	'Titel ist beschädigt - verblasst/abgeblättert',
	'Titel ist beschädigt - unleserlich',
	'Titel ist geprägt',
];

const descriptiveQuirkText = [
	'Text verläuft nach unten und dann nach oben',
	'Text verläuft nach oben und dann nach unten',
	'Text verläuft spiralförmig - von innen nach außen',
	'Text verläuft spiralförmig - außen nach innen',
	'Text erstrecken sich bis zum Rand der Seite',
];

const descriptiveQuirkMiscellaneous = [
	`${d10(2)} Wörter wurden eingekreist`,
	'Ein Käfer ist zwischen 2 Seiten eingeklemmt',
	'Öffnet sich immer auf der gleichen Seite zuerst',
	'Scheint nie benutzt worden zu sein',
	'Autorenname ist im Buch nicht vorhanden',
	'Unterschrift des Autors - gefälscht',
	'Unterschrift des Autors - echt',
	'Wurde offensichtlich repariert',
	'Wurde subtil repariert',
	'Enhält einen toten Bücherwurm',
	`Bücherwurmschaden auf ${d10(2)} Seiten`,
	`Enthält zusätzliche ${d4(1) + 1} Seiten mit Errata`,
	'Enthält Bilder vom Autor',
	'Das Inhaltsverzeichnis fehlt',
	'Quietscht, wenn es geöffnet wird',
	'Widmung - in einer anderen Sprache',
	'Widmung - Warnung',
	'Am Rand der Seite befindet sich ein Bild',
	'Am Rand der Seite befinden sich Wörter',
	'Hat ein Behältnis - Schachtel/Kasten',
	'Hat ein Behältnis - sonstiges',
	'Hat ein Behältnis - Etui',
	'Hat eine Widmung',
	'Hat ein Kopfstück',
	'Auf der Innenseite des Vorderdeckels befindet sich eine flache Tasche',
	'Ist schwer zu öffnen',
	'Bibliotheksstempel/-anmerkungen im Inneren',
	'Limitierte Auflage',
	'Hat ein Schloss - offen',
	'Ist verschlossen (leichtes Schloss)',
	'Ist verschlossen (schwieriges Schloss)',
	'Geheimfach - Enthält eine Notiz',
	'Geheimfach - Leer',
	'Geheimfach - Kleiner Gegenstand',
	'Mehrere Wörter sind im Inneren durchgestrichen',
	'Bilder erstrecken sich bis zum Rand der Seite',
];

const supernaturalQuirkImmunity = [
	'Ist gegen Feuerschaden immun',
	'Ist gegen Kälteschaden immun',
	'Ist gegen Energieschaden immun',
	'Ist gegen Blitzschaden immun',
	'Ist gegen Giftschaden immun',
	'Ist gegen gleißenden Schaden immun',
	'Ist gegen nekrotischen Schaden immun',
	'Ist gegen psychischen Schaden immun',
	'Ist gegen Schallschaden immun',
	'Ist gegen Säureschaden immun',
	'Ist gegen Stichschaden immun',
	'Ist gegen Hiebschaden immun',
	'Ist gegen Stumpfschaden immun',
];

const supernaturalQuirkAura = [
	'Ist umgeben von einer Aura der Kälte, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura des Unheimlichen, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura der Boshaftigkeit, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura der Gutmütigkeit, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura des Schleims, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura des Geruchs und des Gestanks, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura des Blitzes, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura der Vibration, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
	'Ist umgeben von einer Aura der Wärme, die bei Berührung fühlbar und mit Aurasicht sichtbar ist',
];

const supernaturalQuirkCommand = [
	'Kann befohlen werden, jeden Schaden zu reparieren, solange mindestens 50% davon unbeschädigt bleiben',
	'Kann befohlen werden, dass das es (un)sichtbar wird',
	'Kann befohlen werden, dass das es den Leser dorthin führt, wo es geschrieben wurde',
	'Kann befohlen werden, dass das es nicht bewegt werden kann',
	'Kann befohlen werden, dass das es sich schließt',
	`Kann befohlen werden, dass das es ${d4(1) + 1} Seiten enthält, die ausgeblendet werden können`,
	'Kann befohlen werden, dass Details über die Bilder in ihm offenbart werden',
	'Kann befohlen werden, dass ein Wörterbuch verfügbar wird',
	'Kann befohlen werden, dass das es zu einem benannten Ort/Person innerhalb von 15 Kilometern fliegt',
	'Kann befohlen werden, dass einfache Details über die letzte Person nennt, die es gelesen hat',
	'Kann befohlen werden, dass das es schwebt',
	'Kann befohlen werden, dass das es, wenn es nicht gehalten wird, in die Hand zurückkehrt',
	'Kann befohlen werden, dass Bilder zwischen Stil und Farbe wechseln',
	'Kann befohlen werden, dass es Licht erzeugt',
	'Kann befohlen werden, dass Schrift laut vorgelesen wird, die kein Zauberspruch ist',
	'Kann befohlen werden, dass das es sich auf eine bestimmte Seite öffnet',
	'Kann befohlen werden, dass Text auf die nächstgelegene Wand projiziert wird',
	'Kann befohlen werden, dass das es sich nach einem bestimmten Text durchsucht',
	'Kann befohlen werden, dass das es um bis zu 75% verkleinert wird (Gewicht bleibt gleich)',
	'Kann befohlen werden, dass sich die Textfarbe ändert',
	'Kann befohlen werden, dass der Text vergrößert wird, um ihn besser lesen zu können',
	'Kann befohlen werden, dass Text, der kein Zauberspruch ist, in eine bestimmte Sprache übersetzt wird',
	'Kann befohlen werden, dass die linke oder rechte Seite umgeblättert wird',
	'Kann befohlen werden, dass das Gewicht reduziert wird',
];

const supernaturalQuirkPasswordProtected = [
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, tritt der nachfolgend aufgeführte Effekt ein: ${d4(1)} Punkt elektrischer Schaden pro gelesenem Wort. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, wird allen Personen im Umkreis von 4,5 Metern für ${d4(1) + 2} Runden übel. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, geht es in Flammen auf, wird aber beim nächsten Sonnenaufgang wiederhergestellt`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, werden Kapitel und Wörter verwürfelt. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, zerfällt es zu Staub, wird aber bei Sonnenaufgang wiederhergestellt`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, gibt es einen lauten Sireneneffekt ab. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, schwebt es knapp außerhalb der Reichweite. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, verblasst die Tinte mit jedem gelesenen Wort. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, ist es gesperrt (auch gegen Magie). Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, können die Seiten nicht umgeblättert werden. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, bleibt es leise, bis ein Wächter in der Nähe ist, dann schreit es, dass es gestohlen wurde. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, wird der Leser für ${d10(1) + 1} Minuten geblendet. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, teleportiert es sich in die nächstgelegene Bibliothek. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, wird der Text zu Kauderwelsch. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, wird der Text unsichtbar. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, wechselt der Text die Sprache, während er gelesen wird. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, ist der Text lesbar, sagt aber das Gegenteil von dem, was geschrieben wurde. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, wird der Text unsichtbar. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
	`Wird ein Kennwort oder eine Phrase nicht laut ausgesprochen, bevor es geöffnet wird, verdoppelt sich das Gewicht des Buches mit jeder umgeblätterten Seite. Dieser Effekt hält gewöhnlich für ${d10(2)} Stunden oder bis zum nächsten Sonnenaufgang an`,
];

const supernaturalQuirkTextProperty = [
	`Text ist unlesbar oder unsichtbar, außer eine empfindungsfähige Kreatur stirbt im Umkreis von 6 Metern. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer ein Zauber wird auf das Buch gewirkt. Der Zauber wird dabei absorbiert. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch steht auf dem Kopf. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird wie eine Gottheit angebetet. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer Kerzenwachs wird auf das Buch getropft. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer Erde aus der Heimat des Autors wird auf die Seiten gestreut. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer während einer Sonnenwende. Der Text ist dann für die Dauer der Sonnenwende und ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer während einer Sonnenfinsternis. Der Text ist dann für die Dauer der Sonnenfinsternis und ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Fleisch einer beliebigen Kreatur wird dem Mund auf dem Einband zugeführt. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer der komplette Titel und der Name des Autors wird laus ausgesprochen. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer ein Heilzauber wurde im Umkreis von 6 Metern um das Buch herum gewirkt. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch befindet sich an einem für den Autor heiligen Ort. Der Text ist dann dort und für ${d10(6)} Minuten nach dem Verlassen des Ortes lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird um Mitternacht gelesen. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird im Mondlicht geöffnet. Der Text ist währenddessen und für weitere ${d10(6)} Minuten nach fehlendem Mondlicht lesbar`,
	`Text ist unlesbar oder unsichtbar, außer im Umkreis von 3 Metern um das Buch herum wird Musik gespielt. Der Text ist während die Musik spielt und für weitere ${d10(6)} Minuten nach dem Ende der Musik lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch befindet sich auf einer anderen Ebene der Existenz. Der Text ist dann dort und für weitere ${d10(6)} Minuten nach dem Verlassen der Ebene lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird mit Weihwasser besprenkelt. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird von einer Person mit besonderer Gesinnung gelesen. Der Text ist dann in den Händen dieser Person und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird von einer Person einer besonderen Abstammung gelesen. Der Text ist dann in den Händen dieser Person und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer der Leser des Buchs steht in Flammen. Das Buch ist feuerfest. Der Text ist währenddessen und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer der Leser des Buchs berührt nicht den Boden. Der Text ist dann währenddessen und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Blut des Lesers tropft die Seiten des Buchs. Der Text ist dann für ${d10(6)} Minuten lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird in Brand gesetzt. Das Buch ist feuerfest. Der Text ist dann währenddessen und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird im Sonnenlicht geöffnet. Der Text ist dann währenddessen und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch wird von ${d4(1) + 1} weiteren empfindungsfähigen Wesen gleichzeitig berührt. Der Text ist dann währenddessen und für weitere ${d10(6)} Minuten danach lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch befindet sich unter der Erde. Der Text ist dann dort und für weitere ${d10(6)} Minuten nach dem Verlassen des Untergrunds lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch befindet sich unter Wasser. Das Buch ist wasserfest. Der Text ist dann dort und für weitere ${d10(6)} Minuten nach Verlassen des Wassers lesbar`,
	`Text ist unlesbar oder unsichtbar, außer das Buch befindet sich an einem windigen Ort. Der Text ist dann dort und für weitere ${d10(6)} Minuten nach Verlassen des Orts lesbar`,
];

const supernaturalQuirkMiscellaneous = [
	'Kann nicht beschädigt werden',
	'Gibt ein Kontakt-Halluzinogen, das nicht entfernt werden kann',
	'Einband ändert bei jedem Sonnenaufgang die Farbe',
	'Knarrendes Geräusch beim Umblättern der Seiten',
	'Zerstört jedes andere Buch, das neben ihm liegt',
	'Schmutz/Dreck perlt einfach ab',
	'Ist feuerfest auch gegen magisches Feuer',
	'Bilder im Buch/auf dem Einband bewegen oder verändern sich unmerklich',
	'Zufälliges Umblättern der Seiten',
	'Kehrt an seinen "Herkunftsort" zurück, wenn es den Boden berührt',
	'Knurrt und faucht jeden an, außer den Autor',
	'Ist wasserfest, gilt aber nicht für Säure',
	'Wörter werden während des Lesens hervorgehoben',
	'Scheint bis zum Verkauf in sehr gutem Zustand zu sein',
	'Scheint in sehr schlechtem Zustand zu sein, bis es verkauft wird',
];