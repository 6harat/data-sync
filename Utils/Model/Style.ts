'use strict'

// end of imports

export class Style {

    public info ?: string;

    constructor(obj : Style = {} as Style ) {
        this.info = obj && obj.info;
    }
}