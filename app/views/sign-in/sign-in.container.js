import { connect } from 'react-redux';
import SignIn from './sign-in.component';
import { unlockGreenChain } from './actions';
import { onBoard } from '../../actions/initialize';

const mapStateToProps = state => ({
  error: state.unlockGreenChainReducer.error,
  success: state.unlockGreenChainReducer.success,
  network: state.networkReducer.network,
});

const mapDispatchToProps = {
  unlockGreenChain,
  onBoard,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
