Technical Documentation
The technical stack used for development is as follows:
‘React Native’ to provide availability across platforms like Android and iOS.
Java REST APIs for processing and connecting the UI with the database. (This application is hosted on Heroku for easy access to UI)
Firebase Database to store necessary information like user details and medical data.
Steps for setting up the applications:
Download the user interface code from https://github.com/avaidya48/happyHeartUI.git 
Install nodejs from https://nodejs.org/en/download 
Open the downloaded code in the IDE of your choice (preferably, VScode)
Open a new terminal window inside the project folder
Run the command ‘npx expo start’ in the terminal
On your mobile phone, download Expo Go app.
For Android phones, use the QR code scanner of the Expo Go App
For iOS, open the default camera app
Scan the QR code presented in the terminal window as a result of step 5
Steps for testing the JAVA application:
Download the code from https://github.com/avaidya48/happyHeartRest.git 
Make sure you have JAVA installed on your machine for testing the RESt API (Note: these instructions are for testing the rest api separately. This can instead also be done via the application as the APIs are integrated on the app via Heroku)
Run ‘HappyHeartRestApplication’ file
Open Postman and check different APIs

User Documentation
Steps to run ‘Happy Heart’
Upon installation, you will be taken to the landing screen of the app, where you can either login or register using new credentials 
For testing, it is recommended that you use these credentials as required data has already been added for this account:
Test email: gtjacket14
Test password: test
Upon login, you will be taken to the home page, which has four sections: Appointment/Reminders, Add Medical Data, Medical Records and Visualization
Upon opening the Appointment/Reminders page, you will see an option to create a new appointment by adding date, time and details of the appointment. You can create a new appointment by pressing the ‘Submit’ button. You will also see a list of all the scheduled appointments sorted by order of occurrence.
 Opening the ‘Add Medical Data’ page, would lead you to a form where you can enter medical details like diastolic blood pressure, systolic blood pressure, heart rate and weight.
When you open the ‘Medical Records’ page, you will see a list of your recent medical records updated through the app
The visualisation screen represents your medical data into graphical formats for easier inspection and monitoring
