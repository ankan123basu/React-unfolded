import Product from "./Product.jsx";
function ProductTab() {
  //  let options = [<li>"hi-tech"</li>, <li>"good quality"</li>, <li>"affordable"</li>];
  //   let options2 = {a: "hi-tech", b: "good quality", c: "affordable"};
//   let options = ["hi-tech", "good quality", "affordable"];

   let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
   };

    return (
      <div style={styles}>
      <Product title="Logitech MX Master" idx={0} />
       <Product title="Apple Pencil (2nd Gen)" idx={1}/>
        <Product title="ZebronicsZeb-transformer" idx={2}/>
         <Product title="Petronics Toad 23" idx={3}/>



    </div>
     ); 
     }

    export default ProductTab;










  {/*  
  <Product
   title="phone" 
   price="30000" 
//    features={["hi-tech", "good quality", "affordable"]}
//    features2={{a: "hi-tech", b: "good quality", c: "affordable"}}/>

 features={options}
    />
  <Product title="laptop" price={40000}/>
  <Product title="pen"/>
*/}
