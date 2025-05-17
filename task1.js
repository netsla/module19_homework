function printOwnProperties(obj) {
    // Получаем все собственные ключи объекта
    const keys = Object.getOwnPropertyNames(obj);
    
    // Проходим по всем ключам
    keys.forEach(key => {
        // Получаем значение свойства
        const value = obj[key];
        
        // Формируем строку для вывода
        const output = `Ключ: ${key}, Значение: ${value}`;
        
        // Выводим в консоль
        console.log(output);
    });
}
// Пример использования функции printOwnProperties
const person = {
    name: 'Иван',
    age: 30,
    city: 'Москва'
};

printOwnProperties(person);