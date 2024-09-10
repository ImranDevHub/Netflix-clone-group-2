import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import RowList from './components/Rows/RowLists/RowList';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
}

export default App;
