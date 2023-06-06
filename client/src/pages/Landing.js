import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';

const Landing = () => {
  return (
  <Wrapper>
    <nav>
      <img src={logo} alt='jobify' className='logo'/>
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
            <button className='btn btn-hero'>Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img'/>
    </div>
  </Wrapper>
  )
}

export default Landing
