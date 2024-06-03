import heroImage from '../assets/hero.png';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

// JQuery
import $ from 'jquery';

export default () => {

    const [modal, setModal] = useState(false);
    const [isChecked, setChecked] = useState(false);

    useEffect(() => {
        $('.btn').click(function () {
            if (modal === true) {
                $('.modal').removeClass('open-modal');
                setModal(false);
            }
            else {
                $('.modal').addClass('open-modal');
                setModal(true);
            }
        })


        $('.modal-btn').click(function () {

            handleSubmit();
            $('.modal').removeClass('open-modal');
            setModal(false);
        })
    }, [])

    useEffect(() => {
        $('#checkbox').change(function () {
            if (isChecked === true) {
                $('.modal-btn').prop('disabled', false);
            }
            else {
                $('.modal-btn').prop('disabled', true);
            }
        })
    }, [isChecked])

    const handleSubmit = (e) => {
        const email = $('.email').val();
        const fname = $('.fname').val();
        const lname = $('.lname').val();

        axios
            .post("https://getform.io/f/navvxxea", {
                email,
                fname,
                lname
            },
                { headers: { 'Accept': 'application/json' } })
            .then(response => console.log(response))
            .catch(error => console.log(error))

    }

    return (
        <>
            <div className="heroSection">
                <div>
                    <h3 className='awt'>Award Winning</h3>
                    <h1>Digital Marketing Agency</h1>
                    <p className='sometext'>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</p>
                    <Button className="btn" variant='danger'>Contact Us</Button>
                </div>
                <img src={heroImage} alt="hero section" />
            </div>
            <div className="modal">
                <form className="modal-container" action='https://getform.io/f/navvxxea' onSubmit={handleSubmit}>
                    <h4>Talk to us</h4>
                    <input type="text" className="email" placeholder='Work Email*' />
                    <div className='name'>
                        <input type="text" className="fname" placeholder='First Name*' />
                        <input type="text" className="lname" placeholder='Last Name*' />
                    </div>

                    <div className='iacontainer'>
                        <input id="checkbox" type="checkbox" checked={isChecked} onChange={() => setChecked(!isChecked)} />
                        <span className="ia">I agree to Fyle's terms and conditions, and provide consent to send me communication.</span>
                    </div>
                    <button className="modal-btn" disabled={true}>Contact Us</button>
                </form>
            </div>
        </>
    )
}