class Box{
    constructor(x, y, width, height){
        var options = {
            isStatic: false,
            restitution: 0.5,
            friction: 1,
            density: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(color){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle*57);
        rectMode(CENTER)
        fill(color);
        rect(0, 0, this.width, this.height);
        pop();
    }
}