export default function Register() {

  const register = async (e) => {
    e.preventDefault();

    const nombre = e.target.nombre.value;
    const correo = e.target.correo.value;
    const fechaNacimiento = e.target.fechaNacimiento.value;

    const body = { nombre, correo, fechaNacimiento };

    try {
      const res = await fetch("http://localhost:8080/api/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });

      if (!res.ok) {
        const error = await res.text();
        alert("Error del servidor: " + error);
        return;
      }

      const data = await res.json();
      alert("Usuario creado:\n" + JSON.stringify(data, null, 2));

    } catch (err) {
      alert("❌ No se pudo conectar con el backend");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Registro</h2>

      <form onSubmit={register}>
        <input name="nombre" placeholder="Nombre" />
        <br />

        <input name="correo" placeholder="Correo" type="email" />
        <br />

        <input name="fechaNacimiento" type="date" />
        <br />

        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}
