const formLocationList = document.querySelectorAll('.location-item');
const inputLocation = document.getElementById('location')
formLocationList.forEach(el => {
    el.addEventListener('click', () => {
        inputLocation.value = el.textContent;
    })
});
const inputList = document.querySelector('.form').querySelectorAll('input');
inputList.forEach(input => {
    if (input.name != 'datefilter')
        input.onfocus = () => {
            input.closest('.form-item').classList.add('focus')
        };
    input.onblur = () => {
        input.closest('.form-item').classList.remove('focus')
    }
})

//open / close zoom img
const zoomImg = document.getElementById('zoom-image');
const closeImgBtn = document.getElementById('close-zoom');
const imgList = document.querySelectorAll('.photo-zoom');
function closeZoom() {
    zoomImg.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open')
}

function openZoom(img) {
    console.log(img)
    let zoomsrc = `${img.src}`.replace('.png','') +' 2x.png'
    zoomImg.querySelector('img').src = zoomsrc;
    zoomImg.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open')
}

imgList.forEach(image => {
    image.addEventListener('click', () => {
        openZoom(image);
    })
})

closeImgBtn.addEventListener('click', ()=> closeZoom());

//burger
const burger = document.querySelector('.burger-menu');
const burgerMenu = document.querySelector('.modal-menu');

burger.addEventListener('click', ()=> {
    burgerMenu.classList.toggle('open');
})