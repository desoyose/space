import './style.css';

const users = [
    {
        Nombre: "jorge",
        Email: "jorge@gmail.com",
        Avatar: "./imagenes/image-avatar.jpg",
        Username: "perico",
    },
    {
        Nombre: "Amaia",
        Email: "am@gmail.com",
        Avatar: "./imagenes/image-avatar2.jpg",
        Username: "Amaia",
    }
];

const form = document.querySelector("#form");
const imgInput = document.querySelector("#file-input");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const usernameInput = document.querySelector("#username");
const formContainer = document.querySelector("#container__form");  
const header_index = document.querySelector("#container__h1");
const  container2= document.querySelector("#container2");
const  body2= document.querySelector("#body2");


const nuevoUsuario = (event) => {
    event.preventDefault();
    
    // Obtenemos los valores del formulario
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();
    const name = nameInput.value.trim();
    const avatarFile = imgInput.files[0];
    

    // Validamos si el nombre de usuario o el correo electrónico ya existen
    let userExist = false;

    // Verificamos si ya existe el usuario o el email
    users.forEach(user => {
        if (user.Username === username) {
            console.log("¡El nombre de usuario ya existe!");
            userExist = true;
        }
        if (user.Email === email) {
            console.log("¡El correo electrónico ya existe!");
            userExist = true;
        }
    });

    // Si el usuario ya existe, no lo añadimos
    if (userExist) {
        return; // Terminamos la función si hay un conflicto
    }

    // Si el usuario no existe, asignamos los valores para el nuevo usuario
    let avatarUrl = '';
    if (avatarFile) {
        avatarUrl = URL.createObjectURL(avatarFile); // Si hay un archivo, lo convertimos en una URL temporal
    }

    const newUser = {
        Nombre: name,
        Email: email,
        Avatar: avatarUrl,
        Username: username,
    };

    // Añadimos el nuevo usuario a la lista de usuarios
    users.push(newUser);
    console.log("Nuevo usuario añadido:", newUser);

    // Actualizamos los elementos del DOM con el nuevo usuario
    const newName = document.querySelector("#new-name");
    const newImg = document.querySelector("#new-img"); 
    const newEmail = document.querySelector("#new-email");
    const newUsername = document.querySelector("#new-username");
    const  header__name= document.querySelector("#header__name");
    const nerName2 =document.querySelector("#new-name2")
    // Si el elemento existe, lo actualizamos con el nuevo valor 
    if (newName) {
        newName.innerHTML = newUser.Nombre;
    }

    if (newImg) {
        newImg.src = newUser.Avatar;
    }

    if (newEmail) {
        newEmail.innerHTML = newUser.Email;
    }

    if (newUsername) {
        newUsername.innerHTML = newUser.Username;
    }
    if (header__name) {
        header__name.innerHTML = newUser.Email; // Aquí corregimos la asignación
    }
    if (nerName2) {
        nerName2.innerHTML = newUser.Nombre; // Aquí corregimos la asignación
    }
    // Añadimos la clase 'hidden' al contenedor del formulario
    if (formContainer) {
        formContainer.classList.add('hidden');
        header_index.classList.add('hidden');
        container2.classList.remove('hidden');
        container2.classList.add('flex');
        body2.classList.remove('hidden');
        body2.classList.add('flex');
    }
};

// Añadimos el evento para el formulario
form.addEventListener("submit", nuevoUsuario);
