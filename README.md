**The organizer**

The name of the project is The organizer. The main idea is based on the traditional calendar but a digitized one. The calendar has the ability to save notes, dates and things to do for a person during a year. People are always in need for structure and tools to keep track of what's going on in their lives so a calendar would be a good idea for this project. The application is supposed to be useful. A user should be able to create a personal account for their calendar and have a safe place to store their daily life. The login function is essential, so the calendars material will be uniquely connected to the correct account.The user will be able to create notes on specific days for a special activity. These notes will be added to the calendar. A note will contain date, content och category. The calendar will show one week at the time and also have a full smaller calendar with all the days on the chosen month. 

#### **Architecture**

#### **Database**

The main focus on the task is that it should be based on a database, so The organizer will have a relational database to store all the information about the users. The database will have a couple of entity sets that should be enough for the user to have a calendar. The notes are connected to a certain user. So the entity sets will have a relation between them.

***Entity set 1 - users**

- This entity set will contain

- userid (a unique id for each user)
- username (username that the user choose during registration)
- password (password the user choose during registration)
- firstname (first name that the user type in during registration)
- last name (last name that the user type in during registration)

#### **Entity set 2 - notes** 

- notetime (this should be the time for the note)

- date (including year, month and date)
- content (description of the note)
- category (for example if it’s training, school, work, party, birthdays etc)

Entity set 2 - side notes (bonus feature)content**



The bonus feature is to have a side note somewhere in the design. This will just be a small box to write anything the user wants.The backend is responsible for sending information to the database. For example when the user creates an account the backend will send this information to the database and store it. This also regards when the user is filling in notes in their calendar. The backend will use queries to get the information that is requested. This information is going to vary depending on the users. The backend will be responsible for the login function in the application. This means that the backend will make sure that the user should be able to login with username and password.

#### **API**

The bridge between the frontend and backend will be the REST api since it’s predefined in the PHP language. To communicate with the database the project will use REST api. The REST api is well implemented in PHP and therefore a good choice for the project. With the REST api there is a possibility to use forms to send information via REST to the database. When the user creates a new note POST will be used. Since the POST does not show any URL and parameters it’s not included here.GET is used to access the information from a specific users calendar. This is what the query for the API looks like to access all the notes from a specific user with a unique userID.theorganizer/api/notes?userid=”xxxx”

#### **The backend role**

- Register to create an account for the users.****

- Be able to login users to the application. 
- Store each user calendar and save their information.
- Continuously update the database from user input.

#### **The frontend role**

- The frontend will be written in css and javascript
- The frontend will make it possible for the user to. 
- The project will use html-forms to send information that the user does to the backend.
- Create an account.
- Logging in to their calendar.
- Add notes on a specific day in the calendar.
- Get an overview over the calendar and the current week.

#### **Release 1 - 2021-02-19**

- During release 1 the focus will be on finding a way to create a dynamic calendar. Look at other digital calendar/planners and implement this so it’s compatible with the database. 

- Focus will also be on setting up the database with entity sets. 
- ****Start creating the login function with sql queries.****
- ****Start designing the frontend.****

#### Release 2 - 2021-03-05

- The user should be able to login to their calendar.
- Finish the design of the calendar.
- In this release there will be focus on the frontend and connect everything to the backend.
- The frontend includes the visual login, sign up and calendar.
- Start with a external API if there is time (weather for example)

**Release 3 - 2021-03-19**

- The final release will focus on smaller details. 

- Run a lot of tests to the database so that all information is handled correctly.

  ​

  #### INSTRUCTIONS TO RUN THE CALENDAR

  1. Make sure you have apache, mySQL and phpMyAdmin running on your computer and for this project I use xxamp. To download it  you can use this link https://www.apachefriends.org/download.html

  2. When you download the repository make sure to find the documentRoot of your localhost. In the documentRoot pasta the complete folder the organizer. 

  3. To be able to store the data you need to set up the database. Go to localhost/phpmyadmin.

  4. Start by creating a database. Click on New in the left panel. In the inputfield "Database name" type in the name "the organizer". Make sure to type lowercase because it's casesensitive.

  5. When you've checked that the name is correct click on "Create".

  6. The database the organizer will now show in the left panel. 

  7. Next step is to import the tables for the database. Make sure you have clicked on the database in the left panel so it's marked. You will see to your right that the database is empty.

  8. Now click on "Import" in the upper menu.

  9. Click on "Choose file" and select the file the_organizer.sql which will be in the repository. This file contains the structure of the database.

  10. Make sure that the selected format is SQL.

  11. Click on "Go".

  12. Now the tables for the database should be visible in the left panel below the organizer. They are for now empty but will be filled in with data as soon as you create an account and start adding notes to your calendar.

      NOTE: If you use some other directory than regular localhost you need to go to the the file connect.php which is found under the organizer/api/connect.php. Then you need to change the credentials for the connection of the database.

  13. Now you can SIGN UP and then login to your calendar. Go to localhost/the organizer/index.html to sign up and log in. 

  ​

  ### USE THE API

  The api will be displayed in JSON-format. 

  | Endpoint             | Parameters | Description                              | APIcall                                  |
  | -------------------- | ---------- | ---------------------------------------- | ---------------------------------------- |
  | api/listnotes.php    | None       | This endpoint will display a list of all your notes in the database connected to your account. |                                          |
  | api/sortdate.php     | date       | This endpoint allows the user to search for notes on a specific day. With the parameter date you can send a value of the date. The date is expressed in day-month-year. For example date= 1-1-2021. NOTE: You won't revieve any information to write 03-03-2021. | the organizer/api/sortdate.php?date=3-3-2021 |
  | api/sortcategory.php | category   | This endpoint makes it possible to search for notes in a specific category. The categories are the following work, school, meeting, dinner, training, holiday, travel, other. For example it could be  category=holiday. | the organizer/api/sortcategory.php?category=holiday |

  ​