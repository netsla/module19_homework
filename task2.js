function hasProperty(obj, propName) {
    return propName in obj;
}
const person = { name: 'Иван', age: 30 };

// Пример использования функции hasProperty
hasProperty(person, 'name');    // true
hasProperty(person, 'address'); // false
hasProperty(person, 'age');     // true
hasProperty({}, 'any');         // false