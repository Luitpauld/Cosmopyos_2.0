class Scene2 extends Phaser.Scene {
    constructor() {
        super("lvl1");
    }
    create() {
        /*Яндекс
    YaGames.init()
    .then((ysdk) => {
        ysdk.features.GameplayAPI?.start();
    })
    .catch(console.error);
    */   
        this.hit_count = 4;
        
        this.background = this.add.tileSprite(0,0, config.width, 200, "lvl1_bg");
        this.background.setOrigin(0,0).setScale(3);  

        this.shield = this.physics.add.sprite(50, 50, "shield_power");
        
        

        this.live_text = this.add.text(60, 30, " : " + (this.hit_count+1), {
            fontFamily: 'font1', fontSize: '35px', color: '#00e6e6'
        });

        this.meteors = this.physics.add.group();
        
        this.time.addEvent({
            delay: 600,
            callback: this.spawnMeteors,
            callbackScope: this,
            loop: true
        });

        this.bonus = this.physics.add.sprite(config.width, config.heigth, "portal");
        this.bonus.setOrigin().setScale(0.3);

        this.dog = this.physics.add.sprite(config.width/2, config.height/2, "dog");
        this.dog.play("dog_anim");
        this.dog.setOrigin().setScale(2);

        const music = this.sound.add("lvl1_sound", {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
          })

        music.on('complete', ()=> this.winFunc());
        music.play();  

        this.bonus_on_this_lvl = 0;

        this.physics.add.overlap(this.dog, this.bonus, this.collideBonus, null, this);
        this.physics.add.overlap(this.dog, this.meteors, this.collideMeteor, null, this);

        
    }

    spawnMeteors()
    {
        let startY = Phaser.Math.Between(50, config.height - 50);
        let meteor = this.meteors.create(
        config.width + 50,
        startY,
        'meteor1'
        );
        meteor.speed = 10;
        meteor.setOrigin().setScale(2);
        meteor.angle -= 1;
        this.count++;
    }

    winFunc(){
        this.scene.start("Win", ["brif2", this.bonus_on_this_lvl]);
        this.sound.removeByKey('lvl1_sound');
    }

    moveMeteor(meteor, speed){
        meteor.x -= speed;
        meteor.angle -= 1;
        if(meteor.x<0)
            {
                meteor.destroy();
            }
    }

    moveBonus(bonus, speed){
        bonus.x -= speed;
        bonus.angle -= 1;
        if(bonus.x<0)
        {
            setTimeout(()=> this.resetBonusPos(bonus), 10000);
        }
    }

    loseFunc()
    {
        this.scene.start("Lose", ["lvl1",0]);
        this.sound.removeByKey('lvl1_sound');
    }

    resetBonusPos(bonus){
        bonus.x = config.width + 500;
        bonus.y = Phaser.Math.Between(20, config.height -20);
    }
    
    collideBonus(dog, bonus) {
    
        bonus.disableBody(true, true);
        const space_module = this.sound.add("portal", {
            mute: false,
            volume: 2,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: false,
            delay: 0,
          })
        space_module.play();

        var bonus_text = this.add.text(config.width/2 - 130, config.height/3, "НАЙДЕН БОНУС!", {
            fontFamily: 'font1', fontSize: '40px', color: '#00e6e6'
        });
        setTimeout(()=>bonus_text.setVisible(false), 1200);
        this.bonus_on_this_lvl += 1;
    }

    collideMeteor(dog, meteor) {
        if(this.hit_count==0)
        {
            dog.play("bang_anim");
            this.dog.setOrigin().setScale(1.3);
            this.live_text.setText(" : 0");
            setTimeout(()=>dog.disableBody(true, true), 700);
            setTimeout(()=>this.loseFunc(), 1500);
        }
        else{
            meteor.disableBody(true, true);
            dog.play("dog_hit_anim");
            dog.setOrigin().setScale(2);
            setTimeout(()=>dog.play("dog_anim"), 1500);
            this.hit_count--;
            this.live_text.setText(" : " + (this.hit_count +1));
        }
    }

    update(){
        this.background.tilePositionX += 6;
        setTimeout(()=> this.moveBonus(this.bonus,4), 1000);
        
        this.meteors.getChildren().forEach(meteor => {
            
                this.moveMeteor(meteor, meteor.speed);
            
        });
        

        var pointer = this.input.activePointer;
        if (pointer.isDown) {
            if(pointer.x > config.width)
            {
                this.dog.x = config.width -100;
            }
            else if(pointer.x < 0)
            {
                this.dog.x = 100;
            }else{
            this.dog.x = pointer.x+50;
            }
            
            if(pointer.y > config.height)
                {
                    this.dog.y = config.height - 100;
                }
                else if(pointer.y < 0 )
                    {
                        this.dog.y = 100;
                    }
                    else{
                        this.dog.y = pointer.y;            
                    }
        } 
        
        
    }

    
}