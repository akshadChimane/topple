class box{
    constructor(x,y,width,height){
       var options={
           restitution:1.2
       } 
       this.body=Bodies.rectangle(x,y,width,height,options);
       this.width=width;
       this.height=height;
       World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var akshad=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(akshad)
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}