const fs = require('fs');

module.exports = function countStudents(path) {
  try {
    // Read the data from the file
    const data = fs.readFileSync(path, { encoding: 'utf-8' });

    // Split the data into lines and exclude the header
    const lines = data.split('\n').slice(1, -1);

    // Extract the header from the data
    const header = data.split('\n').slice(0, 1)[0].split(',');

    // Find the indices of the 'firstname' and 'field' columns
    const idxFn = header.findIndex((ele) => ele === 'firstname');
    const idxFd = header.findIndex((ele) => ele === 'field');

    // Initialize dictionaries to count the number of students in each field and store the list of students
    const fields = {};
    const students = {};

    // Iterate over each line in the data
    lines.forEach((line) => {
      // Split the line into individual values
      const list = line.split(',');

      // Update the count of students in the respective field
      if (!fields[list[idxFd]]) fields[list[idxFd]] = 0;
      fields[list[idxFd]] += 1;

      // Concatenate the list of students in the respective field
      if (!students[list[idxFd]]) students[list[idxFd]] = '';
      students[list[idxFd]] += students[list[idxFd]] ? `, ${list[idxFn]}` : list[idxFn];
    });

    // Output the total number of students
    console.log(`Number of students: ${lines.length}`);

    // Output the number of students in each field along with the list of students
    for (const key in fields) {
      if (Object.hasOwnProperty.call(fields, key)) {
        const element = fields[key];
        console.log(`Number of students in ${key}: ${element}. List: ${students[key]}`);
      }
    }
  } catch (error) {
    // Throw an error if the database cannot be loaded
    throw new Error('Cannot load the database');
  }
};

