class ColorNode {
  constructor(h, s, l){
    this.H = h;
    this.S = s;
    this.L = l;
    this.color = `hsl(${h}, ${s + '%'}, ${l + '%'})`
  }
}

let columns = [];
for(let h = 360; h >= 0; h--){
  let colors = []
  for(let c = 100; c >= 0; c--) {
    colors.push(new ColorNode(h, 100, c))
  }
  columns.push(colors)
}

const hslColors = columns.map(column => column.map(colorNode => colorNode.color))

export default hslColors;