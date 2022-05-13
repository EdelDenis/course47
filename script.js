"use strict"

// ----------------------РЕКУРСИЯ------------------------

// Рекурсия - это когда функция вызывает сама себя внутри себя же

function pow (x,n) {
   let result = 1;

   for(let i = 0; i < n; i++){
       result *= x;
   }

   return result;
};

function pow(x , n ) {
    if(n === 1) {
        return x; // - база рекурсии
    } else {
        return x * pow (x, n - 1);
    }
};


let students = {
    js: [{
        name: "John",
        progress: 100
    }, {
        name: "Ivan",
        progress: 60
    }],
    html: {
        basic: [{
            name: "Peter",
            progress: 20
        }, {
            name: "Ann",
            progress: 18
        }],
        pro: [{
            name: "Sam",
            progress: 10
        }],
        some: {

        }
    }
};



