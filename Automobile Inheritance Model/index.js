let automobilePrototype = {
    startEngine() {
      console.log("Engine started");
    },
    stopEngine() {
      console.log("Engine stopped");
    },
  };
  
  let fourWheelerPrototype = Object.create(automobilePrototype, {
    wheels: { value: 4 },
  });
  
  let sedanPrototype = Object.create(fourWheelerPrototype, {
    model: { value: "Sedan" },
  });

  let suvPrototype = Object.create(fourWheelerPrototype, {
    model: { value: "SUV" },
    offRoadCapability: { value: true },
  });
  
  let coupePrototype = Object.create(fourWheelerPrototype, {
    model: { value: "Coupe" },
    sportyDesign: { value: true },
  });
  
  
  let mySedan = Object.create(sedanPrototype);
  let mySUV = Object.create(suvPrototype);
  let myCoupe = Object.create(coupePrototype);

  console.log(mySedan.model); 
  console.log(mySUV.model); 
  console.log(myCoupe.model);
  mySedan.startEngine(); 
  
  
  function Automobile() {}
  
  Automobile.prototype.startEngine = function () {
    console.log("Engine started");
  };
  
  Automobile.prototype.stopEngine = function () {
    console.log("Engine stopped");
  };
  
  function FourWheeler() {
    Automobile.call(this); 
    this.wheels = 4;
  }
  
  FourWheeler.prototype = Object.create(Automobile.prototype);
  
  function Sedan() {
    FourWheeler.call(this); 
    this.model = "Sedan";
  }
  
  Sedan.prototype = Object.create(FourWheeler.prototype);
  
function SUV() {
    FourWheeler.call(this);
    this.model = "SUV";
    this.offRoadCapability = true;
  }
  
  SUV.prototype = Object.create(FourWheeler.prototype);
  
  function Coupe() {
    FourWheeler.call(this);
    this.model = "Coupe";
    this.sportyDesign = true;
  }
  
  Coupe.prototype = Object.create(FourWheeler.prototype);
  
  let mySedanConstructor = new Sedan();
  let mySUVConstructor = new SUV();
  let myCoupeConstructor = new Coupe();
  
  console.log(mySedanConstructor.model); 
  console.log(mySUVConstructor.model); 
  console.log(myCoupeConstructor.model); 
  mySedanConstructor.startEngine();