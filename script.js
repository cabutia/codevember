let days = [
    { number: '01', word: ['galaxy', 'galaxia'], href: 'day-01-galaxy' },
    { number: '02', word: ['cake', 'galleta'], href: 'day-02-cake' },
    { number: '03', word: ['tree', 'arbol'], href: 'day-03-tree' },
    { number: '04', word: ['sapphire', 'zafiro'], href: 'day-04-sapphire' },
    { number: '05', word: ['sword', 'espada'], href: 'day-05-sword' },
    { number: '06', word: ['storm', 'tormenta'], href: 'day-06-storm' },
    { number: '07', word: ['pillow', 'almohada'], href: 'day-07-pillow' },
    { number: '08', word: ['fridge', 'refrigerador'], href: 'day-08-fridge' },
    { number: '09', word: ['french fries', 'papas fritas'], href: 'day-09-french-fries' },
    { number: '10', word: ['rocket', 'cohete'], href: 'day-10-rocket' },
    { number: '11', word: ['bike', 'bicicleta'], href: 'day-11-bike' },
    { number: '12', word: ['zebra', 'cebra'], href: 'day-12-zebra' },
    { number: '13', word: ['orange', 'naranja'], href: 'day-13-orange' },
    { number: '14', word: ['cheese', 'queso'], href: 'day-14-cheese' },
    { number: '15', word: ['rock', 'rock'], href: 'day-15-rock' },
    { number: '16', word: ['internet', 'internet'], href: 'day-16-internet' },
    { number: '17', word: ['speed', 'velocidad'], href: 'day-17-speed' },
    { number: '18', word: ['motors', 'motores'], href: 'day-18-motors' },
    { number: '19', word: ['ocean', 'oceano'], href: 'day-19-ocean' },
    { number: '20', word: ['swag', 'swag'], href: 'day-20-swag' },
    { number: '21', word: ['fight', 'pelea'], href: 'day-21-fight' },
    { number: '22', word: ['planet', 'planeta'], href: 'day-22-planet' },
    { number: '23', word: ['king', 'rey'], href: 'day-23-king' },
    { number: '24', word: ['heart', 'corazon'], href: 'day-24-heart' },
    { number: '25', word: ['avocado', 'aguacate'], href: 'day-25-avocado' },
    { number: '26', word: ['mountain', 'montaña'], href: 'day-26-mountain' },
    { number: '27', word: ['beer', 'cerveza'], href: 'day-27-beer' },
    { number: '28', word: ['pen', 'lapicera'], href: 'day-28-pen' },
    { number: '29', word: ['giraffe', 'jirafa'], href: 'day-29-giraffe' },
    { number: '30', word: ['supernova', 'supernova'], href: 'day-30-supernova' }
]

let calendar = document.querySelector('.calendar-wrapper')
let dropdown = document.querySelector('.networks');
let networks = document.querySelector('#' + dropdown.getAttribute('data-dropdown'));

for (var i = 0; i < days.length; i++) {
    let day = days[i]
    let element =
    `<a href="./${day.href}" class="day-wrapper">
        <div class="day">
            <span class="word-es">${day.word[1]}</span>
            <span class="word-en">${day.word[0]}</span>
            ${day.number}
        </div>
    </a>`
    calendar.innerHTML += element
}

networks.parentElement.removeChild(networks);
dropdown.appendChild(networks);
