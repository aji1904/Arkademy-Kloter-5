const username_valid = username => (
    /[a-zA-Z]{6,}/.test(username)
)
const password_valid = password => (
    /(?=.*[7])(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.{4,9})/.test(password)
)

console.log(username_valid('Coba12'))
console.log(username_valid('Devina'))

console.log(password_valid('p@ssW0rd9'))
console.log(password_valid('7Ark@demy'))