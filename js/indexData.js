let artistas = [

    {
        'id':1,
        'name':'Taylor Swift'
    },
    {
        'id':2,
        'name':'Bad Bunny'
    },
    {
        'id':3,
        'name':'The Weekend'
    },
    {
        'id':4,
        'name':'Drake'
    },
    {
        'id':5,
        'name':'Peso Pluma'
    },
    {
        'id':6,
        'name':'Feid'
    },
    {
        'id':7,
        'name':'Travis Scott'
    },
    {
        'id':8,
        'name':'SZA'
    },
    {
        'id':9,
        'name':'Karol G'
    },
    {
        'id':10,
        'name':'Lana del Rey'
    },

]

function crearListaCantantes(){
    
    
    for(var i = 0; i < artistas.length; i++){
        let login = sessionStorage.getItem('astroworld')?"onclick='anhadirArtistaFavorito("+artistas[i].id+")'":"data-bs-toggle='modal' data-bs-target='#loginModal'";
        document.getElementById('artistScrollBar').innerHTML= document.getElementById('artistScrollBar').innerHTML+"<div class='card rounded-4 col-4 p-0' style=' width: 18rem; height: 20rem; backdrop-filter: blur(20px) brightness(150%); margin-right:1rem;'><img src='media/index/artista"+artistas[i].id+".jpg' class='card-img-top w-100'  style='object-fit: cover;max-height:50%;'><div class='card-body'><h5 class='card-title' style='text-align: center;'>"+artistas[i].name+"</h5><button "+
        login+" type='button' class='btn btn-primary mt-4 w-100'>Añadir a Favoritos</button></div></div>";

        
        console.log('Artista '+artistas[i].id+" agregado")
    }

}

function anhadirArtistaFavorito(id){

    let user = sessionStorage.getItem('astroworld')
    let storage = localStorage.getItem('artista-'+user);
    if(storage && storage.length<5){
        let newStorage = storage+','+id
        localStorage.setItem('artista-'+user,newStorage);
    }else{
        if(storage!=null && storage.length>=5){
            console.log('Limite artista')
        }else{
            let newStorage = id;
            localStorage.setItem('artista-'+user,newStorage);
        }
    }
}
    

let canciones = [

    {
        'id':1,
        'name':'As It Was',
        'autor':'Harry Styles'
    },
    {
        'id':2,
        'name':'Calm Down',
        'autor':'Rema & Selena Gomez'
    },
    {
        'id':3,
        'name':'Creeping',
        'autor': 'Metro Booming'

    },
    {
        'id':4,
        'name':'Cruel Summer',
        'autor': 'Taylor Swift'
    },
    {
        'id':5,
        'name':'Ella Baila Sola',
        'autor': 'Peso Pluma'
    },
    {
        'id':6,
        'name':'FE!N',
        'autor': 'Travis Scott & PlayboyCarti'
    },
    {
        'id':7,
        'name':'Flowers',
        'autor': 'Miley Cyrus'
    },
    {
        'id':8,
        'name':'Kill Bill',
        'autor': 'SZA'
    },
    {
        'id':9,
        'name':'Sesión Bizzarrap 53',
        'autor': 'Bizarrap & Shakira'
    },
    {
        'id':10,
        'name':'Seven',
        'autor': 'JungKook'
    },

]

function crearListaCanciones(){
    
    
    for(var i = 0; i < canciones.length; i++){
        let login = sessionStorage.getItem('astroworld')?"onclick='anhadirCancionFavorito("+canciones[i].id+")'":"data-bs-toggle='modal' data-bs-target='#loginModal'";
        document.getElementById('songScrollBar').innerHTML= document.getElementById('songScrollBar').innerHTML+
        '<div class="card" style="width: 18rem; height: 20rem;backdrop-filter: blur(10px) brightness(150%);margin-right:1rem;">'+
        ' <img src="media/index/canciones_fotos/'+canciones[i].id+'.jpg" class="card-img-top w-100"  style="object-fit: cover;max-height:40%;"alt="...">'+
        ' <div class="card-body">'+
        '   <h5 class="card-title">'+canciones[i].name+'</h5>'+
        '   <p class="card-text">'+canciones[i].autor+'</p>'+
        '   <button '+login+' type="button" class="btn btn-success mb-3">Añadir a Favoritos</button>'+
        '   '+
        ' </div>'+
        ' <div class="card-footer">'+
        '   <audio controls style="width: 100%;">'+
        '     <source src="data/canciones_mp3/'+canciones[i].id+'.mp3" type="audio/mpeg">'+
        '     Tu navegador no soporta el elemento de audio.'+
        '   </audio>'+
        ' </div>'+
        '</div>'
        

        
        console.log('Artista '+artistas[i].id+" agregado")
    }

}

function anhadirCancionFavorito(id){

    let user = sessionStorage.getItem('astroworld')
    let storage = localStorage.getItem('cancion-'+user);
    if(storage && storage.length<5){
        let newStorage = storage+','+id
        localStorage.setItem('cancion-'+user,newStorage);
    }else{
        if(storage!=null && storage.length>=5){
            console.log('Limite cancion')
        }else{
            let newStorage = id;
            localStorage.setItem('cancion-'+user,newStorage);
        }
    }
}
function myFunc() {
    var now = new Date();
    let hora = (now.getHours()<10)?'0'+now.getHours():now.getHours()
    let minuto = (now.getMinutes()<10)?'0'+now.getMinutes():now.getMinutes() 
    let segundos = (now.getSeconds()<10)?'0'+now.getSeconds():now.getSeconds()

    var time =  hora + ":" + minuto + ":" + segundos;
    
    document.getElementById('hora').innerHTML ='Hora actual 😉: '+ time;
    return time;
}
