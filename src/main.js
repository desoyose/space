document.addEventListener("DOMContentLoaded", () => {
    // Cargar los datos desde JSON
    fetch("/data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta de la red');
            }
            return response.json();
        })
        .then(data => {
            procesarDatos(data);
        })
        .catch(error => {
            console.error('Error al cargar el JSON:', error);
        });
});

const planetName = document.querySelector(".planet__name");
const planetText = document.querySelector(".planet__text");
const planetImg = document.querySelector(".planet__img");
const distancePlanet = document.querySelector(".distance__planet");
const timePlanet = document.querySelector(".time__planet");
const crewName = document.querySelector(".name__person");
const crewBio = document.querySelector(".crew__text");
const crewImage = document.querySelector(".crew__img");
const crewRole = document.querySelector(".crew__role");
const burguerMenu = document.querySelector("#hamburger__menu");
const closeMenu = document.querySelector("#close__menu");
const layoutNav = document.querySelector(".layout__nav");

burguerMenu.addEventListener("click", () => {
    layoutNav.classList.remove("w-[0%]");
    layoutNav.classList.add("w-[60%]");
    burguerMenu.classList.add("hidden");
    closeMenu.classList.remove("hidden");
});

closeMenu.addEventListener("click", () => {
    layoutNav.classList.remove("w-[60%]");
    layoutNav.classList.add("w-[0%]");
    
    closeMenu.classList.add("hidden");
    burguerMenu.classList.remove("hidden");
});

const procesarDatos = (data) => {
    console.log(data); // Verifica si los datos del JSON se están cargando
    const { destinations, crew, technology } = data;

    // Si existen destinos en la página, manejarlos
    if (document.querySelector(".destination")) {
        manejarDestinos(destinations);
    }

    // Si existen dots de crew en la página, manejarlos
    if (document.querySelector(".crew__dot")) {
        changeCrew(crew);
    }
    if (document.querySelector(".box_tech__number")) {
        changeTech(technology);
    }
};

// Función para manejar los clics de los destinos
const manejarDestinos = (destinations) => {
    const destinationLi = document.querySelectorAll(".destination");
    const destImg = document.querySelector(".dest__img");
    const boxInfo = document.querySelector(".box__info");
    const boxDetails = document.querySelector(".box__details");

    if (!destinationLi.length || !destImg || !boxInfo || !boxDetails) {
        console.error("No se encontraron los elementos necesarios para la animación.");
        return;
    }

    destinationLi.forEach((li, index) => {
        li.addEventListener("click", () => {
            console.log("Destino seleccionado:", destinations[index].name);

            // Eliminar la animación previa y añadir fade-out
            destImg.classList.remove("animated");
            boxInfo.classList.remove("animated");
            boxDetails.classList.remove("animated");

            destImg.classList.add("opacity-0");
            boxInfo.classList.add("opacity-0");
            boxDetails.classList.add("opacity-0");

            // Esperar 300ms (duración de la animación de salida) antes de cambiar la información
            setTimeout(() => {
                // Cambiar la información del destino
                planetText.innerHTML = destinations[index].description;
                planetName.innerHTML = destinations[index].name;
                timePlanet.innerHTML = destinations[index].travel;
                distancePlanet.innerHTML = destinations[index].distance;
                planetImg.src = `${destinations[index].images.webp}`;
                planetImg.alt = `Imagen de ${destinations[index].name}`;
                console.log(`Ruta de la imagen: ./assets/destination/${destinations[index].images.webp}`);

                // Esperar a que la imagen se cargue antes de aplicar animación
                loadImage(planetImg).then(() => {
                    destImg.classList.remove("opacity-0");
                    boxInfo.classList.remove("opacity-0");
                    boxDetails.classList.remove("opacity-0");

                    destImg.classList.add("animated");
                    boxInfo.classList.add("animated");
                    boxDetails.classList.add("animated");
                });

            }, 300); // Tiempo para esperar a que termine la animación de salida

            // Resaltar el destino seleccionado
            destinationLi.forEach((item) => {
                item.classList.remove("after:scale-x-100");
                item.classList.add("after:scale-x-0");
            });

            li.classList.add("after:scale-x-100");
            li.classList.remove("after:scale-x-0");
        });
    });
};

// Esperar que la imagen se cargue antes de continuar
const loadImage = (imgElement) => {
    return new Promise((resolve, reject) => {
        if (imgElement.complete) {
            resolve();
        } else {
            imgElement.onload = resolve;
            imgElement.onerror = reject;
        }
    });
};

