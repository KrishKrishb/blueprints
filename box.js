class Box {
  constructor(x, y, width, height) {
    var options = {
      //restitution is for the bouncenece
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    
    push();//creating new setting ex=box1
    translate(pos.x, pos.y);//its give current position of particular object
    rotate(angle);//move the object in particular angle
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();//reset back old setting
  }
};
