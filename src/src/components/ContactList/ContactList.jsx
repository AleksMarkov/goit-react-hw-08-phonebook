import styles from './contact-list.module.css';

const ContactList = ({ items, deleteContact }) => {
  /* // number instead of phone */
  const elements = items.map(({ id, name, number }) => (
    <li key={id} className={styles.contacts}>
      {/* // number instead of phone */}
      {name}: {number}{' '}
      <button onClick={() => deleteContact(id)} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
    </>
  );
};

export default ContactList;
