import styles from "./Item.module.css";

const Item =({foodItems,bought, handleBuyButton})=> {
  // const handleBuyButtonlicked = (event) =>{
  //   console.log(event);
  //   console.log(`${foodItems} being baught`);
  // }

    return (
     <li className={`${styles["sr-item"]} list-group-item ${bought && 'active'} `}>
     <span className={`${styles["sr-span"]}`}>{foodItems}</span>  
     <button className={`${styles.button} btn btn-info`}
     onClick={handleBuyButton}
     >Buy</button>   
  </li>
    );
  
};

export default Item;