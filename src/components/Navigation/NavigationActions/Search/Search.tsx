import styles from './Search.module.css';
import { BsSearch } from 'react-icons/bs';

function Search() {
  return (
    <div>
      <BsSearch className={styles.searchIcon} />
    </div>
  );
}

export default Search;
