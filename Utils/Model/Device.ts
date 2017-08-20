'use strict'

const fs = require('fs')
import { v4 as uuid } from 'uuid'
import { LOGGER as logger } from '../../Utils/Logger'
// end of imports

abstract class _Device {
    public id ?: string
    public name : string
    public type ?: string
    public location : string
}

export class Device {

    public id ?: string
    public name : string
    public type ?: string
    public location : string

    constructor(obj : _Device = {} as Device) {
        this.id = obj && obj.id || uuid()
        this.name = obj && obj.name
        this.type = obj && obj.type
        this.location = obj && obj.location
    }

    getFiles(callback : Function = () => {}) {
        return new Promise((resolve, reject) => {
            fs.readdir(this.location, (err : Error, files : any) => {
                if (err) {
                    reject(err);
                    return callback(err);
                }                
                resolve(files);
                callback(null, files);
            });
        });
    }

    getFileContent(name : string, callback : Function = () => {}) {
        return new Promise((resolve, reject) => {
            const fileStream = fs.createReadStream(this.location + '/' + name)
            fileStream.on('error', (err : Error) => {
                logger.error('file could not be read', err)
                reject(err);
                return callback(err);
            })
            fileStream.on('data', (data : Buffer) => {
                logger.debug('file read successful')
                resolve(data.toString('utf-8'));
                callback(null, data.toString('utf-8'));
            })
            fileStream.on('close', () => {
                logger.debug('file has been closed')
            })
        });
    }

}