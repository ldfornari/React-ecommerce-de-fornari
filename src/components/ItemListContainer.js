import ItemCount from "./ItemCount"

const ItemListContainer = (props) => {

   const onAdd = (count) => {}   
   
   return(
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
   )
}
export default ItemListContainer
