class EventHandlerBase {
  
  constructor(event, observer){
    this.event = event
    this.observer = observer
  }

  resolve(){
    //This should be implemented by subclasses
  }

}

module.exports = EventHandlerBase