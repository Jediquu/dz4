// let pow = (x,n) => {
//     if (n ==0) return 1;
//     if (n>0){
//         let i =x;
//     for (let index = 1; index <n; index ++)
//         i *=x;
//     return i; 
//     }
//     if (n<0) {
//         let i =1/x;
//         n = -n;
//         for (let index = 1; index <n; index ++)
//             i *=1/x;
//         return i; 
//     }
// }
// console.log(pow(2,-5))
// console.log(pow(2,0))
// console.log(pow(2,5))

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
//     }
// ask(
// "Вы согласны?",
// () => { alert("Вы согласились."); },
// () => { alert("Вы отменили выполнение."); }
// );

// let a = 3;
// let index = 0;	
// let delta = 0.02;
// while ( a !=  index) {
// 	index = index + delta;
// 	index = Math.round(index*100);
// 	index = index /100;
// 	console.log(index);
// 	}

// let getWeekDay = (date) => {
//     switch (date) {
//         case 0: console.log('ВС'); break;
//         case 1: console.log('ПН'); break;
//         case 2: console.log('ВТ'); break;
//         case 3: console.log('СР'); break;
//         case 4: console.log('ЧТ'); break;
//         case 5: console.log('ПТ'); break;
//         case 6: console.log('СБ'); break;
//     }
// }
// let date = new Date();
// getWeekDay(date.getDay());

// let getSecondsToTomorrow = () => {
//     let now = new Date();
//     return 86400 - 3600*now.getHours()- 60*now.getMinutes()- now.getSeconds();
// }
// console.log(getSecondsToTomorrow());

// const calculator = {
//         read() {
//             alert('Input two numbers: ');
//         let m;
//         f  = parseInt(prompt('first number: ', m));
//         s =  parseInt(prompt('second number: ', m));
//         alert('Was read successfully!');
//         },
//         sum () {
//             return f+s;
//         },
//         mul () {
//         return f*s;
//         }
//     };
    let f,s;
//     calculator.read();
//     alert( calculator.sum());
//     alert( calculator.mul());

function Calculator() {

    this.read = function() {
    this.f = +prompt('fisrt number: ', 0);
    this.s = +prompt('second number: ', 0);
  };

  this.sum = function() {
    return this.f + this.s;
  };

  this.mul = function() {
    return this.f * this.s;
  };
};

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

