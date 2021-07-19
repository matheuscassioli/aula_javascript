function botao(){
    document.getElementById("clicou").innerHTML = "Obrigado pro clicar";     // resgata o id e substitui a frase mediante a uma ação
}
function redirecionar(){
    window.open("https://www.google.com/?client=safari")    //  ao clicar redireciona para uma nova aba no google
    window.location.href = "https://www.google.com/?client=safari"  // ao clicar redireciona para duas novas abas no google sobrepondo sua página   
}