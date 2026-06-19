class Win extends Phaser.Scene {
    constructor() {
        super("Win");
    }

    preload(){
        //Прогружаем все картинки, музыку
        this.load.image("main_background", "img/space.png");
        
        this.load.spritesheet("menu_table", "img/menu.png", {
            frameWidth: 192,
            frameHeight: 108
        });

        
    }

    create(data) {
        /*Яндекс
    YaGames.init()
    .then((ysdk) => {
        ysdk.features.GameplayAPI?.stop();
    })
    .catch(console.error);
    */
        var brif = data[0];
        var bonus = data[1];
        localStorage.setItem('brif', brif);
        localStorage.setItem('bonus', String(bonus));
        

        this.background = this.add.tileSprite(0,0, config.width, 200, "main_background");
        this.background.setOrigin(0,0).setScale(3);
        
        this.anims.create({
            key: "menu_anim",
            frames: this.anims.generateFrameNumbers("menu_table"),
            frameRate: 15,
            repeat: -1
        });

        
        this.menu_table = this.physics.add.sprite(config.width/2, config.height/2, "menu_table");
        this.menu_table.setOrigin().setScale(3);
        this.menu_table.play("menu_anim");

        
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
        
        var butt1 = this.add.text(config.width/2 - 90, config.height/2 - 50, "Следующий\n   уровень", {
            fontFamily: 'font1', fontSize: '30px', color: 'black'
        });
        butt1.setInteractive();
        butt1.on("pointerdown", ()=>this.next_lvl(data)); 
        
        var butt2 = this.add.text(config.width/2 - 110 , config.height/2 + 40, "Главное меню", {
            fontFamily: 'font1', fontSize: '30px', color: 'black'
        });
        butt2.setInteractive();
        butt2.on("pointerdown", ()=>this.main_menu());

        this.add.text(config.width/3 - 65, config.height/7, "УРОВЕНЬ ПРОЙДЕН", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });
        
        console.log(data[1]);
    }

    next_lvl(data){
        this.scene.start(data[0], data[1]);
        this.sound.removeByKey('main');
    }

    main_menu(){
        this.scene.start("bootGame");
        this.sound.removeByKey('main');
    }

    update(){
        this.background.tilePositionX += 1;
        
    }

    
    
    
}