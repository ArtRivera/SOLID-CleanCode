interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}

interface RunningBird {
  run(): void;
}

interface SwimmingBird {
  swim(): void;
}

class Tucan implements Bird, FlyingBird {
  fly() {}
  eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  fly() {}
  eat() {}
}

class Ostrich implements Bird {
  eat() {}
  run() {}
}

class Penguin implements Bird, SwimmingBird {
  eat() {}
  swim(): void {}
}
