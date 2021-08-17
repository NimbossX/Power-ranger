var canvas=new fabric.Canvas('myCanvas')
playerX=10 
playerY=10
blockimagewidth=30 
blockimageheight=30
var playerobjet="";
var blockimageobjet="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobjet=Img;
        playerobjet.scaleToWidth(150)
        playerobjet.scaleToHeight(150)
        playerobjet.set({
            top:playerY,
            left:playerX
        })
        canvas.add(playerobjet)
    })
}

function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobjet=Img;
        blockimageobjet.scaleToWidth(blockimagewidth)
        blockimageobjet.scaleToHeight(blockimageheight)
        blockimageobjet.set({
            top:playerY,
            left:playerX
        })
        canvas.add(blockimageobjet)
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed=e.keyCode
    console.log(keyPressed)
    if (e.shiftKey==true&&keyPressed=='80') {
      blockimagewidth=blockimagewidth+10
      blockimageheight=blockimageheight+10
      document.getElementById("currentwidth").innerHTML=blockimagewidth  
      document.getElementById("currenthieght").innerHTML=blockimageheight
      comsole.log("shift&p")
    }
    if (e.shiftKey==true&&keyPressed=='77') {
        blockimagewidth=blockimagewidth-10
        blockimageheight=blockimageheight-10
        document.getElementById("currentwidth").innerHTML=blockimagewidth  
        document.getElementById("currenthieght").innerHTML=blockimageheight
        comsole.log("shift&m")
      }
      if (keyPressed=='38') {
         up()
         console.log("up") 
      }
      if (keyPressed=='40') {
        down()
        console.log("down") 
     }
     if (keyPressed=='37') {
        left()
        console.log("left") 
     }
     if (keyPressed=='39') {
        right()
        console.log("right") 
     }
  
     if (keyPressed=='82') {
        newimage('http://img2.wikia.nocookie.net/__cb20130731234203/powerrangers/images/c/ce/Prs-sharkred.png')
        console.log("R") 
     }
     if (keyPressed=='71') {
        newimage('https://tse3.mm.bing.net/th?id=OIP.vjlfJ7jvC2MELudjRqflDwHaNz&pid=Api&P=0&w=300&h=300')
        console.log("G") 
     }
}
if (keyPressed=='89') {
    newimage('https://www.morphinlegacy.com/wp-content/uploads/2013/11/SPD-Yellow.png')
    console.log("Y") 
 }
 if (keyPressed=='80') {
    newimage('http://images1.wikia.nocookie.net/__cb20130225064828/powerrangers/images/7/7e/Prm-pink.png')
    console.log("P") 
 }
 if (keyPressed=='66') {
    newimage('https://tse3.mm.bing.net/th?id=OIP._b-Jktd6b4uOkMCaFSU0iQHaM_&pid=Api&P=0&w=300&h=300')
    console.log("B") 
 }
function up(){
    if (playerY>=0) {
        playerY=playerY-blockimageheight;
        console.log(blockimageheight)
        console.log("whenuparrowkeyispressed,X="+playerX+"Y="+playerY)
        canvas.remove(playerobjet)
        playerupdate();
    }
}
function down(){
    if (playerY<=500) {
        playerY=playerY+blockimageheight;
        console.log(blockimageheight)
        console.log("whenuparrowkeyispressed,X="+playerX+"Y="+playerY)
        canvas.remove(playerobjet)
        playerupdate();
    }
}
function left(){
    if (playerX>=0) {
        playerX=playerX-blockimagewidth;
        console.log(blockimagewidth)
        console.log("whenuparrowkeyispressed,X="+playerX+"Y="+playerY)
        canvas.remove(playerobjet)
        playerupdate();
    }
}
function left(){
    if (playerX<=850) {
        playerX=playerX+blockimagewidth;
        console.log(blockimagewidth)
        console.log("whenuparrowkeyispressed,X="+playerX+"Y="+playerY)
        canvas.remove(playerobjet)
        playerupdate();
    }
}