class EventBase {

  constructor(data, invoker){
   this.name = this.constructor.name
   this.invoker = invoker || 'Invoker Name Was Not Passed In'
   this.data = data
  }

}

module.exports = EventBase