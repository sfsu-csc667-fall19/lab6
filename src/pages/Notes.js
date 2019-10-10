import React from 'react';
import { connect } from 'react-redux';
import { listNotes } from '../redux/actions/notesActions';

const Notes = ({ dispatch, }) => {
  React.useEffect(() => {
    dispatch(listNotes());
  }, []);

  return (
    <div>
      <h2>Notes</h2>
    </div>
  );
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Notes);
