# Capital-One-2022-SummitHackathon-Poptropica

#Hook
Saving money can be a challenging journey, people often find themselves taking their money out and using them for various transactions. Capital One Organizational savings can help! Using this service can allow the user to break up their savings account(instead of having to create multiple savings accounts). Breaking up a savings account can allow users to organize each goal helping them visualize how their money is working for each purpose. This can be beneficial as if users need to withdraw money they will have the option to take out money from a ‘goal’ that is less of a concern. Example - If someone suddenly needs money for a bill it might be in their best interest to take money from something like ‘clothing fund’ over ‘emergency fund’.

#General Overview
When using this Application the user will first be prompted to the Capital One login screen. Once they enter their information and click login they will be shown their saving account balance. The saving account balance page will also offer options such as adding a savings account or log out. The user will then have the choice to click on their account for a more detailed analysis of their savings. The detailed balance includes a pie chart highlighting their different savings goals. Users will have the option to manipulate the pie by adding different goals.

#Technologies- 
Login Page

First, a web application was created using HTML and CSS. Then in order to add a more interactive experience, the website was converted to a React Web Page. Important information contained by the Login Page can include the username and password and if the user decides to save their information on their local device(Remember Me). Username and Password will be contained as Firebase Data.  This data will be used to connect to the Database to confirm if the user entered correct information. This React application includes the Capital One logo colors in a blended and modern format.
Savings Account Overview

After being provided the correct Username and Password the user will be led to their savings balance. This page is also a React Application. In this application a Red box will appear allowing users to select their savings account. Firebase data will be used to display to users savings account lump sum balance. The user's name will also be displayed. Outside the Red box on the left side the user will have the option to Log Out. 
Detailed Savings

This is the final application of this project. The top of the screen displays a friendly Capital One format which includes the user’s Full Name. Right under that the user’s Current balance will be displayed again in a gray box. Just like the Savings Account Overview, the Detailed Savings will  obtain data from Firebase in order to display ‘Current Balance’. From there the user will have the option to add their goals based on ‘Goal Name’ and ‘Amount’. After the user puts in their ‘Goal Name’ and ‘Amount’ they must press ‘Add Goal’. The ‘Add Goal’ button is a rounded white button with a green outline. 

#What If

-Implementation of a system where user can select which savings goals should get most return yield

-Application as we created isn’t the safest, as there is no login redirect to login, this application lets in users in primary parameters are met, there is also no security for if someone logs in from a suspicious location 

-Users have option to add into the goals pie but they have no option of removing a current goal

-When a user removes a goal they can choose where the current funds of the goal will go, options can include connected checking account(counts towards one of 6 monthly transfers), any other savings goal or go right to savings balance 
