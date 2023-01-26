;(function () {
  
    let canvas, ctx, defaultFillColour, randoFillColour, score
  
  
    function begin () {
      canvas = document.getElementById('gameCanvas')
      gameText = document.getElementById('gameText')
      ctx = canvas.getContext('2d')
      score = Number(1)    
  
      
      defaultFillColour = 'green'
      randoFillColour = '#red'
  
      let gridObjects = generateGridOfShapes()
  
      
      canvas.addEventListener('click', (e) => {
  
        
        const canvasDimensions = canvas.getBoundingClientRect()
        const clickPosition = {
          x: Math.floor(e.clientX - canvasDimensions.left),
          y: Math.floor(e.clientY - canvasDimensions.top)
        }
  
    
        let i, lostGame
        for (i = 0 ; i < gridObjects.length ; i++ ) {
          if(isInsideAFillColourObject(clickPosition, gridObjects[i], randoFillColour)){
            if (score == 0) {
              gameText.innerHTML = " "
            } else {
              gameText.innerHTML =  + score 
            }
            score = score + 1
            
            gridObjects = generateGridOfShapes()
            lostGame = false
            break
          } 
          else {
            lostGame = true
          }
        } 
  
        if (lostGame){
    
          gameText.innerHTML = "GG"
          score = 0
        }
  
     });
      
    } 
  
      
    
    function generateGridOfShapes() {
      listOfShapes = [];
      
      let maxObjsHeight = 3
      let maxObjsWidth = 3
  
      
      
      let sqMargin = 25 
      let sqHeight = 50
      let sqWidth = 50
  
      
      
      let randoX = getRandomInRange(0, maxObjsWidth)
      let randoY = getRandomInRange(0, maxObjsHeight)
      let randoFill = ''
  
      let i, j, currX, currY, currWidth, currHeight, currShape, fillColour
      currXStart = 300
      currY = 100
  
      
      for (j = 0 ; j < maxObjsHeight ; j++){
        currX = currXStart
          for (i = 0 ; i < maxObjsWidth ; i++ ) {
            if ((i == randoX)&&(j==randoY)){
              fillColour = randoFillColour
            } else {
              fillColour = defaultFillColour
            }
            
            currShape = new Rectangle(
              currX, currY, sqWidth, sqHeight,
              fillColour, 'red', '5')
  
            currShape.draw()
            currX = currShape.rightX() + sqMargin
            listOfShapes.push(currShape)
          }
        currY = currShape.lowerY() + sqMargin
      }
  
      return listOfShapes
    } 
  
    
    class Rectangle{
      constructor(
        x = 0, y = 0,
        width = 0, height = 0,
        fillColor = '', strokeColor = '', strokeWidth = 2
      ) {
        this.x = Number(x)
        this.y = Number(y)
        this.width = Number(width)
        this.height = Number(height)
        this.fillColor = fillColor
        this.strokeColor = strokeColor
        this.strokeWidth = Number(strokeWidth)
      }
  
      
      area() {
        return this.width * this.height
      }
  
      getFillColor() {
        return this.fillColor
      }
  
      leftX() {
        return this.x
      }
  
      
      rightX() {
        return this.x + this.width 
      }
  
      
      upperY() {
        return this.y
      }
    
      
      lowerY() {
        return this.y + this.height
      }
  
      draw() {
        ctx.save()
        ctx.fillStyle = this.fillColor
        ctx.lineWidth = this.strokeWidth
  
        ctx.beginPath()
        ctx.strokeStyle = this.strokeColor
        ctx.rect(this.x, this.y, this.width, this.height)
  
        ctx.fill()
        ctx.stroke()
  
        ctx.restore()
      }
    } 

    

    
  
    function getRandomInRange(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
   
    function isInsideAFillColourObject(point, gridObject, fillColor) {
      return (
        (gridObject.getFillColor() == randoFillColour) &&
        (point.x >= gridObject.leftX()) && 
        (point.x <= gridObject.rightX()) && 
        (point.y >= gridObject.upperY()) &&
        (point.y <= gridObject.lowerY())
      )
    }
  
    function bindCanvasMousePos() {
      const canvasDimensions = canvas.getBoundingClientRect()
    }
  
 
    document.addEventListener('DOMContentLoaded', begin)
  
  })()

  function startCountdown(seconds) {
    let counter = seconds;
      
    const interval = setInterval(() => {
      console.log(counter);
      counter--;
        
      if (counter < 0 ) {
        clearInterval(interval);
        console.log('Ding!');
      }
    }, 1000);
  }

  