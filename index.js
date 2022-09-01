class ZodiacSign {
	
		static signs = {
			en : ['Aries: The Ram','Taurus: The Bull','Gemini: The Twins','Cancer: The Crab','Leo: The Lion','Virgo: The Virgin','Libra: The Scales','Scorpio: The Scorpion','Sagittarius: The Archer','Capricorn: The Goat','Aquarius: The Water Bearer','Pisces: The Fish'],			
			fr : ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Vereau', 'Poissons'],
			es : ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'],
			ar : ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'العذراء', 'الميزان', 'العقرب',' القوس', 'الجدي', 'الدلو', 'الحوت'],
			ua : ['Овен', 'Телець', 'Близнята', 'Рак', 'Лев', 'Діва', 'Терези', 'Скорпіон', 'Стрілець', 'Козоріг', 'Водолій', 'Риби']
		}
		
		static chineseSigns = {
			en : ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'],
			fr : ['Singe', 'Coq', 'Chien', 'Cochon', 'Rat', 'Bœuf', 'Tigre', 'Lapin', 'Dragon', 'Serpent', 'Cheval', 'Mouton'],
			es : ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Oveja'],
			ar : ['القرد', 'الديك', 'الكلب', 'الخنزير', 'الفأر', 'الثور', 'النمر', 'الأرنب', 'التنين', 'الثعبان', 'الحصان', 'الخروف'],
			ua : ['Мавпа', 'Півень', 'Собака', 'Свиня', 'Щур', 'Бик', 'Тигр', 'Кролик', 'Дракон', 'Змія', 'Кінь', 'Вівця']
		}
		
		static chineseElements = {
			en : ['Metal', 'Water', 'Wood', 'Fire', 'Earth'],
			fr : ['Métal', 'Eau', 'Bois', 'Feu', 'Terre'],
			es : ['Metal', 'Agua', 'Madera', 'Fuego', 'Tierra'],
			ar : ['المعدني', 'المائي', 'الخشبي', 'الناري', 'الأرضي'],
			ua : ['Метал', 'Вода', 'Дерево', 'Вогонь', 'Земля']
		}
		
		constructor(value, lang = 'en') {
			this.sign = ''
			this.chinese = ''
		
			if (!Object.hasOwn(ZodiacSign.signs, lang)) lang = 'en'
			if (!isNaN(Date.parse(value))){
				this.sign = this.#getSign(value, lang)
				this.chinese = this.#getChineseSign(value, lang)
			}
		}
		
		#getSign(x, y) {
			return ZodiacSign.signs[y][Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(Date.parse(x))) - 1];
		}
		
		#getChineseSign(x, y){
			let chineseDate = new Intl.DateTimeFormat('fr-TN-u-ca-chinese', {day: '2-digit', month: 'long', year:'numeric'}).format(Date.parse(x)).substring(0, 4)
			return `${ZodiacSign.chineseElements[y][Math.floor(+chineseDate.charAt(3) / 2)]} ${ZodiacSign.chineseSigns[y][+chineseDate % 12]}`
		}
		
}