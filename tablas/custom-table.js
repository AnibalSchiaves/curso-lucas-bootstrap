
const htmlTable = `
    <table>
        <thead>
            <tr>
                <th>Nro.</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr id="fila1">
                <td>1</td>
                <td>Aníbal</td>
                <td>Schiaves</td>
                <td>anibalschiaves@hotmail.com</td>
            </tr>
            <tr id="fila2">
                <td>2</td>
                <td>Lucas</td>
                <td>Cabrera</td>
                <td>lucascabrera@hotmail.com</td>
            </tr>
            <tr id="fila3">
                <td>3</td>
                <td>Osvaldo</td>
                <td>Ferrero</td>
                <td>oferrero@yahoo.com</td>
            </tr>
        </tbody>
    </table>
`;

function addCustomTableTo(classes, idParent) {
    console.log("va a renderizar una tabla con class="+classes);
    let tabla = document.createElement("table");
    tabla.innerHTML = htmlTable;
    let parent = document.getElementById(idParent);
    parent.appendChild(tabla);
    tabla.setAttribute("class",classes);
    return tabla;
}