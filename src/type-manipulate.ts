enum TransportType {
  bike = 1,
  car = 2,
  train = 3,
  airplane = 4,
}

interface Transport {
  type: TransportType;
  detail: {
    bikeProp: 'bike';
    carProp: 'car';
    trainProp: 'train';
    airplaneProp: 'airplane';
  };
}

function getTransportType(transport: Transport) {
  switch (transport.type) {
    case TransportType.bike:
      console.log(transport.detail);
      break;
    case TransportType.car:
      console.log(transport.detail);
      break;
    case TransportType.train:
      console.log(transport.detail);
      break;
    case TransportType.airplane:
      console.log(transport.detail);
      break;
  }
}
