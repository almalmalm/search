const search = document.querySelector('.search');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    if (document.querySelector('.opened')) {
        input.style.transform = 'translate(0px)';
        btn.style.transform = 'translate(0px)';
        input.style.width = '40px';
        search.classList.remove('opened');
    } else {
        input.style.transform = 'translate(-20px)';
        btn.style.transform = 'translate(20px)';
        input.style.width = '200px';
        search.classList.add('opened');
    }
});