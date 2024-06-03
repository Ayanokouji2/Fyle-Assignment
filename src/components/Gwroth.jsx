import heart from '../assets/heart.png'
import clock from '../assets/clock.png'
import growth from '../assets/growth.png'
import achievement from '../assets/achievement.png'
const cardDetails = [
    {
        icon: heart,
        digit: 199,
        description: 'Satisfied Customers'
    },
    {
        icon: clock,
        digit: 1591,
        description: 'Days of Operation'
    },
    {
        icon: growth,
        digit: 283,
        description: 'Completed Projects'
    },
    {
        icon: achievement,
        digit: 75,
        description: 'Win Awards'
    },
]
export default () => {
    return (
        <div className='gwroth'>
            <p className="wwd">Expert Growths</p>
            <h1>Our Company Growth</h1>
            <div className='cards-container'>
                {cardDetails.map((card, index) => (
                    <div key={index} className='card'>
                        <img src={card.icon} alt='icon' />
                        <h6>{card.digit}+</h6>
                        <p>{card.description}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}