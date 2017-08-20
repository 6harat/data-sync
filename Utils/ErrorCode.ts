'use strict'

export namespace GENERIC {
    export const PARAM_NOT_NUM = (value: any) => {
        return `expecting number, but got "${typeof value}" <${value}>`;
    }
}