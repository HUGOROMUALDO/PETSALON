function displayCards(){
    //Declaracion de variables
    const DIV = document.getElementById("mascotas");
    let card="";

    //console.log(DIV);
    /*for(let i=0;i<pets.length;i++){
        console.log(pets[i].nombre);

    }*/
    //Recorrer el arreglo pets[]

    card += `
    <div class="container">
    <table>
    <thead>
      <tr>
         <th>Nombre</th>
         <th>Genero</th>
         <th>Raza</th>
         <th>Servicio</th>
         <th>Edad</th>
         <th>Sucursal</th>
         <th>propietario</th>
       </tr>
    </thead> `;
    for(let i=0;i<pets.length;i++){
        card += `
            <tbody>
                <tr>
                    <td> ${pets[i].nombre}</td>
                    <td> ${pets[i].genero}</td>
                    <td> ${pets[i].raza}</td>
                    <td> ${pets[i].servicio}</td>
                    <td> ${pets[i].edad}</td>
                    <td> ${pets[i].sucursal}</td>
                    <td> ${pets[i].propietario}</td>
                </tr>
            </tbody>
        
        `;
    }
    card+=`</table>
    </div>`;
    DIV.innerHTML=card;
}