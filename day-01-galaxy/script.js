let canvas = document.getElementById('galaxy')
canvas.width = window.innerWidth
canvas.height = (80 * window.innerHeight) / 100
let ctx = canvas.getContext('2d')
let stars = []

ctx.fillStyle = '#222'
ctx.fillRect(0, 0, canvas.width, canvas.height)

console.log(`There are ${stars.length} stars on the canvas!`);

setInterval(() => {
    let tmp = []
    generateNewStars(canvas.width)
    clear(ctx, canvas.width, canvas.height)
    for (var i = 0; i < stars.length; i++) {
        let star = stars[i]
        star.y = star.y + star.speed
        star.x = star.x + star.speedX
        drawStar(ctx, star)
        if (star.y <= (canvas.height + 10)) tmp.push(star)
    }
    stars = tmp;
    // console.info(stars.length);
}, 30)

let lastPosition = 0;
window.addEventListener('mousemove', e => {
    let position = e.clientX
    for (var i = 0; i < stars.length; i++) {
        if (lastPosition < position) {
            stars[i].x = stars[i].x - 0.5 * stars[i].speed
        } else {
            stars[i].x = stars[i].x + 0.5 * stars[i].speed
        }
    }
    lastPosition = e.clientX
})

window.addEventListener('click', e => {
    let position = {
        x: e.clientX,
        y: (e.clientY - canvas.offsetTop)
    }
    let size = 150
    for (var i = 0; i < stars.length; i++) {
        if (stars[i].x > (position.x - size / 2) &&
            stars[i].x < (position.x + size / 2) &&
            stars[i].y > (position.y - size / 2) &&
            stars[i].y < (position.y + size / 2))
        {
            stars[i].speed = stars[i].speed * 2;
        }
    }
})

window.addEventListener('contextmenu', e => {
    let position = {
        x: e.clientX,
        y: (e.clientY - canvas.offsetTop)
    }
    e.preventDefault()
    let size = 150 / 2
    for (var i = 0; i < stars.length; i++) {
        if (stars[i].x > position.x - size && stars[i].x < position.x + size && stars[i].y > position.y - size && stars[i].y > position.y - size ) {
            if (stars[i].x > position.x - size && stars[i].x < position.x && stars[i].y > position.y - size && stars[i].y < position.y + size) {
                stars[i].speedX = stars[i].speedX - 1;
            }
            if (stars[i].x < position.x + size && stars[i].x > position.x && stars[i].y > position.y - size && stars[i].y < position.y + size) {
                stars[i].speedX = stars[i].speedX + 1;
            }
            stars[i].speed = stars[i].speed + 1;
        }

        // if (stars[i].x > (position.x - size / 2) &&
        //     stars[i].x < (position.x + size / 2) &&
        //     stars[i].y > (position.y - size / 2) &&
        //     stars[i].y < (position.y + size / 2))
        // {
        //     stars[i].speed = stars[i].speed * .5;
        // }
    }
})
