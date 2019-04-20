const fs = require('fs');
const faker = require('faker');
const {Readable} = require('stream');

function* fakeSymbols(){
    
    for (let a of alphabet){
        for (let b of alphabet){
            for (let c of alphabet){
                for (let d of alphabet){
                    for (let e of alphabet){
                    yield `${a}${b}${c}${d}${e}, ${faker.company.companyName('string')}\n`;
    }}}}}
}

const alphabet = [...Array(26).keys()].map((x)=>String.fromCharCode(x+65))
class LineStream extends Readable {
    constructor(iterable, options) {
        super(options);
        this.it = iterable;

    }
    _read (size){
        // ignoring size...
        var result = this.it.next();
        if (!result.done){
            this.push(result.value);
        } else {
            this.push(null);
        }
    }
}

const stockLines = new LineStream(fakeSymbols());
stockLines.pipe(new fs.WriteStream('symbols.csv', {highWaterMark: 10000000}));