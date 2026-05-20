import SectioBar from '../components/SectioBar'
import ImdbTopMovies from "../components/ImdbTopMovies";
import ImdbMovies from "../components/ImdbMovies";
function Home() {
  return (
    <>
      <SectioBar />
      <ImdbTopMovies />
      
      <ImdbMovies />
    </>
  )
}

export default Home
