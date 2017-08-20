'use strict'

import { v4 as uuid } from 'uuid';

import { LOGGER as logger } from '../Logger'
import { VALIDATOR as validator } from '../Validator'
import { Content } from './Content'
import { Link } from './Link'
// end of imports

 abstract class _Block {
    public id ?: string
    public parentLinks ?: Set<Link>
    public contentList ?: Array<Content>
    public childLinks ?: Set<Link>
}

export class Block {

    public id ?: string
    public parentLinks ?: Set<Link>
    protected _contentList ?: Array<Content>
    public childLinks ?: Set<Link>
    protected _plainText ?: string
    protected _hash ?: string
    protected _hasDelta ?: boolean
    public lastChanged : Date

    constructor(obj = {} as _Block) {
        this.id = obj && obj.id || uuid();
        this.parentLinks = obj && obj.parentLinks;
        this._contentList = obj && obj.contentList;
        this.childLinks = obj && obj.childLinks;
        this.lastChanged = new Date();
        this._reconstructPlainText();
    }

    get hash() {
        return this._hash;
    }

    get plainText() {
        if(this._hasDelta || !this._plainText) {
            this._reconstructPlainText()
        }
        return this._plainText
    }

    getContentList() {
        return this._contentList;
    }

    addContentToList(c : Content) {
        if(!this._contentList) this._contentList = new Array<Content>()
        this._contentList.push(c)
        this._hasDelta = true
        this.lastChanged = new Date()
        this._reconstructPlainText()
    }

    addChildLink(link : Link) {
        if(!this.childLinks) {
            this.childLinks = new Set<Link>();
        }
        this.childLinks.add(link);
        var link = new Link({block:this});
        link.block._addParentLink(link);
    }

    private _addParentLink(link: Link) {
        if(!this.parentLinks) {
            this.parentLinks = new Set<Link>();
        }
        this.parentLinks.add(link);
    }

    getDefaultChildLink() {
        var res : Link;
        if(this.childLinks) {
            this.childLinks.forEach( link => { 
                if ((res && (res.confidence() < link.confidence())) || 
                        (res && res.confidence() == link.confidence() && 
                            res.block.lastChanged.getTime() < link.block.lastChanged.getTime()))
                    res = link;
            });
        }
    }

    private _reconstructPlainText() {
        var str = "";
        if (this._contentList) {
            this._contentList.forEach(ctl => { 
                str += ctl.data; 
            });
        }
        if(!validator.IF_EMPTY_STRING(str)) {
            this._plainText = str
        }
        this._hasDelta = false;
        this._hash = this._generateHash();
    }

    private _generateHash() {
        let checkSum = (this._plainText && this._plainText.length) || '';
        let hash = `${uuid()}_${this.lastChanged}_${checkSum}`;
        return hash;
    }
    
}