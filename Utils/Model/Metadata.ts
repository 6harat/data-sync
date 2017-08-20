'use strict'

import { Style } from "./Style";
import { Device } from "./Device";
// end of imports

export class Metadata {

    public fileName ?: string;
    public device ?: Device;
    public style ?: Style;

    constructor(obj : Metadata = {} as Metadata) {
        this.fileName = obj && obj.fileName;
        this.device = obj && obj.device;
        this.style = obj && obj.style;
    }
}