# Bug reproduction

1.  Create a React component and render a MUI Button in it.
2.  Add console.log in the component's render method to track when it renders.
3.  After inital render click on the MUI button. It should not cause our component to rerender.
4.  Apply react-css-modules HOC on the component.
5.  Now every click on MUI button causes the component to rerender.

# Run demo

`npm install`

`npm start`

Then open `localhost:8080`
