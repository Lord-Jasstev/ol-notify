const Event = require('./event')

const { 
  RegistrantNotAnInstanceOfEventError,
  EventNotRegisteredError 
} = require('../errors')


class Events {

  constructor(...args) {
    this._index = {}
    this._eventNames = {}
    this.registerEvents(...args)
  }

  get names(){
    return this._eventNames
  }

  isEvent(event) {
    // Check to see if the Class definintion extends EventHandler
    return event.prototype instanceof Event
  }

  registerEvents(...events) {
    events.forEach(event => {
      if (this.isEvent(event)) {
        this._index[event.name] = event
        this._eventNames[event.name] = event.name
      } else {
        const message = `${event.name} must inherit from Event to be registered.`
        throw new RegistrantNotAnInstanceOfEventError(message)
      }
    })
  }

  create(eventName, payload, invoker){
    if( this._index[eventName]){
      return new this._index[eventName](payload, invoker)
    }else{
      throw new EventNotRegisteredError(`${eventName} must be registered with Events before it can be created by the factory.`)
    }
  }

}

const events = new Events()

module.exports = events