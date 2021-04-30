document.getElementById('date').innerHTML = new Date().toDateString();

function highlightInLife() {
    // get the in life variables
    var field1 = document.getElementById('analyte');

    // get the current value of the clock's display property
    var displaySetting = field1.style.display;

    // also get the clock button, so we can change what it says
    var ilbutton = document.getElementById('ilbutton');

    // now toggle highlighted text and the button text, depending on current state
    if (displaySetting == 'block') {
      // In-life fields are highlighted, deselect them
      ar span = document.createElement('span');
      span.className = 'un-highlight';
      field1.surroundContents(span);
      //field1.style.display = 'none';
      // change button text
      ilbutton.innerHTML = 'Unhighlight In-Life fields';
    }
    else {
      // In-life fields are not highlighted, select them
      var span = document.createElement('span');
      span.className = 'highlight';
      field1.surroundContents(span);
      //field1.style.display = 'block';
      // change button text
      ilbutton.innerHTML = 'In-Life';
    }
  }