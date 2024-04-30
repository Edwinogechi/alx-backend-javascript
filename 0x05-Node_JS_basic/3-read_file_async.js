const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) return reject(Error('Cannot load the database'));

      // Extracting student data from the file, excluding the header
      const lines = data.split('\n').slice(1, -1);

      // Extracting the header from the data
      const header = data.split('\n').slice(0, 1)[0].split(',');

      // Finding the indices of 'firstname' and 'field' columns
      const idxFn = header.findIndex((ele) => ele === 'firstname');
      const idxFd = header.findIndex((ele) => ele === 'field');

      // Initializing dictionaries to count the number of students in each field and store the list of students
      const fields = {};
      const students = {};

      // Iterating over each line to process student data
      lines.forEach((line) => {
        const list = line.split(',');
        
        // Updating the count of students in each field
        if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
        fields[list[idxFd]] += 1;

        // Concatenating the list of students in each field
        if (!students[list[idxFd]]) students[list[idxFd]] = '';
        students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
      });

      // Outputting the total number of students
      console.log(`Total number of students: ${lines.length}`);

      // Outputting the number of students in each field along with their names
      for (const key in fields) {
        if (Object.hasOwnProperty.call(fields, key)) {
          const element = fields[key];
          console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
        }
      }

      // Resolving the promise once processing is complete
      return resolve();
    });
  });
};

