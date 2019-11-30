import { connect } from 'react-redux';
import { editCliente, deleteCliente } from '../../redux/index';
import ClienteDetails from './ClienteDetails';

const mapStateToProps = state => ({
  clienti: state.clienti
});

// const mapDispatchToProps = dispatch => {
//   return {
//     addUser: () => dispatch(addUser())
//   };
// };

export default connect(mapStateToProps, { editCliente, deleteCliente })(ClienteDetails);
