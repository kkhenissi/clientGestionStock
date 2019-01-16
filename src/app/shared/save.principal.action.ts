import { Action } from 'rxjs/internal/scheduler/Action';
import { Principal } from './principal.model';
import { PrincipalState } from './principal.state';

export const SAVE_PRINCIPAL = 'SAVE_PRINCIPAL';
export class SavePrincipalAtion implements Action {
    readonly type = SAVE_PRINCIPAL;

    constructor(public payload: Principal) {

    }

}
