async function handleCall(){
    const contenedor = document.getElementById("responses");
    const response = await fetch("http://localhost:3000/user" + randomID);
    const data = await response.json();
    const randomID = Math.floor(Math.random() * 6);
    const userElement = document.createElement("div");
    console.log(data);

    const headerid_producto = document.createElement("h1");
    headerid_producto.innerText = data(0).id_producto;
    const headernombre_producto = document.createElement("h1");
    headernombre_producto.innerText = data(0).nombre_producto;
    const paragraphdescripcion = document.createElement("p");
    paragraphdescripion.innerText = data(0).descripcion;
    userElement.appendChild(headerid_producto);
    userElement.appendChild(headernombre_producto);
    userElement.appendChild(paragraphdescripcion);
    contenedor.appendChild(userElement);
}