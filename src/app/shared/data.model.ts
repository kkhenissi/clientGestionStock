

export class DataModel {
    constructor(public columnName?: string,
                public columnRef?: string,
                public dataType?: string,
                public readOnly?: boolean,
                public message?: string) {

    }
}
