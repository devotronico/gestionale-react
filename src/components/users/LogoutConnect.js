import { connect } from 'react-redux';
import { logout } from '../../redux/index';
import Logout from './Logout';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { logout })(Logout);
