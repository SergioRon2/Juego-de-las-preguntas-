document.addEventListener('DOMContentLoaded', function(){
    window.addEventListener('load', function(){
        Swal.fire('Bienvenido a Que tanto sabes sobre Front-end y Java!')
      });
});


let puntaje = document.getElementById('puntaje');

resultado = 0;
puntaje.textContent = resultado;

document.addEventListener('DOMContentLoaded', function(){
    let restart = document.querySelector('.fa-rotate');
    let div = document.querySelector('.restart');

    div.addEventListener('mouseover', function(){
        restart.style.animation = 'animacion-restart 2s ease infinite';
    });
    div.addEventListener('mouseout', function(){
        restart.style.animation = 'none';
    });
    div.addEventListener('click', function(){
        window.location.href = 'index.html';
    });

});

let reglas = document.querySelector('.reglas');

reglas.addEventListener('click', function(){
    Swal.fire({
        title: 'Reglas del juego',
        icon: 'info',
        text: 'Este juego se basa en resolver un quiz basico sobre front-end y un poco de Java, Estas son las reglas del juego, si respondes correctamente sumas 10 puntos, si respondes de manera incorrecta se restan 15 puntos, buena suerte!',
    });
});

let tituloPregunta = document.querySelector('.titulo-pregunta');

