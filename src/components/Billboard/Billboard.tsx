import styles from './Billboard.module.css';
import GodfatherImg from '../../assets/movies/Godfather.jpg';
import GodfatherLogo from '../../assets/movies/Godfather-Logo.png';
import { FaPlay } from 'react-icons/fa6';
import { IoInformationCircleOutline } from 'react-icons/io5';

interface Movie {
  title: string;
  year: number;
  rating: string;
  duration: string;
  type: string;
  synopsis: string;
  starring: string[];
}

const godfatherMovie: Movie = {
  title: 'The Godfather',
  year: 1972,
  rating: 'Maturity Rating: 16+',
  duration: '2h 57m',
  type: 'Drama',
  synopsis:
    'Michael Corleone, the war-hero youngest son of a powerful New York crime boss, joins the family business when his father is targeted for assassination.',
  starring: ['Marlon Brando', 'Al Pacino', 'James Caan'],
};

function Billboard() {
  return (
    <div className={styles.billboard}>
      <div className={styles.billboardImageContainer}>
        <img src={GodfatherImg} alt='Godfather Part 1 screenshot of the movie' className={styles.billboardImage} />
        <div className={styles.innerBillboard}>
          <div className={`${styles.logoContainer} ${styles.movieDetails}`}>
            <img src={GodfatherLogo} alt='Logo of the Godfather movie' className={styles.logo} />
            <div className={styles.movieDetails}>
              <h2>{godfatherMovie.title}</h2>
              <p>
                {godfatherMovie.year} | {godfatherMovie.rating} | {godfatherMovie.duration} | {godfatherMovie.type}
              </p>
              <p>{godfatherMovie.synopsis}</p>
              <p>Starring: {godfatherMovie.starring.join(', ')}</p>
            </div>
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
