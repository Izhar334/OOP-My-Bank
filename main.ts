#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.yellow("\t\n\t<<<< Welcome to Izhar's myBank Project >>>>"));
console.log("<<<<==================================================>>>>\n");

interface myBankAccount {
  credit(amount: number): void;
  debit(amount: number): void;
}
// class
class BankAccount implements myBankAccount {
  accountbalance: number;
  constructor(accountbalance: number) {
    this.accountbalance = accountbalance;
  }
  // publically accessible
  credit(amount: number) {
    if (amount > 0) {
      this.accountbalance += amount;
      console.log(
        chalk.green("Credited amount succesfully: " + this.accountbalance)
      );
    } else {
      console.log(chalk.red("Invalid amount"));
    }
  }
  // publically debit the amount
  public debit(amount: number) {
    if (amount > 0 && amount < this.accountbalance) {
      this.accountbalance -= amount;
      console.log(
        chalk.green("Debited amount succesfully: " + this.accountbalance)
      );
    } else {
      console.log(chalk.red("debit failed:"));
    }
  }
}
// customer details
class Customer {
  person: {
    name: string;
    lastName: string;
  };
  age: number;
  gender: string;
  mobileNumber: number;
  bankaccount: BankAccount;

  constructor(
    person: { name: string; lastName: string },
    age: number,
    gender: string,
    mobileNumber: number,
    bankaccount: BankAccount
  ) {
    // this.property utilization
    this.person = person;
    this.age = age;
    this.gender = gender;
    this.mobileNumber = mobileNumber;
    this.bankaccount = bankaccount;
  }
  // Publically user access methods
  public display() {
    console.log(chalk.blue("Customer details:"));
    console.log(
      chalk.blue("Name: " + this.person.name + "" + this.person.lastName)
    );
    console.log(chalk.blue("Age: " + this.age));
    console.log(chalk.blue("Gender: " + this.gender));
    console.log(chalk.blue("Mobile Number: " + this.mobileNumber));
    console.log(
      chalk.blue("Account Balance: " + this.bankaccount.accountbalance)
    );
    console.log();
  }
}
const a1 = new BankAccount(100000);
const c1 = new Customer(
  { name: "Izhar", lastName: "Ahmed" },
  37,
  "male",
  3131217022,
  a1
);
c1.display();
c1.bankaccount.debit(15000);
console.log();

const a2 = new BankAccount(50000);
const c2 = new Customer(
  { name: "Shafique", lastName: "Baloch" },
  25,
  "male",
  3131217022,
  a2
);
c2.display();
c2.bankaccount.debit(20000);
console.log();
