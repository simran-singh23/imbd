import {
  FaPlus,
  FaStar,
  FaRegStar,
  FaEye,
  FaInfoCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const movies = [
  { id: 1,
    title: "The Shawshank Redemption",year: 1994,
    duration: "2h 22m", ratingType: "R",imdb: 9.3,votes: "3.2M",

    image:
      "https://i.pinimg.com/736x/fa/cc/2d/facc2d4d6ab07064c1a3f736af5aded7.jpg",
  },
  {
    id: 2,
    title: "The Godfather", year: 1972,
    duration: "2h 55m", ratingType: "R",imdb: 9.2, votes: "2.2M", 
    image:
      "https://i.pinimg.com/1200x/49/6f/6e/496f6efa846779411f4120b988894366.jpg",
  },
  {
    id: 3, title: "The Dark Knight ",year: 1994,
    duration: "2h 22m", ratingType: "R", imdb: 9.3,votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/5f/fe/79/5ffe79003530da912a82acac80be1426.jpg",
  },
  {
    id: 4,
    title: "12 Angry Men",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/ca/38/da/ca38dacb6584c1eb204b052b6ee796cf.jpg",
  },
  {
    id: 5,
    title: "12 Angry Men",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/ca/38/da/ca38dacb6584c1eb204b052b6ee796cf.jpg",
  },
  {
    id: 6,
    title: "Pulp Fiction",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/89/41/e7/8941e71464be8fe81ade92a86817338e.jpg",
  },
  {
    id: 7,
    title: "Forrest Gump",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/8e/d7/a9/8ed7a9baeae932abec095d109d306fb3.jpg",
  },
  {
    id: 8,title: "Inception",
    year: 1994, duration: "2h 22m",
    ratingType: "R", imdb: 9.3,votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/b0/ae/a4/b0aea49646879a043ad9f6ec3002e99f.jpg",
  },
  {
    id: 9,
    title: "Fight Club ",  year: 1994,
    duration: "2h 22m",ratingType: "R",imdb: 9.3,
    votes: "3.2M",image:
      "https://i.pinimg.com/736x/4b/5c/cb/4b5ccbe420a9061ea4564e82e0261548.jpg",
  },
  {
    id: 10, title: "The Matrix",year: 1994, duration: "2h 22m", ratingType: "R",imdb: 9.3,votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/18/d7/4e/18d74ef46e722828f75cca91b009f4a5.jpg",
  },
  {
    id: 11,title: "The Lord of the Rings: The Fellowship of the Ring ",
    year: 1994, duration: "2h 22m",
    ratingType: "R",imdb: 9.3, votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/0d/55/44/0d5544846e5226b9dea257112039022f.jpg",
  },
  {
    id: 12,
    title: "The Lord of the Rings: The Return of the King",year: 1994,
    duration: "2h 22m",ratingType: "R",imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/16/45/9b/16459b5858edf81a707da0161d8eaea1.jpg",
  },
  {
     id: 13,
    title: "Star Wars: Episode V - The Empire Strikes Back ",
    year: 1994,duration: "2h 22m", ratingType: "R",imdb: 9.3,
    votes: "3.2M",
    image:"https://i.pinimg.com/736x/c6/54/fd/c654fdda46ae881f7b05d47bffcc0879.jpg",
  },
  {
    id: 14,
    title: "Goodfellas",
    year: 1994,duration: "2h 22m",
    ratingType: "R",imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/40/7f/ba/407fbabc044a23cfbf19f3d32206d013.jpg",
  },
  {
    id: 15, title: "Se7en", year: 1994, duration: "2h 22m", ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/c1/a3/89/c1a389116f27524e3c7fb25d4fac45b2.jpg",
  },
  {
    id: 16,
    title: "Interstellar",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/46/63/95/46639573fd4b919c9b7239ac00481d8c.jpg",
  },
  {
    id: 17,
    title: "Casablanca",
    year: 1994,duration: "2h 22m",ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/d7/af/84/d7af84a7b8e8d90c9c217c56901a0d5a.jpg",
  },
  {
    id: 18,
    title: "Parasite",year: 1994,
    duration: "2h 22m",ratingType: "R",imdb: 9.3,votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/e6/de/03/e6de035cd3307b513e9bfe88a1457826.jpg",
  },
  {
    id: 19,
    title: "The Silence of the Lambs",year: 1994,duration: "2h 22m",
    ratingType: "R",mdb: 9.3,votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/84/7b/75/847b75841e333dbe59e34be4cd53b401.jpg",
  },
  {
    id: 20,
    title: "Spirited Away ",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/93/6b/c2/936bc2c8a46385dddd69ecaa1fe1d2d5.jpg",
  },
  {
    id: 21,title: "The Green Mile",year: 1994,duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/ca/1d/78/ca1d78a293fd9b959bb6b3d58d55faaf.jpg",
  },
  {
    id: 22,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 23,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 24,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 25,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 26,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 27,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 28,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 29,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 30,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 31,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 32,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 33,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 34,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 35,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 36,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 37,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 38,
    title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 39,
    title: "The Shawshank Redemption",year: 1994,
    duration: "2h 22m",ratingType: "R",
    imdb: 9.3, votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  
  {
    id: 40,
    title: "The Shawshank Redemption",
    year: 1994,duration: "2h 22m",ratingType: "R",imdb: 9.3, votes: "3.2M", image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 41,title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m", ratingType: "R",imdb: 9.3,votes: "3.2M",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYzhlZjc2XkEyXkFqcGc@._V1_.jpg",
  },

];

const MovieCard = ({ movie }) => {

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/sign")}
      className="bg-[#f5f5f5] rounded-3xl p-5 
      flex items-center justify-between mb-5 hover:shadow-md transition-all duration-300 cursor-pointer"
    >
      
      
      <div className="flex items-center gap-5">
        
      
        <div className="relative min-w-[110px]">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-[110px] h-[160px] object-cover rounded-3xl"
          />

          <button className="absolute top-3 left-3 text-white text-4xl">
            <FaPlus />
          </button>
        </div>

     
        <div>
          
    
          <div className="bg-blue-600 text-white px-6 py-2 inline-block rounded-r-3xl rounded-l-md text-3xl font-bold">
            #{movie.id}
          </div>

     
          <h2 className="text-5xl font-bold text-[#1f1f1f] mt-5">
            {movie.title}
          </h2>

         
          <div className="flex items-center gap-4 text-gray-500 text-3xl mt-4">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>

            <span>•</span>
            <span>{movie.ratingType}</span>
          </div>

       
          <div className="flex items-center gap-12 mt-6 flex-wrap">
         
            <div className="flex items-center gap-3 text-3xl">

              <FaStar className="text-yellow-400" />
              <span className="text-gray-700">
                {movie.imdb} ({movie.votes})
              </span>
            </div>

            <button className="flex items-center gap-3 text-blue-600 text-3xl font-medium">
              <FaRegStar />
              Rate
            </button>

            <button className="flex items-center gap-3 text-blue-600 text-3xl font-medium">
              <FaEye />
              Mark as watched
            </button>
          </div>
        </div>
      </div>

   
      <button className="text-blue-600 text-5xl pr-5 hidden md:block">
        <FaInfoCircle />
      </button>
    </div>
  );
};

const ImdbMovies = () => {
  return (
    <div className="max-w-7xl mx-auto p-5">
             {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ImdbMovies;