// Función para manejar los clics en los puntos de tripulación
// Datos de la tripulación (puedes agregar más miembros de la tripulación aquí)

  
  // Seleccionar los puntos de la tripulación
  const crewDots = document.querySelectorAll(".crew__dot");
  
  // Función para actualizar la información de la tripulación y la imagen
  const changeCrew = (crew) => {
    const crewDots = document.querySelectorAll(".crew__dot");
    const crewSection = document.querySelector(".crew__secton");
    const crewName = document.querySelector(".name__person");
    const crewBio = document.querySelector(".crew__text");
    const crewImageContainer = document.querySelector(".crew__img");
    const crewRole = document.querySelector(".crew__role");

    if (crewDots.length === 0) {
        console.error("No se encontraron puntos de tripulación");
        return;
    }

    crewDots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            
            crewName.innerHTML = crew[index].name;
            crewRole.innerHTML = crew[index].role;
            crewBio.innerHTML = crew[index].bio;

            // Cambiar la imagen de fondo dinámicamente
            const newImage = crew[index].images ? crew[index].images.webp : '';  // Tomamos la URL de la imagen desde el JSON, y aseguramos que no esté indefinida

            if (newImage) {
                // Eliminamos cualquier imagen de fondo previamente definida
                crewImageContainer.style.backgroundImage = ''; // Limpiamos el fondo existente

                // Aplicamos la nueva imagen de fondo
                crewImageContainer.style.backgroundImage = `url(${newImage})`;  
                crewImageContainer.style.backgroundSize = 'contain';  // Aseguramos que la imagen no se recorte
                crewImageContainer.style.backgroundPosition = 'center';  // Centrar la imagen

                // Esperamos que la imagen de fondo se haya cargado correctamente
                
            } else {
                console.error("La imagen no está definida para este miembro de la tripulación.");
            }

            // Resaltamos el punto de tripulación seleccionado
            crewDots.forEach((item) => {
                item.classList.remove("bg-white");
                item.classList.add("bg-white/50");
            
            });
            
            dot.classList.remove("bg-white/50");
            dot.classList.add("bg-white");
        });
    });
};


  
  



// Función para manejar los clics en los puntos de tecnología
const changeTech = (technology) => {
    const techNames = document.querySelectorAll(".box_tech__number");
    const techTitle = document.querySelector(".tech__title");
    const techText = document.querySelector(".tech__text");
    const techLandscapeSource = document.querySelector(".tech__media__landscape");
    const techPortraitSource = document.querySelector(".tech__media__portrait");
    const techMediaDefault = document.querySelector(".tech__media__default");
    const techRigth = document.querySelector(".tech__rigth");
    const boxTechImg = document.querySelector(".box__tech-img");

    techNames.forEach((tech, index) => {
        tech.addEventListener("click", () => {
            console.log("Tecnología seleccionada:", technology[index].name);

            // Eliminar animaciones previas y añadir opacidad 0 (fade-out)
            techRigth.classList.remove("animated");
            boxTechImg.classList.remove("animated");
            techRigth.classList.add("opacity-0");
            boxTechImg.classList.add("opacity-0");

            // Esperar 300ms antes de cambiar los datos
            setTimeout(() => {
                // Actualizamos el contenido
                techTitle.innerHTML = technology[index].name;
                techText.innerHTML = technology[index].description;
                techLandscapeSource.srcset = `${technology[index].images.landscape}`;
                techPortraitSource.srcset = `${technology[index].images.portrait}`;
                techMediaDefault.src = `${technology[index].images.landscape}`;

                // Esperar a que la imagen se cargue antes de aplicar animación
                loadImage(techMediaDefault).then(() => {
                    techRigth.classList.remove("opacity-0");
                    boxTechImg.classList.remove("opacity-0");
                    techRigth.classList.add("animated");
                    boxTechImg.classList.add("animated");
                });
            }, 300); // 300ms para esperar que la animación de salida termine

            // Resaltamos el botón seleccionado
            techNames.forEach((tech) => {
                tech.classList.remove("bg-white");
                tech.classList.add("bg-transparent");
                tech.classList.remove("text-Blue_Dark");
                tech.classList.add("text-white");
            });

            // Establecemos la clase para el botón seleccionado
            tech.classList.remove("text-white");
            tech.classList.remove("bg-transparent");
            tech.classList.add("bg-white");
            tech.classList.add("text-Blue_Dark");
        });
    });
};
