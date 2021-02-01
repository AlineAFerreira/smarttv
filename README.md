<h1 align="center">
    <img alt="SKY" src=".bitbucket/sky-logo-tv.png">
</h1>

<h3 align="center">
  SKY - SmartTV app
</h3>


## Technologies

This project was developed with the following technologies:

-  [React Js](https://reactjs.org/)
-  [Redux](https://redux.js.org/)
-  [Styled-components](https://www.styled-components.com/)
-  [NPM](https://www.npmjs.com/)
-  [VS Code](https://code.visualstudio.com/) with ESLint.


## How to use


```bash
# Clone this repository
$ git clone https://[YOUR_SKY_ID_HERE]@bitbucket.skybr.digital/scm/mob/smart-tv.git

# Access the folder
$ cd smart-tv

# Install dependencies
$ npm install

```

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Components usage

### News

Option | Type | Required | Default | Description
------ | ---- | ------- | ----------- | ----------
highlight | boolean | no | false | If set as 'true' the first item is highlighted (bigger) 
items | array | yes | n/a | Array of objects containing the items to be displayed

### Dropdown

Option | Type | Required | Default | Description
------ | ---- | ------- | ----------- | ----------
width | int | no | 18 (vw) | Width of dropdown component
items | array | yes | n/a | Array of objects containing the items to be listed in the dropdown 
icon1 | string | no | n/a | Icon class that should appear before the button text
icon2 | string | no | n/a | Icon class that should appear after the button text
align | string | no | left | Dropdown list box alignment
active | boolean | no | false | If true add a class to show if it is active
