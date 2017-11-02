let drawGrid = c => {
    if (!isBSOD) {
        c.beginPath()
        c.lineWidth = .1
        c.strokeStyle = '#eee'

        let y = 10.5
        while (y < canvas.height) {
            c.moveTo(0, y)
            c.lineTo(viewport.width, y)
            y = y + 10
        }
        let x = 10.5
        while (x < canvas.width) {
            c.moveTo(x, 0)
            c.lineTo(x, viewport.height)
            x = x + 10
        }
        c.stroke()
    }
}

let drawSprite = (c, sprite) => {
    if (sprite.visible) {
        for (var y = 0; y < sprite.values[sprite.iteration].length; y++) {
            for (var x = 0; x < sprite.values[sprite.iteration][y].length; x++) {
                let color = sprite.colors[sprite.values[sprite.iteration][y][x]]
                let xPos = sprite.pos.x * 10 + x * (10 * sprite.size)
                let yPos = sprite.pos.y * 10 + y * (10 * sprite.size)
                c.fillStyle = color
                c.fillRect(xPos, yPos, (10 * sprite.size), (10 * sprite.size))
            }
        }
        if (sprite.values.length !== 1) {
            if(sprite.iteration == sprite.values.length - 1) {
                sprite.direction = '--'
            } else if (sprite.iteration == 0){
                sprite.direction = '++'
            }
            eval(`sprite.iteration${sprite.direction}`)
        }
    }
}

let clear = c => {
    c.clearRect(0, 0, canvas.width, canvas.height)
}

let moveSprite = (direction, sprite) => {
    if (sprite.moving) {
        switch (direction) {
            case 'left':
                sprite.pos.x--
                break;
            case 'right':
                sprite.pos.x++
                break;
            case 'down':

                break;
            case 'up':

                break;
        }
    }
}

let checkForCollision = (a, b) => {
    // console.log(`Ram [${a.pos.x}]   Chrome [${b.pos.x}]`);
    if (a.pos.x > b.pos.x) {
        a.visible = false
    }
}

let cakeToRam = (cake, ram, chrome) => {
    if (chrome.pos.x - 20 < cake.pos.x) {
        if (body.style.background !== '#222') {
            isBSOD = !isBSOD
            body.style.background = '#222'
        }
        if (chrome.pos.x - 16 < cake.pos.x) {
            cake.visible = false
            ram.visible  = true

            chrome.moving = false
            chrome.iteration = chrome.values.length - 1

            setTimeout(() => {
                clearInterval(intVal)
                BSOD()
            }, 1000)
        }
    }
}

let BSOD = () => {
    body.style.transition = 'none'
    body.style.background = '#0000ff'
    clear(ctx)
    ctx.fillStyle = '#fff'
    ctx.font = '30px VT323'
    ctx.fillText('#Codevember', (viewport.width / 10), 60)
    setTimeout(() => {
        clear(ctx)
        ctx.fillText('Day 2', (viewport.width / 10), 100)
        setTimeout(() => {
            bsod.style.display = 'block'
        }, 1000)
    }, 1000)
}

let POST = () => {

}
