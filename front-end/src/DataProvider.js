import React, { useState } from 'react'; // Import React
import axios from 'axios';

const DataContext = React.createContext({
  data: null,
  loading: false,
  setData: () => {},
  setLoading: () => {},
}); // Use createContext from React

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const getData = async (id) => {
    setLoading(true)
    try {
      const response = await axios.get(`http://localhost:3001/user/${id}`);
      const users = response.data.user;
      console.log("success")
      setData(users);
      
    } catch (error) {
      console.log(error);
      setData({})
    }
    setLoading(false)
  };

  return (
    <DataContext.Provider value={{ data, loading, getData }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
