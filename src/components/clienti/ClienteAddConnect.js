import { connect } from 'react-redux';
import { addCliente } from '../../redux/index';
import ClienteAdd from './ClienteAdd';

const mapStateToProps = state => ({
  clienti: state.clienti
});

export default connect(mapStateToProps, { addCliente })(ClienteAdd);
