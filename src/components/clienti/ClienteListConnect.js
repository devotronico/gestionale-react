import { connect } from 'react-redux';
// import { listCliente } from '../../redux/index';
import ClienteList from './ClientiList';

const mapStateToProps = state => ({
  clienti: state.clienti
});

export default connect(mapStateToProps, null)(ClienteList);
