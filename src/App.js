import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Entry from './pages/Entry';
import Guidelines from './pages/Guidelines';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Events from './pages/Events';
import PageNotFound from './pages/PageNotFound';
import Timer from './pages/Timer';
import 'flowbite';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col mt-16">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/entry" element={<Entry />} />
            <Route path="/guidelines" element={<Guidelines />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/events" element={<Events />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;