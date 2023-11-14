import styles from './SocialLinks.module.css';
import { FaSquareFacebook } from 'react-icons/fa6';
import { SlSocialInstagram } from 'react-icons/sl';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

function FooterLinks() {
  return (
    <div className={styles.iconContainer}>
      <FaSquareFacebook className={styles.icon} />
      <SlSocialInstagram className={styles.icon} />
      <FaXTwitter className={styles.icon} />
      <IoLogoYoutube className={styles.icon} />
    </div>
  );
}

export default FooterLinks;
