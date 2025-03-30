function simplestDictionaryTransform() {
    const dict = {1: 11, 2: 22, 3: 33, 4: 4, 5: 33, 6: 1};
    
    const keys = Object.keys(dict).map(Number);
    const values = Object.values(dict);
    const combined = [...keys, ...values];
    
    console.log("Ключи:", keys);
    console.log("Значения:", [...new Set(values)]); // Уникальные значения
    console.log("Объединение:", combined);
}

simplestDictionaryTransform();
