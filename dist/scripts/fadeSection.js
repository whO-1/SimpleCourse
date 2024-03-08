import { inView } from "./navbarScroll.js";

export function checkSection({ element , offsetY , className}){
    return inView({element, offsetY}) &&  !element.classList.contains(className);   
}

export function fadeSection( newState , {element , addClassName, deleteClassName } ){
    element.classList.remove(deleteClassName);
    element.classList.add(addClassName);
}
