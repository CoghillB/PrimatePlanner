document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.days button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const date = this.innerText;
            const eventName = prompt("Enter event for " + date + " August 2021:");
            if (eventName) {
                alert("Event '" + eventName + "' added for " + date + " August 2021");
            }
        });
    });
});

//Implement the calendar in the HTML file to show an accurate calender with the current date highlighted.

// Create a function to generate the calendar
function generateCalendar() {
    const today = new Date();
    const currentMonth = today.getMonth(); // Months are zero-based (0-11)
    const currentYear = today.getFullYear();
    const currentDate = today.getDate();

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    // Get the first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    // Get the number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create calendar container
    const calendar = document.createElement('div');
    calendar.classList.add('calendar');

    // Create day headers
    daysOfWeek.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.classList.add('day-header');
        dayHeader.innerText = day;
        calendar.appendChild(dayHeader);
    });

    // Create empty slots for days of the week before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptySlot = document.createElement('div');
        emptySlot.classList.add('day-slot');
        calendar.appendChild(emptySlot);
    }

    // Create day slots
    for (let date = 1; date <= daysInMonth; date++) {
        const daySlot = document.createElement('button');
        daySlot.classList.add('day-slot');
        daySlot.innerText = date;
        if (date === currentDate) {
            daySlot.classList.add('current-date');
        }
        // Reuse your event listener code for adding events
        daySlot.addEventListener('click', function () {
            const eventName = prompt("Enter event for " + date + " August 2021:");
            if (eventName) {
                alert("Event '" + eventName + "' added for " + date + " August 2021");
            }
        });
        calendar.appendChild(daySlot);
    }

    // CalendarJS.js
    document.addEventListener("DOMContentLoaded", function() {
        const dates = document.querySelectorAll('.calendar .date');
        dates.forEach(date => {
            date.addEventListener('click', function() {
                const dateNumber = this.querySelector('.date-number').innerText;
                const eventName = prompt("Enter event for " + dateNumber + " August 2021:");
                if (eventName) {
                    const eventsDiv = this.querySelector('.events');
                    const eventElement = document.createElement('div');
                    eventElement.textContent = eventName;
                    eventsDiv.appendChild(eventElement);
                    alert("Event '" + eventName + "' added for " + dateNumber + " August 2021");
                }
            });
        });
    });

    // Append the calendar to the container
    document.body.appendChild(calendar);
}

// Call the function to generate the calendar
generateCalendar();
