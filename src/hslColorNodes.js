class ColorNode {
  constructor(h, s, l){
    this.H = h;
    this.S = s;
    this.L = l;
    this.hslColor = `hsl(${h}, ${s + '%'}, ${l + '%'})`
  }
}

let columns = [];
for(let h = 360; h >= 0; h-=2){
  let colors = []
  for(let c = 100; c >= 0; c-=2) {
    colors.push(new ColorNode(h, 100, c))
  }
  columns.push(colors)
}

// const hslColors = columns.map(column => column.map(colorNode => colorNode.color))

const hslColors = columns;

export default hslColors;