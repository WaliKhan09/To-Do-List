// Initialize Shepherd tour
const tour = new Shepherd.Tour({
  defaultStepOptions: {
    cancelIcon: {
      enabled: true,
    },
    classes: 'shepherd-theme-default',
    scrollTo: { behavior: 'smooth', block: 'center' }
  }
});

// Add steps to the tour
tour.addStep({
  title: 'Welcome to the To-Do Planner',
  text: 'This is a simple to-do list app built with Shepherd.js. Let me show you around!',
  attachTo: {
    element: '.header',
    on: 'bottom',
  },
  buttons: [
    {
      action() {
        return this.next();
      },
      text: 'Next',
    },
  ],
});

tour.addStep({
  title: 'Add a new task',
  text: 'Type your task in the input field and click "Add" to add it to the list.',
  attachTo: {
    element: '#myInput',
    on: 'bottom',
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back',
    },
    {
      action() {
        return this.next();
      },
      text: 'Next',
    },
  ],
});

tour.addStep({
  title: 'Mark tasks as complete',
  text: 'Click on a task to mark it as complete. The task will be crossed out.',
  attachTo: {
    element: '#myUL',
    on: 'top',
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back',
    },
    {
      action() {
        return this.next();
      },
      text: 'Next',
    },
  ],
});

tour.addStep({
  title: 'Remove tasks',
  text: 'Click on the "×" button next to a task to remove it from the list.',
  attachTo: {
    element: '.close',
    on: 'left',
  },
  buttons: [
    {
      action() {
        return this.back();
      },
      classes: 'shepherd-button-secondary',
      text: 'Back',
    },
    {
      action() {
        return this.complete();
      },
      text: 'Got it!',
    },
  ],
});

// Start the tour on page load
window.onload = () => {
  tour.start();
};

// JavaScript code for the To-Do List
var myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Function to clear the list
function clearList() {
  document.getElementById("myUL").innerHTML = "";
}
