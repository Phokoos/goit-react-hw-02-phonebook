import PropTypes from 'prop-types';
// import css from './contactForm.module.css';

const ContactForm = ({ formSubmit }) => {
  return (
    <form onSubmit={formSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

ContactForm.prototype = {
  formSubmit: PropTypes.func,
};

export default ContactForm;

// const ContactForm = ({ handleInputChange, name, formSubmit, number }) => {
//   return (
//     <form onSubmit={formSubmit}>
//       <label>
//         Name
//         <input
//           onChange={handleInputChange}
//           value={name}
//           type="text"
//           name="name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <label>
//         Number
//         <input
//           onChange={handleInputChange}
//           value={number}
//           type="tel"
//           name="number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           required
//         />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// ContactForm.prototype = {
//   handleInputChange: PropTypes.func,
//   name: PropTypes.string,
//   formSubmit: PropTypes.func,
//   number: PropTypes.number,
// };

// export default ContactForm;
