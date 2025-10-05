const showImageBtn = document.getElementById('showImageBtn');
const imageContainer = document.getElementById('imageContainer');

const images = [
    'images/1.jpg',
    'images/2.jpg',
    'images/3.jpg',
    'images/4.jpg',
    'images/5.jpg',
    'images/6.jpg',
    'images/7.jpg',
    'images/8.jpg',
    'images/9.jpg'
];

showImageBtn.addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * images.length);

    let img = document.querySelector('#imageContainer img');
    if (!img) {
        img = document.createElement('img');
        imageContainer.appendChild(img);
    }

    img.src = images[randomIndex];
});
