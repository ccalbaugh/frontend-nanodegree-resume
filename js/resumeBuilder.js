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
		"welcomeMessage": "Welcome",
		"skills": [
			"Backflips", "Regeneration", "Telepathy", "HopScotch"
		],
		"biopic": "images/197x148.gif"
	},

	work: {
		"jobs": [
			{
				"employer": "Albaugh PHC",
				"title": "HVAC Technician/Plumber",
				"location": "Tipton, IA",
				"dates": "October, 2013 - Present",
				"description": "Repairs Heating, Cooling, and Plumbing systems and Installs new ones when necessary"
			},
			{
				"employer": "GEICO",
				"title": "Service Agent",
				"location": "Coralville, IA",
				"dates": "December, 2012 - October, 2013",
				"description": "Handled issues with existing GEICO members"
			},
			{
				"employer": "University of Iowa Parking",
				"title": "Parking attendant/coordinator",
				"location": "Iowa City, IA",
				"dates": "August, 2010 - December, 2012",
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
				"majors" : ["International Studies"],
				"minor" : "Portuguese",
				"dates": "2010 - 2012",
				"url": "www.uiowa.edu"
			},
			{
				"name": "Udacity",
				"location": "Online",
				"degree": "Nano Degree",
				"majors" : ["Front End Development"],
				"dates": "2016 - Present",
				"url": "www.udacity.com"
			}
		],
		"onlineCourses": [

		],
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
			}
		]
	}
};

/*-----Octopus-----*/

var octopus = {

	init: function() {
		bioView.display();
		workView.display();
		schoolView.display();
		projectView.display();
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

	display: function() {
		var bio = octopus.getBio();

		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var leftNav = $(".left-nav");

		leftNav.append(formattedName, formattedRole);

		var formattedLocal = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.GitHub);

		$("#topContacts").append(formattedLocal, formattedMobile, formattedEmail, formattedTwitter, formattedGithub);
		$("#footerContacts").append(formattedLocal, formattedMobile, formattedEmail, formattedTwitter, formattedGithub);

		// $("#header").append('<div id="bioPicture"></div>');

		var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").append(formattedBiopic, formattedWelcomeMsg);

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

	display: function() {
		var work = octopus.getWork();

		work.jobs.forEach(function(job) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
			var formattedDates = HTMLworkDates.replace("%data%", job.dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
			var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
			var formattedWorkInfo = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;

			$(".work-entry:last").append(formattedWorkInfo);
		});
	}
};

var schoolView = {

	display: function() {
		var education = octopus.getEducation();

		education.schools.forEach(function(school) {
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", school.name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
			$(".education-entry:last").append(formattedName + formattedDegree);
			var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
			$(".education-entry:last").append(formattedDates);
			var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors);
			$(".education-entry:last").append(formattedMajors);

			if (school.minor) {
				var formattedMinors = HTMLschoolMinor.replace("%data%", school.minor);
				$(".education-entry:last").append(formattedMinors);
			}

			var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formattedLocation);
		});
	}
};

var projectView = {

	display: function() {
		var projects = octopus.getProjects();


		projects.projects.forEach(function(project) {
			for (key in projects.projects) {
				$("#projects").append(HTMLprojectStart);
				var formattedProjectTitle = HTMLprojectTitle.replace("%data%", project.title).replace("#", project.source);
				$(".project-entry:last").append(formattedProjectTitle);
				var formattedProjectDates = HTMLprojectDates.replace("%data%", project.dates);
				$(".project-entry:last").append(formattedProjectDates);
				var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
				$(".project-entry:last").append(formattedProjectDescription);

				if (project.images.length > 0) {
					for (image in project.images) {
						var formattedProjectImage = HTMLprojectImage.replace("%data%", project.images[image]);
						$(".project-entry:last").append(formattedProjectImage);
					}
				}
			}
		});
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
