class EventHandlerNotRegisteredError extends Error {
  constructor(event){
    super()
    this.message = `${event.name}Handler not yet registered. Unable to responde to ${event.name} emitted by ${event.invoker}.`
  }
}

module.exports = EventHandlerNotRegisteredError