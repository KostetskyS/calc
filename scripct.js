'use strict';
let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equals]');
let allClearButton = document.querySelector('[data-all-clear]');
let percentButton = document.querySelector('[data-percent]');
let sign = document.querySelector('[data-plus-minus]');
let num1 = '';
let num2 = '';
let operation = '';
let result = false;
let percent = '';
let display = document.querySelector('.display p');

allClearButton.addEventListener('click', function clearAll(){
   num1 = '';
   num2 = '';
   operation = '';
   display.textContent = '0';
   result = false;
});

for (let numberButton of numberButtons) {
    numberButton.addEventListener('click', function(event){
      let key = event.target.textContent;
      if (num2 == '' && operation == '') {
         if (num1.length > 8) {
            return
         }
         if (key == '.' && num1.includes('.')) {
            return
         }
         if (num1 == '0' && key == '0') {
            return
         }
         if ((num1 == '0' || num1 == '') && key == '.') {
            num1 = '0'+key;
            display.textContent = num1;
            return
         }
         if ((num1 == '0' || num1 == '') && key != '0') {
            num1 = key;
            display.textContent = num1;
            return
         }
         num1 += key;
         display.textContent = num1;
      } 
         else if (num1 !== '' && result) {
            if (key == '.' || num2 == '0.') {
               num2 = '0'+key;
               display.textContent = num2;  
               result = false;       
            } else {
               num2 = key;
               display.textContent = num2;
               result = false; 
            }   
      } 
         else {
            if (num2.length > 8) {
               return
            }
            if (key == '.' && num2.includes('.')) {
            return
         }
            if (num2 == '0' && key == '0') {
            return
         } 
            if ((num2 == '0' || num2 == '') && key == '.') {
            num2 = '0'+key;                                        
            display.textContent = num2;
            return
         }
            if ((num2 == '0' || num2 == '') && key != '0') {
            num2 = key;
            display.textContent = num2;
            return
         }
            num2 += key;
            display.textContent = num2;
      } 
            return
     })
}

for (let operationButton of operationButtons) {
    operationButton.addEventListener('click', function(event){
      let key = event.target.textContent;
        operation = operationButton.textContent;
      // if (num1 !== '' && num2 !== '' && operation !== '') {
      //    switch(operation) {
      //       case '+':
      //          num1 = (+num1) + (+num2);
      //       break;
      //       case '-':
      //          num1 = (+num1) - (+num2);
      //       break;
      //       case 'X':
      //          num1 = (+num1) * (+num2);
      //       break;                                                   // научить  считать по нажатию на знак
      //       case '/':                                                
      //          if (num2 === '0') {
      //             display.textContent = 'Ошибка'
      //             num1 = '';
      //             num2 = '';
      //             operation = '';
      //             return
      //          }
      //          num1 = (+num1) / (+num2);
      //       break;
      //    }
      //    display.textContent = num1;  
      //    result = true;    
      // }
     })
}

equalsButton.addEventListener('click', function(event){
   switch(operation) {
      case '+':
         num1 = (+num1) + (+num2);
      break;
      case '-':
         num1 = (+num1) - (+num2);
      break;
      case 'X':
         num1 = (+num1) * (+num2);
      break;
      case '/':                                                
         if (num2 === '0' || num2 == '0.') {                                                                 
            display.textContent = 'Ошибка'
            num1 = '';
            num2 = '';
            operation = '';
            return
         }
         num1 = (+num1) / (+num2);
      break;
   }
      display.textContent = num1;  
      result = true;    
      // if (display.textContent.length > 8 && display.textContent.includes('.')) {                 
      //    display.textContent = num1.toFixed(2);
      //    return
      // }      
});

sign.addEventListener('click', function(event) {
   if (num2 == '' && operation == '') {
      num1 = -num1;
      display.textContent = num1;                                    
   } else {
      num2 = -num2;
      display.textContent = num2;
   }
});

percentButton.addEventListener('click', function(event) {
   if (num2 == '' && operation == '') {
     num1 = (+num1) / 100;
     display.textContent = num1;
   } else {
      if (operation == '+' || operation == '-') {
         num2 = (+num2) / 100 * num2;                                            
         display.textContent = num2;
      } else {
         num2 = (+num2) / 100;
         display.textContent = num2;
      }
   }
});

display.addEventListener('click', function(event){
   if (num2 == '' && operation == '') {
      num1 = display.textContent.slice(0, -1);
      display.textContent = num1;
   } else {
      num2 = display.textContent.slice(0, -1);
      display.textContent = num2;
   }
});
