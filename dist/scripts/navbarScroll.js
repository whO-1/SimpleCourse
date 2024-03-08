export function inView( { element, offsetY } ){
    const pos = element.getBoundingClientRect();
    if( pos.top <= offsetY*window.innerHeight && pos.top > -pos.height + offsetY*window.innerHeight ){
        return true;
    }
    return false;
}



export function checkSectionsinView( { items, offsetY }) {
    const item = items.find ( (it) => {
        return inView( { element:it , offsetY });     
    });
    if( item ){
        return  item.getAttribute("id");
    }
    return ""; 
};



export function navDecorate( newState , {items,links} ){
    const oldIndex = items.findIndex(  el => el.getAttribute('id') === this.state  );
    const newIndex = items.findIndex(  el => el.getAttribute('id') === newState  );
    
    const oldActiveLink = links[oldIndex];
    const newActiveLink = links[newIndex];

    if( oldActiveLink){
        oldActiveLink.classList.remove('active-section');
    }
    if( newActiveLink){
        newActiveLink.classList.add('active-section');
    }        
}