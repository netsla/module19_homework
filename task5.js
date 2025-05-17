// Объявляем класс ElectricalAppliance
class ElectricalAppliance {
    constructor(name) {
        this.deviceType = 'бытовой электроприбор';
        this.name = name;
    }

    getPowerConsumption(power, time, isOn) {
        const status = isOn ? 'Вкл' : 'Выкл';
        console.log(`Расход электроэнергии ${this.name} за ${time} час. = ${power * time} Вт. ${this.name}: ${status}`);
    }
}

// Объявляем класс Characteristic
class Characteristic extends ElectricalAppliance {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
}

// Создаем объекты
const lampe = new Characteristic('Лампа', 'серебрянная');
const computer = new Characteristic('Компьютер', 'графитовый');
const samovar = new Characteristic('Самовар', 'бронзовый');

// Вывод объектов
console.log(lampe, computer, samovar);

// Расчет потребления энергии
lampe.getPowerConsumption(15, 2);
computer.getPowerConsumption(450, 3, 1);
samovar.getPowerConsumption(1000, 7, 1);