// // let arr=['a','b','c','d']
// // // arr.slice(2);
// // console.log(arr)
// // console.log(arr.slice(1))
// // // console.log(arr.splice(2,3))
// // console.log(arr)
// // console.log(arr[arr.length-1])
// // console.log(arr.at(-1))


// // const movements=[111,222,333,-111,-333];

// // // for(const movement of movements)

// // for(const [i,movement] of movements.entries())
// // {
// //     if(movement>0){
// //         console.log(`movement ${i+1} you deposited ${movement}`);
// //     }else{
// //         console.log(`movement ${i+1} you withdraw money ${Math.abs(movement)}`);
// //     }
// // }

// // movements.forEach(function(movement,index,array){
// //   if(movement>0){
// //         console.log(`movement ${index+1} you deposited ${movement}`);
// //     }else{
// //         console.log(`movement ${index+1} you withdraw money ${Math.abs(movement)}`);
// //     }
// // })

// // const currencies=new Map([
// //     ['USD','United States'],
// //     ['EURO','Euro'],
// //     ['GBP','Pounds']
// // ]);
// // currencies.forEach(function(currency,value,arr){
// //     // console.log(currencies);
// //     console.log(`${value},${currency}`);
// // })
// // const setCurrencies=new Set(['USD','EURO','PKR','INR']);
// // console.log(setCurrencies)




// //Bankist Application 

//  // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];




// // Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];



// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
// //displaySummary

// const calcDisplaySummary = function (acc) {
//   const incomes = acc.movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const out = acc.movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${Math.abs(out)}€`;

//   const interest = acc.movements
//     .filter(mov => mov > 0)
//     .map(deposit => (deposit * acc.interestRate) / 100)
//     .filter((int, i, arr) => {
//       // console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}`;
// };

// const createUsernames = function (accs) {
//   accs.forEach(function (acc) {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map(name => name[0])
//       .join('');
//   });
// };
// createUsernames(accounts);

// const updateUI = function (acc) {
//   // Display movements
//   displayMovements(acc.movements);

//   // Display balance
// //   calcDisplayBalance(acc);

//   // Display summary
//   calcDisplaySummary(acc);
// };


// const displayMovements=function(movements){
//     containerMovements.innerHTML='';
//     movements.forEach(function(value,index){
        
//         const transactionType=value>0 ? 'deposit':'withdrawal'; 
//        const html=`<div class="movements__row">
//           <div class="movements__type movements__type--${transactionType}"> ${index+1} ${transactionType}</div>
//           <div class="movements__value">${value}</div>
//         </div>
//           `  ;
//        containerMovements.insertAdjacentHTML('afterbegin',html) ;
//     });

// }
// displayMovements(account1.movements);

// // const calcDisplaySummary=function(movements){
// //     const income=movements
// //     .filter(mov=>mov>0)
// //     .reduce((acc,curr)=>acc+curr,0); 
// //     labelSumIn.textContent=` ${income}`;
// // }

// // console.log(calcDisplaySummary(account1.movements));

// const calcOutSummary=function(movements){
//     const outIncome=movements.filter(mov=>mov<0)
//     .reduce((acc,curr)=>acc+curr,0);
//     labelSumOut.textContent=`${Math.abs(outIncome)}`;

// const interest=movements.filter(mov=>mov>0)
// .map(deposit=>(deposit * 1.2)/100)
// .reduce((acc,interestRate)=>acc+interestRate, 0);
// labelSumInterest.textContent=`${interest}`;

// }
// console.log(calcOutSummary(account1.movements))


// //userNames
// const calcPrintBalance = function (acc) {
//   acc.balance = acc.movements.reduce((acc, curr) => acc + curr, 0);

//   labelBalance.textContent = `${acc.balance}€`;
// };




// //  const userNames=function(user){
// // const userName=user
// //  .toLowerCase()
// //  .split(' ')
// //  .map(function(name){
// //     return name.slice(0,2); 
// //  }).join('');
// //  return userName;

// //  }


