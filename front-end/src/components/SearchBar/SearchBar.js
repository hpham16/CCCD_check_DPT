import React, { useState } from 'react';
import { useContext } from 'react';
import "../SearchBar/style.css"
import { DataContext } from '../../DataProvider';



const SearchBar = ({ onSearch }) => {
  const [search, setSearch] = useState('');
  const [isValid, setValid] = useState(true);
  const { data, getData, loading } = useContext(DataContext);


  const handleClick = (id) => {
    getData(id);
  };
  

  const handleChange = (e) => {
    setSearch(e.target.value);
    const value = e.target.value;

    const regex = /^[0-9]+$/;
    setValid(true);
    if (!regex.test(value) && value) {

      setValid(false);
    }

  };

  return (
    <div className='search'>
      <input  type="string" placeholder="Tìm kiếm người dùng" value={search} onChange={handleChange} />
      <button disabled={loading} onClick={()=>handleClick(search)}>{loading ? 'Đang tìm kiếm...' : 'Tìm kiếm'}</button>
      <p className="warning" style={{ display: !isValid ? 'block' : 'none' }}>
        Vui lòng chỉ nhập số !
      </p>
    </div>
  );
};

export default SearchBar;
