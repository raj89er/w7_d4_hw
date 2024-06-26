
console.log(`Hello there! ~General Kenobi~`);
/*
I put tilda's around to let people know it's the person how said it.
This however also put the following error in the browser's console:
no eval # 253a60ab-5554-4f6b-80ce-9dfe38617dd48 */


console.log('#'.repeat(77));
console.log('Question 1');
console.log('#'.repeat(77));
// Exercise 1
/*
Banking System

Create an Account class with the properties accountNumber, currentBalance, and owner. The Account should have methods to deposit and withdraw. The 
deposit method should add that amount to the currentBalance. The withdraw method should first check if there is enough to withdraw before withdrawing

Implement child classes CheckingAccount and SavingsAccount, each inheriting from the Account class. 

The CheckingAccount will also have an overdraftLimit property. Override the withdraw method to 
first check if there is enough (+ overdraftLimit) before withdrawing.

The SavingsAccount will also have an interestRate. Add a method addInterest that will increase the currentBalance by that interest rate

*/

// const checkingAccount = new CheckingAccount('123456', 1000, 'John Doe', 500);
// const savingsAccount = new SavingsAccount('654321', 5000, 'Jane Smith', 2);

// checkingAccount.deposit(500);
// checkingAccount.withdraw(1400);
// checkingAccount.withdraw(200);  

// savingsAccount.deposit(1000);
// savingsAccount.withdraw(7000);
// savingsAccount.addInterest();

class Account {
    constructor(accountNumber, currentBalance, owner) {
        this.accountNumber = accountNumber;
        this.currentBalance = currentBalance;
        this.owner = owner;
    }

    deposit(amount) {
        this.currentBalance += amount;
        console.log(`Why yes, OF COURSE I'll hold on to your $${amount}. I now have $${this.currentBalance} of yours in ${this.constructor.name}.`);
    }

    withdraw(amount) {
        if (amount <= this.currentBalance && amount >= 20) {
            this.currentBalance -= amount;
            console.log(`Enjoy your $${amount} while it lasts. I still have $${this.currentBalance} of yours in ${this.constructor.name}!`);
        } else if (amount < 20) {
            console.log(`I only have twenties, aim higher! You have $${this.currentBalance} in ${this.constructor.name}!`);
        } else {
            onsole.log(`I don't give loans; you only have $${this.currentBalance} in ${this.constructor.name}.`);
        }
    }
}

class CheckingAccount extends Account {
    constructor(accountNumber, currentBalance, owner, overdraftLimit) {
        super(accountNumber, currentBalance, owner);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        const totalWithdrawalAmount = amount + this.overdraftLimit;
        if (totalWithdrawalAmount <= this.currentBalance && amount >= 20) {
            this.currentBalance -= amount;
            console.log(`Enjoy your $${amount} while it lasts. I still have $${this.currentBalance} of yours in ${this.constructor.name}!`);
        } else if (amount < 20) {
            console.log(`I only have twenties, aim higher! You have $${this.currentBalance} in ${this.constructor.name}!`);
        } else {
            console.log(`I don't give loans; you only have $${this.currentBalance} in ${this.constructor.name}.`);
        }
    }
}

class SavingsAccount extends Account {
    constructor(accountNumber, currentBalance, owner, interestRate) {
        super(accountNumber, currentBalance, owner);
        this.interestRate = interestRate;
    }

    addInterest() {
      const interestAmount = this.currentBalance * (this.interestRate / 100);
        const prevBalance = this.currentBalance;
        this.currentBalance += interestAmount;
        console.log(`Here's $${interestAmount} for letting me hold on to your $${prevBalance}. You're now rich with $${this.currentBalance} in ${this.constructor.name}!`);
    }
}


const samplechecking  = new CheckingAccount(123456789, 1000, 'John Doe', 500);
console.table(samplechecking);
samplechecking.deposit(500);
samplechecking.withdraw(700);
samplechecking.withdraw(50);
console.table(samplechecking);

console.log('#'.repeat(77));

const samplesaving  = new SavingsAccount(987654321, 5000, 'Jane Smith', 5);
console.table(samplesaving);
samplesaving.deposit(1000);
samplesaving.addInterest();
samplesaving.withdraw(2000)
console.table(samplesaving);

