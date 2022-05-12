var url = "http://localhost:5000/amigos";

$('#boton').click(function(){
    $('#lista').empty();
    $.get(url, function(data){
        data.forEach(d => $(`<li id="${d.id}">
                                  <p>  ${d.name} </p>
                                  </li>`).appendTo('#lista'))

    })
});

$('#search').click(function(){
    let id = $('#input').val();
    if(id) {
        $.get(`${url}/${id}`, function(amigos){
            console.log(amigos);
        $('#amigo').text(`${amigos.name}`)
        })
    }
         
    })

var eliminarAmigo = function(){
    let id = $('#inputDelete').val();
    if(id) {
        $.ajax({
            type : "DELETE",
            url : `${url}/${id}`, 
        })
      
    }
}

$('#delete').click(eliminarAmigo);

