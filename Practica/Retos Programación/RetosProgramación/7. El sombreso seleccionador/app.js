
// * Crea un programa que simule el comportamiento del sombrero seleccionador del
// * universo mágico de Harry Potter.
// * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
// * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
// * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
// *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
// * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
// *   Por ejemplo, en Slytherin se premia la ambición y la astucia.

function sombreroSeleccionador(res){
    let Gryffindor = 0
    let Slytherin = 0
    let  Hufflepuff = 0
    let Ravenclaw = 0

    let preguntas = ['¿Prefieres una noche emocionante bajo la luz de la luna o una tarde tranquila leyendo un buen libro?','En una situación difícil, ¿qué cualidad valoras más en ti mismo?', '¿Qué tipo de mascota preferirías tener?', 'Si tuvieras que elegir entre la fama, el poder, la amistad o la sabiduría, ¿cuál sería tu prioridad?', '¿Qué lugar mágico te gustaría explorar primero?']

    let respuestas = {
        1: ['Emocionante noche bajo la luna', 'Valentía', 'Lechuza', 'Fama'],
        2: ['Tarde tranquila leyendo un libro', 'Astucia', 'Serpiente', 'Poder'],
        3: ['Depende del día', 'Lealtad', 'Perro', 'Amistad'],
        4: ['Ninguna de las anteriores', 'Sabiduría', 'Gato', 'Sabiduría'],
        5: ['Bosque Prohibido', 'Mazmorras de Hogwarts', 'Jardines y terrenos', 'Biblioteca de Hogwarts']
    };

    for i in preguntas
}