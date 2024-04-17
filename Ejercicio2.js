/*
Crear un programa que contenga un area de 700x600, 1 circulo azul de 40x40 y 1 cuadrado verde de 60x60:
a_El cuadrado se controla con el movimiento del mouse y el circulo rebota dentro la ventana.
b_El circulo cambia de color y rebota al colisionar contra cualquier cara del cuadrado.
c_Si el circulo colisiona contra el techo aumenta 4 puntos su diametro y si colisiona contra la cara inferior del cuadrado, descuenta 4 puntos su diametro.
d_Si el Mouse esta presionado, el circulo puede atravesar el cuadrado.

*Cada linea de codigo debe contener un comentario explicando el proposito logico humano de esa linea.
(Para los que les gusta que ChatGPT les haga todo)
:(
*/
let cubX = 0;
let cubY = 0;
let cubT = 60;

let cirX = 100;
let cirY = 100;
var velX = 5;
var velY = 5;
var dirX = 1;
var dirY = 1;
var radio = 40;
var c;

function setup() {
createCanvas(700,600);
c = color(0,0,255);
}


function draw() {
  //pinta el color del fondo de negro
  background(0);
  //creamos un circulo de un color inicial azul
  fill(c);
  ellipse(cirX, cirY, radio,radio);
  //creamos un cuadrado de color verde
  fill(0,255,0);
  rect(cubX, cubY, cubT,cubT);
  //asignamos el valor de cubX y cubY al valor del mouse y le restamos 30 para que reconozca el centro del cubo
  cubX = mouseX - 30;
  cubY = mouseY - 30;
  //hacemos que se mueva el circulo en el eje X e Y, la dirY/X es para que sume o reste su posicion
  cirX = cirX + dirX * velX;
  cirY = cirY + dirY * velY;
  //rebotar con las paredes
  if (cirX >= 680 || cirX <= 20 ) {
  //cambiamos la direccion hacia donde se dirige la bola
  dirX = dirX * -1;}
  //rebotar en el piso y techo
  if (cirY >= 580 || cirY <= 20 ) {
  //cambiamos la direccion hacia donde se dirige la bola
  dirY = dirY * -1;}
  
  //disminuimos su diametro cuando toca el piso
  if(cirY >= 580){radio =radio - 4;}
  //aumentamos su diametro cuando toca el techo
  if(cirY <= 20){radio = radio + 4;}
  
  //si el mouse es presionado las coliciones contra el cub son canceladas
  if(mouseIsPressed == false){
  //hacemos que rebote en el cubo cuando la posicion de Y del circulo sea menor o igual a la posicion de Y del cubo pero mayor a la posicion del cubo mas su tamaño entonces que revise las demas condiciones
  if( cirY  >= cubY - 5 && cirY  <= cubY + cubT ){
  if (cirX >= cubX  && cirX <= cubX + cubT) {dirY = dirY * -1;
  //asigna a la variable c valores aleatorios de para los colores
  c = color(random(256),random(256),random(256));}
  
  //si la posicion x del circulo es mayo que la posicion del cubo mas su tamaño y menor que el tamaño del cubo mas 5 entonces la direccion de rebote del circulo cambia 
  if (cirX >= cubX + cubT  && cirX <= cubX + cubT+ 5 ) {dirX = dirX * -1;
  //asigna a la variable c valores aleatorios de para los colores
  c = color(random(256),random(256),random(256));}
  
  //si la posicion x del circulo es menor que la posicion del cubo y menor que la posicion menos 5 entonces la direccion de rebote del circulo cambia 
  if (cirX >= cubX - 5 && cirX <= cubX  ) {dirX = dirX * -1;
  //asigna a la variable c valores aleatorios de para los colores
  c = color(random(256),random(256),random(256));}
  }
  }
}
