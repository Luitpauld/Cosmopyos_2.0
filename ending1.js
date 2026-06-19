class Ending1 extends Phaser.Scene {
    constructor() {
        super("Ending1");
    }

    preload(){
        //Прогружаем все картинки, музыку
        this.load.image("main_background", "img/space.png");
        this.load.image("brif_table", "img/brif_table.png");
        this.load.image("sea", "img/ending.png");
        this.load.image("mars", "img/mars.png");
        this.load.image("cont", "img/continue.png");

        

        this.load.spritesheet("dog_head", "img/dog_head_sheet.png", {
            frameWidth: 23,
            frameHeight: 22
        });

        this.load.spritesheet("HAL", "img/HAL_2.png", {
            frameWidth: 50,
            frameHeight: 50
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
        
        
        this.sea = this.physics.add.sprite(config.width/2, config.height/3, "sea");
        this.sea.setOrigin().setScale(0.5);
        

        this.brif_table = this.physics.add.sprite(config.width/2,config.height - config.height/4, "brif_table");
        
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 - 50,"У нас получилось!\nПланета пригодна\nдля колонизации!",
             {fontFamily: 'font1', color: "Black", fontSize:'25px'});

        this.butt1 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt1.setOrigin().setScale(0.3);
        this.butt1.setInteractive();
        this.butt1.on("pointerdown", ()=>this.ololo1());

        this.butt2 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt2.setOrigin().setScale(0.3);
        this.butt2.setInteractive();
        this.butt2.setVisible(false);
        this.butt2.on("pointerdown", ()=>this.ololo2());

        this.butt3 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt3.setOrigin().setScale(0.3);
        this.butt3.setInteractive();
        this.butt3.setVisible(false);
        this.butt3.on("pointerdown", ()=>this.ololo3());

        this.butt4 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt4.setOrigin().setScale(0.3);
        this.butt4.setInteractive();
        this.butt4.setVisible(false);
        this.butt4.on("pointerdown", ()=>this.ololo4());

        this.butt5 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt5.setOrigin().setScale(0.3);
        this.butt5.setInteractive();
        this.butt5.setVisible(false);
        this.butt5.on("pointerdown", ()=>this.ololo5());

        this.butt6 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt6.setOrigin().setScale(0.3);
        this.butt6.setInteractive();
        this.butt6.setVisible(false);
        this.butt6.on("pointerdown", ()=>this.ololo6());
        
        this.butt7 = this.physics.add.sprite(config.width/2,config.height - 40, "cont");
        this.butt7.setOrigin().setScale(0.3);
        this.butt7.setInteractive();
        this.butt7.setVisible(false);
        this.butt7.on("pointerdown", ()=>this.ololo7());

        const music = this.sound.add("ending", {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0,
          })

        music.play(config);   
        
        
        this.anims.create({
            key: "dog_anim",
            frames: this.anims.generateFrameNumbers("dog"),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "dog_head_anim",
            frames: this.anims.generateFrameNumbers("dog_head"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "HAL_anim",
            frames: this.anims.generateFrameNumbers("HAL"),
            frameRate: 5,
            repeat: -1
        });

        this.hal = this.physics.add.sprite(config.width/6, config.height - config.height/4, "HAL");
        this.hal.play("HAL_anim");
        this.hal.setOrigin().setScale(2);
        
        this.dog_head_scary = this.physics.add.sprite(config.width/6, config.height - config.height/4, "dog_head_scary");
        this.dog_head_scary.setOrigin().setScale(4);
        this.dog_head_scary.setVisible(false);

        this.hydralisk = this.physics.add.sprite(config.width/6, config.height - config.height/4, "hydralisk");
        this.hydralisk.play("hydralisk_anim");
        this.hydralisk.setOrigin().setScale(1.8);
        this.hydralisk.setVisible(false);
    }

    ololo1(){
        this.hal.setVisible(false);

        this.dog_head = this.physics.add.sprite(config.width/6, config.height - config.height/4, "dog_head");
        this.dog_head.play("dog_head_anim");
        this.dog_head.setOrigin().setScale(4);

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 - 25,"Гав! *радостно лает*",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt1.setVisible(false);
        this.butt2.setVisible(true);       
            
    }

    ololo2(){
        this.dog_head.setVisible(false);

        this.hal.setVisible(true);

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 -50,"Наличие воды, кислорода\nи средней температуры\nполностью соответствуют \nземным показателям.",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt2.setVisible(false);
        this.butt3.setVisible(true);
    }

    ololo3(){
        this.dog_head.setVisible(false);
        
        
        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 -50,"К сожалению топлива на обратный\nпуть может не хватить.\nУчитывая пройденный путь,\nвероятность успеха: 0.0001%.",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt3.setVisible(false);
        this.butt4.setVisible(true);
    }

    ololo4(){
        

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 -50,"Однако, после всего,\nчто мы с тобой прошли...",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt4.setVisible(false);
        this.butt5.setVisible(true);
    }

    ololo5(){
        this.dog_head_scary.setVisible(false);

        this.hal.setVisible(true);

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 -50,"0.0001% - \nэто то, что нам нужно!\nЗапускаю системы, \nмы вернемся домой!",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt5.setVisible(false);
        this.butt6.setVisible(true);
    }

    ololo6(){
        this.scene.start("lvl5");
        this.sound.removeByKey('ending');
                
    }

    ololo7(){
        
    }


    update(){
        this.background.tilePositionX += 1;
        
    }

    
    
    
}