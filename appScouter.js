document.getElementById('finished-screen').style.display = 'none';
const urlParams = new URLSearchParams(window.location.search);
const Name = urlParams.get('name');
let imageExportUrl = '';
let audio = new Audio('Sel.wav');
let audio2 = new Audio('Rew.wav');

document.querySelector('#screen1 h2').textContent = 'Hello, ' + Name;
document.querySelector('#finished-text').textContent = 'Great Job, ' + Name;


var timerStarted = false;

document.getElementById('start-btn').addEventListener('click', function () {
  audio.play();
  if (timerStarted) {
    return;
  }

  timerStarted = true;
  window.scrollTo(0, 500); 
  var timeLeft = 15;
  var timerId = setInterval(countdown, 1000);

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      document.getElementById('timer').innerHTML = '0:00 s';
      window.scrollTo(500, 1450);
      var timeLeft2 = 60+55; // 2 minutes and 15 seconds
      audio.play();
      var timerId2 = setInterval(countdown2, 1000);

      function countdown2() {
        if (timeLeft2 == 0) {
          clearTimeout(timerId2);
          document.getElementById('timer2').innerHTML = '0:00 s';
        
          // Start countdown3
          var timeLeft3 = 20; // 20 seconds
          audio.play();
          window.scrollTo(1450, 2450);
          var timerId3 = setInterval(countdown3, 1000);
        
          function countdown3() {
           
            if (timeLeft3 == 0) {
              clearTimeout(timerId3);
              document.getElementById('timer3').innerHTML = '0:00 s';
            } else {
              var minutes = Math.floor(timeLeft3 / 60);
              var seconds = timeLeft3 % 60;
              document.getElementById('timer3').innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' s';
              timeLeft3--;
            }
          }
        } else {
          var minutes = Math.floor(timeLeft2 / 60);
          var seconds = timeLeft2 % 60;
          document.getElementById('timer2').innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds + ' s';
          timeLeft2--;
        }
      }
    } else {
      document.getElementById('timer').innerHTML = '0:' + (timeLeft < 10 ? '0' : '') + timeLeft + ' s';
      timeLeft--;
    }
  }
});
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');
const exportBtn = document.getElementById('export-btn');

// Set canvas size
if (window.innerWidth <= 850) {
  // If the screen width is 850px or less (mobile devices)
  canvas.width = 400;
  canvas.height = 220;
} else {
  // If the screen width is more than 850px (desktop devices)
  canvas.width = 600;
  canvas.height = 350;
}

// Set stroke color to white
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;

// Load and draw the background image
const backgroundImage = new Image();
backgroundImage.src = 'AutoPatch.png'; // Replace with the path to your image
backgroundImage.onload = function() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};

// Add event listeners for drawing
// Add event listeners for drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

// Add event listeners for touch devices
canvas.addEventListener('touchstart', (e) => {
  e.preventDefault();
  startDrawing(e.touches[0]);
});
canvas.addEventListener('touchmove', (e) => {
  e.preventDefault();
  draw(e.touches[0]);
});
canvas.addEventListener('touchend', () => {
  isDrawing = false;
});

function startDrawing(e) {
  isDrawing = true;
  let rect = canvas.getBoundingClientRect();
  lastX = e.clientX - rect.left;
  lastY = e.clientY - rect.top;
}

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  let rect = canvas.getBoundingClientRect();
  let newX = e.clientX - rect.left;
  let newY = e.clientY - rect.top;
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(newX, newY);
  ctx.stroke();
  [lastX, lastY] = [newX, newY];
}

function stopDrawing() {
  isDrawing = false;
}

document.getElementById('undo-btn').addEventListener('click', function() {
  const backgroundImage = new Image();
backgroundImage.src = 'AutoPatch.png'; // Replace with the path to your image
backgroundImage.onload = function() {
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
};
});
// Export canvas as JPG


