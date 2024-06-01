//solanum text effect entrance
document.addEventListener('DOMContentLoaded', function() {
  const text = '"Podríamos no tener mucho en común, tú y yo. Aun así, te considero un amigo"';
  const textContainer = document.querySelector('.typewriter-text');
  const cursor = document.querySelector('.typewriter-cursor');
  let index = 0;

  function type() {
      if (index < text.length) {
          textContainer.textContent += text.charAt(index);
          index++;
          setTimeout(type, 100); // Ajusta la velocidad de la escritura aquí
      } else {
          cursor.style.display = 'none'; // Oculta el cursor al finalizar
      }
  }

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              setTimeout(type, 500); // Retraso inicial antes de comenzar a escribir
              observer.unobserve(entry.target); // Deja de observar una vez que la animación comienza
          }
      });
  }, { threshold: 0.1 }); // Ajusta el umbral según sea necesario

  observer.observe(document.querySelector('.container-solanum'));
});

//Particles.JS library
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 1300,
        }
      },
      "color": {
        "value": "#191919"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


  //Redirections
  document.getElementById('link1').addEventListener('click', function() {
      window.open('https://github.com/Abysswlkr/Crvice_Project', '_blank');
  });

  document.getElementById('link2').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/OuterGamesWeb', '_blank');
  });

  document.getElementById('link3').addEventListener('click', function() {
    window.open('https://github.com/Abysswlkr/The_Witcher_Enciclopedia', '_blank');
  });

  document.getElementById('link4').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });

  document.getElementById('link5').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });
  
  document.getElementById('link6').addEventListener('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
  });


