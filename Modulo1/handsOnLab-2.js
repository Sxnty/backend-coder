/* 
Define the TicketManager class, with a initial empty array
The class must have a private variable "gain" which will be the profit of each ticket (15%) 
It must have the "GetEvents" method that will show the saved events.
It must have the "addEvents" method that will receive the following parameters:
    name,
    place,
    price (added to the aditional gain),
    capacity (50 by default),
    date (today by default)

The method must also create the auto-incrementing id field and the "participants" field that will always start with an empty array.
*/

class TicketManager {
  #gain;

  constructor() {
    this.events = [];
    this.#gain = 0.15; //15%
  }

  getEvents() {
    console.log(this.events);
    return this.events;
  }

  addEvent({ name, place, price, capacity, date }) {
    capacity = capacity ?? 50;
    date = date ?? new Date();

    let id;
    if (this.events.length === 0) {
      id = 1;
    } else {
      let lastEvent = this.events[this.events.length - 1];
      id = lastEvent.id + 1;
      console.log(id);
    }

    price = price + this.#gain * price;
    let event = { name, place, price, capacity, date, id };
    event.participants = []
    this.events.push(event);
  }

  getEventById(id) {
    let eventById = this.events.find((e) => e.id === id)
    console.log(eventById)
    return eventById
  }
}

let ticket = new TicketManager();
ticket.addEvent({
  name: "Duki in live",
  place: "Luna Park",
  price: 2500,
  capacity: null,
  date: new Date("05/20/2023"),
});
ticket.addEvent({
  name: "Quevedo in live",
  place: "Luna Park",
  price: 1500,
  capacity: 2000,
});
ticket.addEvent({
  name: "ACDC in live",
  place: "Luna Park",
  price: 5500,
  date: new Date("06/01/2023"),
});

ticket.getEvents()
ticket.getEventById(2)
