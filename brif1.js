class Brif1 extends Phaser.Scene {
    constructor() {
        super("brif1");
    }

    preload(){
        //Прогружаем все картинки, музыку
        this.load.image("main_background", "img/space.png");
        this.load.image("brif_table", "img/brif_table.png");
        this.load.image("ice", "img/ice.png");
        this.load.image("cont", "img/continue.png");

        this.load.spritesheet("hydralisk", "img/hydralisk.png", {
            frameWidth: 60,
            frameHeight: 56
        });

        this.load.spritesheet("menu_table", "img/menu.png", {
            frameWidth: 192,
            frameHeight: 108
        });

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
        
        this.anims.create({
            key: "menu_anim",
            frames: this.anims.generateFrameNumbers("menu_table"),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: "overmind_anim",
            frames: this.anims.generateFrameNumbers("overmind"),
            frameRate: 15,
            repeat: -1
        });

        this.anims.create({
            key: "hydralisk_anim",
            frames: this.anims.generateFrameNumbers("hydralisk"),
            frameRate: 15,
            repeat: -1
        });

        this.menu_table = this.physics.add.sprite(config.width/2, config.height/3, "menu_table");
        this.menu_table.setOrigin().setScale(3);
        this.menu_table.play("menu_anim");

        this.brif_table = this.physics.add.sprite(config.width/2,config.height - config.height/4, "brif_table");
        
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 - 25,"Привет, Космо! До сих пор странно, \nчто разговариваю с собакой...",
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

        const music = this.sound.add("brif_sound", {
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

        /*this.dog_head = this.physics.add.sprite(config.width/2, config.height/4, "dog_head");
        this.dog_head.play("dog_head_anim");
        this.dog_head.setOrigin().setScale(4);

        this.planet = this.physics.add.sprite(config.width/2 - 50, config.height/3, "ice");
        this.hydralisk = this.physics.add.sprite(config.width/6, config.height - config.height/4, "hydralisk");
        this.hydralisk.play("hydralisk_anim");
        this.hydralisk.setOrigin().setScale(1.8);
        */
    }

    ololo1(){
        this.hal.setVisible(false);

        this.dog_head = this.physics.add.sprite(config.width/6, config.height - config.height/4, "dog_head");
        this.dog_head.play("dog_head_anim");
        this.dog_head.setOrigin().setScale(4);

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 - 25,"Гав! *недовольно рычит*",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt1.setVisible(false);
        this.butt2.setVisible(true);       
            
    }

    ololo2(){
        this.dog_head.setVisible(false);

        this.hal.setVisible(true);

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 -50,"Что ж... Я HAL - ИИ твоего корабля.\nНаша задача - найти \nпригодные для колонизации \nпланеты в этой системе.",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt2.setVisible(false);
        this.butt3.setVisible(true);
    }
    
    ololo3(){
        this.planet = this.physics.add.sprite(config.width/2 - 50, config.height/3, "ice");
        this.water = this.add.text(config.width/2 + 50, config.height/3 - 50, "H20 = ???", {fontFamily: 'font1', color: 'black'});
        this.oxygen = this.add.text(config.width/2 + 50, config.height/3, "02 = ???", {fontFamily: 'font1', color: 'black'});
        this.temp = this.add.text(config.width/2 + 50, config.height/3 + 50, "t'C = ???", {fontFamily: 'font1', color: 'black'});
        

        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 - 40,"Первая из них: \nOGLE-2005-BLG-390Lb.\nЛедяная планета.",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt3.setVisible(false);
        this.butt4.setVisible(true);       
                
    }

    ololo4(){
        this.text1.setVisible(false);
        this.text1 = this.add.text(config.width/2 - 80, config.height - config.height/4 - 50,"Необходимо пролететь по орбите \nкакое то время, чтобы\nотсканировать поверхность.\nУдачи! И берегись астероидов!",
            {fontFamily: 'font1', color: "Black", fontSize:'25px'});
        this.butt4.setVisible(false);
        this.butt5.setVisible(true);
    }

    ololo5(){
        this.scene.start("lvl1");
        this.sound.removeByKey('brif_sound');
    }


    update(){
        this.background.tilePositionX += 1;
        
    }

    
    
    
}