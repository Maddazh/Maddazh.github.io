let title = document.querySelector("#daysPassedH1");
let h2 = document.querySelector("#daysPassedH2");
let p1 = document.querySelector("#daysPassedP1");
let p2 = document.querySelector("#daysPassedP2");
let heart1 = document.querySelector("#heart1");
let heart2 = document.querySelector("#heart2");
let heart3 = document.querySelector("#heart3");
let heart4 = document.querySelector("#heart4");
let heart5 = document.querySelector("#heart5");
let heart6 = document.querySelector("#heart6");
let heart7 = document.querySelector("#heart7");
let heartStates = [true, true, true, true, true, true, true]
let counter = 0;

const callBck = function(){
    let startDate = new Date(2022,3,19);
    let today = new Date();
    let daysPassed = Math.ceil((today - startDate)/8.64e7);
    let delta = new Date(today - startDate);
    let monthsPassed = delta.getMonth(); 
    let hoursPassed = delta.getHours();
    let minutesPassed = delta.getMinutes();
    let secondsPassed = delta.getSeconds();
    let totalYears = Math.trunc(monthsPassed/ 12);
    let yearMonths = monthsPassed % 12
    //Strings here
    let titleText = totalYears >= 1 ? `Felices ${totalYears} anhos ${yearMonths} meses amorcito :)`: `Felices ${monthsPassed + 1} meses amorcito :)`;
    let paraText1 = `Antes que nada esta pagina la empece desde el mes pasado pero tuve un bloqueo creativo y no se 
    me ocurrio agregarle nada mas. Mi plan, originalmente, era ensenarte la pagina mucho antes. Planeaba que llegando de mi viaje quedara lista pero para cuando la termine ya
    habian pasado varios dias y pense mejor esperar a los 5 meses asi que felices ${monthsPassed + 1} meses amorcito, te amo ❤️`;
    let paraText2 = `De verdad estoy muy feliz de poder compartir todos estos momentos contigo, se que has pasado por muchas cosas y que dudas de si 
    eres buen partido para mi pero yo tengo mucha fe en ti y se que todas estas adversidades no van a cambiar tu verdadero ser y aunque todo
    pueda parecer nublado vas a estar bien. Me alegra muchisimo que hayamos pasado ya 5 meses juntos y creeme que han sido de los mejores en mi vida
    y no los cambiaria por nada. De verdad que contigo soy feliz, haces que quiera ser mas, me motivas y me gusta mucho eso porque ese ranchito no se va a
    comprar solo eh. Tambien quisiera renovar contrato, estos ultimos meses han sido de los mejores y qusiera compartir muchos mas contigo, que podamos
    cumplir nuestras metas y lleguemos a ser los mejores ingenieros y los mas tops. Feliz aniversario amorcito :)  `;
    // `Estoy muy feliz de poder compartir momentos especiales contigo y de verdad me hace muy feliz estar contigo, espero 
    // podamos compartir muchos mas momentos y que todas nuestras metas se logren para que lleguemos a ser los mejores y los mas tops.
    // Dejo esta pagina para que en el futuro podamos volver atras en el tiempo y ver cuanto hemos avanzado. Te amo ❤️`
    //DOM manipulation below

    title.innerHTML = titleText;
    h2.innerHTML = `Han pasado ${daysPassed} dias, ${hoursPassed} horas, ${minutesPassed} minutos y ${secondsPassed} segundos 
    desde que somos novios :)`;
    p1.innerHTML = paraText1;
    p2.innerHTML = paraText2;
    let index = counter % 7;
    heartStates[index] = !heartStates[index];
    heart1.style.opacity = heartStates[6] ? 0 : 100;
    heart2.style.opacity = heartStates[5] ? 0 : 100;
    heart3.style.opacity = heartStates[4] ? 0 : 100;
    heart4.style.opacity = heartStates[3] ? 0 : 100;
    heart5.style.opacity = heartStates[2] ? 0 : 100;
    heart6.style.opacity = heartStates[1] ? 0 : 100;
    heart7.style.opacity = heartStates[0] ? 0 : 100;
    counter++;
    if (counter == 7){
        counter = 0;
    }
}
callBck();
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        
    let x = document.getElementById("playAudio"); 
    x.play();
 
     // stop microphone stream acquired by getUserMedia
     stream.getTracks().forEach(function (track) { track.stop(); });
});
setInterval(callBck, 1000);
