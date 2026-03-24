
if(window.innerWidth > 768){
    for (let i = 0; i < 20; i++) {
    let particle = document.createElement('div');
    particle.classList.add('particle');

    let size = Math.random() * 6 + 3;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';

    particle.style.left = Math.random() * 95 + "vw";
    particle.style.top = Math.random() * 95 + "vh";

    document.body.appendChild(particle);
  }
}
