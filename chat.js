document.body.style.margin = "10";
document.body.style.padding = "10";
document.documentElement.style.margin = "10";
document.documentElement.style.padding = "10";
document.body.style.backgroundColor = "rgba(226, 227, 226)";
document.body.style.overflow = "hidden";


const Contenido_izq = document.createElement('div');
const Contenido_top = document.createElement('div');
const Contenido_right = document.createElement('div')
const Contenido_right_1 = document.createElement('div')
const Contenido_right_2 = document.createElement('div')
const card = document.createElement('button');

Contenido_izq.style.width = "24%";
Contenido_izq.style.height = "80vh"; // 100% de la altura de la ventana
Contenido_izq.style.float = "left";
Contenido_izq.style.marginTop ="2%";
Contenido_izq.style.backgroundColor = "rgb(107, 121, 107)"; // Solo para diferenciar las secciones
Contenido_izq.style.borderRadius = "20px";
Contenido_izq.style.marginRight = "1%";
Contenido_izq.style.overflowY = 'auto';

Contenido_right.style.width = "74%";
Contenido_right.style.height = "80vh"; // 100% de la altura de la ventana
Contenido_right.style.float = "right";
Contenido_right.style.marginTop ="2%";
Contenido_right.style.backgroundColor = "rgb(107, 121, 107)"; // Solo para diferenciar las secciones
Contenido_right.style.borderRadius = "20px";
Contenido_right.style.marginRight = "1%";
Contenido_right.style.overflowY = 'auto';


Contenido_right_1.style.position = 'relative';
Contenido_right_1.style.width = '70%';
Contenido_right_1.style.height = '74%'; // Ajusta la altura según necesites
Contenido_right_1.style.marginLeft= '27%';
Contenido_right_1.style.marginTop= '4%';
Contenido_right_1.style.borderRadius = '10px';
Contenido_right_1.style.background = 'rgba(0, 0,0,0.4)';

Contenido_right_2.style.position = 'absolute';
Contenido_right_2.style.width = '95%';
Contenido_right_2.style.height = '92%'; // Ajusta la altura según necesites
Contenido_right_2.style.marginLeft= '3%';
Contenido_right_2.style.marginTop= '2%';
Contenido_right_2.style.borderRadius = '5px';
Contenido_right_2.style.borderWidth = '3%';
Contenido_right_2.style.background = 'rgba(239, 239, 239)';



Contenido_top.textContent = 'Universidad del Valle';
Contenido_top.style.color = 'white';
Contenido_top.style.fontFamily = 'Century Gothic, sans-serif';
Contenido_top.style.fontWeight = 'bold';
Contenido_top.style.position = 'absolute';
Contenido_top.style.top = '10';
Contenido_top.style.left = '50';
Contenido_top.style.width = '22%';
Contenido_top.style.borderRadius = "10px";
Contenido_top.style.backgroundColor = 'rgba(107, 121, 107)';
Contenido_top.style.padding = '10px';
Contenido_top.style.boxSizing = 'border-box'; // Para incluir el padding en el ancho total


card.style.position = 'relative';
card.style.width = '90%';
card.style.height = '10%'; 
card.style.margin = "5%";
card.style.borderRadius = "10px";
card.style.backgroundColor = "rgb(0, 0,0,0.4)";
card.style.display = 'flex'; 
card.textContent = 'Names';
card.style.fontFamily = 'Century Gothic, sans-serif';
card.style.fontSize = '2vh';
card.style.color = 'white';
card.style.padding = '10%';
card.style.alignItems = 'center'; 


document.body.appendChild(Contenido_izq);
Contenido_izq.appendChild(card)
document.body.appendChild(Contenido_top);
document.body.appendChild(Contenido_right);

document.body.appendChild(Contenido_right_1);
Contenido_right_1.appendChild(Contenido_right_2);