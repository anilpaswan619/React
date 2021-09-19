import React, {useState} from 'react';
const City = ({name, year}) => {

    const[quantity, setQuantity] = useState(0);

  const styleButton = {
    backgroundColor: "hotpink",
    color : "white",
    padding : "8px",
    margin : "15px",
    fontWeight: "Bold",
    border: "none",
    borderRadius : "15px",
    cursor: "pointer",

  }

  const headingStyle = {
    color: "blue",
    margin : "15px",

  }

  const Click = () => {
    // alert("Good afternoon, You Clicked On Me");
    setQuantity(quantity+1);
  }
  return (
    <div>
    <h1 style = {headingStyle}>{name}</h1>
    <p style = {{margin:"15px", color: "dodgerblue",}}>Good afternoon, All!</p>
    <button style = {styleButton} onClick={Click}>Click Me </button>
        <button style = {styleButton} onClick={Click}>Click Me </button>

    <button style = {styleButton} onClick={Click}>Click Me </button>
     <h1 className="clicked">Clicked No: {quantity}</h1>

    <h2 className="secondHeading">Now I'm living in {name} Since {year}</h2>
    <a className="link" href="https://www.google.com">Google Me</a>
     <hr className="rule" />
    </div>
  )
}
  const cityName = () => {
    return (
      <div>
      <City name="Prayagraj" year={1994}/>
      <City name="Lucknow" year={2015}/>
      <City name="Gurgaon" year={2020}/>

      </div>
    )
  }

export default cityName;
