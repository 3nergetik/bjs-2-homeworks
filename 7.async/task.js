/* Описываем класс AlarmClock */

class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    /* Метод addClock создает новый элемент в массиве alarmCollection. У элемента есть свойства id, action и time */
    addClock(time,action,id) {
    	if (id === undefined) {
      	throw new Error("error")
        } else if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            console.error("Будильник с таким id уже существует");
            return;
        } else {
    	    this.alarmCollection.push({time: time,action: action,id: id})
      }
    }
    removeClock(value) {
        this.alarmCollection.filter(alarm => alarm.id !== value)
    }
    /* Метод getCurrentFormattedTime возвращает текущее время в формате HH:MM */
    getCurrentFormattedTime() {
        return new Date().getHours() + ":" + new Date().getMinutes();
    }
    start() {
        if (this.timerId === null) {
            
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }
    printAlarms() {
    	console.log("Печать всех будильников в количестве " + this.alarmCollection.length);
        this.alarmCollection.forEach(alarm => {
            console.log("Будильник №" + alarm.id + " заведен на " + alarm.time);
        });
    }
    clearAlarms() {
        if (this.timerId === null) {
		this.alarmCollection = []
        }
    }
}