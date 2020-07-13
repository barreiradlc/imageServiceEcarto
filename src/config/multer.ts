import multer from 'multer';
import path from 'path';
import crypto from 'crypto'

export default {        
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            console.log('1')
            
            const hash = crypto.randomBytes(6).toString('hex')
            console.log('2')
            const filename = `${hash}-${file.originalname}`
            console.log('3')
            
            callback(null, filename)
            console.log('4')
            
        }
    })
}