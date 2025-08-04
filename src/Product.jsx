import "./Product.css";

// function Product(props) {
    function Product({title, price=1, features = [], features2}) {
     
    //  const list = features.map((feature) => <li>{feature}</li>);
    
    // let isDiscount = price > 30000 ? "Discount of 5%" : "";
    return (
        <div className="Product">
            {/* <h3>Product Title</h3> */}
            {/* <h3>{props.title}</h3> */}
            <h3>{title}</h3>
            {/* <h5>Price : {price / 2}</h5> */}
            <h5>Price : {price}</h5>
            
            {/* {price > 30000 ? <p>"Discount of 5%</p> : <a href="/">Get Discount</a>} */}

            {price > 30000 && <p>"Discount of 5%</p>}

            {/* <p>{features}</p> */}
            <p>{features.map((feature) => <li>{feature}</li>)}</p>
            <p>{features2?.b}</p>   {/* // Optional chaining to avoid errors if features2 is undefined */}
           
            {/* <h5>Product description</h5> */}
            </div>
    );
}

export default Product;