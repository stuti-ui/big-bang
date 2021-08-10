import React, {useState,useEffect} from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import Pagination from './components/ui/Pagination';
import './App.css';



function App() {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [query, setQuery] = useState('')
 

  useEffect(()=>{
    const fetchItems = async () =>{

      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <Header/>
      <Search getQuery={(q)=> setQuery(q)}/>
      <CharacterGrid isLoading={isLoading}  items={currentPosts}/>
      <br/>
      <br/>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
      
    </div>
    
  );
}

export default App;
