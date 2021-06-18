class Player {
  constructor() {
    this.index = null;
    this.score = 0;
    this.name = null;
    this.rank = null;
    this.x
    this.y
  }

  getCount() {
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    })
  }

  updateCount(count) {
    database.ref('/').update({
      playerCount: count
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      score: this.score
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    })
  }

  getscoresatend() {
    var carsInfoRef = database.ref('carsatend');
    carsInfoRef.on("value", (data) => {
      this.rank = data.val();
    })
  }

  static updatecarsatend(rank) {
    database.ref('/').update({
      carsatend: rank
    


    })

    console.log("rank");
  }



}


