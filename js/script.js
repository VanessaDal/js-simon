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

  var mioInterval = setInterval(countWithArrayUser, 200);

  var count = 10;
  var arrayUser=[];
  var incorrectNum=[];

function countWithArrayUser() {
  if(count > 0) {
    console.log(count);
    count--;
  } else {
      for (var i=0;i<5;i++){
          var number=parseInt(prompt("Inserisci un numero"))
          if (arrayPc.includes(number))
          arrayUser.push(number);
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



// function check (){
//     for (var index = 0; index < arrayPc.length; index++) {
//         if (arrayPc.includes(arrayUser[index]){
//             arrayUser.splice(index)
//         } 
//         console.log(arrayUser)
//     }
// }