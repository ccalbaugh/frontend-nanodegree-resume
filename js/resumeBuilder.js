/*-----Model-----*/

var model = {
	bio: {
		"name": "Caden Albaugh",
		"role": "Web Developer",
		"contacts": {
			"mobile": "319-330-1742",
			"email": "CadenAlbaugh@gmail.com",
			"GitHub": "ccalbaugh",
			"twitter": "@CadenAlbaugh",
			"location": "Iowa City, IA"
		},
		"welcomeMessage": "Hey Everyone!",
		"skills": [
			"Backflips", "Regeneration", "Telepathy", "HopScotch"
		],
		"bioPic": "images/197x148.gif"
	},

	work: {
		"jobs": [
			{
				"employer": "Albaugh PHC",
				"title": "HVAC Tecnician/Plumber",
				"location": "Tipton, IA",
				"datesWorked": "October, 2013 - Present",
				"description": "Repairs Heating, Cooling, and Plumbing systems and Installs new ones when necessary"
			},
			{
				"employer": "GEICO",
				"title": "Service Agent",
				"location": "Coralville, IA",
				"datesWorked": "December, 2012 - October, 2013",
				"description": "Handled issues with existing GEICO members"
			},
			{
				"employer": "University of Iowa Parking",
				"title": "Parking attendant/coordinator",
				"location": "Iowa City, IA",
				"datesWorked": "August, 2010 - December, 2012",
				"description": "Exchanged money for parking space and coordinated the collection of money and transport of other attendants"
			}
		]
	},

	education: {
		"schools": [
			{
				"name": "University of Iowa",
				"location": "Iowa City, IA",
				"degree": "BA",
				"major" : "International Studies",
				"minor" : "Portuguese",
				"dates": "2010 - 2012"
			},
			{
				"name": "Udacity",
				"location": "Online",
				"degree": "Nano Degree",
				"major" : "Front End Developer",
				"dates": "2016 - Present"
			}
		]
	},

	projects: {
		"projects": [
			{
				"title": "Top 10 U.S. National Park Landmarks",
				"dates": "06/16/2016",
				"source": "https://github.com/ccalbaugh/neighborhood-map-project.git",
				"description": "A searchable collection of the locations of the Best National Park Landmarks in the United States",
				"images": [
					"https://cloud.githubusercontent.com/assets/15692477/16016415/8fe7cbd4-3160-11e6-9ced-5d959995d8c4.png"
				]
			},
		]
	}
};

/*-----Octopus-----*/

var octopus = {

	init: function() {
		bioView.init();
		workView.init();
		schoolView.init();
		projectView.init();
	},

	getBio: function() {
		return model.bio;
	},

	getWork: function() {
		return model.work;
	},

	getEducation: function() {
		return model.education;
	},

	getProjects: function() {
		return model.projects;
	}
};

/*-----View-----*/

var bioView = {

	init: function() {
		var bio = octopus.getBio();
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header:first").prepend(formattedName + formattedRole);
		var formattedLocal = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocal);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.GitHub);
		$("#topContacts").append(formattedGithub);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#topContacts").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#topContacs").append(formattedWelcomeMsg);

		if(bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkills);

			for (var i = 1; i < bio.skills.length; i++) {
				formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
				$("#skills").append(formattedSkills);
			}
		}
	}
};

var workView = {

	init: function() {
		var work = octopus.getWork();
		for (key in work.jobs) {
			if (work.jobs.hasOwnProperty(key)) {
				$("#workExperience").append(HTMLworkStart);
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[key].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[key].title);
				var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[key].datesWorked);
				var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[key].location);
				var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[key].description);
				var formattedWorkInfo = formattedEmployer + formattedTitle + formattedDatesWorked + formattedLocation + formattedDescription;

				$(".work-entry:last").append(formattedWorkInfo);
			}
		}
	}
};

var schoolView = {

	init: function() {
		var education = octopus.getEducation();
		for (key in education.schools) {
			if (education.schools.hasOwnProperty(key)) {
				$("#education").append(HTMLschoolStart);
				var formattedName = HTMLschoolName.replace("%data%", education.schools[key].name);
				var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[key].degree);
				$(".education-entry:last").append(formattedName + formattedDegree);
				var formattedDates = HTMLschoolDates.replace("%data%", education.schools[key].dates);
				$(".education-entry:last").append(formattedDates);
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[key].major);
				$(".education-entry:last").append(formattedMajor);
				var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[key].location);
				$(".education-entry:last").append(formattedLocation);
			}
		}
	}
};

var projectView = {

	init: function() {
		var projects = octopus.getProjects();
		for (key in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[key].title);
			var formattedProjectSource = HTMLprojectTitle.replace("#", projects.projects[key].source);
			$(".project-entry:last").append(formattedProjectTitle + formattedProjectSource);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[key].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[key].description);
			$(".project-entry:last").append(formattedProjectDescription);

			if (projects.projects[key].images.length > 0) {
				for (image in projects.projects[key].images) {
					var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[key].images[image]);
					$(".project-entry:last").append(formattedProjectImage);
				}
			}
		}
	}
};

$("#main").append(internationalizeButton);

var inName = function(name) {
	name = name.trim().split(" ");
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1];
};

$(internationalizeButton).on('click', inName);

$("#mapDiv").append(googleMap);

octopus.init();
