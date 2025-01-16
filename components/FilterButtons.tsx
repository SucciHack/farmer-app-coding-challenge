import AddToCartButton from './AddToCartButton'

export default function FilterButtons() {
  return (
    <div className='flex justify-between overflow-scroll text-sm p-2 items-center'>
      <AddToCartButton title = "All"/>
      <AddToCartButton title = "Vegetables"/>
      <AddToCartButton title = "Fruits"/>
      <AddToCartButton title = "Dairy"/>
      <AddToCartButton title = "Grains"/>
      <AddToCartButton title = "Poultry"/>
      <AddToCartButton title = "Meat"/>
    </div>
  )
}
