
function r4(num) {
    var msg = `${num} `;

    // Verifica si es primo
    var esPrimo = true;

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            esPrimo = false;
            break;
        }
    }

    if (esPrimo) {
        msg += `es primo, `;
    } else {
        msg += `no es primo, `;
    }

    // Verifica si es fibonacci
    if (1 < num && num <= 99999) {
        var penultimo = 0;
        var ultimo = 1;

        while (ultimo < num) {
            var temp = ultimo;
            ultimo = penultimo + ultimo;
            penultimo = temp;
        }

        if (num == ultimo) {
            msg += `es fibonacci, `;
        } else {
            msg += `no es fibonacci, `;
        }
    }

    // Verifica si es par
    if (num % 2 == 0) {
        msg += `y es par`;
    } else {
        msg += `y es impar`;
    }

    console.log(msg);
}

r4(2);
r4(7);
r4(9);
