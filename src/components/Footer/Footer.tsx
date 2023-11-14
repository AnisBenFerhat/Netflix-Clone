import styles from './Footer..module.css';
import FooterLinks from './FooterLinks/FooterLinks';
import SocialLinks from './SocialLinks/SocialLinks';

function Footer() {
  return (
    <footer className={styles.footer}>
      <SocialLinks />
      <FooterLinks />
    </footer>
  );
}

export default Footer;
