class ColorNode {
  constructor(r, g, b){
    this.R = r;
    this.G = g;
    this.B = b;
    this.color = `rgb(${r}, ${g}, ${b})`
  }
}

const test = new ColorNode(256, 256, 256)
console.log(test)

const testArr = [];

for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(256, i, 256))
}
for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(256, 0, i))
}
for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(i, 0, 0))
}

for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(256, 256, i))
}
for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(i, 256, 0))
}
for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(0, i, 0))
}

for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(i, 256, 256))
}
for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(0, i, 256))
}
for(let i = 256; i > 0; i-=8) {
  testArr.push(new ColorNode(0, 0, i))
}



let colors = testArr.map(node => node.color)
console.log(colors)

export default colors;