import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import Bootcamps from './pages/Bootcamps.jsx'
import RequestCallback from './pages/RequestCallback.jsx'
import Classroom from './pages/Classroom.jsx'
import CourseDetail from './pages/CourseDetail.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

function App() {
  return (
    <>
      <div className='main min-h-full w-full text-[#C5C5C5] relative'>
        <ScrollToTop />
        <img className="fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] w-full h-full object-cover -z-10" src="/images/blur.svg" alt="" />
        <Navbar className="some-class z-10" title="Sheriyans" subtitle="Coding School" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/bootcamps" element={<Bootcamps />} />
          <Route path="/request-callback" element={<RequestCallback />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/course/:id" element={<CourseDetail />} />
        </Routes>

        <Footer />
      </div>
    </>
  )
}

export default App
