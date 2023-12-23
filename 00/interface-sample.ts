interface Color { 
    readonly rgb: string;
    opacity: number;
    alias?: string;
}

const tq: Color = { rgb: 'ff0000', opacity: 1 }

tq.alias = 'turquoise';
console.log(tq.alias);
// tq.rgb = '03c1ff';