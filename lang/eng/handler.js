var DEBUG = true;

function getCurrentURLParameter(paramName) {
    var queryString = window.location.search.slice(1);
    var params = new URLSearchParams(queryString);
    if (DEBUG) {
        console.log("current url param is: " + params.get(paramName));
    }
    return params.get(paramName);
}

var paramValue = getCurrentURLParameter("qid");
var qText = document.getElementById("qtext");
var aText = document.getElementById("atext");

switch (paramValue) {
    case "c01":
        qText.textContent = "How does stress affect young people?";
        aText.textContent = "Stress can impact teenagers emotionally, academically, and physically, leading to feelings of overwhelm, difficulty concentrating, and physical symptoms like headaches or changes in appetite. It's important for teens to recognize and manage stress through self-care and seeking support.";
        break;
    case "c02":
        qText.textContent = "How can sounds and music help to reduce stress?";
        aText.textContent = "Sounds and music have a calming effect on our minds and bodies. They can help to relax our nervous system, slow down our heart rate, and reduce feelings of stress and anxiety. When we listen to soothing sounds or calming music, it can create a peaceful atmosphere and help us feel more at ease. It's a simple and enjoyable way to find relief from stress and promote relaxation.";
        break;
    case "c03":
        qText.textContent = "What are some examples of sounds that can help me feel calm?";
        aText.textContent = 'An example would be "Air on the G String" by J.S. Bach, which is proven by various researches to have a specific BPM (beats per minute) which would make people feel relieved. This song is also featured in sleep mode in DeStress.';
        break;
    case "c04":
        qText.textContent = "What are the different modes available in the DeStress app?";
        aText.textContent = 'There are 5 modes, namely Focus Mode, Relax Mode, Sleep Mode, Sport Mode and Happiness Mode.';
        break;
    case "c05":
        qText.textContent = "Is the DeStress app easy to use on a mobile device?";
        aText.textContent = 'Yes. The User Interface of DeStress is specifically adapted for use on mobile phones. (**you can show DeStress UI to user if he wants, just let PH aka ME know)';
        break;
    case "c06":
        qText.textContent = "Are there any age restrictions for using the DeStress app?";
        aText.textContent = 'No. Anyone can use DeStress. However, DeStress aims to help people in the age group of 16-30.';
        break;
    case "c07":
        qText.textContent = "Can I customize the sounds and music in the app according to my preferences?";
        aText.textContent = 'Yes and no. You cannot customize the playlist but you can enable a feature which allows you to skip songs. However, it is not recommended as it would possibly cause distractions and would interfere with the original aim of DeStress.';
        break;
    case "c08":
        qText.textContent = "How is DeStress written?";
        aText.textContent = 'DeStress is a Progressive Web App written in Javascript, HTML and CSS.';
        break;
    case "c09":
        qText.textContent = "Are there any copyright issues with the soundtracks in DeStress?";
        aText.textContent = 'No. Songs used in DeStress are either copyright-free or re-recorded and/or mixed by ourselves from scores that are in the public domain / do not have any more active licenses.';
        break;
    default:
        break;
}