import express from 'express'
console.log('g')
import multer from 'multer'
console.log('h')
import multerConfig from './config/multer'
console.log('i')
import ImageController from './controllers/ImageController'
console.log('j')

const imageController = new ImageController()
console.log('k')

const routes = express.Router()
console.log('l')
const upload = multer(multerConfig)
console.log('m')


routes.post('/img', upload.single('image'), imageController.upload)
console.log('n')
routes.get('/img', imageController.test)
console.log('o')



export default routes