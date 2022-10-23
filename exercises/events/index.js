// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor() {
    this.events = new Map();
  }

  // Register an event handler
  on(eventName, callback) {
    const events = this.events.has(eventName) ? this.events.get(eventName) : [];
    events.push(callback);
    this.events.set(eventName, events);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const events = this.events.has(eventName) ? this.events.get(eventName) : [];
    for (const cb of events) {
      cb();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.events.delete(eventName);
  }
}

module.exports = Events;
