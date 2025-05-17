
function ElectricalAppliance(name) {
	this.device = 'бытовой электроприбор',
	this.name = name	
}

ElectricalAppliance.prototype.getPowerConsumption = function (power, t, on) {
	let turnOn = on;
	if(on === 1){
		turnOn = 'Вкл';
	}else{
		turnOn = 'Выкл';
	};
	console.log(`Расход электроэнергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
};

function Characteristic(name, color) {
	this.name = name,
	this.color = color
}

Characteristic.prototype = new ElectricalAppliance();

// Создаем объекты
const lampe = new Characteristic ('Лампа', 'серебрянная');
const computer = new Characteristic ('Компьютер', 'графитовый');
const samovar = new Characteristic ('Самовар', 'бронзовый');

// Вывод объектов
console.log(lampe, computer, samovar);

// Расчет потребления энергии
lampe.getPowerConsumption(15, 2);
computer.getPowerConsumption(450, 3, 1);
samovar.getPowerConsumption(1000, 7, 1);
