import express, { response } from 'express'
import routes from './routes'
import path from 'path'
console.log('a')
const app = express()   
console.log('b')

app.use(express.json())
console.log('c')
app.use(routes)
console.log('d')

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); 
console.log('e')

app.listen(3000)
console.log('f')