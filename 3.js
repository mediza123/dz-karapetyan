function findCommonElements() {
    const list1 = prompt("Введите первый список:").split(" ").map(Number);
    const list2 = prompt("Введите второй список:").split(" ").map(Number);
    
    const set1 = new Set(list1);
    const set2 = new Set(list2);
    
    const commonElements = [...set1].filter(x => set2.has(x));
    
    console.log("Общие элементы:", commonElements.join(" "));
}

findCommonElements();
