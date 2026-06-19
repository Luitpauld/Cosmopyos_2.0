class Titles extends Phaser.Scene {
    constructor() {
        super("Titles");
    }

    preload(){
        //Прогружаем все картинки, музыку
        this.load.image("main_background", "img/space.png");
        this.load.image("cont", "img/continue.png");
        this.load.image("cosmodogs", "img/cosmodogs.png");

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
        
        this.text1 = this.add.text(config.width/3 - 125, config.height/3, "СОЗДАТЕЛИ:", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });

        this.text2 = this.add.text(config.width/3 - 125, config.height/3+50, "Luitpauld", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });
        this.text3 = this.add.text(config.width/3 - 125, config.height/3+100, "AnDreiikon", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });

        this.butt1 = this.physics.add.sprite(config.width/2,config.height - 150, "cont");
        this.butt1.setOrigin().setScale(0.3);
        this.butt1.setInteractive();
        this.butt1.on("pointerdown", ()=>this.ololo1());

        this.butt2 = this.physics.add.sprite(config.width/2,config.height - 150, "cont");
        this.butt2.setOrigin().setScale(0.3);
        this.butt2.setInteractive();
        this.butt2.on("pointerdown", ()=>this.ololo2());
        this.butt2.setVisible(false);

        this.butt3 = this.physics.add.sprite(config.width/2,config.height - 150, "cont");
        this.butt3.setOrigin().setScale(0.3);
        this.butt3.setInteractive();
        this.butt3.on("pointerdown", ()=>this.ololo3());
        this.butt3.setVisible(false);

        
    }

    ololo1(){
        this.text1.setText("Саундтреки:", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });
        this.text2.setText("DEgITx", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });
        this.text3.setVisible(false);
        this.butt1.setVisible(false);
        this.butt2.setVisible(true);
    }

    ololo2(){
        this.text4 = this.add.text(config.width/3 - 125, config.height/5-50, "Игра посвящается первым \nсобакам-космонавтам:", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });
        this.dogs = this.physics.add.sprite(config.width/2, config.height/3 + 50, "cosmodogs");
        this.dogs.setOrigin().setScale(0.3);
        this.text1.setVisible(false);
        this.text2.setVisible(false);
        this.butt2.setVisible(false);
        this.butt3.setVisible(true);
    }
    ololo3(){
        this.scene.start("bootGame");
        this.sound.removeByKey('main');
    }
    

    update(){
        this.background.tilePositionX += 1;
        
    }

    
    
    
}