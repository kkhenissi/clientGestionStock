import { Action } from 'rxjs/internal/scheduler/Action';
import { Principal } from './principal.model';
import { PrincipalState } from './principal.state';

export const SAVE_PRINCIPAL = 'SAVE_PRINCIPAL';
export class SavePrincipalAtion extends Action<any> {
    readonly type = SAVE_PRINCIPAL;


}
