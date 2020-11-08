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

  var arrayPc=createRandomArray(1,20,5)

  alert(arrayPc)