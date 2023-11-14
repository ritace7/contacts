import React from 'react';
import '../styles/App.css';
import ContactCard from './ContactCard';
import {Container} from 'react-bootstrap';
import Header from './Header';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      contacts: []
    };
  }

  async componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const data = await response.json();

    this.setState({
      contacts: data,
    });

    console.log("current state", this.state);
  }

  render(){
    const {contacts} = this.state;
    return (
      <div className="App">
        <Header />
        <Container fluid className='my-3'>
              {
                contacts.map((contact) => {
                  return(
                    <ContactCard 
                      id={contact.id}
                      name={contact.name}
                      number={contact.phone}
                      email={contact.email}
                      address={contact.address.suite+'/'+contact.address.street+', '+contact.address.city}
                      company={contact.company.name}
                    />
                    );
                  })
                }
          </Container>
      </div>
     );
  }
}

export default App;