function predictFuture(){
  var userQuestion = document.getElementById("userQuestion");
  let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
    case 0:
        randomNumber = 'It is certain';
        break;
    case 1:
        randomNumber ='It is decidedly so';
        break;
    case 2:
        randomNumber ='Reply hazy try again';
        break;
    case 3:
        randomNumber ='Cannot predict now';
        break;
    case 4:
        randomNumber ='Do not count on it';
        break;
    case 5:
        randomNumber ='My sources say no';
        break;
    case 6:
        randomNumber ='Outlook not so good';
        break;
    case 7:
        randomNumber ='Signs point to yes';
        break;
    case 8:
        randomNumber ='Your Mum';
        break;
    }
 var txtOutput = document.getElementById("txtOutput").innerHTML = `${randomNumber}`;
  
}
