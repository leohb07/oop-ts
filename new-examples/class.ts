class Entity {
  name: string = '';
  age: number = 0;

  greetings() {
    return `${this.name} ${this.age}`
  }
}

const entity: Entity = new Entity();
entity.age = 23;
entity.name = 'Leonardo';