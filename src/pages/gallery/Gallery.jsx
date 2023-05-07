import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'



import './gallery.css'

const Gallery = () => {
  const gallerylength = 15
  const images = []

  for(let i = 1; i <= gallerylength; i++){
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images)
  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae magni ipsum nemo id nisi, 
      obcaecati temporibus similique.
    </Header>

    <section className="galllery">
      <div className="container gallery__container">

          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery Images ${index + 1}`}/>
              </article>
            })
          }

      </div>
    </section>
    </>
  )
}

export default Gallery