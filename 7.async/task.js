class AlarmClock {
    constructor(alarmCollection,timerId) {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time,action,id) {
    	if (id === undefined) throw new Error("id не указан");
        if (this.alarmCollection.some(alarm => alarm.id === id) {
            console.error("Будильник с таким id уже существует");
            return;
        } 
    	this.alarmCollection.push({time: time,action: action,id: id});
    }
    removeClock(value) {
        let i = this.alarmCollection.findIndex(item => item.id === id)
        if (i > -1) {
            this.alarmCollection.splice(i,1);
            return true;
        }
        return false;
    }
    getCurrentFormattedTime() {
        let currentDate = new Date().toLocaleTimeString().substring(0,5);
        return currentDate;
    }
    start() {
        let checkAlarm = checkClock.bind(this);
        function checkClock(alarm) {
            if (alarm.time === this.getCurrentFormattedTime()) {
                this.action();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => this.alarmCollection.forEach(item => checkAlarm(item)),1000)
        }
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
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