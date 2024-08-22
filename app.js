let frase = "";


function imprimirFrase() {
    // Obtener el texto del textarea
    frase = document.getElementById('text').value;
    console.log('Texto original:', frase);
    analizarTexto();
}

function analizarTexto() {
    let nuevoTexto = ""; // Esta cadena almacenará el texto modificado

    // Iterar sobre cada carácter de la cadena original
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i];
        
        // Reemplazar los caracteres según corresponda
        if (caracter === 'a') {
            nuevoTexto += 'ai'; // Agregar "ai" en lugar de "a"
        } else if (caracter === 'e') {
            nuevoTexto += 'enter'; // Agregar "enter" en lugar de "e"
        } else if (caracter === 'i') {
            nuevoTexto += 'imes'; // Agregar "imes" en lugar de "i"
        } else if (caracter === 'o') {
            nuevoTexto += 'ober'; // Agregar "ober" en lugar de "o"
        } else if (caracter === 'u') {
            nuevoTexto += 'ufat'; // Agregar "ufat" en lugar de "u"
        } else {
            nuevoTexto += caracter; // Agregar el carácter original si no se necesita reemplazo
        }
    }

    const muneco = document.getElementById('muñeco');
    const asideTexto = document.getElementById('aside__texto');
    const resultadoDiv = document.getElementById('resultado');
    const textoEncriptadoP = document.getElementById('textoEncriptado');
    const botonCopiar = document.getElementById('aside__copiar');

    if (muneco) {
        muneco.style.display = 'none';
    }
    if (asideTexto) {
        asideTexto.style.display = 'none';
    }

    textoEncriptadoP.innerText = nuevoTexto;
    resultadoDiv.style.display = 'block';
    botonCopiar.style.display = 'block';
}

function desencriptarTexto() {
    let textoEncriptado = document.getElementById('text').value;
    let textoDesencriptado = textoEncriptado
        .replace(/ai/g, 'a')
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    // Ocultar la imagen y texto por defecto
    const muneco = document.getElementById('muñeco');
    const asideTexto = document.getElementById('aside__texto');
    const resultadoDiv = document.getElementById('resultado');
    const textoEncriptadoP = document.getElementById('textoEncriptado');
    const botonCopiar = document.getElementById('aside__copiar');

    if (muneco) {
        muneco.style.display = 'none';
    }
    if (asideTexto) {
        asideTexto.style.display = 'none';
    }

    textoEncriptadoP.innerText = textoDesencriptado;
    resultadoDiv.style.display = 'block';
    botonCopiar.style.display = 'block';
}


function copiarTexto() {
    const textoEncriptado = document.getElementById('textoEncriptado').innerText;

    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

