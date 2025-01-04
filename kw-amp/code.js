function mostrarDatos() {
    var amperaje = document.getElementById('amperaje').value;
    var calibre = document.getElementById('calibre').value;
    var resultado = 0;

    if(calibre > 0) {
        resultado = amperaje * 1000;
        resultado = resultado / calibre
    }

    var redondeado = parseFloat(resultado.toFixed(2));

    const outputDiv = document.getElementById('output');
    outputDiv.style.display = 'block';
    outputDiv.innerHTML = `
        <h3>Conversion de KW a Amp:</h3>
        <p><strong>Amperaje:</strong> ${redondeado} A</p>
    `;
}

 function redireccionar() {
    window.location.href = "../index.html";
}

function recargar() {
    location.reload();
}