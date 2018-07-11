import { getPayload } from './callApi';

class studentApi {
  static getAllStudents() {
    return getPayload(`${process.env.API_HOST}/api/Student`, 'GET', 'Student').then(students => {
      return new Promise((resolve, reject) => {
        resolve(Object.assign([], students));
      });
    });
  }

  static getStudentById(studentId) {
    return getPayload(`${process.env.API_HOST}/api/Student/${studentId}`, 'GET', 'Student').then(student => {
      return new Promise((resolve, reject) => {
        resolve(student);
      });
    });
  }

  static saveStudent(student) {
    student = Object.assign({}, student); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      const minstudentNameLength = 3;
      if (student.firstName.length < minstudentNameLength) {
        reject(`First Name must be at least ${minstudentNameLength} characters.`);
      }

      if (student.lastName.length < minstudentNameLength) {
        reject(`Last Name must be at least ${minstudentNameLength} characters.`);
      }

      if (student.rankId <= 0) {
        reject('No Rank has been selected.');
      }

      if (student.studentId) {
        getPayload(`${process.env.API_HOST}/api/Student/${student.studentId}`, 'PUT', 'Student', student).then((student) => {
          resolve(student);
        }).catch((message) => console.log('Student ERROR:', message)); // eslint-disable-line no-console
      } else {
        getPayload(`${process.env.API_HOST}/api/Student`, 'POST', 'Student', student).then((student) => {
          resolve(student);
        }).catch((message) => console.log('Student ERROR:', message)); // eslint-disable-line no-console
      }
    });
  }

  static deleteStudent(student) {
    return new Promise((resolve, reject) => {
      getPayload(`${process.env.API_HOST}/api/student/${student.studentId}`, 'DELETE', 'Academy', student.studentId);
      resolve();
    });
  }
}

export default studentApi;

