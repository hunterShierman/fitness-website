function colorChange(event) {
    const element = event.target;
    const items = document.querySelectorAll('.days li');

    // toggles off all other active dates
    items.forEach(item => {
        item.classList.remove('current-day');
    });
    
    element.classList.add("current-day")



}

