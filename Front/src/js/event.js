const evento = {
    "id": 1,
    "titulo": "Guerra Mundial",
    "descripcion": "Hagamos la Paz no la guerra",
    "ubicacion": "Ucrania",
    "fecha_inicio": "28/05/1998",
    "fecha_final": "28/05/1998",
    "img": "dist/img/photo2.png",
    "category": {
        "id": 1,
        "nombre": "MASCOTAS",
        "descripcion": "Espacio para temas de mÃ¡scotas"
    },
    "user": {
        "id": 1,
        "name": "Vladimir",
        "lastName": "Putin",
        "email": "JulianSmartusisossaa@gmail.com",
        "img": "dist/img/user6-128x128.jpg",
        "password": "$argon2id$v=19$m=1024,t=1,p=1$8dUsFXKXf/WLx6TywnA9Zg$EuDR6dA7+W32dwp1er+MPJ6TGgIKTXbAb1IsJTa3/hE"
    },
    "comments": [
        {
            "id": 1,
            "descripcion": "Me gustó",
            "fechaComentario": "01/02/2022",
            "score": 2,
            "user": {
                "id": 1,
                "name": "Pruebas",
                "lastName": "Pruebas",
                "email": "JulianSmartusisossaa",
                "img": "dist/img/user6-128x128.jpg",
                "password": "$argon2id$v=19$m=1024,t=1,p=1$8dUsFXKXf/WLx6TywnA9Zg$EuDR6dA7+W32dwp1er+MPJ6TGgIKTXbAb1IsJTa3/hE"
            }
        },
        {
            "id": 1,
            "descripcion": "Me gustó",
            "fechaComentario": "01/02/2022",
            "score": 2,
            "user": {
                "id": 1,
                "name": "Pruebas",
                "lastName": "Pruebas",
                "email": "JulianSmartusisossaa",
                "img": "dist/img/user6-128x128.jpg",
                "password": "$argon2id$v=19$m=1024,t=1,p=1$8dUsFXKXf/WLx6TywnA9Zg$EuDR6dA7+W32dwp1er+MPJ6TGgIKTXbAb1IsJTa3/hE"
            }
        }
    ],
    "assistences": []
}


$(document).ready(function () {
    cargarEvento();

    //Pendiente al cerrar Evento limpiar el localStorage
    const closeEvent = document.getElementById("goBack");
    closeEvent.addEventListener("click", e => {
        localStorage.removeItem('verEvento');
    });

    //Pendiente al enviar un comentario
    const form = document.getElementById("form");
    form.addEventListener("submit", e => {
        e.preventDefault();
        sendComment();
    });
});

function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': localStorage.token,
        'Event_id': localStorage.verEvento
    };
}

async function cargarEvento() {

    // const request = await fetch('http://localhost:8082/activate/event/' + Number(localStorage.verEvento), {
    //     method: 'GET',
    //     // headers: getHeaders()
    // });
    // const evento = await request.json();

    document.querySelector('#user_name').innerHTML = evento.titulo;
    document.querySelector('#event_description').innerHTML = evento.descripcion;
    fecha_evento = "Inicio:" + evento.fecha_inicio + "    Fin:" + evento.fecha_final
    document.querySelector('#calendar_event').innerHTML = fecha_evento;
    document.querySelector('#ubication_event').innerHTML = evento.ubicacion;
    document.querySelector('#category_event').innerHTML = evento.category.nombre;
    document.querySelector('#userImg').setAttribute("src", evento.user.img);
    document.querySelector('#eventImg').setAttribute("src", evento.img);

    document.querySelector('#userLoginImg').setAttribute("src", localStorage.img);

    let listadoHtml = '';
    for(let comment of evento.comments){
        listadoHtml += cargarComentario(comment);
    }
    document.querySelector('#comments_wrapper').innerHTML = listadoHtml;
}

function cargarComentario(comment) {    
    let eventoHtml =    '<div class="card-comment">'
                    +        '<img class="img-circle img-sm" src="'+comment.user.img+'" alt="User Image">'
                    +            '<div class="comment-text">'
                    +                '<span class="username">'+comment.user.name+'<span class="text-muted float-right">'+comment.fechaComentario+'</span>'
                    +                '</span>'
                    +                ''+comment.descripcion+''
                    +            '</div>'
                    +    '</div>'
    return eventoHtml;
}

async function eventRegister() {

    // const request = await fetch('http://localhost:8082/activate/assist/create', {
    //     method: 'POST',
    //     headers: getHeaders()
    // });
    alert("Registro Exitoso!");
    window.location.href = 'profile.html'
}


async function sendComment() {

    // const request = await fetch('http://localhost:8082/activate/event/comment', {
    //     method: 'POST',
    //     headers: getHeaders()
    // });
    const cajaComentario = document.getElementById("cajaComentario");
    alert("Comentario-> " + cajaComentario.value);

    window.location.href = 'event.html'
}