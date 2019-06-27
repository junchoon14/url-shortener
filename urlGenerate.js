function generateUrl(length) {
  const lowerCaseLetters = 'abcdefghiklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'

  let collection = []

  collection = collection.concat(lowerCaseLetters.split(''), upperCaseLetters.split(''), numbers.split(''))

  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  let newUrl = ''
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * collection.length)
    newUrl += collection[index]
  }

  return newUrl
}

// export generatePassword function for other files to use
module.exports = generateUrl