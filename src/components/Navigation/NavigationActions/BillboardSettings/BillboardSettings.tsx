import styles from './BillboardSettings.module.css';
import { GiSettingsKnobs } from 'react-icons/gi';

function BillboardSettings() {
  return (
    <div>
      <GiSettingsKnobs className={styles.settingsIcon} />
    </div>
  );
}

export default BillboardSettings;
