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
    let user = sessionStorage.getItem('astroworld')
    let storage = localStorage.getItem('artista-'+user);
    
    if(user && storage){
        console.log('Hay artistas favoritos')
        let cantantes = storage.split(',');
        console.log(cantantes)
        for(var i = 0; i < artistas.length; i++){
            if(cantantes.includes(artistas[i].id.toString())){
                document.getElementById('cantantesFavoritos').innerHTML= document.getElementById('cantantesFavoritos').innerHTML +

                '<div id="artista'+artistas[i].id+'" class="border border-0">'+
                    '<div class="card mb-3" style="max-width: 540px; backdrop-filter: blur(50px) brightness(150%); box-shadow: 5px 5px 20px rgba(12, 12, 12, 0.998);">'+
                        '<div class="row g-0">'+
                            '<div class="col-md-4">'+
                                ' <img src="media/index/artista'+artistas[i].id+'.jpg" class="img-fluid rounded-start h-100" alt="...">'+
                            ' </div>'+
                            '<div class="col-md-8" >'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title">TOP</h5>'+
                                '   <p class="card-text">'+artistas[i].name+'</p>'+
                                '</div>'+
                            '<div class="col-auto">'+
                            '   <button onclick="quitarArtista('+artistas[i].id+')" type="button" class="btn btn-danger mb-3">Quitar de favoritos</button>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

            }
        }
    }else{
        console.log('error '+user+storage)
    }
    

}

function quitarArtista(id){

    if(window.confirm("Estas seguro de borrar?")){
        document.getElementById('artista'+id).remove();
        let user = sessionStorage.getItem('astroworld')
        let storage = localStorage.getItem('artista-'+user);
        let cantantes = storage.split(',');
        let newCantante = [];
        for(let x = 0; x<cantantes.length;x++){
            if(cantantes[x]!=id){
                newCantante.push(cantantes[x]);
            }
        }
        localStorage.setItem('artista-'+user,newCantante.join(','));

    }
    

}
function quitarCancion(id){


    if(window.confirm("Estas seguro de borrar?")){
        document.getElementById('cancion'+id).remove();
        let user = sessionStorage.getItem('astroworld')
        let storage = localStorage.getItem('cancion-'+user);
        let cancion = storage.split(',');
        let newCancion = [];
        for(let x = 0; x<cancion.length;x++){
            if(cancion[x]!=id){
                newCancion.push(cancion[x]);
            }
        }
        localStorage.setItem('cancion-'+user,newCancion.join(','));
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
    let user = sessionStorage.getItem('astroworld')
    let storage = localStorage.getItem('cancion-'+user);
    
    if(user && storage){
        console.log('Hay canciones favoritos')
        let cancion = storage.split(',');
        console.log(cancion)
        for(var i = 0; i < canciones.length; i++){
            if(cancion.includes(canciones[i].id.toString())){
                document.getElementById('cancionesFavoritos').innerHTML= document.getElementById('cancionesFavoritos').innerHTML +

                '<div id="cancion'+canciones[i].id+'" class="border border-0">'+
                    '<div class="card mb-3 w-100" style="max-width: 540px; backdrop-filter: blur(50px) brightness(150%); box-shadow: 5px 5px 20px rgba(12, 12, 12, 0.998);">'+
                        '<div class="row g-0">'+
                            '<div class="col-md-4">'+
                                ' <img src="media/index/canciones_fotos/'+canciones[i].id+'.jpg" class="img-fluid rounded-start h-100" alt="...">'+
                            ' </div>'+
                            '<div class="col-md-8" >'+
                                '<div class="card-body">'+
                                    '<h5 class="card-title">TOP</h5>'+
                                '   <p class="card-text">'+canciones[i].name+'</p>'+
                                '</div>'+
                            '<div class="col-auto">'+
                            '   <button onclick="quitarCancion('+canciones[i].id+')" type="button" class="btn btn-danger mb-3">Quitar de favoritos</button>'+
                            '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'

            }
        }
    }else{
        console.log('error '+user+storage)
    }
    

}