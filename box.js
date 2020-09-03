class Box{
  constructor(x,y,width,height){
    var options = {
      isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.height = height;
    this.image = loadImage("images/download.jpg");
    this.Visibility = 255;

    World.add(world,this.body);
  }
  display(){
    if(this.body.speed < 3){
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      fill(146, 249, 2);
      strokeWeight(5);
      image(this.image,pos.x,pos.y,this.width,this.height);
      pop();
    } else {
       World.remove(world,this.body);
       var pos = this.body.position;
       push();
       this.Visibility = this.Visibility - 2;
       tint(255,this.Visibility);
       image(this.image,pos.x,pos.y,this.width,this.height);
    }
  }
  score(){
    if(this.Visibility < 0 && this.Visibility > -3){
      score++
    }
  }
}
