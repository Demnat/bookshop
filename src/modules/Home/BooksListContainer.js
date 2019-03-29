import {connect} from 'react-redux';
import BooksList from './BooksList';

const mapStateToProps = state => ({
  books: state.books
});
export default connect(mapStateToProps)(BooksList);