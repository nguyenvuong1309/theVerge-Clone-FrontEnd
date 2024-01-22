import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import AllTechPage from './pages/AllTechPage'

function App() {
  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   const body = document.body;
  //   const darkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  //   body.setAttribute('data-theme', darkTheme ? 'dark' : 'light');

  //   const darkThemeListener = (event) => {
  //     const newTheme = event.matches ? 'dark' : 'light';
  //     body.setAttribute('data-theme', newTheme);
  //   };

  //   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', darkThemeListener);

  //   return () => {
  //     window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', darkThemeListener);
  //   };
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/detailpage" element={<DetailPage />} />
          <Route path="/allTech" element={<AllTechPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
