class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=255
    }
    display(){
  if (this.body.speed<5){
    super.display()
  }
  else{
    World.remove(world,this.body)
    push()
    this.visibility=this.visibility-5
    tint(255,this.visibility)
    pop()
  }
  }
  score(){
    if (this.visibility<0 && this.visibility >-105){
        score++
    }
    }
  won(){
    if (score===500){
      textSize(30)
      text("You Won",400,100)
    }
  }
  };
  
 