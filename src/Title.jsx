function Title() { // create a new component

    let name = "ankan";

  return (
    <div>
  {/* <h1>My React App</h1> */}
  {/* <h3>I am the description</h3> */}

  <p>2 * 2 = {2 * 2}</p>
   <p>Hi, {name.toUpperCase()}</p>
  </div>
    );
}


export default Title; // Default export of the Title component
// default exports are handy for exporting a single value and giving it a custom name

//export { Title }; // Named export of the Title component
// helps to export multiple values and import them with their specific names