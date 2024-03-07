const linkList=[];
const sections = [];
const anchors = document.querySelectorAll("a.nav-link[href^='#']");

for(let i=0;i<anchors.length;i++ ){
    linkList.push( anchors[i].getAttribute("href") );    
}

linkList.forEach( (el,index) => sections.push(
    document.querySelector(el) ,
));



function scrollSpy() {
    const newSection = sections.find ( (el) => {
        const pos = el.getBoundingClientRect()
        if( pos.top <= 300 && pos.top > -pos.height+300 ){
            return true;   
        }    
    });
    if(newSection){
        return  newSection.getAttribute("id");
    }
    return ""; 
};

function navDecorate(newState){
    const oldIndex = sections.findIndex(  el => el.getAttribute('id') === this.state  );
    const newIndex = sections.findIndex(  el => el.getAttribute('id') === newState  );
    
    const oldActiveLink = anchors[oldIndex];
    const newActiveLink = anchors[newIndex];

    if( oldActiveLink){
        oldActiveLink.classList.remove('active-section');
    }
    if( newActiveLink){
        newActiveLink.classList.add('active-section');
    }        
}



class ObjectUpdater {
    constructor(funUpdate, funTrigger, initState = "") {
        this.state = initState;
        this.updateStateFun = funUpdate;
        this.performTrigger = funTrigger;
    }
    update () {
        const newState = this.updateStateFun();
        if (this.state !== newState ) {
            this.performTrigger(newState);
            this.state = newState;
        }
        return;
    };
}


const section = new ObjectUpdater(scrollSpy, navDecorate);
