import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];
        this.playeridle = new Rect(0,20,700,40);
        this.elec = new Rect(1,21,24,24);
    }
    loadImages()
    {
        let sources = ["28-288482_mole-clipart-whack-a-mole-from-whack-a-mole.png","28-288482_mole-clipart-whack-a-mole-from-whack-a-mole.png"];

        let scope = this;

        let loaded = 0;
        for (let i = 0; i < sources.length; i++)
        {
            let img = new Image();

            img.onload = function () 
            {
                loaded++;
                if (loaded == sources.length)
                {
                    scope.game.startGame();
                }
            }
            img.src = sources[i];
            this.images.push(img);
        }
    }
    renderSprite(img,clip,pos)
    {
        this.g.drawImage(img,
            clip.x, clip.y, clip.w, clip.h,
            pos.x, pos.y, pos.w, pos.h)
    }

    render()
    {
        let g = this.g;

        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

        this.renderSprite(this.images[1], this.playeridle, this.game.player);
             
        
    }

}