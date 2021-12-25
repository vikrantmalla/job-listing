import React,{useState} from 'react'
import Data from '../API/Data'
export const JobContext = React.createContext();

const JobProvider = (props) => {
  const [filterKeyword, setFilterKeyword] = useState([]);

  const AddKeyword = (keyword) => {
    if (!filterKeyword.includes(keyword)) {
      setFilterKeyword([...filterKeyword, keyword]);
    }
  };
  const RemoveKeyword = (key) => {
    const newKeyword = filterKeyword.filter((tag) => tag !== key);
    setFilterKeyword(newKeyword);
  };

  const ClearKeywords = () => {
    setFilterKeyword([]);
  };

  const jobContext = {
    Data, filterKeyword, AddKeyword, RemoveKeyword, ClearKeywords 
  }
  return (
    <JobContext.Provider value={jobContext}>
      {props.children}
    </JobContext.Provider>
  )
}

export default JobProvider

