class Scene6 extends Phaser.Scene {
    constructor() {
        super("lvl5");
    }
    create() {
         /*Яндекс
    YaGames.init()
    .then((ysdk) => {
        ysdk.features.GameplayAPI?.start();
    })
    .catch(console.error);
    */
        this.background = this.add.tileSprite(0,0, config.width, 200, "main_background");
        this.background.setOrigin(0,0).setScale(3);  

       

        this.hit_count = 19;
        this.shield = this.physics.add.sprite(50, 50, "shield_power");

        this.live_text = this.add.text(60, 30, " : " + (this.hit_count+1), {
            fontFamily: 'font1', fontSize: '35px', color: '#00e6e6'
        });

        this.meteors = this.physics.add.group();
        
        this.time.addEvent({
            delay: 700,
            callback: this.spawnMeteors,
            callbackScope: this,
            loop: true
        });

        
        

        this.dog = this.physics.add.sprite(config.width/2, config.height/2, "dog");
        this.dog.play("dog_anim");
        this.dog.setOrigin().setScale(2);

        const music = this.sound.add("lvl5_sound", {
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

        this.physics.add.overlap(this.dog, this.bonus, this.collideBonus, null, this);
        this.physics.add.overlap(this.dog, this.meteors, this.collideMeteor, null, this);
        
    }
    
    spawnMeteors()
    {
        let chance = Phaser.Math.Between(1,7);
        
        if(chance == 5){
            let startY = Phaser.Math.Between(50, config.height - 50);
            let meteor = this.meteors.create(
            config.width + 50,
            startY,
            'meteor3'
            );
            meteor.speed = 25;
            meteor.setOrigin().setScale(2);
            }
        else if(chance == 7){
            let arr = [50, 200, 350, 500];

        arr.splice(Phaser.Math.Between(0,3), 1);
        
        for(let i=0; i<arr.length; i++){
        let meteor1 = this.meteors.create(
        config.width + 50,
        arr[i],
        'meteor2'
        );
        meteor1.setOrigin().setScale(2);
        meteor1.speed = 10;
        }}
        else{
            let startY = Phaser.Math.Between(50, config.height - 50);
                let meteor = this.meteors.create(
                config.width + 50,
                startY,
                'meteor1'
                );
                meteor.speed = Phaser.Math.Between(7,15);
                meteor.setOrigin().setScale(2);
        }    
                
    }

   

    
    
    
    moveMeteor(meteor, speed){
        //перемещение объекта на экране справа налево
        meteor.x -= speed;
        //крутим объект
        meteor.angle -= 1;
        
        if(meteor.x<0)
        {
            meteor.destroy();
        }
    }

    loseFunc()
    {
        this.scene.start("False_end");
        this.sound.removeByKey('lvl5_sound');
    }

    winFunc(){
        
        this.scene.start("Titles");
        this.sound.removeByKey('lvl5_sound');
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
        





        this.meteors.getChildren().forEach(meteor => {
            this.moveMeteor(meteor, meteor.speed);
        });

        var pointer = this.input.activePointer;
        if (pointer.isDown) {
            this.dog.x = pointer.x+50;
            this.dog.y = pointer.y;            
        } 
        
        
    }

    
}