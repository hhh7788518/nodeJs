var events = require('events')

var eventEmitter  = new events.EventEmitter();

eventEmitter.on("conn",function connHandle() {
    console.log('conn ok')

    eventEmitter.emit("handle")
});
eventEmitter.on("handle", function handle() {
    console.log('start handle')
    eventEmitter.emit("over")
});
eventEmitter.on("over",function overHandle() {
    console.log('over')
});



eventEmitter.emit("conn")