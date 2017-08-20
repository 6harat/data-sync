'use strict'

// const logger = require('../../Utils/Logger.js');
// var differentiator = require('../Differentiator/Differentiator');
// var aggregator = require('../Aggregator/Aggregator');
// var stringA = require('../DeviceMocker/DeviceA.js').string1;
// var stringB = require('../DeviceMocker/DeviceB.js').string1;
// var Block = require('../../Utils/Block.js');
// var commons = require('../../Utils/Common.js');
// end of require

// var diffList = differentiator.diff_main(stringA, stringB);
// logger.info(diffList);

// var blockA = new Block(null, stringA, null, 0);


const fs = require('fs');
import { LOGGER as logger } from '../../Utils/Logger';
import { VALIDATOR as validator } from '../../Utils/Validator'
import { Device } from '../../Utils/Model/Device';
import { Aggregator } from '../Aggregator/Aggregator';
// end of imports

let mobile = new Device({
    name: 'motorola',
    type: 'mobile',
    location: 'B:/InterviewX/social-cops/github/data-sync/Devices/Mobile'
});

let laptop = new Device({
    name: 'lenovo',
    type: 'laptop',
    location: 'B:/InterviewX/social-cops/github/data-sync/Devices/Laptop'
});

let deviceSet = new Set<Device>();
deviceSet.add(mobile);
deviceSet.add(laptop);

let aggregator = new Aggregator({
    devices: deviceSet
})

aggregator.aggregateDevices()
// aggregator.refactorAggregateDevices()

// fs.readdir('B:/InterviewX/social-cops/github/data-sync/Devices/Laptop', (err : Error, files : any) => {
//     logger.warn(files);
// });