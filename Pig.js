class GreenPig{
    constructor(x,y){ 
        var options = {
        'restitution': 0.5,
        'friction': 0.9,
        'density': 2
        }
        
        this.width = 40;
        this.height = 40;
        this.body = Bodies.rectangle(x,y, this.width, this.height, options);
        World.add(world, this.body);

    }


    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate (angle);
    strokeWeight(0);
    rectMode(CENTER);
    fill("green");
    rect(0, 0, this.width, this.height);
    pop();
    }
    
 }
