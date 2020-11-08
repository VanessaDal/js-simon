// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.

function createRandomArray(minNum, maxNum, quantity){      
    var array=[];
    var i=1;
    while (array.length<quantity && i<=quantity+1){
        var a=Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        if (array.includes(a)===false){
            array.push(a)
            i++
        } else{i--}
    
        }
    return array;
  }

  var arrayPc=createRandomArray(1,10,5)
  console.log(arrayPc)

  alert(arrayPc)

  var mioInterval = setInterval(countWithArrayUser, 1000);

  var count = 3; //non ho messo 30 per non farvi aspettare 30 secondi!
  var arrayUser=[];
  var incorrectNum=[];

function countWithArrayUser() {
  if(count > 0) {
    console.log(count);
    count--;
  } else {
      for (var i=0;i<5;i++){
          var number=parseInt(prompt("Inserisci un numero"))
          if (arrayPc.includes(number)){
          arrayUser.push(number);
            }
        //   if (arrayUser.includes(number)){
        //         alert("il numero è già stato inserito")
        //         i--   
        //     }
          else{
              incorrectNum.push(number)
          }
          clearInterval(mioInterval);
      }
    console.log(arrayUser);
    console.log(incorrectNum);
    console.log("Hai ricordato " + arrayUser.length + " numeri:" + arrayUser)
    return arrayUser;
         }
         
    };

