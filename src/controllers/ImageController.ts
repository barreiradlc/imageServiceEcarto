const fs = require('fs')
const { promisify } = require('util')
const unlinkAsync = promisify(fs.unlink)
import path from 'path';
// 
import { Request, Response } from 'express'

class ImageController  {

    upload( request: Request, response: Response ){        
        console.log('p')
        const deleteImg = request.query.d
        console.log('q')
        
        if(deleteImg){
            removeImg(String(deleteImg))
            console.log('r')
        }
        console.log('s')
        
        return response.json({
            img: request.file.filename
        })
        
        async function removeImg(deleteImg: string){                        
            return await unlinkAsync(path.resolve(__dirname, '..', '..', 'uploads', deleteImg))
        }
    }


    test( request: Request, response: Response ){
        console.log('olar')

        response.json([
            'Alou'
        ]);
    }
}

export default ImageController