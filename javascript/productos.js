document.getElementById('pedidoForm').addEventListener('submit', function(e){
    e.preventDefault();

    const nombre = encodeURIComponent(document.getElementById('nombre').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const telefono = encodeURIComponent(document.getElementById('telefono').value);
    const pedido = encodeURIComponent(document.getElementById('pedido').value);

    // Tu número de WhatsApp sin + ni espacios, con código de país (ejemplo México 52)
    const miWhatsApp = "8493733533";

    const mensaje = `Hola, soy ${nombre}. Mi correo es ${email}. Mi teléfono es ${telefono}. Quiero hacer este pedido: ${pedido}`;

    const url = `https://api.whatsapp.com/send?phone=${miWhatsApp}&text=${mensaje}`;

    window.open(url, '_blank');
     window.location.href = "gracias.html";
  });