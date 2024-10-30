function workResume() {

    var name = document.getElementsByName("nome")[0].value;
    var gender = document.getElementsByName("gender")[0].value;
    var genderId = document.getElementsByName("gender_identity")[0].value;
    var lgbtq = document.getElementsByName("lgbtq")[0].value;
    var etnia = document.getElementsByName("etnia")[0].value;
    var study = document.getElementsByName("study")[0].value;
    var course = document.getElementsByName("course")[0].value;
    var date = document.getElementsByName("date")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var tel = document.getElementsByName("tel")[0].value;
    var whatsApp = document.getElementsByName("wpp")[0].value;
    var telm = document.getElementsByName("telm")[0].value;
    var message = document.getElementsByName("message")[0].value;
    var cv = document.getElementsByName("cv")[0].value;

    var workWithUs = {
        name: name,
        gender: gender,
        genderId: genderId,
        lgbtq: lgbtq,
        etnia: etnia,
        study: study,
        course: course,
        date: date,
        email: email,
        tel: tel,
        whatsApp: whatsApp,
        telm: telm,
        message: message,
        cv: cv
        
    };

    var applications = JSON.parse(localStorage.getItem("applications"));
    
    if (!applications) {
        var applications = {
            resumes: []
        };
    }
    
    applications.resumes.push(workWithUs);
    
    localStorage.setItem("applications", JSON.stringify(applications));

    for(let i = 0; i < document.getElementsByClassName("resume").length; i++) {
		
		document.getElementsByClassName("resume")[i].value = "";

    }

}
