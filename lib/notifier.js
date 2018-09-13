class Notifier {

  constructor(){
    this._listeners = {} 
  }

  //Subscribes observer to event if it already exists or creates a new one if it doesnt
  on(eventName, listener){  
    if(!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].push(listener)
    console.log(this._listeners)
  }

  unsubscribe(event, listener){
    if( this.eventTypeExists( event.name ))
    this._listeners[eventName].splice(this._listeners[eventName].indexOf(listener), 1)
  }

  notify(event){
    if( this.eventTypeExists(event.name)){
      this._listeners[event.name].forEach( listener => listener.onNotify(event))
    }
    else{
      const invokerMessage = event.invoker ? `by ${event.invoker}` : ''
      console.log( `WARNING: ${event.name} event raised ${invokerMessage} but there are currently NO LISTENERS.` )
    }
  }
  eventTypeExists(key){
    return this._listeners[key]
  }
}

module.exports = Notifier