class EventBus {
  private events: Map<string, Function[]> = new Map();

  emit(event: string, data?: any) {
    const handlers = this.events.get(event) || [];
    handlers.forEach((handler) => handler(data));
  }

  on(event: string, handler: Function) {
    const handlers = this.events.get(event) || [];
    handlers.push(handler);
    this.events.set(event, handlers);
  }

  off(event: string, handler: Function) {
    const handlers = this.events.get(event) || [];
    const index = handlers.indexOf(handler);
    if (index > -1) {
      handlers.splice(index, 1);
    }
    this.events.set(event, handlers);
  }
}

export const eventBus = new EventBus();
