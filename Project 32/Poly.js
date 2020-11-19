class Poly{
constructor(x,y){
var options={
  restitution:1,
  density:1
}
this.body=Bodies.polygon(x,y,30,30,options)
World.add(world,this.body)
this.image=loadImage("pol.png")
}
display(){
    push()
translate(this.body.position.x,this.body.position.y)
rotate(this.body.angle)
imageMode(CENTER)
image(this.image,0,0,30,30)
pop()


}
}