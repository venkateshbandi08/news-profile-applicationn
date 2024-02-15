import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Update the import statement

import Home from './components/Home';
import Header from './components/Header';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Posts from './components/Posts'
import Bookmarks from './components/Bookmarks';
import Liked from './components/Liked';
import NotFound from './components/NotFound'

// static news-api data
const newsData = [
  {
      author:"BBC News",
      title: "CCTV captures massive landslide in Turkey",
      url: "https://www.bbc.co.uk/news/world-asia-68291660",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/C911/production/_132637415_p0hbs2w2.jpg",
      publishedAt: "2024-02-14T04:22:17.5603319Z",
      content:"Nine people are believed to be missing after a landslide hit a gold mine in eastern Turkey on Tuesday. Hundreds of emergency personnel have been deployed to help search and rescue efforts"
  },
  {
      author:"BBC News",
      title: "Watch: What maps don’t show about this Asian nation",
      url: "https://www.bbc.co.uk/news/world-asia-68281092",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/131CA/production/_132628287_p0hblsx1.jpg",
      publishedAt: "2024-02-14T04:22:17.2010453Z",
      content:"Indonesia is probably larger than you think it is - much bigger than it looks on the world map. \r\nAnd with a population of about 275 million people, it's also the third-largest democracy in the world…"
  },
  {
      author:"BBC News",
      title: "Indonesia election: Millions head to polls in world's biggest single day election",
      url: "https://www.bbc.co.uk/news/live/world-asia-68281520",
      urlToImage: "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
      publishedAt: "2024-02-14T04:22:16.4980956Z",
      content:"The policy platforms of the three candidates do not differ greatly. President Jokowi remains hugely popular, and all three candidates have promised to continue a development-focused agenda, with only…"
  },
  {
      author:"BBC News",
      title: "Pakistan election: Imran Khan's rivals PML-N and PPP reach deal to form government",
      url: "https://www.bbc.co.uk/news/world-asia-68287508",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/CC13/production/_132634225_950923f45859406855650abfea0dd7b15232f5fd.jpg",
      publishedAt: "2024-02-14T04:22:14.849995Z",
      content:"Nawaz Sharif and Bilawal Bhutto's parties in Pakistan have reached a deal to form a government. \r\nMr Bhutto's PPP said it would help Mr Sharif's PML-N elect a prime minister after last week's electio…"
  },
  {
      author:"BBC News",
      title: "Israeli attack on Rafah could lead to slaughter, UN warns",
      url: "https://www.bbc.co.uk/news/world-middle-east-68287513",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/F913/production/_132636736_gettyimages-1993686794.jpg",
      publishedAt: "2024-02-13T21:52:14.8553456Z",
      content:"A top UN official has warned an Israeli assault on Rafah, Gaza's southernmost city, could lead to a \"slaughter\". \r\nHumanitarian chief Martin Griffiths said Palestinians in Gaza were already suffering…"
  },
  {
      author:"BBC News",
      title: "Democrat Tom Suozzi wins race to replace George Santos",
      url: "https://www.bbc.co.uk/news/world-us-canada-68291562",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/11DD5/production/_132637137_84db983c-ee48-43bb-b6b8-a08eb738d959.jpg",
      publishedAt: "2024-02-14T03:52:12.0115808Z",
      content:"A Democrat has won the swing US congressional district left vacant when former Republican Congressman George Santos was expelled last December. \r\nTom Suozzi's Tuesday night victory over rival Mazi Pi…"
  },
  {
      author:"BBC News",
      title: "Biden slams Trump criticism of Nato as 'shameful'",
      url: "https://www.bbc.co.uk/news/world-us-canada-68286645",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/BD4F/production/_132636484_gettyimages-2008392644.jpg",
      publishedAt: "2024-02-13T20:37:17.9335703Z",
      content:"President Joe Biden has blasted criticism of Nato by his likely 2024 election challenger, Donald Trump, as \"dumb\", \"shameful\" and \"un-American\".\r\nThe Democrat assailed Mr Trump for saying at the week…"
  },
  {
      author:"BBC News",
      title: "Alejandro Mayorkas: House votes to impeach homeland security secretary",
      url: "https://www.bbc.co.uk/news/world-us-canada-68286641",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/110C9/production/_132633896_gettyimages-1918145910.jpg",
      publishedAt: "2024-02-14T00:37:13.6207644Z",
      content:"The House of Representatives has narrowly voted to impeach Homeland Security Secretary Alejandro Mayorkas, making him the first cabinet member to face impeachment in nearly 150 years. \r\nMany Republic…"
  },
  {
      author:"BBC News",
      title: "Defence Secretary Lloyd Austin released from hospital",
      url: "https://www.bbc.co.uk/news/world-us-canada-68291263",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/EEF5/production/_132637116_lloydaustin.jpg",
      publishedAt: "2024-02-13T23:22:17.0585759Z",
      content:"US Defence Secretary Lloyd Austin has been released from hospital and resumed his duties, the Pentagon has said. \r\nMr Austin, 70, was admitted to the critical care unit at a DC-area hospital on Sunda…"
  },
  {
      author:"BBC News",
      title: "US winter storm brings heavy snow and travel chaos to north-east",
      url: "https://www.bbc.co.uk/news/world-us-canada-68290289",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/1033B/production/_132636366_gettyimages-2001142471.jpg",
      publishedAt: "2024-02-13T23:07:18.9337173Z",
      content:"Media caption, Watch: A look at New Yorks snowiest day in two years\r\nThe north-eastern US coast has been hit by one of the worst snow storms in two years, blanketing cities with over a foot of snow a…"
  },
  {
    author:"BBC News",
    title: "Indonesia election: Millions head to polls in world's biggest single day election",
    url: "https://www.bbc.co.uk/news/live/world-asia-68281520",
    urlToImage: "https://m.files.bbci.co.uk/modules/bbc-morph-news-waf-page-meta/5.3.0/bbc_news_logo.png",
    publishedAt: "2024-02-14T04:22:16.4980956Z",
    content:"The policy platforms of the three candidates do not differ greatly. President Jokowi remains hugely popular, and all three candidates have promised to continue a development-focused agenda, with only…"
  },
  {
      author:"BBC News",
      title: "Pakistan election: Imran Khan's rivals PML-N and PPP reach deal to form government",
      url: "https://www.bbc.co.uk/news/world-asia-68287508",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/CC13/production/_132634225_950923f45859406855650abfea0dd7b15232f5fd.jpg",
      publishedAt: "2024-02-14T04:22:14.849995Z",
      content:"Nawaz Sharif and Bilawal Bhutto's parties in Pakistan have reached a deal to form a government. \r\nMr Bhutto's PPP said it would help Mr Sharif's PML-N elect a prime minister after last week's electio…"
  }
]

const postedNewsData = newsData.slice(0, 5);
const bookmarkedNewsData = newsData.slice(5, 10);
const likedNewsData = newsData.slice(8, 13);

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/home' element={<Home />} /> 
      <Route exact path='/profile' element={<Profile />} /> 
      <Route exact path='/settings' element={<Settings />} /> 
      <Route exact path='/profile/posts' element={<Posts postedNewsData={postedNewsData} />} />
      <Route exact path='/profile/bookmarks' element={<Bookmarks bookmarkedNewsData={bookmarkedNewsData} />} />
      <Route exact path='/profile/liked' element={<Liked likedNewsData={likedNewsData} />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
