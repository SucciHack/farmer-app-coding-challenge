import FilterProductsbtn from "./FilterProductsbtn";

export default function FilterButtons() {
  return (
    <div className='flex justify-between overflow-scroll text-sm p-2 items-center'>
      <FilterProductsbtn title = 'All'/>
      <FilterProductsbtn title = 'Vegatables'/>
      <FilterProductsbtn title = 'Fruits'/>
      <FilterProductsbtn title = 'Dairy'/>
      <FilterProductsbtn title = 'Grains'/>
      <FilterProductsbtn title = 'Poultry'/>
      <FilterProductsbtn title = 'Meat'/>
      <FilterProductsbtn title = 'Herbs'/>
    </div>
  )
}
