const { deposit, withdraw } = require('./main');

// Test counter
let testsPassed = 0;
let testsFailed = 0;

function assert(condition, testName) {
  if (condition) {
    console.log(`✓ PASS: ${testName}`);
    testsPassed++;
  } else {
    console.log(`✗ FAIL: ${testName}`);
    testsFailed++;
    throw new Error(`Test failed: ${testName}`);
  }
}

console.log('=== Bank Transaction Processor Unit Tests ===\n');

console.log('--- Valid Test Cases ---');

// Valid Test 1: Deposit money into account
try {
  const result = deposit(100, 50);
  assert(result === 150, 'Valid Test 1: Deposit 50 into balance of 100 should return 150');
} catch (e) {
  console.log(`✗ FAIL: Valid Test 1 - ${e.message}`);
  testsFailed++;
}

// Valid Test 2: Withdraw money from account with sufficient balance
try {
  const result = withdraw(500, 200);
  assert(result === 300, 'Valid Test 2: Withdraw 200 from balance of 500 should return 300');
} catch (e) {
  console.log(`✗ FAIL: Valid Test 2 - ${e.message}`);
  testsFailed++;
}

console.log('\n--- Invalid Test Cases ---');

// Invalid Test 1: Withdraw more than current balance
try {
  withdraw(100, 200);
  console.log('✗ FAIL: Invalid Test 1 - Should throw error for insufficient funds');
  testsFailed++;
} catch (e) {
  assert(e.message === 'Insufficient funds: Cannot withdraw more than current balance', 
         'Invalid Test 1: Withdraw 200 from balance of 100 should throw insufficient funds error');
}

// Invalid Test 2: Deposit negative amount
try {
  deposit(100, -50);
  console.log('✗ FAIL: Invalid Test 2 - Should throw error for negative deposit');
  testsFailed++;
} catch (e) {
  assert(e.message === 'Deposit amount cannot be negative',
         'Invalid Test 2: Deposit negative amount should throw error');
}

console.log('\n--- Intentional Break Test ---');

// Intentional Break Test: Expect wrong output to force CI failure
// try {
//   const result = deposit(100, 50);
//   assert(result === 200, 'Intentional Break: Deposit 50 into 100 expecting wrong result (200) - SHOULD FAIL');
// } catch (e) {
//   console.log(`✗ FAIL: Intentional Break Test - ${e.message}`);
//   testsFailed++;
// }

console.log('\n=== Test Summary ===');
console.log(`Total Tests: ${testsPassed + testsFailed}`);
console.log(`Passed: ${testsPassed}`);
console.log(`Failed: ${testsFailed}`);

if (testsFailed > 0) {
  console.log('\n❌ Some tests failed!');
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!');
  process.exit(0);
}