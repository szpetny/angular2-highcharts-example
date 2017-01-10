export class A {
  constructor() {}
  
  aladin(aladinDiv, options) {}
  MOCFromJSON(data, options) {}
}

export class FakeAladin {
  constructor() {}
  addMOC(moc) {}
}

export class AladinStub {
  static fakeA: A = new A();
  static fakeAladin = new FakeAladin();
}



