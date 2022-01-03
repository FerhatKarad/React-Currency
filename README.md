Working in a team complete the following activity:

1. Create a copy of the CodeSandbox app

Open the following React app: CodeSandbox - Exercise 2. To begin working, you just need to start writing code. Upon first save (CMD+S / CTRL+S) CodeSandbox will automatically create a copy of the app for you with a new URL.

2. Add state to the component App

Component App.js contains all of the markups that you will need for this exercise.

Your task is to update App.js and using the useState() hook create a state variable named amount. You will use this state variable for keeping track of the total amount of dollars at hand. The initial value of the amount should be 1. Once created, the amount state should be shown in the App where indicated by the placeholder text DISPLAY_AMOUNT_HERE.

3. Add event handlers to update the amount

The next task is to add the event handlers to each button in the App.js.

Every time the user clicks on one of the buttons RESET +1 +10 +100 on the top of the screen, the amount should update for the value specified on the button.

The RESET button should reset the amount back to 1 every time the user clicks on it.

4. Update the CurrencyWidget component

Update the CurrencyWidget component to display the currency image, currency name, currency symbol, and currency code, where indicated by the placeholder text C_IMG, C_NAME, C_SYMBOL and C_CODE.

These values are passed through the props from the parent component CurrencyPanel, your task is to access them and display them.

Example - currency prop

5. Display the selected amount in the CurrencyWidget

Pass the amount value from the App down to the CurrencyWidget components. Once you pass the amount value to the CurrencyWidget, display it where indicated by placeholder text SELECTED_AMOUNT.

Example - passing amount

6. Display the converted amount in the CurrencyWidget

In the CurrencyWidget calculate the converted amount and display it where indicated by the placeholder text CONVERTED_AMOUNT.

To get the converted amount multiply the amount coming from the App and exchangeRate coming from the currency object. You can check the currencies.json to see the structure of each currency object.

Expected result

Exercise 2 - Expected Result

Click for solution
