import Home from './pages/home.vue';
import Reader from './pages/reading.vue';
import Music from './pages/music.vue';
import Movie from './pages/movie.vue';

import EssayDetail from './pages/details/essay.vue';

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
	  path: '/music/',
	  component: Music
  },
  {
	  path: '/movie/',
	  component: Movie
  }
]