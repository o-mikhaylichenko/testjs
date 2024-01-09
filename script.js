let a = +prompt('Введите первое число');
let b = +prompt('Введите второе число');

let min = a;

if (b < min) {
  min = b;  
};

if (a === b) {
    console.log(`Число ${a} и число ${b} равны`); 
} else {
    console.log(`Минимальное число ${min}`);
}

