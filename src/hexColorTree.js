//const hexColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
//const hexColors = ['0', '2', '4', '6', '8', 'A', 'C', 'E', 'F'];
const hexColors = ['A', 'B', 'C', 'D', 'E', 'F'];
//const hexColors = ['0','F'];
const numToHexDictionary = {}
hexColors.forEach((hex, i) => numToHexDictionary[i] = hex)
const hexToNumDictionary = {};
Object.entries(numToHexDictionary).forEach(([key, val]) => hexToNumDictionary[val] = key)
console.log(numToHexDictionary)
console.log(hexToNumDictionary)

class colorNode {
  constructor (color) {
    this.color = color.split('');
    this.children = [];
  }

  hexColor() {
    return '#' + this.color.join('');
  }

  addChild(color) {
    this.children.push(new colorNode(color))
  }
}

// /// TESTS ///
let newNode = new colorNode('FFFFFF')
console.log(newNode.hexColor())
// newNode.addChild('000000')
// console.log(newNode.children)

const appendChildren = (node) => {
  let lastColor = '#' + new Array(6).fill(hexColors[0]).join('')
  if(node.hexColor() !== lastColor){
    for(let i = 0; i < 6; i++){
      let newColor = node.color.slice();
      let toChange = newColor[i];
      if(toChange !== hexColors[0]) {
        newColor[i] = numToHexDictionary[hexToNumDictionary[toChange] - 1]
        node.addChild(newColor.join(''))
      }
    }
  }
  node.children.forEach(child => appendChildren(child))
}

appendChildren(newNode)
console.log(newNode)