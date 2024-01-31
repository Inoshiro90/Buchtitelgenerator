

function declinePossessiveArticle(numerus, kasus, person, subjectGenus, objectGenus) {
	let declinedPossessiveArticle;

	switch (numerus) {
		case 'singular':
			switch (kasus) {
				case 'nominativ':
					switch (person) {
						case 'ich':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'mein';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'meine';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'mein';
									break;
							}
							break;
						case 'du':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'dein';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'deine';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'dein';
									break;
							}
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'sein';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seine';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'sein';
											break;
									}
									break;
								case 'femininum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'ihr';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'ihre';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'ihr';
											break;
									}
									break;
								case 'neutrum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'sein';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seine';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'sein';
											break;
									}
									break;
							}
							break;
						case 'wir':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'unser';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'unsere';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'unser';
									break;
							}
							break;
						case 'ihr':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'euer';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'eure';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'euer';
									break;
							}
							break;
						case 'sie':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'ihr';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihre';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'ihr';
									break;
							}
							break;
					}
					break;
				case 'genitiv':
					switch (person) {
						case 'ich':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'meines';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'meiner';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'meines';
									break;
							}
							break;
						case 'du':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'deines';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'deiner';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'deines';
									break;
							}
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'seines';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seiner';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'seines';
											break;
									}
									break;
								case 'femininum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'ihres';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'ihrer';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'ihres';
											break;
									}
									break;
								case 'neutrum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'seines';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seiner';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'seines';
											break;
									}
									break;
							}
							break;
						case 'wir':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'unseres';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'unserer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'unseres';
									break;
							}
							break;
						case 'ihr':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'eueres';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'eurer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'eueres';
									break;
							}
							break;
						case 'sie':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'ihres';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihrer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'ihres';
									break;
							}
							break;
					}
					break;
				case 'dativ':
					switch (person) {
						case 'ich':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'meinem';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'meiner';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'meinem';
									break;
							}
							break;
						case 'du':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'deinem';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'deiner';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'deinem';
									break;
							}
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'seinem';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seiner';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'seinem';
											break;
									}
									break;
								case 'femininum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'ihrem';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'ihrer';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'ihrem';
											break;
									}
									break;
								case 'neutrum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'seinem';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seiner';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'seinem';
											break;
									}
									break;
							}
							break;
						case 'wir':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'unserem';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'unserer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'unserem';
									break;
							}
							break;
						case 'ihr':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'euerem';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'eurer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'euerem';
									break;
							}
							break;
						case 'sie':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'ihrem';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihrer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'ihrem';
									break;
							}
							break;
					}
					break;
				case 'akkusativ':
					switch (person) {
						case 'ich':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'meinen';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'meine';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'mein';
									break;
							}
							break;
						case 'du':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'deinen';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'deine';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'dein';
									break;
							}
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'seinen';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seine';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'sein';
											break;
									}
									break;
								case 'femininum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'ihren';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'ihre';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'ihr';
											break;
									}
									break;
								case 'neutrum':
									switch (objectGenus) {
										case 'maskulinum':
											declinedPossessiveArticle = 'seinen';
											break;
										case 'femininum':
											declinedPossessiveArticle = 'seine';
											break;
										case 'neutrum':
											declinedPossessiveArticle = 'sein';
											break;
									}
									break;
							}
							break;
						case 'wir':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'unseren';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'unsere';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'unser';
									break;
							}
							break;
						case 'ihr':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'eueren';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'eure';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'euer';
									break;
							}
							break;
						case 'sie':
							switch (objectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'ihren';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihre';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'ihr';
									break;
							}
							break;
					}
					break;
			}
			break;
		case 'plural':
			switch (kasus) {
				case 'nominativ':
					switch (person) {
						case 'ich':
							declinedPossessiveArticle = 'meine';
							break;
						case 'du':
							declinedPossessiveArticle = 'deine';
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'seine';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihre';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'seine';
									break;
							}
							break;
						case 'wir':
							declinedPossessiveArticle = 'unsere';
							break;
						case 'ihr':
							declinedPossessiveArticle = 'eure';
							break;
						case 'sie':
							declinedPossessiveArticle = 'ihre';
							break;
					}
					break;
				case 'genitiv':
					switch (person) {
						case 'ich':
							declinedPossessiveArticle = 'meiner';
							break;
						case 'du':
							declinedPossessiveArticle = 'deiner';
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'seiner';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihrer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'seiner';
									break;
							}
							break;
						case 'wir':
							declinedPossessiveArticle = 'unserer';
							break;
						case 'ihr':
							declinedPossessiveArticle = 'eurer';
							break;
						case 'sie':
							declinedPossessiveArticle = 'ihrer';
							break;
					}
					break;
				case 'dativ':
					switch (person) {
						case 'ich':
							declinedPossessiveArticle = 'meiner';
							break;
						case 'du':
							declinedPossessiveArticle = 'deiner';
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'seiner';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihrer';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'seiner';
									break;
							}
							break;
						case 'wir':
							declinedPossessiveArticle = 'unserer';
							break;
						case 'ihr':
							declinedPossessiveArticle = 'eurer';
							break;
						case 'sie':
							declinedPossessiveArticle = 'ihrer';
							break;
					}
					break;
				case 'akkusativ':
					switch (person) {
						case 'ich':
							declinedPossessiveArticle = 'meine';
							break;
						case 'du':
							declinedPossessiveArticle = 'deine';
							break;
						case 'er_sie_es':
							switch (subjectGenus) {
								case 'maskulinum':
									declinedPossessiveArticle = 'seine';
									break;
								case 'femininum':
									declinedPossessiveArticle = 'ihre';
									break;
								case 'neutrum':
									declinedPossessiveArticle = 'seine';
									break;
							}
							break;
						case 'wir':
							declinedPossessiveArticle = 'unsere';
							break;
						case 'ihr':
							declinedPossessiveArticle = 'eure';
							break;
						case 'sie':
							declinedPossessiveArticle = 'ihre';
							break;
					}
					break;
			}
			break;
	}
	return declinedPossessiveArticle;
}

const possessivArtikel = declinePossessiveArticle;