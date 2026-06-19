class False_end extends Phaser.Scene {
    constructor() {
        super("False_end");
    }

    preload(){
        //Прогружаем все картинки, музыку
        this.load.image("main_background", "img/space.png");
        this.load.image("cont", "img/continue.png");

        this.load.spritesheet("menu_table", "img/menu.png", {
            frameWidth: 192,
            frameHeight: 108
        });

        
    }

    create() {
        /*Яндекс
    YaGames.init()
    .then((ysdk) => {
        ysdk.features.GameplayAPI?.stop();
    })
    .catch(console.error);
    */
        this.background = this.add.tileSprite(0,0, config.width, 200, "main_background");
        this.background.setOrigin(0,0).setScale(3);
        
        this.anims.create({
            key: "menu_anim",
            frames: this.anims.generateFrameNumbers("menu_table"),
            frameRate: 15,
            repeat: -1
        });

        
        
        
        this.sound.removeByKey('main');
        const music = this.sound.add("main", {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
          })

        music.play(config);   
        
        this.add.text(config.width/3 +10, config.height/3, "КОНЕЦ ИГРЫ", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });

        

        this.butt1 = this.physics.add.sprite(config.width/2,config.height - 150, "cont");
        this.butt1.setOrigin().setScale(0.3);
        this.butt1.setInteractive();
        this.butt1.on("pointerdown", ()=>this.ololo2());
        

        
    }

    
    ololo2(){
        this.scene.start("bootGame");
        this.sound.removeByKey('main');
    }

    update(){
        this.background.tilePositionX += 1;
        
    }

    
    
    
}