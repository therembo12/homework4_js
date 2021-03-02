// Задача 8:Зациклить вывод дней недели таким образом: «День недели.
// Хотите увидеть следующий день?» и так до тех пор, пока
// пользователь нажимает OK.
// let day = prompt('День тижня цифрою')
// if (day<=0 || day>7){
//     console.log('Wrong data: Please type number 1-7')
// }
// while (confirm('Хочете побачити наступний день?',day<=7)) {
//     switch(true){
//     case (day == 1):
//         console.log('Понеділок')
//         break
//     case (day == 2):
//         console.log('Вівторок')
//         break
//     case (day == 3):
//         console.log('Середа')
//         break
//     case (day == 4):
//         console.log('Четвер')
//         break
//     case (day == 5):
//         console.log('Пятниця')
//         break
//     case (day == 6):
//         console.log('Субота')
//         break
//     case (day == 7):
//         console.log('Неділя')
//         break    
//     default:
//         ('Invalid action')
// }
// day++
// if (day == 8){
//     day = 1
// }
// }
// Задача 9:Вывести таблицу умножения для всех чисел от 2 до 9.
// Каждое число необходимо умножить на числа от 1 до 10.
// var i, j;
// document.write("<table border= 1px  cellspacing = 0 cellpadding=4 align=center>")
// for (i = 2; i <= 10; i++)
// {document.write("<tr>");
//     for (j = 2; j < 10; j++)
//     {document.write("<td>" + j + "&times;" + i + "=" + (i * j) + "</td>")}
// document.write("</tr>")
// }
// document.write("</table>")
// for (i = 2; i <= 10; i++){
//     for (j = 2; j < 10; j++){
//         console.log (i * j)
//     }
// }
// Задача 10:Игра «Угадай число». Предложить пользователю загадать
// число от 0 до 100 и отгадать его следующим способом:
// каждую итерацию цикла делите диапазон чисел пополам,
// записываете результат в N и спрашиваете у пользователя
// «Ваше число > N, < N или == N?». В зависимости от того
// что указал пользователь, уменьшаете диапазон. Начальный
// диапазон от 0 до 100, поделили пополам и получили 50.
// Если пользователь указал, что его число > 50, то изменили
// диапазон на от 51 до 100. И так до тех пор, пока пользова-
// тель не выберет == N.

// let num = +prompt('Загадайте число від 0-100')
// let max = 100
// let min = 0
// let n = 0
// while (n !=num) {
//     n = parseInt((max+min)/2)
//     type = prompt(`Ваше число < ${n}, > ${n} или == ${n}? `)
//     switch(type){
//         case ('<'):
//         max = n 
//         break 
//         case ('>'):
//         min = n+1
//         break
//         case ('=='):
//         console.log(`Your number ${n}`)
//         break
            
//     }
// }
// document.write(`<h1>ВАШЕ  ЧИСЛО  ${n}</h1>`) 


// Задача 12:Составить таблицу значений функции y = 5 - x2/2 на отрезке [-5; 5] с шагом 0.5.
// let x = -5
// let y = 0 
// console.log(` x   |   y`)
// for (x = -5;x < -3 ; x+=0.5){
//     y = 5 - (x*x)/2
//     console.log(`${Number.parseFloat(x).toFixed(1)} | ${Number.parseFloat(y).toFixed(2)}`)
// }
// for (let x = -3; x < 0; x += 0.5){ 
//     y = 5 - (x*x)/2
//     console.log(`${Number.parseFloat(x).toFixed(1)} |  ${Number.parseFloat(y).toFixed(2)}`)
// }
// for (x = 0;x <= 3;x+=0.5){
//     y = 5 - (x*x)/2
//     console.log(` ${Number.parseFloat(x).toFixed(1)} |  ${Number.parseFloat(y).toFixed(2)}`)
// }
// for (x = 3.5;x <= 5;x+=0.5){
//     y = 5 - (x*x)/2
//     console.log(` ${Number.parseFloat(x).toFixed(1)} | ${Number.parseFloat(y).toFixed(2)}`)
// }
// 2.
// Найти сумму четных цифр числа
// Задача
// Вводится натуральное число. Найти сумму четных цифр, входящих в его состав.

// let d = +prompt('Введіть число')
// console.log(`Введене число ${d}`)
// let res = 0
// let temp = d
// while (d > 0){
//     temp = d%10
//     d = (d-d%10)/10
//     if(temp%2 == 0){
//         res += temp
//     }
// }
// console.log(`Сума всіх парних чисел: ${res}`)

// 3.
// Посчитать четные и нечетные цифры числа
// Задача
// Написать программу, подсчитывающую количество четных и нечетных цифр в числе.
// let d = +prompt('Введіть число')
// console.log(`Введене число ${d}`)
// let odd = even = 0
// let temp = d
// while (d > 0){
//     temp = d%10
//     d = (d-d%10)/10
//     if(temp%2 == 0){
//         even++
//     } else {
//         odd++
//     }
// }
// console.log(`${even}${odd}`)