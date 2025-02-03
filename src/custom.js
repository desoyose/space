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
  const nameInput = document.querySelector("#name");
  const emailInput = document.querySelector("#email");
  const usernameInput = document.querySelector("#username");
  const avatarInput = document.querySelector("#file-input");
  const userInfoContainer = document.querySelector("#user-info-container");
  
  // Función para mostrar los datos del nuevo usuario en el HTML
  const displayUserData = (nuevoUsuario) => {
    const userHTML = `
      <div class="user-info">
        <img src="${nuevoUsuario.Avatar}" alt="Avatar" class="user-avatar" />
        <p><strong>Nombre:</strong> ${nuevoUsuario.Nombre}</p>
        <p><strong>Email:</strong> ${nuevoUsuario.Email}</p>
        <p><strong>Username:</strong> ${nuevoUsuario.Username}</p>
      </div>
    `;
    // Insertar los datos en el contenedor
    userInfoContainer.innerHTML = userHTML;
  };
  
  // Función de flecha para manejar el envío del formulario
  const handleFormSubmit = (event) => {
    event.preventDefault(); // Evita el refresco de la página
  
    const nombre = nameInput.value.trim();
    const email = emailInput.value.trim();
    const username = usernameInput.value.trim();
    const avatarFile = avatarInput.files[0];
  
    if (!nombre || !email || !username || !avatarFile) {
      console.log("Por favor, completa todos los campos.");
      return;
    }
  
    const avatarURL = URL.createObjectURL(avatarFile);
  
    const nuevoUsuario = {
      Nombre: nombre,
      Email: email,
      Avatar: avatarURL,
      Username: username,
    };
  
    users.push(nuevoUsuario);
  
    console.log("Usuario añadido:", nuevoUsuario);
    console.log("Lista actualizada de usuarios:", users);
  
    form.reset();
  
    // Llamar a la función para mostrar los datos
    displayUserData(nuevoUsuario);
  };
  
  // Exportar la función para ser usada en otro archivo
  export const initializeForm = () => {
    form.addEventListener("submit", handleFormSubmit);
  };
  