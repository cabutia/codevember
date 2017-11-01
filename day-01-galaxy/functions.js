random = (min, max) => {
    return Math.random()*(max-min+1)+min
}

clear = (ctx, w, h) => {
    ctx.fillStyle = '#222'
    ctx.fillRect(0, 0, w, h)
}

drawStar = (c, star) => {
    if (star.y < canvas.height) {
        c.fillStyle = star.color;
        c.beginPath();
        c.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        c.fill();
    }
}

generateNewStars = (max) => {
    for (let i = 0; i < 6; i++) {
        let size = random(0, 1);
        let newStar = {
            x: random(0, max),
            y: 0 - random(0, 5),
            size: size,
            red: Math.round(random(127, 255)),
            green: Math.round(random(60, 255)),
            blue: Math.round(random(240, 255)),
            alpha: random(0,1),
            speed: random(0.2,1.5),
            speedX: 0,
            get color() {
                return `rgba(${this.red}, ${this.green}, ${this.blue}, ${this.alpha})`
            }
        }
        stars.push(newStar)
    }
}
