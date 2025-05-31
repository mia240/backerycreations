
const form = document.getElementById("registroForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const gmail = document.getElementById("gmail").value;
  const usuario = document.getElementById("usuario").value;
  const contraseña = document.getElementById("contraseña").value;

  const data = {
    gmail: gmail,
    usuario: usuario,
    contraseña: contraseña,
    foto: "" // Si no tienes imagen, deja campo vacío o agrégala más tarde
  };

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbzM0yqM7nsWIcHTKgknQR0edTpkrzoGofKMueKlFLoXdWPLMqTLjdswcsrSTUHJ7hdxZA/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();

    if (result.status === "success") {
      alert("Registro exitoso ✅");
      window.location.href = "paginas/index.html";  // Asegúrate de que esta ruta exista
    } else {
      alert("Error al registrar ❌: " + result.message);
    }
  } catch (err) {
    console.error("Error de conexión:", err);
    alert("Error de conexión ❌");
  }
});

