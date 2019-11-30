import { connect } from 'react-redux';
import { editCliente } from '../../redux/index';
import ClienteEdit from './ClienteEdit';

const mapStateToProps = state => ({
  clienti: state.clienti
});

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: () => dispatch(addUser())
//   };
// };

export default connect(mapStateToProps, { editCliente })(ClienteEdit);
