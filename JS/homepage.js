
function btnCalculate() {
  //defining the variables from the webpage to store data

  //take price input form webpage into array
  let input = document.getElementsByName("array[]");
  let outputlabel = document.getElementById("oplabel");
  let profit = document.getElementById("outputp");

  //length of input array initializing to zero
  let iplen = 0;

  /*
  Check the number of elements in the input and increment the length that will skip 
  the blank input elements from the webpage if not entered
  */
  for (let i = 0; i < input.length; i++) {
    if (input[i].value != "") {
      iplen++;
    }
  }

  //if number of stocks pricws entered is less than 2 then show error
  if (iplen < 2) {
    profit.value = "Getting a profit requires at least 2 prices";
    alert("Cannot Calculate : Not enough stock price data.");
  }

  //else greedy approach starts
  else {

    //Let the initial minimum price be first element
    let minPrice = input[0].value;

    //Let the initial maximum profit be difference between second and first price elements
    let maxProfit = input[1].value - input[0].value;

    //iterate through the array to find maximum profit and minimum price
    for (let i = 1; i < input.length; i++) {

      //continue only if the 'i' th value exists else skip to next iteration  
      if (input[i].value != "") {

        //for each iteration let the current stock price be the value at 'i' th input
        let stock_prize_current = input[i].value;
        console.log("Current stock price : " + stock_prize_current);

        //the tentative profit will be current stock prize - minimum price from which max profit can be earned
        let tentative_profit = stock_prize_current - minPrice;

        //max profit will be maximum of two profits
        maxProfit = maxprofit(maxProfit, tentative_profit);

        //min profit will be minimum of two prices
        minPrice = Math.min(minPrice, stock_prize_current);
        console.log("Profit : " + maxProfit + " Price : " + minPrice);
      }
      //if 'i'th value doesnt exist then continue to next iteration
      else {
        continue;
      }
    }

    //if profit is negative show that it is not recommended to buy stocks 
    if (maxProfit < 0) {

      let opnegative = `Should Buy or Not ? <br> Maximum profit is  ${maxProfit} <br>Not recommended to buy because of Negative Profit.`;
      outputlabel.innerHTML = opnegative;
      profit.value = "Maximum profit is : " + maxProfit + "\r" + "  \n(Avoid Buying for these stock)";
    }
    //if profit is positive show that you can buy stocks
    else {
      console.log("Final Profit is : " + maxProfit);
      let opnegative = `Should Buy or Not ? <br> Maximum profit is  ${maxProfit} <br> You can buy at : ${minPrice} <br>Can buy the stocks because profit is earned.`;
      outputlabel.innerHTML = opnegative;
      profit.value = "Maximum profit is : " + maxProfit + "  You can buy at : " + minPrice;
    }
  }
}
//to calculate maximum profit
function maxprofit(pro, ten) {
  if (pro < ten) {
    return ten;
  }
  else {
    return pro;
  }
}

//to calculate minimum price
function minprice(min, stock) {
  if (min < stock) {
    return min;
  }
  else if (stock < min) {
    return stock;
  }
}


