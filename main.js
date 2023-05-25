const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:110
});

typewriter
    .typeString('Soy un Desarrollador Web FullStack')
    .pauseFor(100)
    .start();