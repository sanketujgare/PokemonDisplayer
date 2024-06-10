import styles from "./Header.module.scss";
import { HeaderProps } from "./Header.types.ts";

const Header = ({}: HeaderProps) => {
  return (
    <div className={styles.Header}>
      <h1 className={styles.heading}>PoKdex</h1>
    </div>
  );
};

export default Header;
