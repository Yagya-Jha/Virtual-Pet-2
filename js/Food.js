class Food{
    constructor(){
        this.image = loadImage("images/Milk.png");
        this.button1 = createButton("Feed the Dog");
        this.button2 = createButton("Add Food");
        foodStock = database.ref('food');
    }

    getFoodStock(y){
        y=y+1;
        database.ref('/').update({food:y});
    }

    deductFood(x){
        if(x<=0){
            x=0;
          }else{
            x=x-1;
            Happy=true;
            hours= d.getHours();
            setHours(hours);
            s = -1;
          }
          database.ref('/').update({food:x});
            }
        display(){
        this.button1.position(450,75);
        this.button2.position(650,75);
        this.button1.mousePressed(()=>
        {this.deductFood(foodS);
        })

        this.button2.mousePressed(()=>
        {this.getFoodStock(foodS);
        })

        imageMode(CENTER);
        image(this.image,235,240,50,50);
    }
    }