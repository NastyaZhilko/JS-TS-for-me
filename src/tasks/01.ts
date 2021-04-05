// 1. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "00", если такого треугольника не существует,
//  - "01", если треугольник равнобедренный,
//  - "10", если треугольник равносторонний,
//  - "11", если треугольник обычный
export function getTriangleType(a: number, b: number, c: number): string {
    let result: string
    if (a + b > c && a + c > b && c + b > a) {
        if (a === b && b === c) {
            result = "10"
        } else if (a === b || b === c || a === c) {
            result = "01"
        } else {
            result = "11"
        }
    } else {
        result = "00"
    }
    return result
}

// 2. Функция isSquareGreater принимает два параметра: площадь круга и
// площадь квадрата. // Функция должна возвращать true если круг поместится в
// квадрате и false в противном случае.

export function isSquareGreater(areaCr: number, areaSq: number): boolean {
    const diameterCr: number = 2 * Math.sqrt(areaSq / Math.PI)
    const sideSq: number = Math.sqrt(areaSq)
    const result: boolean=sideSq>=diameterCr
    return true
}

// 3. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма чисел с чётным индексом больше,то функция возвращает true.
// В противном случае - false.

export function isEvenSumGreater(array: Array<number>): boolean {
 const evenSum=array.reduce((acc, el, i)=>i%2===0 ? acc + el : acc, 0)
 const oddSum=array.reduce((acc, el, i)=>i%2!==0 ? acc + el : acc, 0)
    if (evenSum>oddSum)
        return true
    }
// 4. Функция принимает параметром целое число и возвращает
// сумму цифр этого числа
export function  getSum (number: number): number|undefined {
    let sum: number=0
    while (number>0) {
        sum += number%10
        number=Math.trunc(number/10)
    }
        return sum
}

// 5. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export function getBanknotes(value:number): Array<number>{
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    return []
}
