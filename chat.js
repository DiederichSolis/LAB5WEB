document.body.style.margin = "10";
document.body.style.padding = "10";
document.documentElement.style.margin = "10";
document.documentElement.style.padding = "10";
document.body.style.backgroundColor = "rgba(226, 227, 226)";
document.body.style.overflow = "hidden";


const Contenido_izq = document.createElement('div');
const Contenido_top = document.createElement('div');


Contenido_izq.style.width = "24%";
Contenido_izq.style.height = "80vh"; // 100% de la altura de la ventana
Contenido_izq.style.float = "left";
Contenido_izq.style.marginTop ="2%";
Contenido_izq.style.backgroundColor = "rgb(107, 121, 107)"; // Solo para diferenciar las secciones
Contenido_izq.style.borderRadius = "20px";
Contenido_izq.style.marginRight = "1%";
Contenido_izq.style.overflowY = 'auto';


Contenido_top.textContent = 'Universidad del Valle';
Contenido_top.style.position = 'fixed';
Contenido_top.style.top = '0';
Contenido_top.style.left = '0';
Contenido_top.style.width = '100%';
Contenido_top.style.backgroundColor = 'rgba(107, 121, 107)';
Contenido_top.style.padding = '10px';
Contenido_top.style.boxSizing = 'border-box'; // Para incluir el padding en el ancho total


document.body.appendChild(Contenido_izq);
document.body.appendChild(Contenido_top);