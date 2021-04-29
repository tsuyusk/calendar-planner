const calendarButtons = document.querySelectorAll('.calendar-table > tbody > tr > td > button');

for (let i = 0; i < calendarButtons.length ; i++) {
  const calendarButton = calendarButtons[i];

  calendarButton.addEventListener('click', function() {
    handleClickCalendarButton(calendarButton);
  });
}

function handleClickCalendarButton(calendarButton) {
  unselectAllCalendarButtons();

  if (!calendarButton.parentElement.classList.contains('disabled-td')) {
    calendarButton.classList.add('selected');
  }

  const remindersContainer = document.querySelector('.reminders-container');

  remindersContainer.classList.remove('hidden');
}

function unselectAllCalendarButtons() {
  for (let i = 0; i < calendarButtons.length ; i++) {
    const calendarButton = calendarButtons[i];
    
    calendarButton.classList.remove('selected');
  }    
}
