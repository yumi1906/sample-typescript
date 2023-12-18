enum Fruits {
    Banana = 'banana',
    Apple = 'apple',
    Orange = 'orange',
}

function getFruits(fruits: Fruits): string {
    switch (fruits) { 
        case Fruits.Apple:
            return 'りんご';
        case Fruits.Banana:
            return 'ばなな';
        case Fruits.Orange:
            return 'おれんじ';
        default:
            return 'きうい';
    }
}

console.log(getFruits(Fruits.Banana));