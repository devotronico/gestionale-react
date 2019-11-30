import { connect } from 'react-redux';
import { signin } from '../../redux/index';
import Signin from './Signin';

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, { signin })(Signin);
