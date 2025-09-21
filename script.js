/*onload = () => {
  document.body.classList.remove("container");
  document.title = "Flores de orden superior 💐";
  
};*/

onload = () => {
  document.body.classList.remove("container");
  document.title = "Flores de orden superior 💐";
  // Configuración de la música
  const audio = document.getElementById('backgroundMusic');
  const playBtn = document.getElementById('playBtn');
  const volumeSlider = document.getElementById('volumeSlider');
  const playIcon = playBtn.querySelector('i');
  
  // Establecer volumen inicial
  audio.volume = volumeSlider.value;
  
  // Intentar reproducir automáticamente (puede requerir interacción del usuario en algunos navegadores)
  audio.play().then(() => {
    playIcon.textContent = '❚❚'; // Cambiar a icono de pausa
  }).catch(error => {
    console.log('La reproducción automática falló: ', error);
    playIcon.textContent = '▶'; // Mantener icono de play
  });
  
  // Controlar botón de play/pausa
  playBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playIcon.textContent = '❚❚';
    } else {
      audio.pause();
      playIcon.textContent = '▶';
    }
  });
  
  // Controlar volumen
  volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
  });
};