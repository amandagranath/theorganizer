<?php
include './../api/connect.php';
if(!isset($_SESSION['id'])):
  header("location:  ./../index.html");
endif;
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">

<link rel="stylesheet" type="text/css" href="style.css">
<link href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>


<Title>The organizer calendar</Title> 
</head>
<body>
	<main>
        <div class="wrapper-container">                         <! --The flex container start -->
            <div id ="wrapper-left">                           <! --The left wrapper start -->
               <div id="weather-content"></div>
                <div class="current-day-left"></div>
                <div class="current-week-day-left"></div>

                <div id="event-title">Add event + </div>
                <div id="error-message"></div>
                <div id="current-events">
           
            <div id="eventBox">
                <input type="text" id="date" name="date" placeholder="Event date"><br>
                <input type="text" id="description" name="description" placeholder="Information"><br>
                <input type="text" id="time" name="time" placeholder="Time for the event"><br>
                <div class="custom-select" style="width:200px;">
                    Choose a category:
                    <select id="category">
                        <option value="Work">Work</option>
                        <option value="School">School</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Dinner">Dinner</option>
                          <option value="Training">Training</option>
                          <option value="Holiday">Holiday</option>
                          <option value="Travel">Travel</option>
                          <option value="Other">Other</option>
                    </select>
                  </div>
                  
               
                <button id="save">Save event</button> <button id="close">Close</button>

            </div>
            </div>
            <div class="event-title">Current events:</div>
            <ul id="list-events"></ul>
           

            <div class="add-event"></div>

            </div>                                                <! --The left wrapper end -->



            
            <div id="wrapper-right">                             <! --The right wrapper start -->
                
                <div class="calendar-container">
                <div class="calendar">
                    <div class="months">
                        <div id="logout-wrapper">
                        <div id ="welcome-title">Welcome <?php echo $_SESSION['username']; ?></div><a id ="logout-button" href="./../logout/logout.php">Sign out</a></div>
                        <i class="fas fa-angle-left prev"></i>
                       
                        <div class="date">
                            <div id="displayMonth"></div>
                           <div id="displayDate"></div>
                     
                    </div>
                    <i class="fas fa-angle-right next"></i>
                    </div>
                    <div class="weekdays-wrapper">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div id="calendar-days">
                      
                    </div>
                    </div>
            </div>
        </div><! --The right wrapper end -->
                     
                
                                                           

        </div>                                                 <! --The flex container end -->

</main>
</body>

<script type="text/javascript" language="javascript" src="main.js"></script>
<script type="text/javascript" language="javascript" src="notes.js"></script>

</html>