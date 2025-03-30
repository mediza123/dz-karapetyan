function powerNumbers() {
    const numbers = prompt("Введите числа через пробел:").split(" ");
    const power = parseInt(prompt("Введите степень:"));
    
    const result = numbers.map(element => {
        const num = parseFloat(element);
        if (!isNaN(num)) {
            return Math.pow(num, power);
        } else {
            return element.repeat(power);
        }
    });
    
    console.log("Вывод:", result.join(" "));
}

powerNumbers();
