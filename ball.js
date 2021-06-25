class Ball{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
                
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
   
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle; 
        this.image = loadImage("polygon.png");
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
       
        pop();
      }
}