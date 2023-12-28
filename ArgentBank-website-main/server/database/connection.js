const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb+srv://Titouan:Corsica2b@titouan.eftfg3s.mongodb.net/?retryWrites=true&w=majority'

module.exports = async () => {
  try {
    await mongoose.connect(`mongodb+srv://Titouan:Corsica2b@titouan.eftfg3s.mongodb.net/?retryWrites=true&w=majority`, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
