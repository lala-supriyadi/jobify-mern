import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className='container page'>
        {/* info */}
        <div className='info'>
            <h1>job <span>tracking</span> app</h1>
            <p>
            I'm baby hell of meditation sartorial gastropub thundercats, 
            tumblr flexitarian VHS. Chillwave next level shaman unicorn 
            squid hot chicken meh roof party. Sartorial butcher swag yr 
            food trucktypewriter stumptown solarpunk gochujang humblebrag 
            gluten-free.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login/Register
            </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
    </div>
  </Wrapper>
  )
}

export default Landing
