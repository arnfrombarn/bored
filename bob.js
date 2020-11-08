class bob{
    constructor(x,y,r)
    {
        var options={
            isStatic:true,
            restitution:1,
            density:0.8,friction:0
        }
        this.x=x
        this.y=y
        this.r=r
    
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
        
    }
    display(){
var paperpos=this.body.position
push()
translate(
    paperpos.x,paperpos.y
)
ellipseMode(CENTER)
ellipse(0,0,this.r,this.r)
pop ()
    }
}