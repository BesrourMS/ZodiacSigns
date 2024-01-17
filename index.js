class ZodiacSign {
	
		static signs = {
			en : ['Aries: The Ram','Taurus: The Bull','Gemini: The Twins','Cancer: The Crab','Leo: The Lion','Virgo: The Virgin','Libra: The Scales','Scorpio: The Scorpion','Sagittarius: The Archer','Capricorn: The Goat','Aquarius: The Water Bearer','Pisces: The Fish'],			
			fr : ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Vereau', 'Poissons'],
			es : ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'],
			ar : ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'العذراء', 'الميزان', 'العقرب',' القوس', 'الجدي', 'الدلو', 'الحوت'],
			ua : ['Овен', 'Телець', 'Близнята', 'Рак', 'Лев', 'Діва', 'Терези', 'Скорпіон', 'Стрілець', 'Козоріг', 'Водолій', 'Риби'],
			zh : ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '人马座', '山羊座', '宝瓶座', '双鱼座'],
			tr : ['Koç', 'Boğa', 'İkizler', 'Kanser', 'Aslan', 'Başak', 'Terazi', 'Akrep', 'Yay', 'Oğlak', 'Kova', 'Balık'],
			ja : ['牡羊座', '牡牛座', '双子座', '蟹座', '獅子座', '乙女座', '天秤座', '蠍座', '射手座', '山羊座', '水瓶座', '魚座'],
			id : ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagitarius', 'Capricorn', 'Aquarius', 'Pisces']
		}
		
		static chineseSigns = {
			en : ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Sheep'],
			fr : ['Singe', 'Coq', 'Chien', 'Cochon', 'Rat', 'Bœuf', 'Tigre', 'Lapin', 'Dragon', 'Serpent', 'Cheval', 'Mouton'],
			es : ['Mono', 'Gallo', 'Perro', 'Cerdo', 'Rata', 'Buey', 'Tigre', 'Conejo', 'Dragón', 'Serpiente', 'Caballo', 'Oveja'],
			ar : ['القرد', 'الديك', 'الكلب', 'الخنزير', 'الفأر', 'الثور', 'النمر', 'الأرنب', 'التنين', 'الثعبان', 'الحصان', 'الخروف'],
			ua : ['Мавпа', 'Півень', 'Собака', 'Свиня', 'Щур', 'Бик', 'Тигр', 'Кролик', 'Дракон', 'Змія', 'Кінь', 'Вівця'],
			zh : ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊'],
			tr : ['Maymun', 'Horoz', 'Köpek', 'Domuz', 'Sıçan', 'Öküz', 'Kaplan', 'Tavşan', 'Ejderha', 'Yılan', 'At', 'Koyun'],
			ja : ['猿', '鶏', '犬', '猪', 'ネズミ', '牛', '虎', '兎', '龍', '蛇', '馬', '羊'],
			id : ['Monyet', 'Ayam', 'Anjing', 'Babi', 'Tikus', 'Sapi', 'Harimau', 'Kelinci', 'Naga', 'Ular', 'Kuda', 'Kambing']
		}
		
		static chineseElements = {
			en : ['Metal', 'Water', 'Wood', 'Fire', 'Earth'],
			fr : ['Métal', 'Eau', 'Bois', 'Feu', 'Terre'],
			es : ['Metal', 'Agua', 'Madera', 'Fuego', 'Tierra'],
			ar : ['المعدني', 'المائي', 'الخشبي', 'الناري', 'الأرضي'],
			ua : ['Метал', 'Вода', 'Дерево', 'Вогонь', 'Земля'],
			zh : ['金属', '水', '木头', '火灾', '地球'],
			tr : ['Metal', 'Su', 'Ahşap', 'Yangın', 'Dünya'],
			ja : ['金', '水', '木', '火', '土'],
			id : ['Logam', 'Air', 'Kayu', 'Api', 'Tanah']
		}
		
		static yinYang = {
			en : ['Yang', 'Yin'],
			fr : ['Yang', 'Yin'],
			es : ['Yang', 'Yin'],
			ar : ['اليانغ', 'اليين'],
			ua : ['Ян', 'Інь'],
			zh : ['阳', '阴'],
			tr : ['Yang', 'Yin'],
			ja : ['陽', '陰'],
			id : ['Yang', 'Yin']
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
			
			let chineseSign = {
				"sign" : ZodiacSign.chineseSigns[y][+chineseDate % 12],
				"element" : ZodiacSign.chineseElements[y][Math.floor(+chineseDate.charAt(3) / 2)],
				"yinyang" : (chineseDate % 2  == 0) ? ZodiacSign.yinYang[y][0] : ZodiacSign.yinYang[y][1]
			}
			
			return chineseSign
		}
		
}