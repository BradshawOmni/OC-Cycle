import actions from '../actions/mirrorActions';
import initialState from './initailState';

export default function studentReducer(state = initialState.students, action) {
  switch (action.type) {
    case actions.LOAD_STUDENTS_SUCCESS:
      return action.students.sort((student1, student2) => student1.lastName.localeCompare(student2.lastName));
    case actions.CREATE_STUDENT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.student)
      ];
    case actions.UPDATE_STUDENT_SUCCESS:
      return [
        ...state.filter(student => student.studentId !== action.student.studentId).sort((student1, student2) => student1.lastName.localeCompare(student2.lastName)),
        Object.assign({}, action.student)
      ];
    default:
      return state;
  }
}
