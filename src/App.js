import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Content from './components/Content.js';

function App() {
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [categorie, setCategorie] = useState('popular');
  const [mode, setMode] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [lastSearch, setLastSearch] = useState('');

  useEffect(() => {
    var movie = ''
    var currentSearch = ''
    if (mode) {
      movie = search.replace(' ', '%20');
      currentSearch = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${movie}&page=1&include_adult=false`
      setLastSearch(currentSearch);
      console.log(currentSearch);
      fetch(currentSearch)
        .then(res => res.json())
        .then(data => {
          setContent(data.results);
        }
        )
    }
    else {
      movie = categorie.toLowerCase()
      currentSearch = `https://api.themoviedb.org/3/movie/${movie.replace(' ', '_')}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      setLastSearch(currentSearch);
      console.log(currentSearch);
      // movie = `&sort_by=${movie}`
      fetch(currentSearch)
        .then(res => res.json())
        .then(data => {
          setContent(data.results)
          setTotalPages(data.total_pages)
        }
        )
    }
    ;

  }, [mode, search, categorie])

  useEffect(() => {
    if (page !== 1) {
      var search = lastSearch.remplace('page=1', `page=${page}`)
      console.log(search);
      fetch(search)
        .then(res => res.json())
        .then(data => {
          setContent(data.results)
        }
        )
    }
  }, [page, lastSearch])



  return <div className='body'>
    <Header updateSearch={setSearch} updateCategorie={setCategorie} updateMode={setMode} />
    <Content movie={content} currentPage={page} totalPages={totalPages} updatePage={setPage} />

  </div>
}

export default App;