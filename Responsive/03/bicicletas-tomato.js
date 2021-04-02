document.querySelector('.menu_btn').addEventListener('click', event => {
    console.log('click');
    document.querySelector('.menu__list').classList.toggle('active');
});