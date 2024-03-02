const PI = 3.14


// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangle = (a, b) => a * b;

rectangle(4, 5)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const circle = r => r ** 2 * PI;

circle(5)


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinder = (r, h) => (2 * PI * r ** 2) + (2 * PI * r * h);

cylinder(2, 3)


// - створити функцію яка приймає масив та виводить кожен його елемент

let array1 = [7, 'ola', 'polly', false]

const arrayElem = elem => {
    for (let i of elem) {
        console.log(i)
    }
}

arrayElem(array1)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let dataText = 'Объем цилиндра можно вычислить, перемножив площадь основания на высоту цилиндра. Формула для вычисления объема цилиндра выглядит следующим образом: V = S * h, где V — объем цилиндра, S — площадь основания, h — высота цилиндра.'

const paragraf = text => document.write(`<p>${text}</p>`)

paragraf(dataText)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let dataTextTable = 'Объем цилиндра'

const table = tableText => {
    document.write(`<ul>
                        <li>${tableText}</li>
                        <li>${tableText}</li>
                        <li>${tableText}</li>
                    </ul>`)
}

table(dataTextTable)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const tableNum = (tableTextNum, num) => {
    document.write(`<ul>`)
    for (let j = 0; j < num; j++) {
        document.write(`<li>${tableTextNum}</li>`)
    }
    document.write(`</ul>`)
}

tableNum('Объем цилиндра', 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array2 = [4, 8, 'ops', true, false]

const list = listArray => {
    document.write(`<ul>`)
    for (let l of listArray) {
        document.write(`<li>${l}</li>`)
    }
    document.write(`</ul>`)
}

list(array2)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let obj = [
    {id: 10, name: 'Polly', age: 30},
    {id: 100, name: 'Molly', age: 300},
    {id: 1000, name: 'Dolly', age: 3000},
]

const blockObj = elemObj => {
    for (let g of elemObj) {
        document.write(`<p>id - ${g.id},
                           name - ${g.name},
                           age - ${g.age}</p>`)
    }
}

blockObj(obj)


// - створити функцію яка повертає найменьше число з масиву

let minNumbers = [0, -9, 10, 789, -99]

const minArray = minNumber => {
    let minimum = 0
    for (let k of minNumber) {
        if (k < minimum) {
            minimum = k
        }
    }
    return minimum
}

minArray(minNumbers)


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let numbers3 = [0, -9, 10, 789, -99]

const sumCalculator = totalArray => {
    let sum = 0
    for (let numb of totalArray) {
        sum += numb
    }
    return sum
}

sumCalculator(numbers3)


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let arrayIndex = [11, 22, 33, 44, 55, 66, 77]

const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
    return arr
}

swap(arrayIndex, 3, 4)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let dataCurrency = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42}
]

const exchange = (amount, dataForCalc, currencyForCalc) => {
    for (let y of dataForCalc) {
        if (y.currency === currencyForCalc) {
            return amount / y.value
        }
    }
}

exchange(10000, dataCurrency, 'USD')
































