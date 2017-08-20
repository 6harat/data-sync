'use strict'

const fs = require('fs')
const EventEmitter = require('events');
import { LOGGER as logger } from '../../Utils/Logger'
import { VALIDATOR as validator } from '../../Utils/Validator'
import { DataGrid } from '../../Utils/Model/DataGrid'
import { Device } from '../../Utils/Model/Device'
import { Block } from '../../Utils/Model/Block'
import { Content } from "../../Utils/Model/Content";
// end of imports

class AggEmitter extends EventEmitter {}

class _Aggregator {
    public devices : Set<Device>;
}

export class Aggregator {
    
    public devices : Set<Device>;
    public grid = new DataGrid();
    public emitter = new AggEmitter();

    constructor(obj = {} as _Aggregator) {
        this.devices = obj && obj.devices;
    }

    aggregateDevices() {
        this.processDevice(Array.from(this.devices), 0);
        logger.info(`grid thus formed is: ${JSON.stringify(this.grid)}`)
    }

    processDevice(deviceList :Array<Device>, index : number) {
        if(index < deviceList.length) {
            deviceList[index].getFiles((fileList : Array<any>) => {
                let parentBlock = this.grid.root;
                this.processFiles(deviceList[index], fileList, 0, parentBlock)
                this.processDevice(deviceList, index + 1)
            })
        }
    }

    processFiles(device : Device, fileList : Array<any>, index : number, parentBlock : Block) {
        if(index < fileList.length) {
            device.getFileContent(fileList[index]).then((data : string) => {
                let block = new Block({
                    contentList: [{data: data} as Content]
                })
                let blk = this.grid.addBlock(parentBlock, block)
                this.grid.root.addContentToList({data: "The big cat fox is getting bigger and bigger"} as Content);
                this.processFiles(device, fileList, index+1, blk)
            })
        } 
    }
}