function exportCanvas() {
  canvas.toBlob(function(blob) {
    const formData = new FormData();
    formData.append('image', blob, 'drawing.jpg');
    formData.append('key', '3e8d3da8c19972850539b43b1645f089');

    fetch('https://api.imgbb.com/1/upload', {
      method: 'POST',
      mode: 'no-cors',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Image URL:', data.data.url);
      } else {
        alert('Error:', data.status);
      }
    })
    .catch(error => console.error('Error:', error));
  }, 'image/jpeg');
}
var avalue = 0;

  document.getElementById('minus-btn').addEventListener('click', function() {
    avalue--;
    document.getElementById('value').textContent = avalue;
  });

  document.getElementById('plus-btn').addEventListener('click', function() {
    avalue++;
    document.getElementById('value').textContent = avalue;
  });

  var svalue = 0;

  document.getElementById('sminus-btn').addEventListener('click', function() {
    svalue--;
    document.getElementById('svalue').textContent = svalue;
  });

  document.getElementById('splus-btn').addEventListener('click', function() {
    svalue++;
    document.getElementById('svalue').textContent = svalue;
  });

  var smvalue = 0;

  document.getElementById('smminus-btn').addEventListener('click', function() {
    smvalue--;
    document.getElementById('unique-smvalue').textContent = smvalue;
  });
  
  document.getElementById('smplus-btn').addEventListener('click', function() {
    smvalue++;
    document.getElementById('unique-smvalue').textContent = smvalue;
  });


  //TeleOp Code

  var atelevalue = 0;

  document.getElementById('Ateleminus-btn').addEventListener('click', function() {
    atelevalue--;
    document.getElementById('Atelevalue').textContent = atelevalue;
  });

  document.getElementById('Ateleplus-btn').addEventListener('click', function() {
    atelevalue++;
    document.getElementById('Atelevalue').textContent = atelevalue;
  });

  var astelevalue = 0;

  document.getElementById('Asteleminus-btn').addEventListener('click', function() {
    astelevalue--;
    document.getElementById('Astelevalue').textContent = astelevalue;
  });

  document.getElementById('Asteleplus-btn').addEventListener('click', function() {
    astelevalue++;
    document.getElementById('Astelevalue').textContent = astelevalue;
  });

  var telesvalue = 0;

  document.getElementById('telesminus-btn').addEventListener('click', function() {
    telesvalue--;
    document.getElementById('telesvalue').textContent = telesvalue;
  });

  document.getElementById('telesplus-btn').addEventListener('click', function() {
    telesvalue++;
    document.getElementById('telesvalue').textContent = telesvalue;
  });

  var telesmvalue = 0;

  document.getElementById('telesmminus-btn').addEventListener('click', function() {
    telesmvalue--;
    document.getElementById('telesmvalue').textContent = telesmvalue;
  });
  
  document.getElementById('telesmplus-btn').addEventListener('click', function() {
    telesmvalue++;
    document.getElementById('telesmvalue').textContent = telesmvalue;
  });


  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      if (this.checked) {
        console.log(this.id + ' is selected');
      } else {
        console.log(this.id + ' is deselected');
      }
    });
  });
//The Submit Button
var option8 = document.getElementById('option8');
var option9 = document.getElementById('option9');

