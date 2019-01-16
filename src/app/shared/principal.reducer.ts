import { SAVE_PRINCIPAL } from './save.principal.action';
import { Principal } from './principal.model';


export function principalReducer(state: Principal, action) {
    switch (action.type) {
       case SAVE_PRINCIPAL:
           return  Object.assign({}, state, action.payload);
       default:
           return state;
    }

}
