let resume = {
   
    "Name"                 : "Ramkumar",
    "Age"                  : "24",
    "Date of birth"        : "12-10-1999",
    "Address"              : "62,kadatti,k.b.malam po,sathy,Erode"
    "education"            : "B.sc.CS",
    "Language"             : "Tamil&English",
    "Profession experience": "Erp data entry",
    "Company name"         : "Honest clothings",
    "Experience"           : "2years",
    "key skills"           : "good communication",
    "Interests"            : "Cricket"
 };
 let resume = JSON.stringify(resume);
 console.log(resumeJSON);
 
  for (let key in resume){
     console.log(key,':',resume[key]);
  }
  for (let key of resume){
     console.log(key,':',resume[key]);
  };    
