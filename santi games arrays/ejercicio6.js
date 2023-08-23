let words = ['hola', 'tres', 'uno', 'Universidad', 'de', 'Buenos Aires', 'pepito', 'celular']
let word = 'pepito'
function buscaPalabras(words, word) {
const indice = words.indexOf(word)
const wordsFilter = words.filter(function (word) {
    return word.length > indice
    
  })
return wordsFilter
}
console.log(buscaPalabras(words, word))
