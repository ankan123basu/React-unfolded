import "./Product.css";

import Price from "./Price";

// function Product(props) {
    // function Product({title, price=1, features = [], features2}) {

        function Product({title, idx}) {
        
        let oldPrices = ["12,495", "11,900", "1599", "599"];
        let newPrices = ["8999", "9199", "899", "278"];
        let description = [
            ["8,000 DPI", "5 programmable buttons"],
            [ "intuitive surface","design for ipad pro"] ,
            ["design for ipad pro", "intuitive surface"],
             ["wireless", "optical orientation"] ,
        ];

   // Dynamic Component Styling
//    let isd = price > 30000;

//    let styles = {backgroundColor : isd ? "blue" : "green"};

    //  const list = features.map((feature) => <li>{feature}</li>);
    
    // let isDiscount = price > 30000 ? "Discount of 5%" : "";


    return (
       <div className="Product">
        <h4>{title}</h4>
         <p>{description[idx][0]}</p>
         <p>{description[idx][1]}</p>
         <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />

         </div>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
       
        // <div className="Product" style={styles}>
        //     {/* <h3>Product Title</h3> */}
        //     {/* <h3>{props.title}</h3> */}
        //     <h3>{title}</h3>
        //     {/* <h5>Price : {price / 2}</h5> */}
        //     <h5>Price : {price}</h5>
            
        //     {/* {price > 30000 ? <p>"Discount of 5%</p> : <a href="/">Get Discount</a>} */}

        //     {price > 30000 && <p>"Discount of 5%</p>}

        //     {/* <p>{features}</p> */}
        //     <p>{features.map((feature) => <li>{feature}</li>)}</p>
        //     <p>{features2?.b}</p>   {/* // Optional chaining to avoid errors if features2 is undefined */}
           
        //     {/* <h5>Product description</h5> */}
        //     </div>
    );
}

export default Product;