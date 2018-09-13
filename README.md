# Simple Observer Pattern Framework for Nodejs
## Completely untested!  Completely for fun and learning experience.

# Notifier Class
- Handles registration of listeners
- Emitting events to listeners
- **Each 'Subject or Observed Class' must implement a property called notifier that is of type new Notifier()**

# Events Class ( Global / Singleton )
- Retains an index of all Events available to the program
- Handles registration of events
- Ensures that each registered inherits from Event to ensure consistency
- Provides a factory that creates new instances of events
- Provides an index of Event names for observers to use when registering instead of string literals

# EventHandlers
- Each Observer should implement a property that is of type new EventHandlers()
- Ensures that only Events inheriting from EventHandler are allowed in the registry.. ensuring consistency
- When registering to listen to a Subject it must use the following syntax:  subject.on(EventName, observer.eventHandlers)
- Implements a onNotify() which selects the corresponding EventHandler based on the Event recieved
- Implements an EventHandler factory that creates a new instance of the EventHandler passing in the event and a 'this' reference to the observer
- onNotify() then calls resolve() on the EventHandler (Polymorphism allows custom behaviour for each handler)

# EventHandler
- A base class with properties to store a reference to the event and the observer
- abstract resolve() method that should be overridden by the custom Handler subclass

# Event
- A base class with properties for name which is derived from the class name and used by notifier
- A property for data which the payload from the event broadcast
- An optional property 'invoker' which can be used to print the name of the broadcaster 
