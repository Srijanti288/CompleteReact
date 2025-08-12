const ErrorMessage =({item})=>{

   return (
    <>
    {item.length === 0  && <h3>I am still hungry</h3> }
     {/* {foodItems.length === 0 ? <h3>I am still hungry</h3> : null}  */}

   </>
   );
}

export default ErrorMessage;