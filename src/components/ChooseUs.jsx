import gun from '../assets/gun.png'
import performance from '../assets/performance.png'
import security from '../assets/security.png'
import quality from '../assets/4.png'

const cardDetails = [
    {
        icon:gun,
        title:'Clarified Vision & Target',
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
    },
    {
        icon:performance,
        title:'High Performance',
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
    },
    {
        icon:security,
        title:'Maintain Security',
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
    },
    {
        icon:quality,
        title:'Better Strategy & Quality',
        description:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.'
    }
]

export default () => {
    return (
        <div>
            <div className='chooseUs'>
                <h3 className='wwd'>Why Choose Us</h3>
                <h1>Why we are best</h1>
                {/* <img src={image} alt="Stats" /> */}
                <div className="card-container">
                    {cardDetails.map((card, index) => {
                        return (
                            <div key={index} className='card'>
                                <img src={card.icon} alt={card.title} />
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}