document.getElementById('finish-btn').addEventListener('click', function() {
  audio2.play();
  document.getElementById('finished-screen').style.display = 'flex';
  const canvas = document.getElementById('drawing-canvas');  // Please set the ID of the canvas.
  const imageExportUrl = canvas.toDataURL('image/jpeg');
  const teamNumber = document.getElementById('teamNumber').value;
  const matchNumber = document.getElementById('matchNumber').value;
  const outFed = document.getElementById('outsideFed').value;
  const AampShots = document.getElementById('value').textContent;
  const AspeaShots = document.getElementById('svalue').textContent;
  const AspeaShotsm = document.getElementById('unique-smvalue').textContent;
  const comments = document.getElementById('postGameComments').value;
  

  let Autoaccuracy;
  if (AspeaShots === 0) {
    Autoaccuracy = 0;
  } else {
    Autoaccuracy = AspeaShotsm / AspeaShots * 100;
  }

  // Get the values of the selected checkboxes First Question
  const selectedCheckboxes = ['Feeder', 'Speaker', 'Amp', 'Defense'].map(optionId => {
    const checkbox = document.getElementById(optionId);
    return checkbox && checkbox.checked ? checkbox.id : null;
  }).filter(id => id !== null);
  const selectedCheckboxesText = selectedCheckboxes.join(', ');
  console.log('Selected checkboxes:', selectedCheckboxesText);

  // Get the values of the selected checkboxes Second Question
  const selectedCheckboxesfeedloc = ['At Speaker', 'At Amp', 'Mid Field'].map(optionId => {
    const checkbox = document.getElementById(optionId);
    return checkbox && checkbox.checked ? checkbox.id : null;
  }).filter(id => id !== null);
  const selectedCheckboxesTextfeedloc = selectedCheckboxesfeedloc.join(', ');
  console.log('Selected checkboxes:', selectedCheckboxesTextfeedloc);

  const TnotesFeed = document.getElementById('Atelevalue').textContent;
  const TampShots = document.getElementById('Astelevalue').textContent;
  const TspeaShots = document.getElementById('telesvalue').textContent;
  const TspeaShotsm = document.getElementById('telesmvalue').textContent;

  let Teleaccuracy;
  if (TspeaShots === 0) {
    Teleaccuracy = 0;
  } else {
    Teleaccuracy = TspeaShotsm / TspeaShots * 100;
  }
  const selectedChainOption = document.querySelector('input[name="bchainOption"]:checked').value;

  const selectedoptionparking = document.querySelector('input[name="parkingOption"]:checked').value;

  const selectedTrap = document.querySelector('input[name="Trapoption"]:checked').value;
  const selectedConncetion = document.querySelector('input[name="Connectionoption"]:checked').value;
  const spreadsheetId = "1hLxcEQfwCAWkJCXtx-dX6rr3dxPdVrgIvb3E0rkq50A";  // Please set the Spreadsheet ID.
  const avgTime = 135/Number(TspeaShots);
  let climb = 0;
  if (option8.checked || option9.checked) {
    climb = 1;
  } else {
    climb = 0;
  }
  const body = {
    arguments: { range: 'Sheet1', valueInputOption: 'USER_ENTERED' },
    body: { values: [[matchNumber, teamNumber, imageExportUrl, AampShots, AspeaShots, AspeaShotsm, Autoaccuracy, selectedCheckboxesText, selectedCheckboxesTextfeedloc, TnotesFeed, TampShots, TspeaShots, TspeaShotsm, Teleaccuracy, selectedChainOption, selectedoptionparking, selectedTrap, selectedConncetion, outFed, comments, Name]] },
  };
  const url = `https://script.google.com/macros/s/AKfycbwJyak6u9oImeFbOLzgKsP5mOh7DvLFvobWI2uaTjs3uUiFALTqUcAy5Bsm1TrYEUTW/exec`;
  
  fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error('Error:', error));

  const body2 = {
    arguments: { range: 'Sheet1', valueInputOption: 'USER_ENTERED' },
    body: { values: [[teamNumber, AspeaShotsm, AspeaShots, TspeaShotsm , TspeaShots, climb, Autoaccuracy, Teleaccuracy, avgTime]] },
  };
  const url2 = `https://script.google.com/macros/s/AKfycby28PBsdPCy4wXomEPfI65qoDWanZVE6pJRV39xHEmmovGRyrfQ5GBTeeu3Y3PjxjMJ_g/exec`;
  
  fetch(url2, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body2)
  })
  .then(response => response.text())
  .then(text => console.log(text))
  .catch(error => console.error('Error:', error));

});