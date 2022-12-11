const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

// add argument to constructor
describe('Ship constructor', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);
    expect(ship).toBeInstanceOf(Object);
  });
  
// Ship argument change from string to object
// Ship argument change from object to array of object
  it('has a starting port', () => {
    // const ship = new Ship('Dover');
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    // expect(ship.startingPort).toBe('Dover');
    expect(ship.currentPort).toBe(port);
  });
});

// Ship argument change from string to object
// Ship argument change from object to array of object
// setSail change startingPort to currentPort
// setSail change previousPort = currentPort to data from Itinerary
describe('setSail', () => {


// add another port to test setSail
  it('can set sail',() => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover,calais]);
    const ship = new Ship(itinerary);

    ship.setSail();

    expect(ship.currentPort).toBeFalsy();
  });

  it('can\'t sail further than its itinerary', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover,calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect( () => ship.setSail()).toThrowError('End of itinerary reached');
  });

});

// Ship argument change from string to object
// Ship argument change from object to array of object
// port object --> itinerary object --> ship object
describe('dock', () => {
  it('can dock at a different port', () => {
    const dover = new Port('Dover');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([dover,calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(ship.currentPort).toBe(calais);
  });
});



