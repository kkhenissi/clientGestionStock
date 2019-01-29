import { Tva } from './tva.model';
import { Photo } from './photo.model';

export class Produit {
    constructor(
                public id?: number,
                public nameItem?: string,
                public descriptionItem?: string,
                public quantiteItem?: number,
                public startPrice?: number,
                public actualPrice?: number,
                public tvaItem?: number,
                public photosItem?: string
                ) {

    }
}
