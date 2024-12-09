const hueSlider = document.getElementById('hue-slider');
const style = getComputedStyle(document.documentElement);
const initialHue = style.getPropertyValue('--primary-hue').trim();
hueSlider.value = initialHue;
hueSlider.addEventListener('input', function () {
    const hue = hueSlider.value;
    document.documentElement.style.setProperty('--primary-hue', hue);
    const color_dark = style.getPropertyValue('--color-dark').trim();
    document.querySelector('meta[name=theme-color]').setAttribute('content', style.getPropertyValue('--color-bg'));  // change top bar color - only works for Chrome on Android
});
