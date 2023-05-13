import PropTypes from 'prop-types';
// import css from './contactList.module.css';

const ContactList = ({ contacts, filter }) => {
  return (
    <ul>
      {contacts.map(data => {
        if (filter === '') {
          return (
            <li key={data.id}>
              {data.name}: {data.number}
            </li>
          );
        }
        if (data.name.toLowerCase().includes(filter.toLowerCase())) {
          return (
            <li key={data.id}>
              {data.name}: {data.number}
            </li>
          );
        }
        return '';
      })}
    </ul>
  );
};

ContactList.prototype = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
};

export default ContactList;
