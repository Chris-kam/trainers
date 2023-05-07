import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam? Dolorum neque 
      aliquid temporibus voluptatem a libero nesciunt illum in.
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt='Our Story Img'/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio libero ducimus 
            accusantium quo dolores iure praesentium vitae neque odit iste necessitatibus veniam 
            natus optio nisi recusandae sit architecto esse magnam deleniti voluptatibus, consequatur
             nemo, sint in. Debitis, facilis. Corrupti, quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illum. Architecto, 
            aliquid maxime asperiores rem ut cumque, corrupti atque accusantium recusandae quam iste 
            adipisci illo!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente magni cum repudiandae?
          </p>
        </div>
      </div>
    </section>
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio libero ducimus 
            accusantium quo dolores iure praesentium vitae neque odit iste necessitatibus veniam 
            natus optio nisi recusandae sit architecto esse magnam deleniti voluptatibus, consequatur
             nemo, sint in. Debitis, facilis. Corrupti, quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illum. Architecto, 
            aliquid maxime asperiores rem ut cumque, corrupti atque accusantium recusandae quam iste 
            adipisci illo!
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt='Our Story Img'/>
        </div>
      </div>
    </section>
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt='Our mission Img'/>
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio libero ducimus 
            accusantium quo dolores iure praesentium vitae neque odit iste necessitatibus veniam 
            natus optio nisi recusandae sit architecto esse magnam deleniti voluptatibus, consequatur
             nemo, sint in. Debitis, facilis. Corrupti, quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, illum. Architecto, 
            aliquid maxime asperiores rem ut cumque, corrupti atque accusantium recusandae quam iste 
            adipisci illo!
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About