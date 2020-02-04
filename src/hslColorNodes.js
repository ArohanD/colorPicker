class ColorNode {
  constructor(h, s, l){
    this.H = h;
    this.S = s;
    this.L = l;
    this.color = `hsl(${h}, ${s + '%'}, ${l + '%'})`
  }
}

console.log(new ColorNode(124, 100, 24))

let rows = [];
for(let r = 100; r >0; r--){
  let colors = []
  for(let i = 360; i >= 0; i--) {
    colors.push(new ColorNode(i, 100, r))
  }
  rows.push(colors)
}

const hslColors = rows.map(row => row.map(colorNode => colorNode.color))
console.log(hslColors)

export default hslColors;