//  const createUserNames=function(accs){
//  accs.forEach(function(acc){
//     acc.username=acc.owner
//     .toLowerCase()
//     .split(' ')
//     .map(name=>name[0])
//     .join('');
//  });
//  }
//  createUserNames(accounts)



// let currentAccount;
// btnLogin.addEventListener('click',function(e){
//     e.preventDefault();
//     // console.log('Login');
//     currentAccount=accounts.find(acc=>acc.username===inputLoginUsername.value);
//     console.log(currentAccount)
//     if(currentAccount.pin===Number(inputLoginPin.value)){
//         labelWelcome.textContent='Account login succesfully';
//     }
//     containerApp.style.opacity=1 ;
// })


// //transfers
// btnTransfer.addEventListener('click', function (e) {
//   e.preventDefault();

//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(
//     acc => acc.username === inputTransferTo.value
//   );

//   calcPrintBalance(currentAccount);

//   if (
//     amount > 0 &&
//     receiverAcc &&
//     currentAccount.balance >= amount &&
//     receiverAcc.username !== currentAccount.username
//   ) {
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);

//     updateUI(currentAccount);
//   }
// });

// btnLoan.addEventListener('click', function(e){
//     e.preventDefault(); 

// })

// btnClose.addEventListener('click', function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       acc => acc.username === currentAccount.username
//     );

//     accounts.splice(index, 1);

//     containerApp.style.opacity = 0;
//   }
// });


// // const updateUI=function(acc){
// //     displayMovements(acc.movements);

// //     calcDisplaySummary(acc);
// // }
// //  const user='Jonas Schmedtmann';
// //  const userName=user
// //  .toLowerCase()
// //  .split(' ')
// //  .map(function(name){
// //     return name[0]; 

// //  }).join('');


// //  console.log(userName);

//  //user name with function

 



// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);


  
// // const app=document.querySelector('.app');
// // app.addEventListener('click',function(){
// //     app.style.opacity=0.9;
// // })
// console.log(accounts)

// const euroToUSD=1.1;

// const USD = movements.map(function(value){
//     return value*euroToUSD;

// })


// const arrow=movements.map(value=>value*euroToUSD);

// console.log(movements);
// console.log(USD)
// console.log(arrow)


// const deposits=movements.filter(function(mov){
//     return mov>0;

// }) 

// const withdraw=movements.filter(function(mov){
//     return mov<0;
// })
// console.log(deposits);
// console.log(withdraw);

// const depositsArray=[];
// for(const mov of movements) if(mov>0) depositsArray.push(mov);
// console.log(depositsArray);



// const balance=movements.reduce(function(accumalator,curr,index,arr){
//     return accumalator+curr;

// },0);

// console.log(balance);

// let balance2=0;
// for(const mov of movements) balance2+=mov;
// console.log(balance2)


// const max=movements.reduce((acc,curr)=>{
//     if(acc>curr){
//         return acc;
//     }else{
//         return curr;
//     }
// },0)
// console.log(max)

// const totalDepositUSD=movements
// .filter(mov=>mov<0)
// .map(mov=>mov*euroToUSD)
// .reduce((acc,mov)=>acc+mov,0);

// const firstWithDrawal=movements.find(mov=>mov<0);
// console.log(movements);
// console.log(firstWithDrawal);

// const account=accounts.find(acc=>acc.owner==='Jonas Schmedtmann');
// console.log(account);





// // console.log(calcPrintBalance());

// //computing userNames 

// //chaining methods





// const arr=[300,555,400,222,-400]

// arr.sort((b,a)=>{
//     if(a>b) return 1;
//     if(b<a) return -1;

// });


fetch('http://localhost:3000/login', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    username: inputLoginUsername.value,
    pin: inputLoginPin.value
  })
})
  .then(res => res.json())
  .then(data => {
    console.log(data);

    if (data.user) {
      labelWelcome.textContent = `Welcome ${data.user.username}`;
      containerApp.style.opacity = 1;
    } else {
      labelWelcome.textContent = 'Login failed ❌';
    }
  })
  .catch(err => console.log(err));