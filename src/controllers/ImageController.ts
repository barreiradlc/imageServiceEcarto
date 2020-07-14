const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)
import path from 'path';
// 
import { Request, Response } from 'express'

class ImageController  {

    upload( request: Request, response: Response ){        
        const deleteImg = request.query.d
        
        if(deleteImg){
            removeImg(String(deleteImg))
        }
        
        return response.json({
            img: request.file.filename
        })
        
        async function removeImg(deleteImg: string){                        
            return await unlinkAsync(path.resolve(__dirname, '..', '..', 'uploads', deleteImg))
        }
    }


    test( request: Request, response: Response ){

        response.json([
            'Alou'
        ]);
    }
}

export default ImageController