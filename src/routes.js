import Home from './pages/home.vue';
import Reader from './pages/readings.vue';
import Music from './pages/musics.vue';
import Movie from './pages/movies.vue';

import EssayDetail from './pages/details/essay.vue';
import SerialDetail from './pages/details/serial.vue';
import QuestionDetail from './pages/details/question.vue';
import MusicDetail from './pages/details/music.vue';
import MovieDetail from './pages/details/movie.vue';

export default [
  {
    path: '/home/',
  	component: Home
  },
  {
	  path: '/reading/',
	  component: Reader,
  },
  {
	  path: '/reading/essay/:id',
	  component: EssayDetail
  },
  {
  	path: '/reading/serial/:id',
  	component: SerialDetail
  },
  {
  	path: '/reading/question/:id',
  	component: QuestionDetail
  },
  {
	  path: '/music/',
	  component: Music
  },
  {
  	path: '/music/:id',
  	component: MusicDetail
  },
  {
	  path: '/movie/',
	  component: Movie
  },
  {
  	path: '/movie/:id',
  	component: MovieDetail
  }
]