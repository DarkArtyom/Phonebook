import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/FormContacts/Form';
import { fetchContacts } from 'redux/operations';

import { Container } from 'styles/Container.styled';
import { Filter } from 'components/Filter/Filter';
import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Helmet>
          <h1>Phonebook</h1>
        </Helmet>
        <Form />
        {isLoading && !error && <b>Request in progress...</b>}
        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter />}
        {contacts.length > 0 && <ContactsList />}
      </Container>
    </>
  );
}
