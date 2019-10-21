// ============================================================
// Import packages
import { connect } from 'react-redux';

// ============================================================
// Import modules
import { Input } from '../components';
import { actions } from '../redux';

// ============================================================
// Functions
function mapStateToProps(state) {
    return { title: state.action.title };
}

function mapDispatchToProps(dispatch) {
    return {
        onkeypress: (event) => dispatch(actions.setTitle(event.target.value)),
    };
}

const CurrentTitle = connect(mapStateToProps, mapDispatchToProps)(Input);

// ============================================================
// Exports
export default CurrentTitle;
