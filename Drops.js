class Drops{
    constructor(x,y){
        
        var options ={
          restitution:0.1,
          friction:0.1
        }
    this.rainDrop= Bodies.circle(x,y,4,options);
        this.radius=4;
        World.add(world, this.rainDrop)

    }

 updateY(){


    if (this.rainDrop.position.y>height){

        Matter.Body.setPosition(this.rainDrop,{x:random (0,400), y: random(0,400)})
    }
 }

 displayDrops(){

    fill("blue");
    ellipseMode(RADIUS)
    ellipse(this.rainDrop.position.x,this.rainDrop.position.y,this.radius)
 }
}