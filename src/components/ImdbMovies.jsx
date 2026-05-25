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
    title: "Interstellar", year: 1994,
    duration: "2h 22m",ratingType: "R",
    imdb: 9.3,votes: "3.2M",
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
    ratingType: "R",imdb: 9.3,votes: "3.2M",
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
      "https://i.pinimg.com/1200x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg",
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
      "https://i.pinimg.com/1200x/08/6f/fe/086ffeccab22baa2b4d49ab8787f9b90.jpg",
  },
  {
    id: 24,
    title: "Blade Runner 2049 ",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/51/ef/ce/51efce0f2552d7893caf5c90968d215e.jpg",
  },
  {
    id: 25,
    title: "Mad Max: Fury Road ",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/a6/5f/e5/a65fe533096f92828113b4b880b5ee07.jpg",
  },
  {
    id: 26,
    title: "Whiplash",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/d7/93/ad/d793ad13cfa32068f3a083ca494641d6.jpg",
  },
  {
    id: 27,
    title: "Goodfellas",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/0a/92/53/0a925312c9b1cdb25e210cb463a86406.jpg",
  },
  {
    id: 28,
    title: "Terminator 2: Judgment Day",
    year: 1994,duration: "2h 22m", ratingType: "R", imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/ff/a5/76/ffa57667132fe69dd8a9c5330ed50833.jpg",
  },
  {
    id: 29,
    title: "Toy Story",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/8e/bd/48/8ebd48f66f760c1066bb7f82204d8866.jpg",
  },
  {
    id: 30,
    title: "A Wednesday!",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/5b/df/df/5bdfdf875d40cb24a0917024a32314a9.jpg",
  },
  {
    id: 31,
    title: "Pather Panchali",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/23/67/bf/2367bf4186aefd42746bd689baacf1dc.jpg",
  },
  {
    id: 32,
    title: "Drishyam",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/1200x/d9/f6/5e/d9f65ea351cf9886f7806cd3bb200ca2.jpg",
  },
  {
    id: 33,
    title: "Mughal-e-Azam",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/75/4c/bf/754cbff4f5d8f36fbd73de01e8dc2ebf.jpg",
  },
  {
    id: 34,
    title: "RRR",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/5a/9e/5f/5a9e5fd0831300176c14e7f27feac44d.jpg",
  },
  {
    id: 35,
    title: "Queen ",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/92/e9/59/92e959c34e764cf21bae706ffd986248.jpg",
  },
  {
    id: 36,
    title: "Dil Chahta Hai",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/4b/1e/b0/4b1eb0facefb7dc595be61cf23908cf0.jpg",
  },
  {
    id: 37,
    title: "Taare Zameen Par ",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/3a/b4/90/3ab4908b631acda4184bd0299db6f073.jpg",
  },
  {
    id: 38,
    title: "Dangal ",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/6c/df/5f/6cdf5fb7e45ae189247e50481b65ab8f.jpg",
  },
  {
    id: 39,
    title: "Oppenheimer",
    year: 1994,
    duration: "2h 22m",
    ratingType: "R",
    imdb: 9.3,
    votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/27/97/3c/27973ce553848339869fecc3a59a0a62.jpg",
  },
  
  {
    id: 40,
    title: "The Shawshank Redemption",
    year: 1994,duration: "2h 22m",ratingType: "R",imdb: 9.3, votes: "3.2M", image:
      "https://i.pinimg.com/736x/93/1a/1a/931a1afec6514f4550addba37f7ba99f.jpg",
  },
  {
    id: 41,title: "The Shawshank Redemption",
    year: 1994,
    duration: "2h 22m", ratingType: "R",imdb: 9.3,votes: "3.2M",
    image:
      "https://i.pinimg.com/736x/2a/35/eb/2a35eb35d68d5d8e8b251e95bba65a33.jpg",
  },

];
const news = [
  {
    id: 1,
    title: "Christopher McQuarrie’s ‘Conan the Barbarian’ Sequel",
    image:
      "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
  },

  {
    id: 2,
    title: "Sebastian Stan and Renate Reinsve Shed Tears",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
  },

  {
    id: 3,
    title: "Andy Garcia’s Neo-Noir ‘Diamond’ Earns Ovation",
    image:
      "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6",
  },

  {
    id: 4,
    title: "Shirtless Charles Melton Brutal Murders",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

const genres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
  "War",
];

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/sign")}className="bg-[#f5f5f5] rounded-3xl p-5 
      flex items-center justify-between 
      hover:shadow-lg transition-all duration-300 cursor-pointer"
    >
      <div className="flex items-center gap-5">

        <div className="relative min-w-[90px]">
          <img src={movie.image}
            alt={movie.title}
            className="w-[90px] h-[130px] object-cover rounded-2xl"
          />

          <button className="absolute top-2 left-2 text-white text-2xl">
            <FaPlus />
          </button>
        </div>

        <div>
          <div className="bg-blue-600 text-white px-4 py-1 inline-block
           rounded-r-2xl rounded-l-md text-lg font-bold">
            #{movie.id}
          </div>

          <h2 className="text-2xl font-bold text-[#1f1f1f] mt-3">
            {movie.title}
          </h2>

          <div className="flex items-center gap-3 text-gray-500 text-sm mt-2">
            <span>{movie.year}</span>
            <span>•</span>
            <span>{movie.duration}</span>
            <span>•</span>
            <span>{movie.ratingType}</span>
          </div>

          <div className="flex items-center gap-6 mt-4 flex-wrap">
            <div className="flex items-center gap-2 text-sm">
              <FaStar className="text-yellow-400" />

              <span className="text-gray-700">
                {movie.imdb} ({movie.votes})
              </span>
            </div>

            <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
              <FaRegStar />
              Rate
            </button>

            <button className="flex items-center gap-2 text-blue-600 text-sm font-medium">
              <FaEye />
              Mark as watched </button>
          </div>
        </div>
      </div>

    
      <button className="text-blue-600 text-3xl hidden md:block"> <FaInfoCircle />
      </button>
    </div>
  );
};

const NewsCard = ({ item }) => {
  return (
    <div className="bg-white border rounded-2xl p-3 flex gap-3 hover:shadow-md transition"> <div className="flex-1">
        <h2 className="font-semibold text-sm leading-6">
          {item.title}
        </h2>

        <p className="text-gray-500 text-xs mt-2">
          5/19/2026 • by IMDb News  
        </p>
      </div>

      <img
        src={item.image} alt=""
        className="w-[90px] h-[90px] rounded-xl object-cover"
      />
    </div>
  );
};

const ImdbMovies = () => {
  return (
    <section className="mx-auto max-w-[1500px] px-4 py-10 sm:px-6 lg:px-8">    
    <div className="grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_320px] 
     xl:grid-cols-[minmax(0,1fr)_380px]">
      <div className="min-w-0 space-y-5">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        <aside className="space-y-8 md:sticky md:top-24">
          <div className="space-y-4">
            {news.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm border">
            <h2 className="text-3xl font-bold mb-6">
              Top rated movies by genre
            </h2>

            <div className="flex flex-wrap gap-3">
              {genres.map((genre, index) => (
                <button
                  key={index}
                  className="border px-4 py-2 rounded-full hover:bg-black hover:text-white transition"
                >
                  {genre}
 </button>
              ))}
            </div>
 </div>
        </aside></div>
    </section>
  );
};

export default ImdbMovies;
