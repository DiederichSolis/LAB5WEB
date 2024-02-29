document.body.style.backgroundColor = 'rgb(255, 255, 255)';
const texto = document.createElement('h1');

// Crear un contenedor para el chat
let chatContainer = document.createElement('div');
chatContainer.style.backgroundColor = 'rgb(139, 163, 159 )';
chatContainer.style.border = '6px solid rgb(54, 54, 54 )';
chatContainer.style.borderRadius = '5px';
chatContainer.style.padding = '45px';
chatContainer.style.maxWidth = '400px';
chatContainer.style.margin = '0 auto';

// Crear un contenedor para los mensajes
let mensajesContainer = document.createElement('div');
mensajesContainer.id = 'mensajes';
mensajesContainer.style.marginBottom = '10px';
mensajesContainer.style.overflowY = 'scroll';
mensajesContainer.style.maxHeight = '200px';

// Crear un input para los mensajes
let mensajeInput = document.createElement('input');
mensajeInput.type = 'text';
mensajeInput.id = 'mensajeInput';
mensajeInput.placeholder = 'Escribe un mensaje...';
mensajeInput.style.width = 'calc(100% - 70px)';
mensajeInput.style.padding = '5px';
mensajeInput.style.border = '1px solid #ccc';
mensajeInput.style.borderRadius = '3px';

// Crear un botón de enviar
let enviarButton = document.createElement('button');
enviarButton.textContent = 'Enviar';
enviarButton.style.width = '60px';
enviarButton.style.padding = '5px';
enviarButton.style.border = '1px solid #ccc';
enviarButton.style.borderRadius = '3px';
enviarButton.style.cursor = 'pointer';


// Agregar los elementos al contenedor del chat
chatContainer.appendChild(mensajesContainer);
chatContainer.appendChild(mensajeInput);
chatContainer.appendChild(enviarButton);

// Agregar el contenedor del chat al body
document.body.appendChild(chatContainer);
