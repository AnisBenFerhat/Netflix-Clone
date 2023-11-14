import styles from './NavigationActions.module.css';
import Search from './Search/Search';
import Notifications from './Notifications/Notifications';
import UserMenu from './UserMenu/UserMenu';
import BillboardSettings from './BillboardSettings/BillboardSettings';

function NavigationActions() {
  return (
    <div className={styles['navigation-action']}>
      <Search />
      <Notifications />
      <UserMenu />
      <BillboardSettings />
    </div>
  );
}

export default NavigationActions;
