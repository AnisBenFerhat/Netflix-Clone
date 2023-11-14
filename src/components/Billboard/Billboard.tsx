import styles from './Billboard.module.css';
import GodfatherImg from '../../assets/movies/Godfather.jpg';
import GodfatherLogo from '../../assets/movies/Godfather-Logo.png';
import { FaPlay } from 'react-icons/fa6';
import { IoInformationCircleOutline } from 'react-icons/io5';

function Billboard() {
  return (
    <div className={styles.billboard}>
      <div className={styles.billboardImageContainer}>
        <img src={GodfatherImg} alt='Godfather Part 1 screenshot of the movie' className={styles.billboardImage} />
        <div className={styles.innerBillboard}>
          <div className={styles.logoContainer}>
            <img src={GodfatherLogo} alt='Logo of the Godfather movie' className={styles.logo} />
            <div className={styles.buttonsContainer}>
              <button className={styles.button}>
                <FaPlay /> Play
              </button>
              <button className={styles.button}>
                <IoInformationCircleOutline /> More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
