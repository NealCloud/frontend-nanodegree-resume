var bio = {
	"name": "Neal Cloud",
	"role": "Front-End Developer",
	"contacts":{
		"mobile": "345-35-345",
		"email": "Neal.Cloud@gmail.com",
		"github": "Nealcloud",
		"twitter": "@Nealcloud",
		"location": "Costa Mesa, California"
	},
	"welcome": "Making the Web a more complex place",
	"skills": ["HTML", "CSS", "Javascript"],
	"biopic": 'images/mainwaters-323w.jpg',
	"display": function(){
		var formattedName = HTMLheaderName.replace(DATA, bio.name);
		var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
		var formattedBiopic = HTMLbioPic.replace(DATA, bio.biopic);
		var formattedMessage = HTMLwelcomeMsg.replace(DATA, bio.welcome);
		//learned i can chain prepend, this got me to have same look as sample
		//also can append multiple varaiables
		$("#header").prepend(formattedRole).prepend(formattedName);
		$("#header").append(formattedBiopic, formattedMessage);

		$("#mapDiv").append(googleMap); //attach google map div
		$("#main").append(internationalizeButton);// attach capitalize last name button

		//this allows me to +/- to my contacts without worrying about updating code;
		for(i in bio.contacts){  //Quick loop through contacts
			var ref = "HTML" + i; //add prefix HTML to the key
			//learned to use window to access variable with strings
			var tempFormat = window[ref].replace(DATA, bio.contacts[i]);
			//learned I can append to two elements in one go
			$("#topContacts, #footerContacts").append(tempFormat);
		}

		if (bio.skills.length > 0){ //check for skills
			$("#header").append(HTMLskillsStart);
			for(var i = 0; i < bio.skills.length; i++){ //simple loop and append
				formattedSkills = HTMLskills.replace(DATA, bio.skills[i]);
				//use last to append on last class
				$("#skills:last").append(formattedSkills);
			}
		}
		else{
			console.log("no skills detected!");
		}
	}
};

var education = {
	"schools":[
		{
			"name":"California State University Long Beach",
			"degree": "BA",
			"location":"Long Beach, California",
			"dates" : 2010,
			"major": ["Geography"],
			"url":"https://www.csulb.edu/"
		}
	],
	"onlineCourses":[
		{
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		},
		{
			"title": "Responsive Web Design Fundamentals",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/responsive-web-design-fundamentals--ud893"
		},
		{
		"title": "Responsive Images",
		"school": "Udacity",
		"dates": 2015,
		"url": "https://www.udacity.com/course/responsive-images--ud882"
		}

	],
	"display": function(){
		for(school in education.schools){  //iterate through each school
			$("#education").append(HTMLschoolStart); //append a starter HTML to index
			var tempHTML = ""; 					//create a temp string to hold HTML values
			for (value in education.schools[school]){  //check each school key:value
				//Add a prefix and capitlize first letter to create an HTML helper.js string
				//this only works if the object key is = to the helper.js equivalent
				var ref = "HTMLschool" + value[0].toUpperCase() + value.slice(1);
				if (value === "name"){
					//use window[ref] to pick the correct helper.js variable and run replace
					//name value must concat with url value before being appended
						var tempFormat = window[ref].replace(DATA, education.schools[school][value]);
						tempFormat = tempFormat.replace("#", education.schools[school].url);
						tempHTML += tempFormat;
					}
					else if(value === "url"){} //skip url value
					else{
						var tempFormat = window[ref].replace(DATA, education.schools[school][value]);
						tempHTML += tempFormat;
					} // use temp variable to concat all the HTML values
				} //append it all at once after loop is done
				  //this didn't seem to work if done one at a time, wasted a lot of time
			$(".education-entry:last").append(tempHTML);
		}
		// Online Classes append loop
		$("#education").append(HTMLonlineClasses);

		for(course in education.onlineCourses){

			$("#education").append(HTMLschoolStart);
			var tempHTML = "";
			for (value in education.onlineCourses[course]){
				var ref = "HTMLonline" + value[0].toUpperCase() + value.slice(1);
				if (value === "title"){
						//title must concat with url
						var tempFormat = window[ref].replace(DATA, education.onlineCourses[course][value]);
						tempFormat = tempFormat.replace("#", education.onlineCourses[course].url);
						tempHTML += tempFormat;
					}
					//else if(value === "url"){} onlines classes use the url twice
					else{
						var tempFormat = window[ref].replace(DATA, education.onlineCourses[course][value]);
						tempHTML += tempFormat;
					}
				}

			$(".education-entry:last").append(tempHTML);
		}
	}
};

var work = {
	"jobs":[
		{
			"employer":"US Army",
			"title": "Network Switching Systems Operator-Maintainer",
			"location": "Ft. Lewis, Washington",
			"dates": "2005",
			"description": "Laying cables pounding stakes and pushing buttons",
			"url":"http://www.goarmy.com"
		}
	], //a clone of educations display TODO: turn parts of this into a universal function
	"display": function(){  // start with the if else code I'd imagine
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var tempHTML = "";
			for (value in work.jobs[job]){
				var ref = "HTMLwork" + value[0].toUpperCase() + value.slice(1);

				if (value === "employer"){
							var tempFormat = window[ref].replace(DATA, work.jobs[job][value]);
							tempFormat = tempFormat.replace("#", work.jobs[job].url);
							tempHTML += tempFormat;
						}
						else if(value === "url"){} //skip
						else{
							var tempFormat = window[ref].replace(DATA, work.jobs[job][value]);
							tempHTML += tempFormat;
						}
				}
			$(".work-entry:last").append(tempHTML);
		}
	}
};

var projects = {
	"projects":[
		{
			"title":"Portfolio",
			"url":"http://nealcloud.github.io",
			"dates":2015,
			"description": "a responsive page to display my work",
			"images":["monster.jpg"]
		},
		{
			"title":"2048",
			"url":"http://nealcloud.github.io/2048",
			"dates":2015,
			"description": "create a 2048 clone",
			"images":["2048.png"]
		}
	],
	"display": function(){
		for(i in projects.projects){
			$("#projects").append(HTMLprojectStart);
			console.log(i);
			var formProjTitle = HTMLprojectTitle.replace(DATA, projects.projects[i].title);
			var formProjDate = HTMLprojectDates.replace(DATA, projects.projects[i].dates);
			var formProjDescrip = HTMLprojectDescription.replace(DATA, projects.projects[i].description);
			var formProjUrl = formProjTitle.replace("#", projects.projects[i].url);

			$(".project-entry:last").append(formProjUrl,formProjDate,formProjDescrip);
			 	if (projects.projects[i].images.length > 0){
			 		for (var j = 0; j < projects.projects[i].images.length; j++){
			 			var formProjIm = HTMLprojectImage.replace(DATA, "images/" + projects.projects[i].images[j]);
			 			$(".project-entry:last").append(formProjIm);
			 	}
			 }
		}
	}
};

var DATA = '%data%'; //creates a simpler data retrival variable

function inName(oldName) {  //capitalizes the last name in a string
    var finalName = oldName;
    var names = oldName.split(" "); //divides name into two
    names[1] = names[1].toUpperCase(); //makes second part uppercase
    //makes first initial uppercase and selects the letters after to lowercase
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" "); //joins the array into one string
    return finalName;
}
//call all display methods
projects.display();
bio.display();

education.display();
work.display();

function locationizer(work_obj){

}
