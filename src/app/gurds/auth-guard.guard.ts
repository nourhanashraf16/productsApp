import { CanActivateFn } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  console.log(route)
  console.log(state)
  console.log(localStorage.getItem("auth"))
  if(localStorage.getItem("auth") ==="token"){
    return true;
  }else{
    return false
  }

};
