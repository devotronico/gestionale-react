import { connect } from 'react-redux';
import { addPizza } from '../redux/index';
import Pizza from '../components/pizza/Pizza';

/**
 * Ritorna in un oggetto le proprietà dell' oggetto state
 */
const mapStateToProps = state => {
  return {
    count: state.pizza.count
  };
};

/**
 * Ritorna un oggetto di funzioni
 */
const mapDispatchToProps = dispatch => {
  return {
    addPizza: () => dispatch(addPizza())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pizza);
