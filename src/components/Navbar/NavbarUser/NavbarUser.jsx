import { useSelector, useDispatch } from 'react-redux';

import { logout } from '../../../redux/auth/auth-operations';

import { selectUser } from '../../../redux/auth/auth-selectors';

import styles from './navbar-user.module.css';

const NavbarUser = () => {
  console.log(selectUser);
  console.log(useSelector(selectUser));
  const { name } = useSelector(selectUser);
  console.log(name);
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logout());

  return (
    <div className={styles.block}>
      {name}
      <button onClick={onLogout} className={styles.logout_button}>
        Logout
      </button>
    </div>
  );
};

export default NavbarUser;
