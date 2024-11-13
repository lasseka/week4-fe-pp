import { useState } from 'react'
import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {

  const [servicesData, setServicesData] = useState(services)

  function removeItem(id){
    setServicesData(servicesData.filter(item => item.id !== id))
    console.log("test")
  }
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} onClick={() => removeItem(service.id)} />
        })}
      </div>
    </section>
  )
}
export default Services