import styles from './Notifications.module.css';
import { FaBell } from 'react-icons/fa';

function Notifications() {
  return <FaBell className={styles.bellIcon} />;
}

export default Notifications;
