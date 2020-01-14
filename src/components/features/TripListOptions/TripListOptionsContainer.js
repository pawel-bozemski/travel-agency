import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, changeDuration, AddTagToFilter, RemoveTagToFilter} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  changeDuration: (type, value) => dispatch(changeDuration(type, value)),
  AddTagToFilter: (tag, checked) => dispatch(AddTagToFilter(tag, checked)),
  RemoveTagToFilter: (tag, checked) => dispatch(RemoveTagToFilter(tag, checked)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
