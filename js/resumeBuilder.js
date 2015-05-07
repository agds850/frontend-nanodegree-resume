var work = {
	"jobs" : [
		{
			"employer" : "AT&T",
			"title" : "Application Developer",
			"location" : "Warren, NJ",
			"dates" : "1998-present",
			"description" : "Create websites and applications."
		},
		{
			"employer" : "Childcraft Education",
			"title" : "Computer Support Specialist",
			"location" : "Lancaster, PA",
			"dates" : "1998",
			"description" : "Migrated office from mini-computer terminals to PCs."
		},
		{
			"employer" : "Hunterdon Central",
			"title" : "Communications Tech",
			"location" : "Flemington, NJ",
			"dates" : "1994-1998",
			"description" : "Support TV and Radio Station."
		}
	]
};

work.display = function () {
	if(work.jobs.length > 0) {
		var formattedWorkEmployer="";
		var formattedWorkTitle="";
		var formattedWorkLocation="";
		var formattedWorkDates="";
		var formattedWorkDescr="";
		
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			formattedWorkEmployer=HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			formattedWorkTitle=HTMLworkTitle.replace("%data%",work.jobs[job].title);
			formattedWorkDates=HTMLworkDates.replace("%data%",work.jobs[job].dates);
			formattedWorkLocation=HTMLworkLocation.replace("%data%",work.jobs[job].location);
			formattedWorkDescr=HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle + formattedWorkLocation + formattedWorkDates + formattedWorkDescr)
		}
	}
}

var projects = {
	"projects" : [
		{
			"title" : "SFDB",
			"dates" : "2013-2015",
			"description" : "made a database.",
			"images" : ["http://placehold.it/350x150","http://placehold.it/350x150"]
		},
		{
			"title" : "HD DB",
			"dates" : "2014-2016",
			"description" : "made a second database.",
			"images" : ["http://placehold.it/350x150","http://placehold.it/350x150"]
		}
	]	
};

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[project].description));
		for (img in projects.projects[project].images) {
			$(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.projects[project].images[img]));
		}
	} 
}

var bio = {
    "name" : "Matt Miller",
	"role" : "Web Developer",
	"contacts" : {
	    "mobile" : "908-555-1212",
		"email" : "matt@email.com",
		"github" : "agds850",
		"location" : "Ringoes, NJ",
		"twitter" : "littlebird"
		},
	"picture" : "images/matt.jpg",
	"welcomeMessage" : "Starving web developer; looking for work.",
	"skills" : ["Cisco", "JavaScript", "ASP.net", "jQuery"]
};

bio.display = function () {
	$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
	$("#header").append(HTMLbioPic.replace("%data%",bio.picture));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));
	
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	
	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
	
	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		var formattedSkill="";
		for (i=0; i<bio.skills.length; i++) {
			formattedSkill= HTMLskills.replace("%data%",bio.skills[i])
			$("#skills").append(formattedSkill);
		};
	}
};

var education = {
	"schools" : [
		{
			"name" : "Raritan Valley CC",
			"location" : "Branchburg, NJ",
			"degree" : "Associates",
			"majors" : ["Information Systems"],
			"dates" : "2000",
			"url" : "http://raritanval.edu"
		},
		{
			"name" : "Thomas Edison State College",
			"location" : "Trenton, NJ",
			"degree" : "Bachelor of Science",
			"majors" : ["Business Administration", "CS"],
			"dates" : "2013",
			"url" : "http://www.tesc.edu"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Nanodegree",
			"school" : "Udacity",
			"dates" : "2015",
			"url" : "http://www.udacity.com"
		},
		{
			"title" : "Intro to Computers",
			"school" : "AT&T",
			"dates" : "1998",
			"url" : "http://www.att.com"
		}

	
	]
};

education.display=function () {
	if (education.schools.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name).replace("#",education.schools[school].url) + HTMLschoolDegree.replace("%data%",education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
			var majorsList="";
			for (major in education.schools[school].majors) {
				if (majorsList != "") { majorsList += ", "};
				majorsList += education.schools[school].majors[major]
			}
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",majorsList));			
		}
	}
	if (education.onlineCourses.length > 0) {
		$("#education").append(HTMLonlineClasses);
		for (onlineClass in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineClass].title) + HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineClass].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[onlineClass].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[onlineClass].url).replace("#",education.onlineCourses[onlineClass].url));
			
		}
	}
};


 
$(document).click(function(loc) {
	var x=loc.pageX;
	var y=loc.pageY;
	logClicks(x,y);
});
 
function locationizer(myWork) {
    var locs = [];
    for (job in myWork.jobs) {
        locs.push(myWork.jobs[job].location);
    };
    
    return locs;             
};

function showMap() {
	$("#mapDiv").append(googleMap);
};


bio.display();
work.display();
education.display();
projects.display();
showMap();
