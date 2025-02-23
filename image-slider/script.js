// 图片数组，这里填写你的图片文件名
const images = ['20230422232045359.jpg', '20230422232054268.jpg', '20230422232101978.jpg'];
let currentIndex = 0;
const slidesContainer = document.getElementById('slides');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// 初始化图片
function initSlides() {
    images.forEach((image) => {
        const img = document.createElement('img');
        img.src = `images/${image}`;
        slidesContainer.appendChild(img);
    });
}

// 显示当前图片
function showSlide(index) {
    const slideWidth = slidesContainer.firstElementChild.offsetWidth;
    slidesContainer.style.transform = `translateX(-${index * slideWidth}px)`;
}

// 切换到下一张图片
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

// 切换到上一张图片
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
}

// 自动轮播
let intervalId = setInterval(nextSlide, 3000);

// 为按钮添加事件监听器
prevButton.addEventListener('click', () => {
    clearInterval(intervalId);
    prevSlide();
    intervalId = setInterval(nextSlide, 3000);
});

nextButton.addEventListener('click', () => {
    clearInterval(intervalId);
    nextSlide();
    intervalId = setInterval(nextSlide, 3000);
});

// 初始化图片和显示第一张图片
initSlides();
showSlide(currentIndex);