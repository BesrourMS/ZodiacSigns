class ZodiacSign {
	
		static signs = {
			en : ['Aries: The Ram','Taurus: The Bull','Gemini: The Twins','Cancer: The Crab','Leo: The Lion','Virgo: The Virgin','Libra: The Scales','Scorpio: The Scorpion','Sagittarius: The Archer','Capricorn: The Goat','Aquarius: The Water Bearer','Pisces: The Fish'],			
			fr : ['Bélier', 'Taureau', 'Gémeaux', 'Cancer', 'Lion', 'Vierge', 'Balance', 'Scorpion', 'Sagittaire', 'Capricorne', 'Vereau', 'Poissons'],
			es : ['Aries', 'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario', 'Capricornio', 'Acuario', 'Piscis'],
			ar : ['الحمل', 'الثور', 'الجوزاء', 'السرطان', 'الأسد', 'العذراء', 'الميزان', 'العقرب',' القوس', 'الجدي', 'الدلو', 'الحوت'],
			ru : ['Овен', 'Телец', 'Близнецы', 'Рак', 'Лев', 'Дева', 'Весы', 'Скорпион', 'Змееносец', 'Стрелец', 'Козерог', 'Водолей', 'Рыбы'],
			zh : ['白羊宮', '金牛宮', '雙子宮', '巨蟹宮', '獅子宮', '室女宮', '天秤宮', '天蝎宫', '人马宫', '摩羯宮', '寶瓶宮', '雙魚宮']
		}
		
		constructor(value, lang = 'en') {
			this.value = value
			this.lang = lang
			this.sign = this.#getSign(this.value)
		}
		
		#getSign(x) {
			if (isNaN(Date.parse(x))) return ''
			else return ZodiacSign.signs[this.lang][Number(new Intl.DateTimeFormat('fr-TN-u-ca-persian', {month: 'numeric'}).format(Date.parse(x))) - 1];
		}
		
}
