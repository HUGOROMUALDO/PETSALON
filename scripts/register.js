
let pets =[]; //arreglo vacio

//crear constructor
function Pet(nombreP,generoP,razaP,servicioP,edadP,sucursalP, propietarioP){
    this.nombre=nombreP;
    this.genero=generoP;
    this.raza=razaP;
    this.servicio=servicioP;
    this.edad=edadP;
    this.sucursal=sucursalP;
    this.propietario=propietarioP;
    
}

    //variables globales   
    //obtener los valores de los inputs
    let inputNombre=document.getElementById("txtNombre");
    let inputGenero=document.getElementById("txtGenero");
    let inputRaza=document.getElementById("txtRaza");
    let inputServicio=document.getElementById("SelServicio");
    let inputEdad=document.getElementById("numEdad");
    let inputSucursal=document.getElementById("SelSucursal");
    let inputPropietario=document.getElementById("propietario")

function validacion(pet){
    let valida=true;

    //remover valores de las variables
        inputNombre.classList.remove("error");
        inputServicio.classList.remove("error");
        inputSucursal.classList.remove("error");
        inputPropietario.classList.remove("error");


    if(pet.nombre==""){
      //alert("Ingresa un nombre");
       inputNombre.className=("error"); 
       valida=false;
    }

    //validar el servicio
    if(pet.servicio==""){
        //alert("Selecciona un servicio");
        inputServicio.className=("error");
        valida=false;
    }
   
    //validar el servicio
    if(pet.sucursal==""){
        //alert("Selecciona un servicio");
        inputSucursal.className=("error");
        valida=false;
    }

    if(pet.propietario==""){
       // alert("Registra los datos faltantes");
        inputPropietario.className=("error");
        valida=false;
    }

    return valida;

}

//Objeto
//let pet1=new Pet("Macchiato","Macho","Boxer","Grooming");

 //crear una funcion de registro   
    function registro(){
    console.log("Registrando mascota");
  
   //crear el objeto
    let newPet=new Pet(inputNombre.value,inputGenero.value,inputRaza.value,inputServicio.value,inputEdad.value,inputSucursal.value,inputPropietario.value);
    if(validacion(newPet)==true){
         //imprimir el objeto en consola
        console.log(newPet);
        pets.push(newPet);

        //mostrar registro
        displayCards();

        //limpiar formulario
        limpiarform();
    
    }
   
}

function limpiarform(){
    inputNombre.value="";
    inputGenero.value="";
    inputRaza.value="";
    inputServicio.value="";
    inputEdad.value="";
    inputSucursal.value="";
    inputPropietario.value="";

}

//iniciar todo el proceso
function init(){
    console.log("Register");
   
    //Objeto
   let pet1=new Pet("Macchiato","Macho","Boxer","Grooming","2","Sucursal Tijuana","Andres");
    let pet2=new Pet("Capitan","Macho","Pitbul","Vacunas","5","Sucursal Mexicali","Ana");
     pets.push(pet1,pet2);
     displayCards();
}

//ejecuta init cuando termina de renderizar el HTML
window.onload=init;




