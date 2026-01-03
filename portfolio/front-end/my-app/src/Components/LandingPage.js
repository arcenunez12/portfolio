import '../CSS/landingPage.css'
import profilepic from '../Photos/profile-pic-6.JPEG';
import Contact from './Contact';
import Skills from './Skills';
function LandingPage(){
    return (
        <section id="mission">
        <div>
            <div id='landing-page'>
                <div className='landing-section-1'>
                    <div>
                        <img className='avatar' src={profilepic} alt='User Avatar'></img>
                    </div>
                </div>
                <div className='landing-section-2' id='landing-info'>
                    <h3>Hi! I'm Andrea</h3>
                    <p>At the moment, I am part of the Tech Connect/SEP Program at J.P Morgan. I started in July 2024
                    and am working on the OPT Intelligent Process Automation team as Technology Support.
                    This is my portfolio page. Here I will add any projects that have/am working on. As well as updates
                    as to what I am currently learning in my free time.</p>
                </div>
            </div>
            <Skills></Skills>
            <Contact></Contact>
        </div>
        </section>

    );
}

export default LandingPage;