

// declare variables for storing, the number of employees, the amount they are getting paid, how many hours the employee worked, storing the array for wages, and weekly salary 

var numberEmployee = 0;     var paidAmount = 0;           var employHours                     
var employSal;              var salary = [];              var weeklySal = [];                     

// for loop for 10 employees

for (var employ = 0; employ < 10; employ++) {
  employHours = parseInt(prompt("Enter the hours worked Employee " + (employ + 1)));

  if (employHours < 0 && numberEmployee == 0) {

    alert("Invalid entrance, please enter valid hours.");
    break;
  }

  else {

    if (employHours >= 0) {
      salary[employ] = employHours;
      numberEmployee = numberEmployee + 1;

      if (salary[employ] < 40) {
        employSal = salary[employ] * 15;
        weeklySal[employ] = employSal;

      }

      paidAmount = paidAmount + weeklySal[employ];
    }
    else {
      break;
    }
  }
}
var rows; var col;
//variables for row and columns
var table = document.createElement("Table");
table.setAttribute("border", "4px");
rows = table.insertRow(i);
col = rows.insertCell(0);
col.innerHTML = "Number of employees";
col.setAttribute("class", "tr");
col = rows.insertCell(1);
col.innerHTML = "Total hours worked";
col.setAttribute("class", "tr");
col = rows.insertCell(2);
col.innerHTML = "Amount paid for the week";
col.setAttribute("class", "tr");


for (var i = 0; i < numberEmployee; i++) {
  rows = table.insertRow(i + 1);

  col = rows.insertCell(0);
  col.innerHTML = (i + 1);
  

  col = rows.insertCell(1);
  col.innerHTML = salary[i];

  col = rows.insertCell(2);
  col.innerHTML = weeklySal[i];
  
}

var div = document.getElementById("table");

div.appendChild(table);

document.getElementById("paidAmount").innerHTML = paidAmount;
