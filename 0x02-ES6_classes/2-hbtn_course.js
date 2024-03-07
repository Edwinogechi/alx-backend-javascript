// Define a class named HolbertonCourse
export default class HolbertonCourse {
  // Constructor function to initialize the course with a name, length, and list of students
  constructor(name, length, students) {
    // Validate input parameters
    if (typeof name !== 'string') {
      // Throw a TypeError if name is not a string
      throw TypeError('name must be a String');
    }
    if (typeof length !== 'number') {
      // Throw a TypeError if length is not a number
      throw TypeError('length must be a Number');
    }
    if (!Array.isArray(students)) {
      // Throw a TypeError if students is not an array
      throw TypeError('students must be an Array');
    }
    students.forEach((student) => {
      if (typeof student !== 'string') {
        // Throw a TypeError if any element of students array is not a string
        throw TypeError('student must be a String');
      }
    });

    // Initialize instance variables
    this._name = name; // Course name
    this._length = length; // Course length
    this._students = students; // List of students
  }

  // Getter method to retrieve the course name
  get name() {
    return this._name;
  }

  // Getter method to retrieve the course length
  get length() {
    return this._length;
  }

  // Getter method to retrieve the list of students
  get students() {
    return this._students;
  }

  // Setter method to update the course name
  set name(newName) {
    // Validate the input parameter
    if (typeof newName !== 'string') {
      // Throw a TypeError if newName is not a string
      throw TypeError('name must be a String');
    }
    // Update the course name
    this._name = newName;
  }

  // Setter method to update the course length
  set length(newLength) {
    // Validate the input parameter
    if (typeof newLength !== 'number') {
      // Throw a TypeError if newLength is not a number
      throw TypeError('length must be a Number');
    }
    // Update the course length
    this._length = newLength;
  }

  // Setter method to update the list of students
  set students(newStudents) {
    // Validate the input parameter
    if (!Array.isArray(newStudents)) {
      // Throw a TypeError if newStudents is not an array
      throw TypeError('students must be an Array');
    }
    // Validate each element of the newStudents array
    newStudents.forEach((student) => {
      if (typeof student !== 'string') {
        // Throw a TypeError if any element of newStudents array is not a string
        throw TypeError('student must be a String');
      }
    });
    // Update the list of students
    this._students = newStudents;
  }
}

