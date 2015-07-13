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
		//learned that I can chain prepends, giving me a closer copy to the sample
		//also you can append multiple varaiables
		$("#header").prepend(formattedRole).prepend(formattedName);
		$("#header").append(formattedBiopic, formattedMessage);
		//attach the google map div and capitalize button
		$("#mapDiv").append(googleMap);
		$("#main").append(internationalizeButton);

		//this allows me to +/- to my contacts without worrying about updating code;
		for(var item in bio.contacts){  //Quick loop through contacts
			var ref = "HTML" + item; //add prefix HTML to the key
			//learned to use window to access variables with strings
			var tempFormat = window[ref].replace(DATA, bio.contacts[item]);
			//learned I can append to two elements in one go
			$("#topContacts, #footerContacts").append(tempFormat);
		}
		//check for skills
		if (bio.skills.length > 0){
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

		for(var school in education.schools){  //iterate through each school
			$("#education").append(HTMLschoolStart); //append a starter HTML to index
			var tempHTML = ""; 					//create a temp string to hold HTML values
			for (var value in education.schools[school]){  //check each school key:value
				//Add a prefix and capitlize first letter to create an HTML helper.js string
				//this only works if the object key is = to the helper.js equivalent
				var ref = "HTMLschool" + value[0].toUpperCase() + value.slice(1);
				//the name value must concat with the url value before being appended
				if (value === "name"){
						//use window[ref] to pick the correct helper.js variable and run replace
						var tempFormat = window[ref].replace(DATA, education.schools[school][value]);
						tempFormat = tempFormat.replace("#", education.schools[school].url);
						tempHTML += tempFormat;
					}
					else if(value === "url"){} //skip the url value
					else{
						var tempFormat = window[ref].replace(DATA, education.schools[school][value]);
						tempHTML += tempFormat;
					} // use temp variable to concat all the HTML values
				} //append it all at once after loop is done
				  //this didn't seem to work if done one at a time, wasted a lot of my time
			$(".education-entry:last").append(tempHTML);
		}
		// Online Classes append loop
		$("#education").append(HTMLonlineClasses);

		for(var course in education.onlineCourses){

			$("#education").append(HTMLschoolStart);
			var tempHTML = "";
			for (var value in education.onlineCourses[course]){
				var ref = "HTMLonline" + value[0].toUpperCase() + value.slice(1);
				if (value === "title"){
						//title must concat with url
						var tempFormat = window[ref].replace(DATA, education.onlineCourses[course][value]);
						tempFormat = tempFormat.replace("#", education.onlineCourses[course].url);
						tempHTML += tempFormat;
					}
					//else if(value === "url"){} // onlines classes use the url value
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
	"display": function(){  // split it up into smaller chunks maybe
		for(var job in work.jobs){
			$("#workExperience").append(HTMLworkStart);
			var tempHTML = "";
			for (var value in work.jobs[job]){
				var ref = "HTMLwork" + value[0].toUpperCase() + value.slice(1);

				if (value === "employer"){
							var tempFormat = window[ref].replace(DATA, work.jobs[job][value]);
							tempFormat = tempFormat.replace("#", work.jobs[job].url);
							tempHTML += tempFormat;
						}
						else if(value === "url"){} //skip url
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
		},
		{
			"title":"Frogger",
			"url":"http://nealcloud.github.io/frontend-nanodegree-arcade-game/",
			"dates":2015,
			"description": "create a frogger clone",
			"images":["frogger.png"]
		}
	],
	"display": function(){
		for(var value in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formProjTitle = HTMLprojectTitle.replace(DATA, projects.projects[value].title);
			var formProjDate = HTMLprojectDates.replace(DATA, projects.projects[value].dates);
			var formProjDescrip = HTMLprojectDescription.replace(DATA, projects.projects[value].description);
			var formProjUrl = formProjTitle.replace("#", projects.projects[value].url);
			var imageList = projects.projects[value].images.length;

			$(".project-entry:last").append(formProjUrl,formProjDate,formProjDescrip);
				//check for images
			 	if (imageList > 0){
			 		for (var j = 0; j < imageList; j++){
			 			var formProjIm = HTMLprojectImage.replace(DATA, "images/" + projects.projects[value].images[j]);
			 			$(".project-entry:last").append(formProjIm);
			 	}
			 }
		}
	}
};

//creates a simpler data retrival variable
var DATA = '%data%';

function inName(oldName) {
  //capitalizes the last name in a string
    var finalName = oldName;
    //divides name into two
    var names = oldName.split(" ");
    //makes second part uppercase
    names[1] = names[1].toUpperCase();
    //makes first initial uppercase and everything after lowercase
    names[0] = names[0][0].toUpperCase() + names[0].slice(1).toLowerCase();
    //joins the array into one string
    finalName = names.join(" ");

    return finalName;
}

//call all display methods
projects.display();
bio.display();
education.display();
work.display();

function locationizer(work_obj){

}
