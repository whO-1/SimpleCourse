
function loadContent(){
    const loader = document.querySelector('.loader');
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    setTimeout( () => {
        loader.style.display = 'none';
        header.style.display = 'block';
        main.style.display = 'block';
        footer.style.display = 'block';
    },500);
}