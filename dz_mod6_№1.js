//№1
let arr= [null, 2, 'bobby', 7, 'dog', 0];
let even = 0; 
let odd = 0;
let zero = 0;
function Num(array) {
    for(let i = 0; i<arr.length;i++){
        if(typeof arr[i]=== 'number' && !isNaN(arr[i])){    
         if(arr[i]===0){
            zero+=1;
            console.log('Количество нулей:'+zero);
         }else if(arr[i]%2===0){
            even+=1;
            console.log('Количество чётных элементов:'+even);
         }else{
            odd+=1;
            console.log('Количество нечётных элементов:'+odd);
         }
        }
    }
}
const resultFunc=Num();
resultFunc;
