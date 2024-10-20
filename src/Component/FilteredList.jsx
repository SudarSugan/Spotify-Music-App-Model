
import { useContext } from'react';
import { FilterDataContext } from '../Component/test';

const FilteredList = () => {
  const filterData = useContext(FilterDataContext);

  return (
    <div>
      {filterData.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  );
};
export default FilteredList