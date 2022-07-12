[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/besrourms/ZodiacSigns/blob/main/LICENSE)
[![](https://data.jsdelivr.com/v1/package/gh/besrourms/ZodiacSigns/badge)](https://www.jsdelivr.com/package/gh/besrourms/ZodiacSigns)

# Zodiac Signs / Chinese Zodiac Signs

Provides a zodiac sign & chinese zodiac sign depending a birthday

## Installation

```html
<script src="https://cdn.jsdelivr.net/gh/besrourms/zodiacsigns@latest/index.min.js"></script>
```

## Examples

### Getting a zodiac sign from a date

```js
// Return 'Sagittarius: The Archer'
console.log(new ZodiacSign('1991-11-30').sign)
```

### Getting a chinese zodiac sign from a date

```js
// Return 'Fire Rat'
console.log(new ZodiacSign('1 Feb 1997 00:12:00 GMT').chinese)
```

### Getting a sign with translation 

```js
// Overload the default language (format xx)
console.log(new ZodiacSign('1 Feb 1997 00:12:00 GMT', 'ar').chinese);
```

## Translation
For the moment, the only avaible languages are English, French, Spanish and Arabic.
Fell free to participate to the translation in any other language.
### Available languages
- English (en)
- French  (fr)
- Spanish (es)
- Arabic  (ar)
