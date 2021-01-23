class Dustbin{
    constructor(x,y,width,height){
       var options ={
           isStatic:true
       }
       this.dustbinIMG = loadImage("dustbingreen.png")
       this.body = Bodies.rectangle(x,y+50,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255);
        noStroke();
        //rect(pos.x, pos.y, this.width, this.height);
        image(this.dustbinIMG,pos.x-5,pos.y-110,this.width,this.height)
      }
}

