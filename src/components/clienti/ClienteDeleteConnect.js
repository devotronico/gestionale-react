import { connect } from 'react-redux';
import { deleteCliente } from '../../redux/index';
import ClienteDelete from './ClienteDelete';

const mapStateToProps = state => ({
  clienti: state.clienti
});

export default connect(mapStateToProps, { deleteCliente })(ClienteDelete);
