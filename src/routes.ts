import express from 'express'
import multer from 'multer'
import multerConfig from './config/multer'
import ImageController from './controllers/ImageController'

const imageController = new ImageController()

const routes = express.Router()
const upload = multer(multerConfig)


routes.post('/img', upload.single('image'), imageController.upload)
routes.get('/img', imageController.test)

routes.get("*",(req, res) =>{
    res.send("<h1>Welcome to your simple server! Awesome right</h1>");
});



export default routes