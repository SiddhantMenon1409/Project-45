 class pacman{
   constructor(x,y,width,height){
        var options= {
            
        }
        this.body = bodies.circle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/pacman.png");

   }
   
   display(){
       this.body.position.x = 200;
       this.body.position.y = 100
       
   }

 }