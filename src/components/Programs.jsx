import {FaCrown} from 'react-icons/fa'
import {programs} from '../data'
import { Link } from 'react-router-dom'
import { AiFillCaretRight } from 'react-icons/ai'
import SectionHeader from './SectionHeader'
import Card from '../UI/Card'

const Programs = () => {
  return (
    <section className="program">
      <div className="container programs__container">
        <SectionHeader icon={<FaCrown/>} title="Programs" />
      <div className="programs__wrapper">
         {
          programs.map(({id, icon, title, info, path}) => {
            return <Card className="programs__program" key={id}>
                 <span>{icon}</span>
                 <h4>{title}</h4>
                 <small>{info}</small>
                 <Link to={path} className='btn sm'>Learn More<AiFillCaretRight /></Link>
            </Card>
          })
         }
      </div>
      </div>
    </section>
  )
}

export default Programs