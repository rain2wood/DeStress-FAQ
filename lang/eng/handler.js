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
    // children start
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
    case "c10":
        qText.textContent = "Will the black screen cause huge battery drain?";
        aText.textContent = "No. The black screen can save battery on AMOLED screens. Furthermore, the black screen itself is static and would save more battery.";
        break;
    // adult start
    case "a01":
        qText.textContent = "How effective is the DeStress app in reducing stress?";
        aText.textContent = "The effectiveness of the DeStress app in reducing stress can vary from person to person. However, the app is designed to provide benefits by offering different modes backed by research conducted by various universities. These modes, such as Focus Mode, Relax Mode, Sleep Mode, Happiness Mode, and Sport Mode, aim to promote relaxation, improve mood, enhance sleep quality, and increase work efficiency. It's important to note that individual experiences may differ, and it may be helpful to try the app and see how it works for you personally.";
        break;
    case "a02":
        qText.textContent = "Are there any costs associated with using the DeStress app?";
        aText.textContent = "There are currently no costs associated with the DeStress app, and there are no plans to setup a premium tier at the moment.";
        break;
    case "a03":
        qText.textContent = "Can the DeStress app be used as a standalone solution for managing stress?";
        aText.textContent = "Yes. However, some people may prefer using multiple stress-managing methods at the same time.";
        break;
    case "a04":
        qText.textContent = "Are there any testimonials or reviews from users who have benefited from using the DeStress app?";
        aText.textContent = "Yes. A closed beta of DeStress have been carried out among selected students of St.Mark's school and has received generally positive reviews. The team had also improved DeStress based on the reviews and comments.";
        break;
    case "a05":
        qText.textContent = "Is the DeStress app available for both iOS and Android devices?";
        aText.textContent = "Yes. As DeStress is a Progessive Web App, it is available as long as the user is connected to the internet. However, there is a special DeStress app for Android that would enhance the user experience,";
        break;
    case "a06":
        qText.textContent = "Can I customize the settings and preferences within each mode of the DeStress app?";
        aText.textContent = "If you refer to the time limit of every session, not yet. But it is planned to add per-session time limit settings.";
        break;
    case "a07":
        qText.textContent = "Are there any privacy or data security measures in place when using the DeStress app?";
        aText.textContent = "DeStress does not connect any user data except usage statistics, nor does it share the data to any 3rd-party providers. In addition, DeStress runs on HTTPS which prevents various attacks aimed to steal user data.";
        break;
    case "a08":
        qText.textContent = "How frequently are the research-backed modes and content in the DeStress app updated?";
        aText.textContent = "They are usually updated once every 2 weeks, with addition of new songs and removing some old songs in order to prevent the user from listening to the same tracks again and again.";
        break;
    case "a09":
        qText.textContent = "Can I use the DeStress app in different languages?";
        aText.textContent = "Not yet. The app is only in English, but there are plans to add multiple translations.";
        break;
    case "a10":
        qText.textContent = "Are there any additional resources or support available within the DeStress app, such as guided meditation or breathing exercises?";
        aText.textContent = "No. However it is recommended to use DeStress with headphones and in quiet environments.";
        break;
    default:
        break;
}