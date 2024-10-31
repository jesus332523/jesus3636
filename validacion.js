function validarNumeroControl() {
    const numeroControl = document.getElementById("numero_control").value;
    
    // Verificar si el número de control tiene exactamente 8 dígitos
    if (numeroControl.length !== 8) {
        alert("El Número de Control debe tener exactamente 8 dígitos.");
        return false;
    }
    
    // Expresión regular para validar el formato correcto del número de control
    const regex = /^(1[8-9]|2[0-5])84\d{4}$/;
    
    // Verificar si el número de control cumple con las condiciones
    if (regex.test(numeroControl)) {
        alert("Número de Control válido");
        return true; // Permitir el envío del formulario si es válido
    } else {
        alert("Número de Control inválido. Debe tener el formato 'XX84XXXX' con el año entre 2018 y 2025.");
        return false; // Prevenir el envío del formulario si es inválido
    }
}
