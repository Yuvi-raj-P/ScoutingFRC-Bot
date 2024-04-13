
const urlParams = new URLSearchParams(window.location.search);
const Name = urlParams.get('name');
let imageExportUrl = '';

document.querySelector('#screen1 h2').textContent = 'Hello, ' + Name;


var timerStarted = false;

document.getElementById('start-btn').addEventListener('click', function () {
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
      window.scrollTo(500, 1000);
      var timeLeft2 = 2 * 60 + 15; // 2 minutes and 15 seconds
      var timerId2 = setInterval(countdown2, 1000);

      function countdown2() {
        if (timeLeft2 == 0) {
          clearTimeout(timerId2);
          document.getElementById('timer2').innerHTML = '0:00 s';
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
canvas.width = 500;
canvas.height = 300;

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
let isDrawing = false;
let lastX = 0;
let lastY = 0;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseout', stopDrawing);

function startDrawing(e) {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
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
exportBtn.addEventListener('click', exportCanvas);

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

  document.getElementById('option1').addEventListener('change', function() {
    var feederOptions = document.getElementById('feederOptions');
    var speakerOptions = document.getElementById('speakerOptions');
  
    if (this.checked) {
      feederOptions.style.display = 'block';
      speakerOptions.style.display = 'none';
    } else {
      feederOptions.style.display = 'none';
      speakerOptions.style.display = 'block';
    }
  });

  //The Submit Button
//The Submit Button
document.getElementById('finish-btn').addEventListener('click', function() {
  const canvas = document.getElementById('drawing-canvas');  // Please set the ID of the canvas.
  const imageExportUrl = canvas.toDataURL('image/jpeg');
  const teamNumber = document.getElementById('teamNumber').value;
  const matchNumber = document.getElementById('matchNumber').value;
  const spreadsheetId = "1hLxcEQfwCAWkJCXtx-dX6rr3dxPdVrgIvb3E0rkq50A";  // Please set the Spreadsheet ID.
  const body = {
    arguments: { range: 'Sheet1', valueInputOption: 'USER_ENTERED' },
    body: { values: [[matchNumber, teamNumber, imageExportUrl ]] }
  };
  const url = `https://script.google.com/macros/s/AKfycbxTZvRdjyW8XHl_rxNxhp4YhWEDlux2O3hcqvBMJDeZnxEssU8KNXT49OsizpkYuldG/exec`;

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
});