const preguntasYRespuestas = [
    {
        pregunta: "¿Qué significa HTML y para qué se utiliza en el desarrollo web?",
        opciones: [
        "Lenguaje de marcado para estructurar contenido web.",
        "Lenguaje de programación para aplicaciones web.",
        "Lenguaje de consulta para bases de datos.",
        "Lenguaje de estilo para diseño gráfico."
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Cuál es la estructura básica de un documento HTML?",
        opciones: [
        "<html> y <css>",
        "<div> y <span>",
        "<head> y <body>",
        "<h1> y <p>"
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué es una etiqueta HTML y cuál es su función?",
        opciones: [
        "Define el estilo visual de la página.",
        "Define el comportamiento interactivo de la página.",
        "Define metadatos para motores de búsqueda.",
        "Define la estructura y el contenido de la página."
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Cuál es la diferencia entre una etiqueta de apertura y una etiqueta de cierre en HTML?",
        opciones: [
        "La etiqueta de apertura define el estilo, y la de cierre define el contenido.",
        "Ambas etiquetas hacen lo mismo en HTML.",
        "Las etiquetas de apertura y cierre se usan solo en CSS.",
        "La etiqueta de apertura inicia un elemento, y la de cierre lo finaliza."
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Qué etiqueta se utiliza para crear un enlace hipertexto en HTML?",
        opciones: [
        "<a>",
        "<link>",
        "<url>",
        "<href>"
        ],
        respuestaCorrecta: 0
    },
    {
        pregunta: "¿Qué es JavaScript y para qué se utiliza en el desarrollo web?",
        opciones: [
        "Un lenguaje de marcar para crear estructura en las páginas web.",
        "Un lenguaje de programación para agregar interactividad a las páginas web.",
        "Un lenguaje de estilos para diseñar páginas web.",
        "Un lenguaje de consulta para extraer datos de una base de datos."
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es la diferencia entre una variable declarada con 'const' y 'let' en JavaScript?",
        opciones: [
        "Las variables 'let' son para números, 'const' para cadenas de texto.",
        "No hay diferencia, 'const' y 'let' se usan indistintamente.",
        "Las variables 'const' no pueden ser reasignadas, 'let' puede ser reasignadas.",
        "Las variables 'const' son para funciones, 'let' para variables simples."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cómo se declara una función en JavaScript?",
        opciones: [
        "Con la palabra clave 'var'.",
        "Usando la etiqueta <script> en el HTML.",
        "Con la palabra clave 'declare'.",
        "Mediante la palabra clave 'function'."
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Qué es el DOM (Document Object Model) y cuál es su importancia en JavaScript?",
        opciones: [
        "El DOM es una base de datos para almacenar información en una página web.",
        "El DOM es una representación de la estructura de una página web y es esencial para interactuar con el contenido de la página mediante JavaScript.",
        "El DOM es un lenguaje de programación utilizado en JavaScript.",
        "El DOM es un sistema de enrutamiento para páginas web."
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cómo se realiza un bucle 'for' en JavaScript?",
        opciones: [
        "Mediante la palabra clave 'while' seguida de una condición.",
        "No es posible realizar bucles en JavaScript.",
        "Usando la palabra clave 'for' seguida de condiciones y un bloque de código.",
        "Usando la palabra clave 'loop' seguida de un contador."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué significa CSS y para qué se utiliza en el desarrollo web?",
        opciones: [
        "Computer Style System, se utiliza para crear software en línea.",
        "Content Styling System, se utiliza para gestionar el contenido de una página web.",
        "Cascading Style Sheets, se utiliza para dar estilo y formato a las páginas web.",
        "Cascading Scripting System, se utiliza para programar funciones en línea."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cómo se enlaza un archivo CSS externo a un documento HTML?",
        opciones: [
        "Usando la etiqueta <style> en la sección <body> del HTML.",
        "Incorporando el CSS directamente en el archivo JavaScript.",
        "Mediante la etiqueta <link> en la sección <head> del HTML.",
        "Usando la etiqueta <css> en la sección <head> del HTML."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Qué es una regla CSS y cómo se estructura?",
        opciones: [
        "Una regla CSS es una función en JavaScript para realizar cálculos matemáticos.",
        "Una regla CSS es una etiqueta de cierre en HTML para definir un elemento.",
        "Una regla CSS define el estilo de un elemento y se compone de un selector y un bloque de declaración con propiedades y valores.",
        "Una regla CSS es una etiqueta de apertura en HTML para crear un enlace."
        ],
        respuestaCorrecta: 2
    },
    {
        pregunta: "¿Cómo se establece el color de fondo de un elemento en CSS?",
        opciones: [
        "Usando la propiedad 'color'.",
        "Definiendo el color en la etiqueta de apertura en HTML.",
        "Con la propiedad 'font-family'.",
        "Utilizando la propiedad 'background-color'."
        ],
        respuestaCorrecta: 3
    },
    {
        pregunta: "¿Cómo se realiza la alineación de texto en CSS?",
        opciones: [
        "Con la propiedad 'font-weight'.",
        "Utilizando la propiedad 'text-align'.",
        "Mediante la propiedad 'margin'.",
        "Usando la propiedad 'display'."
        ],
        respuestaCorrecta: 1
    },
    {
        pregunta: "¿Cuál es la palabra clave utilizada para declarar una clase en Java?",
        opciones: ["class", "void", "public", "new"],
        respuestaCorrecta: 0,
      },
      {
        pregunta: "¿Cuál es el valor por defecto de un atributo de tipo entero (int) en Java si no se le asigna ningún valor?",
        opciones: [0, 1, -1, "No tiene un valor por defecto"],
        respuestaCorrecta: 0,
      },
      {
        pregunta: "¿Qué tipo de estructura de control se utiliza para tomar decisiones en Java?",
        opciones: ["for", "while", "if", "switch"],
        respuestaCorrecta: 2,
      },
      {
        pregunta: "¿Cómo se declara una variable constante en Java?",
        opciones: ["Utilizando la palabra clave 'final'", "Utilizando la palabra clave 'static'", "Utilizando la palabra clave 'const'", "No se pueden declarar variables constantes en Java"],
        respuestaCorrecta: 0,
      },
      {
        pregunta: "¿Cuál es el método principal en una aplicación Java que se ejecuta cuando se inicia el programa?",
        opciones: ["start()", "main()", "run()", "execute()"],
        respuestaCorrecta: 1,
      },
    ];

const respuestasDivs = document.querySelectorAll('.respuestas div div');



function barajasArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

barajasArray(preguntasYRespuestas);

// Luego, puedes mostrar las preguntas en el orden barajado
let indicePreguntaActual = 0;

function cargarPregunta() {
    if (indicePreguntaActual < preguntasYRespuestas.length) {
        const preguntaActual = preguntasYRespuestas[indicePreguntaActual];
        tituloPregunta.textContent = preguntaActual.pregunta;

        // Llena los elementos div de opciones con las opciones de respuesta
        respuestasDivs.forEach((div, index) => {
            div.textContent = preguntaActual.opciones[index];
        });

        indicePreguntaActual++; // Avanza al siguiente índice de pregunta
    } else {
        if(parseInt(puntaje.textContent)<100){
            Swal.fire({
                title: 'Fin del juego! Perdiste',
                text: `Tu puntaje fue: ${puntaje.textContent}`
            });
            tituloPregunta.textContent = 'Presiona el boton de reiniciar para empezar de nuevo';
            respuestasDivs.style.display = 'none';
    
        } else if(parseInt(puntaje.textContent)<150){
            Swal.fire({
                title: 'Fin del juego! Sacaste un puntaje aceptable',
                text: `Tu puntaje fue: ${puntaje.textContent}`
            });
            tituloPregunta.textContent = 'Presiona el boton de reiniciar para empezar de nuevo';
            respuestasDivs.style.display = 'none';
    
        } else{
            Swal.fire({
                title: 'Fin del juego! Felicidades',
                text: `Tu puntaje fue: ${puntaje.textContent}`
            });
            tituloPregunta.textContent = 'Presiona el boton de reiniciar para empezar de nuevo';
            respuestasDivs.style.display = 'none';
    
        }
    }
}
function verificarRespuesta(seleccion) {
    const preguntaActual = preguntasYRespuestas.find((pregunta) => pregunta.pregunta === tituloPregunta.textContent);

    if (seleccion === preguntaActual.respuestaCorrecta) {
        // Respuesta correcta
        Swal.fire({
            icon: 'success',
            title: 'Respuesta correcta',
            text: 'Tienes 10 puntos mas!, presiona ok para continuar',
          })
        puntaje.textContent = parseInt(puntaje.textContent) + 10; // Incrementa el puntaje
    } else {
        // Respuesta incorrecta
        Swal.fire({
            icon: 'error',
            title: 'Respuesta incorrecta',
            text: 'Tienes 15 puntos menos, presiona ok para continuar',
          })
        puntaje.textContent = parseInt(puntaje.textContent) - 15; // Reduce el puntaje
    }
    cargarPregunta(); // Carga una nueva pregunta
}

cargarPregunta(); // Carga la primera pregunta al inicio

