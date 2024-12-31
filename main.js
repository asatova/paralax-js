const parallaxBox = document.querySelector('.parallax');
const layers = parallaxBox.querySelectorAll('.parallax__layer');

const paralax = (evt) => {
    const paralaxWidth = parallaxBox.offsetWidth;
    const paralaxHeight = parallaxBox.offsetHeight;

    const coordX = evt.clientX - paralaxWidth / 2;
    const coordY = evt.clientY - paralaxHeight / 2;

    layers.forEach(layer => {
        const layerSpeed = parseFloat(layer.dataset.speed) || 0;
        const x = (coordX * layerSpeed).toFixed(1);
        const y = (coordY * layerSpeed).toFixed(1);
        layer.style.transform = `translate(${x}px, ${y}px)`;
    });
};

const stopParalax = () => {
    layers.forEach(layer => {
        layer.style.transform = '';
    });
};

parallaxBox.addEventListener('mousemove', paralax);
parallaxBox.addEventListener('mouseleave', stopParalax);
