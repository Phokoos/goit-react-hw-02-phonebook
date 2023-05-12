import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/contactForm';
import ContactList from './ContactList/contactList';
import Filter from './Filter/filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmit = event => {
    event.preventDefault();

    const contacts = this.state.contacts;
    contacts.push({
      id: nanoid(),
      name: event.target.name.value,
      number: event.target.number.value,
    });

    this.setState({
      contacts: contacts,
    });

    event.currentTarget.reset();
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm state={this.state} formSubmit={this.formSubmit} />

        <h2>Contacts</h2>
        <Filter
          contacts={this.state.contacts}
          filter={this.state.filter}
          handleInputChange={this.handleInputChange}
        />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
