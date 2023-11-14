import { Accordion, ListGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faLocationDot, faBuilding } from '@fortawesome/free-solid-svg-icons';

const ContactCard = ({id, name, number, email, address, company}) => {
    return ( 
                <Accordion data-testid="accordion">
                    <Accordion.Item eventKey={id} className='my-1'>
                        <Accordion.Header> 
                            <FontAwesomeIcon icon={faUser} className='me-2'/>
                             {name}
                        </Accordion.Header>
                        <Accordion.Body>
                            <ListGroup variant="flush" role="list">
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faPhone} className='me-2'/>
                                    {number}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faEnvelope} className='me-2'/>
                                    {email}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faLocationDot} className='me-2'/>
                                    {address}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <FontAwesomeIcon icon={faBuilding} className='me-2'/>
                                    {company}
                                </ListGroup.Item>
                            </ListGroup>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion> 
     );
}
 
export default ContactCard;