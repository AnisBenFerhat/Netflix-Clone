import styles from './Segments.module.css';

// Import images
import ScarfaceImg from '../../../assets/titlesMovies/Scarface-mov.jpg';
import HeatImg from '../../../assets/titlesMovies/Heat-mov.jpg';
import OceansElevenImg from '../../../assets/titlesMovies/Oceans-Eleven-mov.jpg';
import GreenMileImg from '../../../assets/titlesMovies/Green-Mile-mov.jpg';
import GranTorinoImg from '../../../assets/titlesMovies/Gran-Torino-mov.jpg';
import GladiatorImg from '../../../assets/titlesMovies/Gladiator-mov.jpg';
import FightClubImg from '../../../assets/titlesMovies/Fight-Club-mov.jpg';
import DjangoImg from '../../../assets/titlesMovies/Django-mov.jpg';
import TaxiDriverImg from '../../../assets/titlesMovies/Taxi-Driver-mov.jpg';
import SplitImg from '../../../assets/titlesMovies/Split-mov.jpg';

function Segments() {
  const imageList = [
    ScarfaceImg,
    HeatImg,
    OceansElevenImg,
    GreenMileImg,
    GranTorinoImg,
    GladiatorImg,
    FightClubImg,
    DjangoImg,
    TaxiDriverImg,
    SplitImg,
  ];

  const firstSection = imageList.slice(0, 5);
  const secondSection = imageList.slice(5, 10);

  return (
    <div className={styles.segments}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Films you might like</h3>
        <div className={styles.scrollWrapper}>
          {firstSection.map((image, index) => (
            <div className={styles.item} key={index}>
              <img src={image} alt={`Movie ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Popular on Netflix</h3>
        <div className={styles.scrollWrapper}>
          {secondSection.map((image, index) => (
            <div className={styles.item} key={index}>
              <img src={image} alt={`Movie ${index + 6}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Segments;
