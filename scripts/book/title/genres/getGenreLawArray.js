function getGenreLawArray(noun, adjective, name, location) {
	return [
		{
			title: `Das Rechtswesen der ${noun.Volk('plural', 'genitiv', 'schwach')}`,
			tags: `Recht, Rechtswesen, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `Die Schutzverordnungen der ${Komposition(noun.randomCreatureType)}haltung`,
			tags: `Recht, Schutzverordnungen, Kreaturen, ${noun.Kreaturtyp('tags')}`,
		},
		{
			title: `Rechte und Pflichten der ${noun.Beruf('plural', 'genitiv', 'schwach')}`,
			tags: `Recht, Rechte, Pflichten, Beruf, ${noun.Beruf('tags')}`,
		},
		{
			title: `${noun.Volk('plural', 'nominativ', 'nullartikel')} und das Familienrecht`,
			tags: `Recht, Familienrecht, Völker, ${noun.Volk('tags')}`,
		},
		{
			title: `${Komposition(noun.randomWeapon)}nutzung im Fall ${
				name.Vorname('zufällig', 'zufällig', 'nominativ').name
			} ${name.Nachname('zufällig', 'zufällig', 'nominativ').name}`,
			tags: `Recht, Waffen, ${noun.Waffe('tags')}`,
		},
	];
}
