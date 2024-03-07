// Define a class named Currency
export default class Currency {
  // Constructor function to initialize a currency with a code and name
  constructor(code, name) {
    // Validate input parameters
    if (typeof code !== 'string') throw TypeError('code must be a String');
    if (typeof name !== 'string') throw TypeError('name must be a String');

    // Initialize instance variables
    this._code = code; // Currency code
    this._name = name; // Currency name
  }

  // Getter method to retrieve the currency code
  get code() {
    return this._code;
  }

  // Getter method to retrieve the currency name
  get name() {
    return this._name;
  }

  // Setter method to update the currency code
  set code(newCode) {
    // Validate the input parameter
    if (typeof newCode !== 'string') throw TypeError('code must be a String');
    // Update the currency code
    this._code = newCode;
  }

  // Setter method to update the currency name
  set name(newName) {
    // Validate the input parameter
    if (typeof newName !== 'string') throw TypeError('name must be a String');
    // Update the currency name
    this._name = newName;
  }

  // Method to display the full currency name and code
  displayFullCurrency() {
    // Return a string containing the currency name and code
    return `${this._name} (${this._code})`;
  }
}

