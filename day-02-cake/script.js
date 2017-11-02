let canvas   = document.getElementById('cake')
let ctx      = canvas.getContext('2d')
let body     = document.querySelector('body')
let bsod     = document.querySelector('#bsod')
let isBSOD   = false
let viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    grid: 10
}
// alert(viewport.width)
// alert(viewport.height)
canvas.width = viewport.width
canvas.height = (80 * viewport.height) / 100
chromeSprite.pos.x = canvas.width / 10
chromeSprite.pos.y = 35
ramSprite.pos.y = 41
ramSprite.pos.x = 10
cakeSprite.pos.y = 39
cakeSprite.pos.x = 10

let intVal = setInterval(() => {
    console.log('run');
    clear(ctx)
    // drawGrid(ctx)
    drawSprite(ctx, cakeSprite)
    drawSprite(ctx, ramSprite)
    moveSprite('left', chromeSprite)
    drawSprite(ctx, chromeSprite)
    checkForCollision(ramSprite, chromeSprite)
    cakeToRam(cakeSprite, ramSprite, chromeSprite)
}, 30)

// let chr = new Ram(ctx)
//
// chr.draw(10, 10)
