var pokemon = document.getElementById("pokemon");
a.addEventListener("click",mypokemon);

function mypokemon()
{
    if(confirm("Do You Wish To Continue To The Pokemon Website?"))
        location.href="pokemon\index.html";
}
