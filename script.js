var config = {
	width: 800,
	height: 600,
	fps: {
		forceSetTimeOut: true,
		target: 60
	  },
	backgroundColor: 0x000000,
	physics: {default: 'arcade'},
	scene: [Scene1, Scene2, Scene3, Scene4, Scene5, Scene6, Brif1, Brif2, Brif3, Brif4, Lose, Win, Ending1,
		Ending2, Finish, Titles, False_end],
	scale: {
		mode: Phaser.Scale.FIT,
		
		
		}	
}


var game = new Phaser.Game(config);