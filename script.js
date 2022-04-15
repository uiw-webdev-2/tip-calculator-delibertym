/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
 *
 * List of ISO language codes:
 * @link http://www.lingoes.net/en/translator/langcode.htm
 */

 const formatter = (locale = "en-US", currency = "USD", value) => {
    let formattedValue = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currency,
    }).format(value);
  
    return formattedValue;
  };
  
  const tipCalculator = (sum, percentage, locale, currency) => {
    let tip = sum * (percentage / 100);
    let total = sum + tip;
  
    console.log(`
      Sum before tip: ${formatter(locale, currency, sum)}
      Tip percentage: ${percentage}%
      Tip:            ${formatter(locale, currency, tip)}
      Total:          ${formatter(locale, currency, total)}
    `);
  };
  
  tipCalculator(29.95, 18, "en", "USD");

  window.onload = () =>
    //the function called when Calculate button is clicked.
    {
        /*calling a function calculateTip
         which will calculate the tip for the bill.*/
        document.querySelector('#calculate').onclick = calculateTip;
    }
 
function calculateTip() {
    /*assign values of ID : amount, person and service to
    variables for further calculations.*/
    let amount = document.querySelector('#amount').value;
    let persons = document.querySelector('#persons').value;
    let service = document.querySelector('#services').value;
 
    console.log(service);
    /*if statement will work when user presses
          calculate without entering values. */
    //so will display an alert box and return.
    if (amount === '' && service === 'Select') {
        alert("Please enter valid values");
        return;
    }
 
    //now we are checking number of persons
    if (persons === '1')
    //if there is only one person then we need not to display each.
        document.querySelector('#each').style.display = 'none';
    else
    //if there are more than one person we will display each. 
        document.querySelector('#each').style.display = 'block';
 
    /*calculating the tip by multiplying total-bill and type of
     service; then dividing it by number of persons.*/
    //fixing the total amount upto 2 digits of decimal
    let total = (amount * service) / persons;
    total = total.toFixed(2);
 
    //finally displaying the tip value
    document.querySelector('.tip').style.display = 'block';
    document.querySelector('#total').innerHTML = total;
}
  