class Pelota{
    
    constructor(){
   
        this.diam = random(70, 110);
        this.rad = this.diam /2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random(-5, 5);
        this.vely = random(-5, 5);

        this.nuevoColor = color("#D38C9D");
    }

    actualizar(){ 
        if(this.posx > width - this.rad || this.posx < this.rad){
            this.velx *= -1;
        }

        if(this.posy > height - this.rad || this.posy < this.rad){
            this.vely *= -1;
        }

        this.posx += this.velx;
        this.posy += this.vely;
        
    }

    visualizar(){
        fill(this.nuevoColor)
        stroke("#D38C9D");
        strokeWeight(7);
        circle(this.posx, this.posy, this.diam);
       
       
        //oreja derecha 

        fill("#ffffffff");
        stroke("#ffffffff");
        strokeWeight(1);
        rect(this.posx+12, this.posy-12, this.diam/6, this.diam/2, 10);
        
//color de oreja derecha
        fill("#D38C9D");
        stroke("#D38C9D");
        strokeWeight(1);
        rect(this.posx+12, this.posy-1, this.diam/10, this.diam/2, 10);

//oreja izquierda

        fill("#ffffffff");
        stroke("#ffffffff");
        strokeWeight(1);
        rect(this.posx-12, this.posy-12, this.diam/6, this.diam/2, 10);

//color de oreja izquierda
        fill("#D38C9D");
        stroke("#D38C9D");
        strokeWeight(1);
        rect(this.posx-12, this.posy-1, this.diam/10, this.diam/2, 10);


 //cuerpo
        
        fill("#ffffffff");
        stroke("#ffffffff");
        strokeWeight(3);
        rect(this.posx, this.posy+25, this.diam/2, this.diam-20, 10);



//ojo derecho

        fill("#000000ff");
        stroke("#000000ff");
        strokeWeight(1);
        circle(this.posx+7, this.posy+5, this.diam/10);

//ojo izquierdo

        fill("#000000ff");
        stroke("#000000ff");
        strokeWeight(1);
        circle(this.posx-7, this.posy+5, this.diam/10);

 //nariz

        fill("#D38C9D");
        stroke("#D38C9D");
        strokeWeight(1);
        ellipse(this.posx, this.posy+15, this.diam/10, this.diam/14);

    
    }
}