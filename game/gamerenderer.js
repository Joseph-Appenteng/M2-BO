import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];
        this.playeridle = new Rect(1,21,24,24);
    }
    loadImages()
    {
        let sources = ["download.jpeg","download.jpeg"];

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

    render()
    {
        let g = this.g;

        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);

        g.fillStyle = "#leca07";
        let player = this.game.player;
        let clip = this.playeridle;

        g.drawImage(this.image[1], clip.x, clip.y, clip.w, clip.h )
        
    }

}