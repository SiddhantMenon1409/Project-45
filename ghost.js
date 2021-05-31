class Ghost{
    constructor(x,y){
        this.image = loadImage("sprites/ghost.png");
    }

    display(){
        this.body.position.x = 200;
        this.body.position.y = 200;
    }
}