"use strict";
var textinput               = self.document.querySelector("textarea[textinput]")
   ,textoutput              = self.document.querySelector("textarea[textoutput]")
   ,CONVERT_TABLE_GIBBERISH = ["à", "á", "â", "ã", "ä", "å", "æ", "ç", "è", "é", "ë", "ì", "î", "ð", "ñ", "ò", "ô", "ö", "÷", "ø", "ù", "ú", "ê", "í", "ï", "ó", "õ"]
   ,REGEXS                  = CONVERT_TABLE_GIBBERISH.map(function(c){return new RegExp(c + "+", "gmu");})
   ,CONVERT_TABLE_HEBREW    = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת", "ך", "ם", "ן", "ף", "ץ"]
   ;

function change_handler(evt){
  var tmp = textinput.value || "";
  REGEXS.forEach(function(REGEX, index){
    tmp = tmp.replace(REGEX, CONVERT_TABLE_HEBREW[index]);
  });
  textoutput.value = tmp;
}

textinput.onkeyup  = change_handler;
textinput.onchange = change_handler;

textinput.focus();
