//objeto global
var persona = {
    //atributos / características / propiedades
    nombre:'',
    apellido:'',
    correo:'',
    celular:'',
    // métodos / acciones / comportamientos
    saludar: function(){
        let mensaje = `Hola me llamo ${this.nombre} ${this.apellido}, gusto en saludar`;
        return mensaje;
    },
    proporcionarDatosContacto: function(){
        let datosContacto = `Mis datos de contacto son correo; ${this.correo}, y mi celular es ${this.celular}`;
        return datosContacto;
    },
};


//objeto libro
var libro = {
    //atributos / características / propiedades
    nombreLibro:'',
    autorLibro:'',
    editorialLibro:'',
    paginasLibro:'',
    // métodos / acciones / comportamientos
    mostrarDatosLibro: function(){
        let datosLibro = `El libro se llama ${this.nombreLibro}, escrito por ${this.autorLibro}, de editorial ${this.editorialLibro}, con ${this.paginasLibro} páginas`;
        return datosLibro;
    },

};

function asignarDatosAlObjeto(unNombre,unApellido,unCorreo,unCelular){
    persona.nombre = unNombre;
    persona.apellido = unApellido;
    persona.correo = unCorreo;
    persona.celular = unCelular;
}

function asignarDatosLibro(unNombreLibro,unAutorLibro,unaEditorialLibro,unasPaginasLibro){
    libro.nombreLibro = unNombreLibro;
    libro.autorLibro = unAutorLibro;
    libro.editorialLibro = unaEditorialLibro;
    libro.paginasLibro = unasPaginasLibro;
}

function atraparDatosDelForm(){
    let elNombre = document.getElementById('txtNombre').value;
    let elApellido = document.getElementById('txtApellido').value;
    let elCorreo = document.getElementById('txtCorreo').value;
    let elCelular = document.getElementById('txtCelular').value;
    // asignar los datos atrapados del Form al objeto
    asignarDatosAlObjeto(elNombre, elApellido, elCorreo, elCelular);
    alert('Los datos fueron almacenados en un objeto');
}

function atraparDatosLibro(){
    let elNombreLibro = document.getElementById('txtNombreLibro').value;
    let elAutorLibro = document.getElementById('txtNombreAutor').value;
    let laEditorialLibro = document.getElementById('txtEditorialLibro').value;
    let lasPaginasLibro = document.getElementById('txtPaginasLibro').value;
    // asignar los datos atrapados del Form al objeto
    asignarDatosLibro(elNombreLibro, elAutorLibro, laEditorialLibro, lasPaginasLibro );
    alert('Los datos del libro fueron almacenados en un objeto');

}


function presentarInformacion(){
    let elParrafoSaludo = document.getElementById('parrafoSaludo');
    elParrafoSaludo.innerText = persona.saludar();

    let elParrafoContacto = document.getElementById('parrafoContacto');
    elParrafoContacto.innerText = persona.proporcionarDatosContacto();
}

function presentarInformacionLibro(){
    let elParrafoLibro = document.getElementById('parrafoLibro');
    elParrafoLibro.innerText = libro.mostrarDatosLibro();

}


function asignarEventos(){
    let elBoton = document.getElementById('btnEnviar');
    elBoton.addEventListener('click', atraparDatosDelForm);

    let elBotonMostrar = document.getElementById('btnMostrarDatos');
    elBotonMostrar.addEventListener('click', presentarInformacion);

    let elBotonLibro = document.getElementById('btnEnviarLibro');
    elBotonLibro.addEventListener('click', atraparDatosLibro);

    let elBotonMostrarLibro = document.getElementById('btnMostrarDatosLibro');
    elBotonMostrarLibro.addEventListener('click', presentarInformacionLibro);
}