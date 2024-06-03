import c1 from '../assets/c1.png';
import hero from '../assets/hero.png';
import c3 from '../assets/3.png';
export default () => {
    return (
        <div className='projects'>
            <p className="wwd">our projects</p>           
            <h1>why we are best</h1>
            <div className='container'>
                <img src={c1} alt={c1} />
                {/* <img src={hero} alt={hero} />
                <img src={c3} alt={c3} /> */}
                <div className='cards-container'>
                    <div className='card'>
                        <h5>Genderless Kei – Japan’s Hot</h5>
                        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    <div className='card'>
                        <h5>Better Strategy & Quality</h5>
                        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    <div className='card'>
                        <h5>Genderless Kei – Japan’s Hot</h5>
                        <p>Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}