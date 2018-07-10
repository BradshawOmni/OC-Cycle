import action from './mirrorActions';
import studentApi from '../api/studentApi';
import { beginAjaxCall, ajaxCallError } from './ajaxStatusActions';

export function loadStudentsSuccess(students) {
  return {
    type: action.LOAD_STUDENTS_SUCCESS,
    students
  };
}

export function loadStudentsFailed(message) {
  return {
    type: action.LOAD_STUDENTS_FAILED,
    message
  };
}

export function createStudentSuccess(student) {
  return {
    type: action.CREATE_STUDENT_SUCCESS,
    student
  };
}

export function createStudentFailed(message) {
  return {
    type: action.CREATE_STUDENT_FAILED,
    message
  };
}

export function updateStudentSuccess(student) {
  return {
    type: action.UPDATE_STUDENT_SUCCESS,
    student
  };
}

export function updateStudentFailed(message) {
  return {
    type: action.UPDATE_STUDENT_FAILED,
    message
  };
}

export function loadStudents() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    try {
      return studentApi.getAllStudents().then(students => {
        dispatch(loadStudentsSuccess(students));
      });
    } catch (error) {
      return dispatch(loadStudentsFailed(error.message));
    }
  };
}

export function saveStudent(student) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall());
    try {
      return studentApi.saveStudent(student).then(savedStudent => {
        student.studentId ? dispatch(updateStudentSuccess(savedStudent)) :
          dispatch(createStudentSuccess(savedStudent));
      });
    } catch (error) {
      dispatch(ajaxCallError(error));
      return student.studentId ? dispatch(updateStudentFailed(error.message)) :
        dispatch(createStudentFailed(error.message));
    }
  };
}
