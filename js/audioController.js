document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const equalizer = document.querySelector('.equalizer__bars');
    const reverseEqualizer = document.querySelector('.equalizer__bars--reverse');

    function startAnimation() {
        const bars = document.querySelectorAll('.equalizer__bars .bar, .equalizer__bars--reverse .bar');
        bars.forEach(bar => {
            const delay = Math.random() * 1000; // Délai aléatoire entre 0 et 1 seconde
            bar.style.animation = `bounce 1s infinite ${delay}ms ease-in-out`;
        });
    }

    function stopAnimation() {
        const bars = document.querySelectorAll('.equalizer__bars .bar, .equalizer__bars--reverse .bar');
        bars.forEach(bar => {
            bar.style.animation = 'none';
            bar.style.height = '40%'; // Réinitialiser à la nouvelle hauteur par défaut
        });
    }

    playBtn.addEventListener('click', function() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.textContent = '⏸';
            equalizer.classList.add('active');
            reverseEqualizer.classList.add('active');
            startAnimation();
        } else {
            audioPlayer.pause();
            playBtn.textContent = '▶';
            equalizer.classList.remove('active');
            reverseEqualizer.classList.remove('active');
            stopAnimation();
        }
    });

    audioPlayer.addEventListener('ended', function() {
        playBtn.textContent = '▶';
        equalizer.classList.remove('active');
        reverseEqualizer.classList.remove('active');
        stopAnimation();
    });

    // S'assurer que l'animation est arrêtée au chargement de la page
    stopAnimation();
});