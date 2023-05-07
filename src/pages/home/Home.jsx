import FAQs from '../../components/FAQs'
import MainHeader from '../../components/MainHeader'
import FaCrown from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import Values from '../../components/Values'
import './home.css'

const Home = () => {
  return (
    <div>
      <MainHeader />
      <FaCrown />
      <Values />
      <FAQs />
      <Testimonials />
      
    </div>
  )
}

export default Home