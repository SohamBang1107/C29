class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image = loadImage("sprites/sling1.png");
        this.image2 = loadImage("sprites/sling2.png");
        this.image3 = loadImage("sprites/sling3.png");
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
           
            stroke(48,22,8)
            if(pointA.x<220){
                strokeWeight(7);
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20,pointA.y,pointB.x+20,pointB.y)
                image(this.image3 ,pointA.x-30 , pointA.y-10, 10,20)
            }
            else{
                strokeWeight(3);
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20,pointA.y,pointB.x+20,pointB.y)
                image(this.image3 ,pointA.x+20 , pointA.y-10, 10,20)
            }
            
            image(this.image , 200 , 20);
            image(this.image2 , 170,20 )
            
        pop();
            
            
        }

    }
    
}