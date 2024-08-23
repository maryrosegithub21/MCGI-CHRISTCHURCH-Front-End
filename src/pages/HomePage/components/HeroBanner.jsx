// === To applied the style you have to import this === //
import styles from '../components/HeroBanner.module.css'
// === To applied the style you have to import this === //


// for showing the sign up form
import { useNavigate } from 'react-router-dom';


export default function HeroBanner() {
  const navigate = useNavigate(); // for showing the the sign up form

// Handle form submission logic here
const handleClicksignUpHero = (e) => {
  // e.preventDefault();
// path for showing the sign up form 
  // navigate('https://docs.google.com/document/d/1HzG41PncXWmnAZJ3D4ksoIvC7I41yzgpW25dBZpQWMo/edit?usp=drive_link'); 
  window.open('https://docs.google.com/forms/d/1RHi93Cpq3e6zWXatLa7yLFjYH-64_ZIMzfcZhWFUSMc/edit ');

};
  return (
  <div className={styles.parentContainerHeroMRA}>   
  < div className={styles.btnSignUpDivHero} >
  <button type='submit' className={styles.SignUpButtonHeroMRA} onClick={handleClicksignUpHero}>
    REGISTER NOW
  </button>
  <p className={styles.HeroBanH5MRA}>The Feast Dedicated to God is available quarterly. </p>
  </div>
  </div>
   
  )
}
