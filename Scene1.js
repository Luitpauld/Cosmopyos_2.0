class Scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload(){
        //Прогружаем все картинки, музыку
        this.load.image("main_background", "img/space.png");
        this.load.image("lvl1_bg", "img/space_ice.png");
        this.load.image("lvl2_bg", "img/space_red.png");
        this.load.image("lvl3_bg", "img/space_moon.png");
        this.load.image("lvl4_bg", "img/space_earth.png");
        this.load.image("dog_head_scary", "img/dog_head_scary.png");
        this.load.image("shield_power", "img/shield_power.png");
        this.load.image("logo", "img/logo.png");

        this.load.audio("lvl1_sound", "sound/Pixel_Rain.mp3");
        this.load.audio("lvl2_sound", "sound/Fairy.mp3");
        this.load.audio("lvl3_sound", "sound/Frog.mp3");
        this.load.audio("lvl4_sound", "sound/OneMelodySong.mp3");
        this.load.audio("lvl5_sound", "sound/GameNotOver.mp3");
        this.load.audio("main", "sound/Moonlight_and_Sunrise.mp3");
        this.load.audio("brif_sound", "sound/brif_mus.mp3");
        this.load.audio("lil_main", "sound/win_lose_table.mp3");
        this.load.audio("portal", "sound/space_module.mp3");
        this.load.audio("r2d2_scream", "sound/r2d2.mp3");
        this.load.audio("horse", "sound/horse.mp3");
        this.load.audio("waaagh", "sound/waaagh.mp3");
        this.load.audio("ending", "sound/SadEnding.mp3");

        this.load.image("meteor1", "img/meteor_yellow.png");
        this.load.image("meteor2", "img/meteor.png");
        this.load.image("meteor3", "img/meteor_blue.png");
        this.load.image("musOn", "img/musicOn.png");
        this.load.image("musOff", "img/musicOff.png");
        this.load.image("portal", "img/space_module.png");
        this.load.image("r2d2", "img/r2d2.png");
        this.load.image("roach", "img/roach.png");
        this.load.image("orcs", "img/orcs.png");
        this.load.image("help", "img/help.png");
        this.load.image("help_mob", "img/help_mob.png");
        this.load.image("close", "img/close.png");

        this.load.spritesheet("menu_table", "img/menu.png", {
            frameWidth: 192,
            frameHeight: 108
        });

        this.load.spritesheet("dog", "img/dog_sheet.png", {
            frameWidth: 81,
            frameHeight: 52
        });

        this.load.spritesheet("dog_hit", "img/dog_hit.png", {
            frameWidth: 81,
            frameHeight: 52
        });

        this.load.spritesheet("dog_head", "img/dog_head_sheet.png", {
            frameWidth: 23,
            frameHeight: 22
        });

        this.load.spritesheet("bang", "img/bang.png", {
            frameWidth: 192,
            frameHeight: 225
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
             // Сообщаем платформе, что игра загрузилась и можно начинать играть.
             ysdk.features.LoadingAPI?.ready();
             var i18nLang = ysdk.environment.i18n.lang;
             ysdk.features.GameplayAPI?.stop();
         })
         .catch(console.error);
        */
        this.background = this.add.tileSprite(0,0, config.width, 200, "main_background");
        this.background.setOrigin(0,0).setScale(3);
        
        this.logo = this.physics.add.sprite(config.width/2, config.height/5 - 20, "logo");
        this.logo.setOrigin().setScale(0.7);

        this.anims.create({
            key: "menu_anim",
            frames: this.anims.generateFrameNumbers("menu_table"),
            frameRate: 15,
            repeat: -1
        });

        this.menu_table = this.physics.add.sprite(config.width/2, config.height/2, "menu_table");
        this.menu_table.setOrigin().setScale(3);
        this.menu_table.play("menu_anim");

        


        if(localStorage.brif != undefined && localStorage.brif != 'brif1'){
            const Butt2 = this.add.text(config.width/2 - 135, config.height/2 -60, "ПРОДОЛЖИТЬ", {
                fontFamily: 'font1', fontSize: '40px', color: 'black'
            });
            Butt2.setInteractive();
            Butt2.on("pointerdown", ()=>this.next_lvl());
    
            const Butt = this.add.text(config.width/2 - 130, config.height/2, "НАЧАТЬ ИГРУ", {
                fontFamily: 'font1', fontSize: '40px', color: 'black'
            });
            Butt.setInteractive();
            Butt.on("pointerdown", ()=>this.toTheBrif1()); 
            
            const Butt1 = this.add.text(config.width/2 - 85, config.height/2 + 55, "ПОМОЩЬ", {
                fontFamily: 'font1', fontSize: '40px', color: 'black'
            });
            Butt1.setInteractive();
            Butt1.on("pointerdown", ()=>this.showHelp());
         
    }
    else{
        const Butt = this.add.text(config.width/2 - 130, config.height/2 - 35, "НАЧАТЬ ИГРУ", {
            fontFamily: 'font1', fontSize: '40px', color: 'black'
        });
        Butt.setInteractive();
        Butt.on("pointerdown", ()=>this.toTheBrif1()); 
        
        const Butt1 = this.add.text(config.width/2 - 85, config.height/2 + 25, "ПОМОЩЬ", {
            fontFamily: 'font1', fontSize: '40px', color: 'black'
        });
        Butt1.setInteractive();
        Butt1.on("pointerdown", ()=>this.showHelp());
    }


        this.musicOff = this.add.image(640,180, "musOff");
        this.musicOn = this.add.image(640,180, "musOn");
            
        if(this.sound.mute == true){
            this.musicOff.setVisible(true);
            this.musicOn.setVisible(false);
        }
        else{
            this.musicOff.setVisible(false);
            this.musicOn.setVisible(true);
        }
        this.musicOn.setOrigin().setScale(2);
        this.musicOn.setInteractive();
        this.musicOn.on("pointerdown", ()=>this.music_controller());
        this.musicOff.setOrigin().setScale(2);
        this.musicOff.setInteractive();
        this.musicOff.on("pointerdown", ()=>this.music_controller());     

        this.help_table = this.physics.add.sprite(config.width/2, config.height/2-80, "help");
        this.help_table.setOrigin().setScale(0.7);
        this.help_table.setVisible(false);

        this.text1 = this.add.text(145, config.height - 165,"Перетаскивай космический корабль \nнажав левую кнопку мыши.\nНе сталкивайся с метеоритами, \nзапас прочности корабля - 5 попаданий!",
            {fontFamily: 'font1', color: "#00e6e6", fontSize:'25px', align: "center"});

        this.text1.setVisible(false);    
        
        this.help_table_mob = this.physics.add.sprite(config.width/2, config.height/2-80, "help_mob");
        this.help_table_mob.setOrigin().setScale(0.7);
        this.help_table_mob.setVisible(false);

        this.text2 = this.add.text(145, config.height - 165,"Нажми на экран и, удерживая палец,\nперемещай космический корабль.\nНе сталкивайся с метеоритами, \nзапас прочности корабля - 5 попаданий!",
            {fontFamily: 'font1', color: "#00e6e6", fontSize:'25px', align: "center"});

        this.text2.setVisible(false);   

        this.butt_close = this.physics.add.sprite(config.width/2,config.height - 30, "close");
        this.butt_close.setOrigin().setScale(0.3);
        this.butt_close.setInteractive();
        this.butt_close.setVisible(false);
        this.butt_close.on("pointerdown", ()=>this.closeHelp());

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

        
        this.anims.create({
            key: "dog_anim",
            frames: this.anims.generateFrameNumbers("dog"),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: "dog_hit_anim",
            frames: this.anims.generateFrameNumbers("dog_hit"),
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
            key: "bang_anim",
            frames: this.anims.generateFrameNumbers("bang"),
            frameRate: 10,
            
        });
        this.anims.create({
            key: "HAL_anim",
            frames: this.anims.generateFrameNumbers("HAL"),
            frameRate: 5,
            repeat: -1
        });

        

                
    }

    next_lvl(){
        this.scene.start(localStorage.brif, parseInt(localStorage.bonus));
        this.sound.removeByKey('main');
    }

    toTheBrif1()
    {
        localStorage.brif = 'brif1';
        this.scene.start("brif1");
        this.sound.removeByKey('main');
    }
    

    update(){
        this.background.tilePositionX += 6;
        
    }

    showHelp(){
        /*YaGames.init()
         .then((ysdk) => {
             // Проверяем на какой платформе запущена игра
            if(ysdk.deviceInfo.isMobile()){
                this.text2.setVisible(true);
                this.help_table_mob.setVisible(true);
                this.menu_table.setVisible(false);
                this.butt_close.setVisible(true);
                this.logo.setVisible(false);
            }
            else{
                this.text1.setVisible(true);
                this.help_table.setVisible(true);
                this.menu_table.setVisible(false);
                this.butt_close.setVisible(true);
                this.logo.setVisible(false);
            }       
         })
         .catch(console.error);*/

         this.text1.setVisible(true);
         this.help_table.setVisible(true);
         this.menu_table.setVisible(false);
         this.butt_close.setVisible(true);
         this.logo.setVisible(false);
    }

    closeHelp(){
        this.text1.setVisible(false);
        this.text2.setVisible(false);
        this.help_table.setVisible(false);
        this.help_table_mob.setVisible(false);
        this.menu_table.setVisible(true);
        this.butt_close.setVisible(false);
        this.logo.setVisible(true);
    }
    

    music_controller()
    {
        if(this.sound.mute == true){
            this.sound.mute = false;
            this.musicOn.setVisible(true);
            this.musicOff.setVisible(false);
        }
        else{
            this.sound.mute = true;
            this.musicOff.setVisible(true);
            this.musicOn.setVisible(false);
        }
        
    }
    
}