import Product from "./Product.jsx";
function ProductTab() {
  //  let options = [<li>"hi-tech"</li>, <li>"good quality"</li>, <li>"affordable"</li>];
  //   let options2 = {a: "hi-tech", b: "good quality", c: "affordable"};
  let options = ["hi-tech", "good quality", "affordable"];
    return (
  <> 
  <Product
   title="phone" 
   price="30000" 
//    features={["hi-tech", "good quality", "affordable"]}
//    features2={{a: "hi-tech", b: "good quality", c: "affordable"}}/>

 features={options}
    />
  <Product title="laptop" price={40000}/>
  <Product title="pen"/>
</>
 ); 
}

export default ProductTab;