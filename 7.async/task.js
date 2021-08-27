class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time,action,id) {
    	if (id === undefined) {
      	    throw new Error("error");
        } else if (this.alarmCollection.some((alarm) => alarm.id === id)) {
            console.error("Будильник с таким id уже существует");
            return;
        } else {
    	    this.alarmCollection.push({time: time,action: action,id: id});
        }
    }
    removeClock(value) {
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== value);
    }
    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString().substring(0,5);
        return currentDate;
    }
    start() {
    
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }
    printAlarms() {
    	console.log("Печать всех будильников в количестве: " + this.alarmCollection.length);
        this.alarmCollection.forEach(alarm => {
            console.log("Будильник №" + alarm.id + " заведен на " + alarm.time);
        });
    }
    clearAlarms() {
        this.stop();
		this.alarmCollection = [];
    }
}