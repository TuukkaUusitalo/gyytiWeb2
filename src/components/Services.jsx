import { services } from '../data'
import Title from './Title'
import Service from './Service'
import { FaUsers, FaRoute, FaClock } from 'react-icons/fa6'
import { PiUserCircleCheckFill } from "react-icons/pi";


const iconMap = {
  FaUsers: <FaUsers />,
  FaRoute: <FaRoute />,
  UserRaiting: <PiUserCircleCheckFill />,
  Timing: <FaClock />,
}

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='Keskeistä' subTitle='Gyydissä' />

      <div className='section-center services-center'>
        {services.map((service) => {
          return <Service {...service} key={service.id} icon={iconMap[service.icon]} />
        })}
      </div>
    </section>
  )
}
export default Services