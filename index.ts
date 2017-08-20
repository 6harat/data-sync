'use strict'

// import { VALIDATOR } from './Utils/Validator';
import { LOGGER as logger } from './Utils/Logger';
import { VALIDATOR as validator } from './Utils/Validator'
import { Aggregator } from './Components/Aggregator/Aggregator';
import { DataGrid } from './Utils/Model/DataGrid';
import { Block } from './Utils/Model/Block';
import { Link } from './Utils/Model/Link';

// logger.info('roger');
// LOGGER.info(VALIDATOR.IF_EMPTY(null));

logger.info("trying to initialize aggregator...");

var dataGrid = new DataGrid({
    _root: new Block()
    // locator: new Map<string,Block>()
});

logger.info("printing datagrid after creation...");
logger.debug(dataGrid);

var newBlock = new Block();
dataGrid.addBlock(dataGrid.root, newBlock);

logger.info("printing datagrid after adding new block...");
logger.debug(dataGrid);

logger.info("printing complete data grid...");
logger.debug(JSON.stringify(dataGrid, null, '\t'));

// var link = new Link({ 
//     block: new Block() 
// });

// logger.info(link);
// var agg = new Aggregator({ grid: });