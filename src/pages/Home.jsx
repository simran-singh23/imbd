import SectioBar from '../components/SectioBar'
import ImdbTopMovies from "../components/ImdbTopMovies";
import ImdbMovies from "../components/ImdbMovies";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <SectioBar />
      <ImdbTopMovies />
      
      <ImdbMovies />
      <Footer />
    </>
  )
}

export default Home
