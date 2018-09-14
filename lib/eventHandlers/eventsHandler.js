const EventHandlerBase = require('./eventHandlerBase')
const RegistrantNotAnInstanceOfEventHandlerBaseError = require('../errors/RegistrantNotAnInstanceOfEventHandlerBaseError')
const EventHandlerNotRegisteredError = require('../errors/EventHandlerNotRegisteredError')

class EventsHandler {

  constructor(observer){
    this.observer = observer
    this._index = {}
  }

  isEventHandler(eventHandler){
    // Check to see if the Class definintion extends EventHandler
    return eventHandler.prototype instanceof EventHandlerBase
  }

  registerHandlers(...eventHandlers){
    eventHandlers.forEach( handler => {
      if( this.isEventHandler(handler)){
        this._index[handler.name] = handler
      }else{
        const message = `${handler.name} must inherit from EventHandler to be registered.`
        throw new RegistrantNotAnInstanceOfEventHandlerBaseError(message)
      }
    })
  }

  getEventHandlerFor(event) {
    const eventHandlerName = `${event.name}Handler`
    if ( this._index[eventHandlerName] ) {
      return new this._index[eventHandlerName](event, this.observer)
    } else {
      throw new EventHandlerNotRegisteredError(event)
    }
  }

  onNotify(event) {
    const eventHandler = this.getEventHandlerFor(event)
    eventHandler.resolve()
  }
}


module.exports = EventsHandler