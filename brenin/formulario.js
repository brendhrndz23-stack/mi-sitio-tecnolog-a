document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('miFormulario');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar el envío normal del formulario

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const mensaje = document.getElementById('mensaje').value;

        // Crear un nuevo documento PDF
        const pdf = new jspdf.jsPDF();

        // Agregar contenido al PDF
        pdf.setFontSize(20);
        pdf.setTextColor(0, 255, 0); // Color del texto: verde neón
        pdf.text("Información del Formulario", 10, 10);

        pdf.setFontSize(12);
        pdf.setTextColor(255, 255, 255); // Color del texto: blanco
        pdf.text(Nombre: ${nombre}, 10, 30);
        pdf.text(Email: ${email}, 10, 40);
        pdf.text(Teléfono: ${telefono}, 10, 50);
        pdf.text(Mensaje: ${mensaje}, 10, 60);

        // Guardar el PDF
        pdf.save('formulario.pdf');
    });
});