class Paper{
    constructor(x,y,width,height){
        var options ={
            
            rrestitution :0.3,
            friction :0.5,
            density :1.2,
            isStatic:false
            
        }
        this.paperIMG = loadImage("crushedPaper.png");
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255, 255, 255);
        noStroke();
        image(this.paperIMG,pos.x-5,pos.y-60,this.width,this.height);
     
    }
}
