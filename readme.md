# Web Color Generator
This web color generator allows visitors to generate a list of web-compatible colors by drawing a line on a color palette. Users can specify if they'd like the list in hex, RGB, or hsl color specifications.

The project was inspired by my work on a [sorting algorithms visualizer](https://github.com/ArohanD/SortAlgorithms), where I found no easy way to generate a list of CSS friendly colors at random between a visible range. I had implemented a fully random color picker so when the background was white, sometimes the visualizations would be difficult to see if the random color was too light. 

## In Action

[Live link](https://colorgenerator.arohandutt.com/)

![](https://raw.githubusercontent.com/ArohanD/colorPicker/master/readmeMedia/Screen%20Shot%202020-03-11%20at%201.33.15%20PM.png)

# User Stories
This section describes the features implemented in the app from the viewpoint of the user. 

### Implemented:
- As a user, I should be able to draw a line in the color field and generate the colors that fall on that line.
- As a user I should be able to customize the generated output to suit my color format needs. 
- As a user, I should be able to adjust the starting color offset to obtain all of the colors within my desired range.
- As a user, I should be able to easily manipulate and copy the output to suit my formatting needs. 

# Stack
The following technologies were used to build this app.

<table>
  <tr>
  </tr>
  <tr>
    <td align="center">Front-end</td>
    <td align="center">Deployment</td>
  </tr>
  <tr>
    <td align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" title="React" width="80px"/><p>React</p></td>
    <td align="center"><img src="https://avatars0.githubusercontent.com/u/42357678?v=4" alt="Firebase Authentication" title="Firebase Authentication" width="60px"/><p>Firebase</p></td>
  </tr>
</table>

Additionally, I've also used the [color-convert npm package](https://www.npmjs.com/package/color-convert).

## Challenges
The biggest challenge in building the app was displaying the color wall. I wanted to create a generator function to create an array of colors that would both provide most available web colors and also be easy to manipulate. Unfortunately generating all the colors in a hex format was a nightmare as combining the colors into an array was quite difficult. I had also experimented with creating a graph and mapping that into a circle or hexagonal structure but this often resulted in expensive recursive functions that would crash the browser or reduce performance. Instead, I opted to generate the color wall using the HSL spec as I only had to edit the H (hue) and L (lightness) values. I didn't have to worry about stitching the colors together as the HSL spec had the colors already ordered from 0 - 360 on hue. 

# Coming Soon
- Density selector - adjust the size of the generated list to contain more or fewer colors from start to end point. 

# Known Bugs
Please use the contact from on [arohandutt.com](http://www.arohan.me/) for any feedback!

# Get started
Take the following steps to run the app on your local machine, you will need to have the following:
- NPM
- Firebase CLI (available as an [NPM package](https://www.npmjs.com/package/firebase-tools))

From terminal in the project folder:
```
npm install
npm run compile
npm start
```

The app should now be live on localhost:5000.