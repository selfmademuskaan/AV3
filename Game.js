class Game {
  constructor(){

  }

  getState(){
    var gamestateRef  = database.ref('gameState');
    gamestateRef.on("value",function(data){
       gamestate = data.val();
       console.log(gamest)
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
      
    if(gamestate === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    
  }

  play(){
    form.hide();
    tony = createSprite(330,340);
    tony.addImage("tony",imimg);
    tony.scale=0.1;

    bruce = createSprite(200,250);
    bruce.addImage("bruce",himg);
    bruce.scale=0.2;

    nat = createSprite(90,100);
    nat.addImage("nat",natimg);
    nat.scale=0.1;
  
    clint = createSprite(430,310);
    clint.addImage("clint",clintimg);
    clint.scale=0.1;

    captian = createSprite(550,200);
    captian.addImage("captian",capimg);
    captian.scale=0.2;

    thor = createSprite(600,100);
    thor.addImage("thor",timg);
    thor.scale=0.1;
    
    background("black");
       drawSprites();
  }

  end(){
    console.log(player.rank);
    console.log("Game Ended");
  }
}
