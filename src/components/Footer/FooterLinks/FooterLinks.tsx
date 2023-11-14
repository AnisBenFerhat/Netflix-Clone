import styles from './FooterLinks.module.css';

function FooterLinks() {
  const links = [
    'FAQ',
    'Help Center',
    'Account',
    'Media Center',
    'Investor Relations',
    'Jobs',
    'Netflix Shop',
    'Redeem Gift Cards',
    'Buy Gift Cards',
    'Ways to Watch',
    'Terms of Use',
    'Privacy',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
    'Speed Test',
    'Legal Guarantee',
    'Legal Notices',
    'Only on Netflix',
    'Ad Choices',
  ];

  return (
    <ul className={styles.linkContainer}>
      {links.map((link) => (
        <li key={link}>
          <a href='/' className={styles.link}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
