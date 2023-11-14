import styles from './Navigation.module.css';
import Logo from '../../assets/netflix-logo.svg';
import NavigationActions from './NavigationActions/NavigationActions';

function Navigation() {
  const navItems = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

  return (
    <div className={styles.navigation}>
      <div className={styles['navigation-main']}>
        <img className={styles['logo']} src={Logo} alt='Netflix logo' />
        <ul className={styles['list']}>
          {navItems.map((item) => (
            <li className={styles['list-item']}>
              <a href='/'>{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <NavigationActions />
    </div>
  );
}

export default Navigation;
