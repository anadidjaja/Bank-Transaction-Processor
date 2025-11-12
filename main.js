/**
 * Bank Transaction Processor
 * Handles deposit and withdrawal operations with validation
 */

/**
 * Deposits an amount into the account balance
 * @param {number} balance - Current account balance
 * @param {number} amount - Amount to deposit
 * @returns {number} New balance after deposit
 * @throws {Error} If amount is negative or not a number
 */
function deposit(balance, amount) {
  if (typeof balance !== 'number' || typeof amount !== 'number') {
    throw new Error('Balance and amount must be numbers');
  }
  
  if (amount < 0) {
    throw new Error('Deposit amount cannot be negative');
  }
  
  if (balance < 0) {
    throw new Error('Balance cannot be negative');
  }
  
  return balance + amount;
}

/**
 * Withdraws an amount from the account balance
 * @param {number} balance - Current account balance
 * @param {number} amount - Amount to withdraw
 * @returns {number} New balance after withdrawal
 * @throws {Error} If amount exceeds balance, is negative, or not a number
 */
function withdraw(balance, amount) {
  if (typeof balance !== 'number' || typeof amount !== 'number') {
    throw new Error('Balance and amount must be numbers');
  }
  
  if (amount < 0) {
    throw new Error('Withdrawal amount cannot be negative');
  }
  
  if (balance < 0) {
    throw new Error('Balance cannot be negative');
  }
  
  if (amount > balance) {
    throw new Error('Insufficient funds: Cannot withdraw more than current balance');
  }
  
  return balance - amount;
}

module.exports = { deposit, withdraw };