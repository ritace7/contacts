import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return ( 
        <h1 className="bg-primary text-light py-2">         
            <FontAwesomeIcon icon={faAddressBook} style={{color: "#f5f5f5",}} className='me-2'/> 
            Contact List
        </h1>
     );
}
 
export default Header;
