function randomCode(length) {
  const lowerCaseLetters = 'abcdefghiklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []

  collection = collection.concat(lowerCaseLetters.split(''), upperCaseLetters.split(''), numbers.split(''))

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  let code = ''
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * collection.length)
    code += collection[index]
  }

  return code
}

module.exports = randomCode