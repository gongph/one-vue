import Home from './pages/home.vue';
import Reader from './pages/reading.vue';
//import ReaderDetail from './pages/reader-detail.vue';
import Music from './pages/music.vue';
import Video from './pages/movie.vue';

export default [
  {
  	path: '/home/',
  	component: Home
  },
{
	path: '/reading/',
	component: Reader
},
//{
//  path: '/reader/:id/',
//  component: ReaderDetail
//},
{
	path: '/music/',
	component: Music
},
{
	path: '/movie/',
	component: Video
}
]