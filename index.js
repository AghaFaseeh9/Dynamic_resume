// Function to add new entry fields (education, experience, skills)
function addEntry(section) {
  const container = document.getElementById(section);
  const newEntry = document.createElement("div");
  newEntry.classList.add("dynamic-entry");

  if (section === "education-container" || section === "skills-container") {
      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = `Enter ${section === "education-container" ? "education" : "skill"} details`;
      newEntry.appendChild(input);
  } else if (section === "experience-container") {
      const textarea = document.createElement("textarea");
      textarea.placeholder = "Enter your experience details";
      newEntry.appendChild(textarea);
  }

  container.appendChild(newEntry);
}

// Function to generate the resume
function generateResume() {
  // Get user input values
  const name = document.getElementById("name").value;
  const position = document.getElementById("position").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  // Insert data into resume section
  document.getElementById("resume-name").textContent = `${name} - ${position}`;
  document.getElementById("resume-contact").textContent = `${email} | ${phone}`;

  // Handle Education section
  const educationEntries = document.querySelectorAll("#education-container .dynamic-entry input");
  const educationList = document.getElementById("resume-education");
  educationList.innerHTML = ""; // Clear the previous list
  educationEntries.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = entry.value;
      educationList.appendChild(li);
  });

  // Handle Experience section
  const experienceEntries = document.querySelectorAll("#experience-container .dynamic-entry textarea");
  const experienceList = document.getElementById("resume-experience");
  experienceList.innerHTML = ""; // Clear the previous list
  experienceEntries.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = entry.value;
      experienceList.appendChild(li);
  });

  // Handle Skills section
  const skillEntries = document.querySelectorAll("#skills-container .dynamic-entry input");
  const skillsList = document.getElementById("resume-skills");
  skillsList.innerHTML = ""; // Clear the previous list
  skillEntries.forEach(entry => {
      const li = document.createElement("li");
      li.textContent = entry.value;
      skillsList.appendChild(li);
  });

  // Hide the form and display the resume
  document.getElementById("form").style.display = "none";
  document.getElementById("resume-container").style.display = "block";
}

// Function to allow editing the resume
function editResume() {
  document.getElementById("form").style.display = "block";
  document.getElementById("resume-container").style.display = "none";
}

// Function to download the resume as a PDF
function downloadResume() {
  const element = document.getElementById("resume-content"); // The HTML element to be converted
  const opt = {
      margin: 0.5,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).save(); 
}
