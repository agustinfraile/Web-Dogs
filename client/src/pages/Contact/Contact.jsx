import React from 'react';
import IconsComponent from '../../components/IconsComponent/IconsComponent';
import picture from '../../images/image-profile.png'

import './Contact.css';

const Contact = () => {
  return (
    <>
      <div className='contact-container'>
        <div className='contact-container_presentation'>
          <h1>
            ¡Hola! Mi nombre es Agustin, soy un desarrollador web Full Stack.
          </h1>

          <div className='contact-container_presentation--img'>
            <img src={picture} alt="Mi foto" />  
          </div>
          
          <h3>
            Cuento con experiencia desde el 2020. Actualmente me encuentro en constante capacitación para estar al día con las últimas tecnologías web y ofrecer soluciones innovadoras y efectivas.
          </h3>
          <h3>
            Recientemente, me gradué de Henry, lo cual me ha permitido ampliar mis habilidades y conocimientos en el desarrollo web. Además, tengo una base sólida en ingeniería industrial, lo cual me ha dado una perspectiva única y valiosa en el desarrollo de soluciones eficientes y efectivas.
          </h3>
          <h3>
            Si está interesado en contratarme para un proyecto o simplemente deseas conocer más sobre mis habilidades y experiencia, no dudes en ponerte en contacto conmigo.
          </h3>
          <h3>¡Espero tener la oportunidad de trabajar juntos!</h3>
        </div>
      </div>

      {/* ESTE CONTENEDOR SERIA PARA MOSTRAR DONDE TE PUEDES CONTACTAR */}
      <div className='icons-container'>
        <IconsComponent />
      </div>
    </>
  )
}

export default Contact