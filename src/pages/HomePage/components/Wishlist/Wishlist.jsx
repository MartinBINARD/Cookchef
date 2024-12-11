import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from '../../../../state';
import styles from './Wishlist.module.scss';

function Wishlist() {
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);

  return (
    <div onClick={() => setWishlistDisplay(false)} className={styles.container}>
      <div onClick={(e) => e.stopPropagation()} className={styles.wishlist}>
        <h2>Wishlist</h2>
      </div>
    </div>
  );
}

export default Wishlist;