import css from './filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ handleInputChange, filter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          onChange={handleInputChange}
          value={filter}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </label>
    </div>
  );
};

Filter.prototype = {
  handleInputChange: PropTypes.func,
  filter: PropTypes.string,
};

export default Filter;
