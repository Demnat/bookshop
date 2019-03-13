import {connect} from 'react-redux';
import BooksList from './BooksList';

const mapStateToProps = state => ({
  books: state.books
});
console.log("container books");
export default connect(mapStateToProps)(BooksList);