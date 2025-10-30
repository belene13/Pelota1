class Pelota{
    
    constructor(){
   
        this.diam = random(50, 100);
        this.rad = this.diam /2;

        this.posx = random(this.rad, width - this.rad);
        this.posy = random(this.rad, height - this.rad);

        this.velx = random(-5, 5);
        this.vely = random(-5, 5);

        this.nuevoColor = Color(random(10, 50), random(100, 200), random(10, 50), 100);
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
        stroke("#2d7e35ff");
        strokeWeight(14);
        circle(this.posx, this.posy, this.diam);

    }
}