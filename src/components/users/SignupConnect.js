import { connect } from 'react-redux';
import { signup } from '../../redux/index';
import Signup from './Signup';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { signup })(Signup);
