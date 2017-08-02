'use strict'

const logger = require('../../Utils/Logger.js');
var differentiator = require('../Differentiator/Differentiator');
var aggregator = require('../Aggregator/Aggregator');
var stringA = require('../DeviceMocker/DeviceA.js').string1;
var stringB = require('../DeviceMocker/DeviceB.js').string1;
var Block = require('../../Utils/Block.js');
var commons = require('../../Utils/Common.js');
// end of require

var diffList = differentiator.diff_main(stringA, stringB);
logger.info(diffList);

var blockA = new Block(null, stringA, null, 0);