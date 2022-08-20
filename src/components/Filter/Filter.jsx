import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contactsActions';

function Filter() {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={e => dispatch(filterContacts(e.target.value))}
        name="filter"
        value={filter}
        required
      />
    </label>
  );
}

export default Filter;
