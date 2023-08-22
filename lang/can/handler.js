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
        qText.textContent = "壓力如何影響年輕人？";
        aText.textContent = "壓力會對青少年的情緒、學業和身體造成影響，導致情感壓抑、注意力困難以及頭痛或食慾改變等身體症狀。對於青少年來說，認識並管理壓力非常重要，可以通過自我照顧和尋求支持來應對壓力。";
        break;
    case "c02":
        qText.textContent = "聲音和音樂如何幫助減輕壓力？";
        aText.textContent = "聲音和音樂對我們的心理和身體有舒緩作用。它們可以幫助放鬆我們的神經系統，降低心率，減少壓力和焦慮感。當我們聆聽舒緩的聲音或平靜的音樂時，可以營造出寧靜的氛圍，幫助我們感到更舒適。這是一種簡單而愉快的方式，可以緩解壓力，促進放鬆。";
        break;
    case "c03":
        qText.textContent = "有哪些聲音可以幫助我感到平靜？";
        aText.textContent = '例如，J.S.巴赫的《Air on the G String》是一個例子，研究證明它具有特定的每分鐘拍數（BPM），可以使人感到寬慰。這首歌也是DeStress睡眠模式中的特色之一。';
        break;
    case "c04":
        qText.textContent = "DeStress應用程式有哪些不同的模式？";
        aText.textContent = 'DeStress應用程式有五種模式，分別是專注模式、放鬆模式、睡眠模式、運動模式和快樂模式。';
        break;
    case "c05":
        qText.textContent = "DeStress應用程式在移動設備上使用方便嗎？";
        aText.textContent = '是的。DeStress的用戶界面專門為移動手機進行了適應。（\*\*如果用戶需要，您可以向他展示DeStress的用戶界面，請讓我知道，謝謝）。';
        break;
    case "c06":
        qText.textContent = "使用DeStress應用程式有年齡限制嗎？";
        aText.textContent = '不。任何人都可以使用DeStress。然而，DeStress旨在幫助16至30歲的人群。';
        break;
    case "c07":
        qText.textContent = "我可以根據自己的喜好自定義應用程式中的聲音和音樂嗎？";
        aText.textContent = '是和否。您無法自定義播放列表，但您可以啟用一個功能，允許您跳過歌曲。然而，不建議這樣做，因為它可能會分散注意力，干擾DeStress的原本目的。';
        break;
    case "c08":
        qText.textContent = "DeStress是如何編寫的？";
        aText.textContent = 'DeStress是一個使用Javascript、HTML和CSS編寫的漸進式Web應用程式。';
        break;
    case "c09":
        qText.textContent = "DeStress應用程式中的配樂是否存在版權問題？";
        aText.textContent = '不。DeStress中使用的歌曲要麼是免版稅的，要麼是我們根據公有領域中的樂譜重新錄製和/或混音的。';
        break;
    case "c10":
        qText.textContent = "黑屏會導致巨大的電池耗電嗎？";
        aText.textContent = "不會。黑屏可以節省AMOLED屏幕的電池電量。此外，黑屏本身是靜態的，能更節省更多的電池電量。";
        break;
    // adult start
    case "a01":
        qText.textContent = "DeStress應用程式在減輕壓力方面有多有效？";
        aText.textContent = "DeStress應用程式在減輕壓力方面的效果因人而異。然而，該應用程式的設計旨在通過提供不同的模式來獲得益處，這些模式基於各大學進行的研究。這些模式，如專注模式、放鬆模式、睡眠模式、快樂模式和運動模式，旨在促進放鬆、改善情緒、提高睡眠質量和提高工作效率。重要的是要注意，個人的體驗可能有所不同，可以嘗試使用該應用程式，看看它對您個人的效果如何。";
        break;
    case "a02":
        qText.textContent = "使用DeStress應用程式是否需要支付費用？";
        aText.textContent = "目前使用DeStress應用程式是免費的，並且目前沒有計劃設置高級會員制度。";
        break;
    case "a03":
        qText.textContent = "DeStress應用程式能夠作為單獨管理壓力的解決方案嗎？";
        aText.textContent = "是的。然而，有些人可能更喜歡同時使用多種管理壓力的方法。";
        break;
    case "a04":
        qText.textContent = "有沒有使用DeStress應用程式受益的用戶的推薦或評論？";
        aText.textContent = "是的。DeStress的閉測版已經在St.Mark's學校的選定學生中進行，並且獲得了普遍正面的評論。團隊也根據評論和意見改進了DeStress。";
        break;
    case "a05":
        qText.textContent = "DeStress應用程式在iOS和Android設備上都可以使用嗎？";
        aText.textContent = "是的。由於DeStress是一個漸進式Web應用程式，在用戶連接到互聯網的情況下，它可以在任何設備上使用。然而，對於Android設備，有一個特殊的DeStress應用程式，可以提供更好的用戶體驗。";
        break;
    case "a06":
        qText.textContent = "我可以自定義DeStress應用程式中每個模式的設置和偏好嗎？";
        aText.textContent = "如果您指的是每個會話的時間限制，目前還沒有提供自定義設置的功能。然而，DeStress應用程式提供了不同的模式和功能，以滿足不同用戶的需求。您可以根據自己的偏好，在專注模式、放鬆模式、睡眠模式、快樂模式和運動模式之間進行切換，並按照自己的節奏和需要使用應用程式。如果您有特定的建議或意見，我們非常歡迎您的反饋，以便改進應用程式的功能和使用體驗。";
        break;
    case "a07":
        aText.textContent = "DeStress應用程式在使用時是否有任何隱私或數據安全措施？";
        aText.textContent = "DeStress應用程式除了使用統計數據外，不會連接任何使用者資料，也不會將資料分享給任何第三方供應商。此外，DeStress應用程式運行在HTTPS上，可以防止各種意圖竊取使用者資料的攻擊。";
        break;
    case "a08":
        qText.textContent = "DeStress應用程式中的研究支持的模式和內容更新頻率是多久一次？";
        aText.textContent = "這些模式和內容通常每兩週更新一次，添加新的歌曲並刪除一些舊的歌曲，以避免使用者反覆聽到相同的曲目。";
        break;
    case "a09":
        qText.textContent = "我可以在不同語言中使用DeStress應用程式嗎？";
        aText.textContent = "目前還不支援。該應用程式僅提供英文版本，但計劃添加多種語言的翻譯版本。";
        break;
    case "a10":
        qText.textContent = "黑屏會導致巨大的電池耗電嗎？";
        aText.textContent = "不會。黑屏可以節省AMOLED屏幕的電池電量。此外，黑屏本身是靜態的，能更節省更多的電池電量。";
        break;
    // elderly start
    case "e01":
        qText.textContent = "老年人使用DeStress應用程式時是否需要注意事項或考慮因素？";
        aText.textContent = "是的。我們建議老年人注意手機音量，避免音量過大對聽力造成損害。";
        break;
    // professor start
    case "p01":
        qText.textContent = "DeStress如何幫助年輕人解決壓力問題？";
        aText.textContent = "DeStress通過使用聲音和音樂來改變人體的生理和心理功能，例如影響情緒的激素分泌，幫助年輕人解決壓力問題。";
        break;
    case "p02":
        qText.textContent = "香港年輕人壓力的主要原因是什麼？";
        aText.textContent = "香港年輕人壓力的主要原因包括高強度的工作、日常任務的干擾、社交媒體使用以及工作和個人生活的壓力。這些因素可能對心理健康、工作與生活平衡和整體幸福感產生負面影響。DeStress旨在通過提供利用音樂和聲音促進放鬆、專注和情緒幸福的解決方案來應對這些問題。";
        break;
    case "p03":
        qText.textContent = "您能提供有關音樂和聲音如何影響情緒和專注力的更多信息嗎？";
        aText.textContent = "音樂和聲音對情緒和專注力具有重要影響。不同類型的音樂由於其每分鐘的節拍數（BPM）而引起特定的情緒反應。例如，快節奏的音樂通常能產生更高的興奮感，而慢節奏的音樂則有助於放鬆和冥想。聲音也可以影響情緒和專注力，例如，自然環境的聲音如海浪聲或鳥鳴聲可以營造寧靜和放鬆的氛圍。DeStress利用這些原理，提供了多種音樂和聲音選項，以幫助使用者達到放鬆、專注和情緒幸福的效果。此外，DeStress還提供定制的音樂播放列表功能，讓使用者根據自己的喜好和需要選擇最適合的音樂來放鬆身心。";
        break;
    case "p04":
        qText.textContent = "DeStress 如何運用音樂改善工作與生活平衡以及心理健康？";
        aText.textContent = "DeStress 透過選用精心挑選的音樂和聲音，改善工作與生活平衡以及心理健康。透過將精心挑選的音樂和音景融入不同模式，如專注、放鬆、運動、睡眠和快樂等模式，該方案旨在創造一個支持性環境，促進放鬆、專注和積極情緒。";
        break;
    case "p05":
        qText.textContent = "該方案中是否有任何特定的模式或技巧可幫助個人放鬆？";
        aText.textContent = "否。DeStress 只依靠播放的音樂來幫助個人放鬆。";
        break;
    case "p06":
        qText.textContent = "該方案如何應對社交媒體使用所引起的分心問題？";
        aText.textContent = "雖然 DeStress 旨在消除周圍的干擾，但在模式啟動時，它也可以通過其乾淨的背景來防止社交媒體使用所引起的分心，旨在消除社交媒體和整個設備可能帶來的潛在干擾。";
        break;
    case "p07":
        qText.textContent = "能否解釋該方案如何幫助運動員實現持續的表現？";
        aText.textContent = "DeStress 通過利用音樂和聲音的力量，幫助運動員實現持續的表現。研究表明，某些類型的音樂可以增強專注力、動機和整體運動表現。通過融入專為運動活動設計的特別精選播放列表和音景，該方案旨在創造一個能夠幫助運動員進入狀態並保持表現的最佳聽覺環境。音樂的節奏和激勵特性可以與運動動作同步，提升情緒，並提供一種能量和決心的感覺。此外，該方案提供可自定義的功能，允許運動員根據自己的喜好和運動的具體要求來選擇個性化的音樂。這種量身定制的方法有助於運動員創造一種有利於極限表現的心理和情感狀態，使他們能夠充分發揮自己在各自運動領域的潛力。";
        break;
    case "j01":
        qText.textContent = "請詳細解釋 DeStress 解決方案如何運用音樂和聲音來應對壓力問題？";
        aText.textContent = "DeStress 透過利用音樂和聲音對情緒、專注力和持續表現的影響來應對壓力問題。通過選擇具有特定每分鐘節拍的音樂以及考慮用戶的情緒狀態，該解決方案旨在促進專注力，幫助用戶從負面情緒中放鬆，並提高運動表現。";
        break;
    case "j02":
        qText.textContent = "有哪些研究或研究支持音樂和聲音對情緒、專注力和運動的持續表現的影響？";
        aText.textContent = "在選擇應用程序的音樂時，DeStress 參考了多個大學進行的研究。例如，韓國哈林大學聽力和言語病理研究所進行的一項研究發現，聆聽古典音樂或爵士音樂可以提高特定任務的持續表現。";
        break;
    case "j03":
        qText.textContent = "DeStress 應用程序中有哪些特定模式，它們是如何設計來應對不同的心理問題的？";
        aText.textContent = "DeStress 提供了不同的模式，旨在應對特定的心理問題。計劃的模式包括專注、放鬆、運動、睡眠和快樂。每種模式都根據不同的需求進行了量身定制，例如提高專注力、幫助放鬆、減輕失眠的影響，以及促進整體幸福感。";
        break;
    case "j04":
        qText.textContent = "能否舉例說明 DeStress 應用程序的每種模式播放的音樂或聲音類型？";
        aText.textContent = "提案中提到，“專注”模式播放的是每分鐘節拍不低於 130 的輕爵士音樂。這個選擇得到了韓國哈林大學聽力和言語病理研究所的一項研究的支持，該研究表明爵士音樂可以增強持續表現。";
        break;
    case "j05":
        qText.textContent = "DeStress 解決方案如何特別滿足青少年和年輕成年人的需求，它的目標年齡範圍是多少？";
        aText.textContent = "DeStress 解決方案特別針對年齡在 15-30 歲的青少年和年輕成年人，旨在應對這個年齡段面臨的心理問題，包括注意力不集中、失眠、抑鬱以及工作和學習所帶來的缺乏工作與生活平衡等問題。";
        break;
    case "j06":
        qText.textContent = "使用 DeStress 解決方案需要哪些硬件要求，特別是關於移動設備和耳機方面？";
        aText.textContent = "該解決方案需要連接到互聯網的移動設備作為應用程序的平台。至於耳機，任何普通的耳機都可以，但建議使用具有主動降噪功能的耳機。";
        break;
    case "j07":
        qText.textContent = "DeStress 解決方案是否涉及隱私問題或數據收集?";
        aText.textContent = "DeStress 不會連接任何用戶數據，除了使用統計數據，也不會將數據共享給任何第三方供應商。此外，DeStress 運行在 HTTPS 上，可以防止各種用於窺視用戶數據的攻擊。";
        break;
    case "j08":
        qText.textContent = "DeStress 是否已經在任何目標用戶群體中進行測試或試點項目？如果有，結果或反饋如何？";
        aText.textContent = "是的。DeStress 的封閉測試版本已在學校的特定學生中進行測試，並獲得了普遍積極的評價。團隊也根據評論和意見對 DeStress 進行了改進。";
        break;
    case "j09":
        qText.textContent = "在香港的背景下，DeStress 如何具體有助於改善工作與生活平衡和心理健康？";
        aText.textContent = "DeStress 解決方案通過提供用戶管理壓力、提高專注力和促進放鬆的工具，有助於改善工作與生活平衡和心理健康。通過利用音樂和聲音的力量，它旨在減輕壓力對個人的負面影響，特別是在香港高強度工作和持續壓力問題的背景下。";
        break;
    default:
        break;
}