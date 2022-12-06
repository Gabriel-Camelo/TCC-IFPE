import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export const SearchBar = () => {
  return (
    <div id="SearchBox">
      <Form className="d-flex">
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
    </Form>
    </div>
  );
}