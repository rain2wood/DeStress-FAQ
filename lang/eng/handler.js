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
    // elderly start
    case "e01":
        qText.textContent = "Are there any precautions or considerations for elderly individuals when using DeStress?";
        aText.textContent = "Yes. We would advise the elderly to keep track of the volume on their phones as too loud sounds may cause damage to one's hearing.";
        break;
    // professor start
    case "p01":
        qText.textContent = 'How does DeStress help in solving stress problems for young people?';
        aText.textContent = "DeStress helps young people solve stress problems through the using sounds and music to alter one's physiological and psychological functions, such as the secretion of hormones that affect emotions.";
        break;
    case "p02":
        qText.textContent = 'What are the main causes of stress among young people in Hong Kong?';
        aText.textContent = "The main causes of stress among young people in Hong Kong include high work intensities, distractions from daily tasks, social media use, and stress from both work and personal life. These factors can negatively affect mental health, work-life balance, and overall well-being. DeStress aims to address these issues by providing a solution that utilizes music and sounds to promote relaxation, focus, and emotional well-being";
        break;
    case "p03":
        qText.textContent = "Can you provide more information on how music and sounds affect emotions and focus?";
        aText.textContent = "Music and sounds have a significant impact on emotions, focus, and sustained performance. Different types of music can evoke specific emotional responses due to their beats per minute (BPM). Upbeat music can increase heart rate and create a sense of energy, while calming music with slower beats can relax the mind. For example, One study conducted by the Research Institute of Audiology and Speech Pathology of Hallym University in Korea (Park et al., 2020) found that listening to classical or jazz music resulted in higher scores and better performance in tasks measuring sustained attention and focus. By leveraging the power of music, DeStress aims to help individuals regulate their emotions, improve focus, and enhance their overall performance in various activities, including sports and daily tasks.";
        break;
    case "p04":
        qText.textContent = "How does DeStress utilize music to improve work-life balance and mental well-being?";
        aText.textContent = "DeStress utilizes music and sounds to improve work-life balance and mental well-being. By incorporating carefully selected music and soundscapes into various modes such as Focus, Relax, Sport, Sleep, and Happiness, the program aims to create a supportive environment that promotes relaxation, concentration, and positive emotions.";
        break;
    case "p05":
        qText.textContent = "Are there any specific modes or techniques employed in the program to help individuals relax?";
        aText.textContent = "No. DeStress relies only on the music played in order to help individuals relax.";
        break;
    case "p06":
        qText.textContent = "How does the program address the issue of distraction caused by social media use?";
        aText.textContent = "Although DeStress aims to remove distractions from surroundings, it can also prevent distraction from social media use by its clean background while a mode is active which aims to remove possible distractions from social media and the whole device.";
        break;
    case "p07":
        qText.textContent = "Can you explain how the program assists athletes in achieving sustained performance?";
        aText.textContent = "DeStress assists athletes in achieving sustained performance by leveraging the power of music and sounds. Research has shown that certain types of music can enhance focus, motivation, and overall performance during physical activities.\nBy incorporating specially curated playlists and soundscapes designed for sports activities, the program aims to create an optimal auditory environment that helps athletes get into the zone and maintain their performance. The rhythmic and motivational qualities of the music can synchronize with movements, elevate mood, and provide a sense of energy and determination.\nAdditionally, the program offers customizable features that allow athletes to personalize their music selections based on their preferences and the specific demands of their sport. This tailored approach helps athletes create a mental and emotional state conducive to peak performance, enabling them to reach their full potential in their respective sports disciplines.";
        break;
    // judge start
    case "j01":
        qText.textContent = "Can you explain in more detail how the DeStress solution utilizes music and sounds to address stress problems?";
        aText.textContent = "DeStress utilizes music and sounds to address stress problems by leveraging their impact on emotions, focus, and sustained performance. By selecting music with specific beats per minute (BPM) and considering the user's emotional state, the solution aims to foster concentration, help users wind down from negative emotions, and improve athletic performance.";
        break;
    case "j02":
        qText.textContent = "What research or studies support the claim that music and sounds can impact emotions, focus, and sustained performance in sports?";
        aText.textContent = "DeStress refers to various studies conducted by universities while choosing soundtracks for the application. For example, a study conducted by the Research Institute of Audiology and Speech Pathology of Hallym University of Korea found that listening to classical or jazz music improves sustained performance in specific tasks.";
        break;
    case "j03":
        qText.textContent = "What are the specific modes available in the DeStress application, and how are they designed to address different mental problems?";
        aText.textContent = "DeStress offers different modes designed to address specific mental problems. The planned modes include Focus, Relax, Sport, Sleep, and Happiness. Each mode is tailored to cater to different needs such as improving concentration, aiding relaxation, reducing the impacts of insomnia, and promoting overall well-being.";
        break;
    case "j04":
        qText.textContent = "Could you provide examples of the types of music or sounds that are played in each mode of the DeStress application?";
        aText.textContent = "The proposal mentions that the 'Focus' mode plays light jazz music with a BPM not lower than 130. This choice is supported by a study from the Research Institute of Audiology and Speech Pathology of Hallym University of Korea, which suggests that jazz music can increase sustained performance.";
        break;
    case "j05":
        qText.textContent = "How does the DeStress solution cater to the needs of teenagers and young adults specifically, and what age range does it target?";
        aText.textContent = "The DeStress solution specifically targets teenagers and young adults with ages 15-30. It aims to address the mental problems faced by this age group, including issues like failure to focus, insomnia, depression, and lack of work-life balance caused by work and studies.";
        break;
    case "j06":
        qText.textContent = "What are the recommended hardware requirements for using the DeStress solution, particularly in terms of the mobile device and headphones?";
        aText.textContent = "The solution requires a mobile device connected to the internet, which acts as the platform for the application. As for headphones, any ordinary pair should suffice, though headphones with active noise-cancelling are recommended.";
        break;
    case "j07":
        qText.textContent = "Are there any privacy concerns or data collection involved in DeStress, considering it analyzes facial expressions and voice tone?";
        aText.textContent = "DeStress does not connect any user data except usage statistics, nor does it share the data to any 3rd-party providers. In addition, DeStress runs on HTTPS which prevents various attacks aimed to steal user data.";
        break;
    case "j08":
        qText.textContent = "Has DeStress been tested or piloted with any target user groups, and if so, what were the results or feedback?";
        aText.textContent = "Yes. A closed beta of DeStress have been carried out among selected students of St.Mark's school and has received generally positive reviews. The team had also improved DeStress based on the reviews and comments.";
        break;
    case "j09":
        qText.textContent = "How does DeStress contribute to improving work-life balance and mental well-being specifically in the context of Hong Kong?";
        aText.textContent = "The DeStress solution contributes to improving work-life balance and mental well-being by providing users with a tool to manage stress, enhance focus, and promote relaxation. By leveraging the power of music and sounds, it aims to alleviate the negative effects of stress on individuals, particularly in the context of Hong Kong's high work intensities and persistent stress issues.";
        break;
    default:
        break;
}