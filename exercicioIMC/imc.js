function calcular(){
    var h1 = window.document.getElementById('h1')
    var img = window.document.getAnimations('imagem')
    var altura = window.document.getElementById('Altura').value
    var peso = window.document.getElementById('Peso').value
    var calculoImc = peso / (altura * altura);
    img.src=''
    h1.innerHTML=''
    if (altura >= 2.5 || altura.length <=0 || altura <=0){
        alert `Verifique a Altura`
    }
    if (peso >= 250 || peso.length <=0 || peso <=0){
        alert`Verifique o Peso`
    }
    if (calculoImc <= 18.5){
         Magro()
        
    }else if ( calculoImc < 24.9){
         Ponto()

        
    }else if ( calculoImc < 50){
         Gordo()


    }else if(calculoImc< 0 || calculoImc > 50){
        alert `Verifique os Dados!!! ou responda como ainda está VIVO!!`
    }
}
function Magro(){
    let res = window.document.getElementById('res')
    let img = window.document.getElementById('imagem')
    let altura = window.document.getElementById('Altura').value
    let peso = window.document.getElementById('Peso').value
    let calculoImc = peso / (altura * altura); 


    res.innerHTML=`Cuidado Você está Abaixo do Ideal e seu IMC é ${calculoImc.toFixed(2)}`
    img.src='magro.png'
}
function Ponto(){
    let res = window.document.getElementById('res')
    let img = window.document.getElementById('imagem')
    let altura = window.document.getElementById('Altura').value
    let peso = window.document.getElementById('Peso').value
    let calculoImc = peso / (altura * altura); 


    res.innerHTML=`Parabéns Você está no Ponto!! e seu IMC é ${calculoImc.toFixed(2)}`
        img.src='noponto.png'
}
function Gordo(){
    let res = window.document.getElementById('res')
    let img = window.document.getElementById('imagem')
    let altura = window.document.getElementById('Altura').value
    let peso = window.document.getElementById('Peso').value
    let calculoImc = peso / (altura * altura); 


    res.innerHTML=`Cuidado!! Vôce está Acima do Peso!! e seu IMC é ${calculoImc.toFixed(2)}`
        img.src='gordo.png'
}

function mudafoto(){
    let img = window.document.getElementById('imagem').src = 'SAUDE.JPG';

}
