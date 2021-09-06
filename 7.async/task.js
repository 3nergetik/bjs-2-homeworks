class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }

    // Добавляем новый звонок
    addClock(time,action,id) {
    	if (id === undefined) throw new Error("id не указан");
        if (this.alarmCollection.some(alarm => alarm.id === id) {
            console.error("Будильник с таким id уже существует");
            return;
        } 
    	this.alarmCollection.push({
            time: time,
            action: action,
            id: id
        });
    }

    // Удаляет звонок по id
    removeClock(id) {
        let index = this.alarmCollection.findIndex(item => item.id === id)
        if (index > -1) {
            this.alarmCollection.splice(index,1);
            return true;
        }
        return false;
    }

    // Возвращает текущее время в формате HH:MM
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().substring(0,5);
    }

    // Запускает все звонки
    start() {
        let checkAlarm = checkClock.bind(this);
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.action();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkAlarm(item)),1000);
        }
    }

    // Останавливает все звонки
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    // Печатает все звонки
    printAlarms() {
    	console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(alarm => {
            console.log("Будильник №" + alarm.id + " заведен на " + alarm.time);
        });
    }

    // Удаляет все звонки
    clearAlarms() {
        this.stop();
		this.alarmCollection = [];
    }
}