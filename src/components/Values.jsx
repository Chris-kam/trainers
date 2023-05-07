import Image from '../images/values.jpg'
import SectionHeader from './SectionHeader'
import { GiCutDiamond } from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={Image} alt="values" />
                </div>
            </div>
            <div className="values__right">
                <SectionHeader icon={<GiCutDiamond />} title="Values" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem alias vero modi porro 
                    molestiae temporibus!
                </p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc}) =>{
                            return <Card className="values__value" key={id}>
                                 <span>{icon}</span>
                                 <h4>{title}</h4>
                                 <small>{desc}</small>
                            </Card>
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values