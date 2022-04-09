import ec from 'elliptic'

const EC = ec.ec
const s256 = new EC('secp256k1')

// Generate a new key pair and convert them to hex-strings
const key = s256.genKeyPair()
const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')
const myKey = s256.keyFromPrivate(privateKey)
const myWalletAddress = myKey.getPublic('hex')
const publicKey2 = s256.keyFromPublic(publicKey, 'hex')

console.log('private key:\n', privateKey)
console.log('public key (wallet address):\n', publicKey)
console.log('Wallet Address key:\n', myWalletAddress)

console.log(myKey.getPrivate('hex'))
// console.log('publicKey2:\n', publicKey2)
// console.log('myKey:\n', myKey)
