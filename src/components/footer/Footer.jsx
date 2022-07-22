import React from 'react'
import "../footer/footer.css"
import Image from 'react-bootstrap/Image'
import github from '../../assets/img/github.svg'



function Footer() {
  return (   
   
    <div className="footer justify-content-center">
      
     
        <div className="info align-items-center">
          <a href="https://github.com/aoliverasd/Legends"><Image src={github} style={{ height:'3rem'}} /></a>
          
          <div className="contactos">Legend Crew: Natalia-Cecilia-Cristal-Marcela-Nadia-Erick-Jerry-Abel-Alan</div>
          {/* <div class="contactos">Trabaja con nosotros</div>
          <div class="contactos">Sobre nosotros</div> */}
        </div>
     
      <div className="copy">Copyright LEGENDS 2022 S.L.</div>

    </div>

   


    
  )

}

export default Footer