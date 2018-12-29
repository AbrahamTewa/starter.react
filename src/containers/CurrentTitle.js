// ============================================================
// Import packages
import { connect } from 'react-redux';

// ============================================================
// Import components
import { Title } from '../components';

// ============================================================
// Container
function mapStateToProps(state) {
    return { children: state.action.title };
}

const CurrentTitle = connect(mapStateToProps)(Title);

// ============================================================
// Exports
export default CurrentTitle;
