// UserMenu.tsx
import styles from './UserMenu.module.css';
import { FaUsersRectangle } from 'react-icons/fa6';

function UserMenu() {
  return (
    <div>
      <FaUsersRectangle className={styles.userIcon} />
    </div>
  );
}

export default UserMenu;
