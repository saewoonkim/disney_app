import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';


const Layout = () => {
  return (
    <div>
      <Nav />

      <Outlet />
    </div>
  );
}
// import Nav from './components/Nav';
// import styled from'styled-components';
// import Banner from './components/Banner';
// import Category from './components/Category';
// import Row from './components/Row';
// import request from './api/requests';

//역슬레시는 루트 다시 처음으로 돌아간다
//ppt 자료 참조 온클릭.
function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />} />
          <Route path='main' element={<MainPage />} />
          <Route path=':movieId' element={<DetailPage />} />
          <Route path='search' element={<SearchPage />} />
        </Route>
      </Routes>

    </div>
    // <Container>
    //   <Nav />
    //   <Banner />
    //   <Category/>
    //   <Row title='Trending Now' id='TN' fetchUrl={request.fetchNowPlaying}/>
    //   <Row title='Top Rated' id='TR' fetchUrl={request.fetchTopRated}/>
    //   <Row title='Action Movies' id='AM' fetchUrl={request.fetchActionMovie}/>
    //   <Row title='Comedy Movies' id='CM' fetchUrl={request.fetchComedyMovie}/>
    // </Container>
  );
}

export default App;

// const Container = styled.main`
//   position: relative;
//   min-height: calc(100vh - 250px);
//   //250만큼 잘라내고 그떄부터 내용을 뿌려준다
//   overflow: hidden; 
//   //기본값 내용
//   display: block;
//   //기본값 사진
//   top: 75px;
//   padding: 0 calc(3.5vh - 5px);

//   &:after {
//     background: url("/images/home-background.png") center center / cover no-repeat fixed;
//                                //수평(x)으로 센터 // 수직(y)으로 센터 //no repeat 넣어줘야됨
//     content: "";
//     position: absolute;
//     inset: 0;
//     //전체의 공간에 저사진을 다뿌리겟다는말임
//     opacity: 1;
//     z-index: -1;
//   }
// `;