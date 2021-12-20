import "./App.css";
import React, { Component } from "react";
import { Form } from "components/Form/Form";
import { Filter } from "components/Filter/Filter";
import { Contacts } from "components/Contacts/Contacts";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: "",
    name: "",
    number: "",
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    const findMap = this.state.contacts.find(
      (contact) => contact.name === name
    );

    findMap
      ? alert(`${name} is already in contacts!`)
      : this.setState((prevState) => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("updated");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <div className="App">
        <Form onSubmit={this.addContact} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
