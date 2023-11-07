
const copyButton = document.querySelector(".ip")
const textToCopy = "crafti-servi.com";


function copy() {
    const dummyTextarea = document.createElement("textarea");
    dummyTextarea.value = textToCopy;
    document.body.appendChild(dummyTextarea);
    
    dummyTextarea.select();
    
    try {
        document.execCommand("copy");
        console.log("Text copied to clipboard");
    } catch (err) {
        console.error("Unable to copy text to clipboard:", err);
    } finally {
        document.body.removeChild(dummyTextarea);
    }
}

function nav() {
    document.querySelector(".nav").style.display = "flex"
}
/*
function language_listener() {
const languageSelect = document.getElementById('language-switcher');
languageSelect.addEventListener('change', function() {
    const selectedLanguage = this.options[this.selectedIndex].getAttribute('data-value');
    window.location.href = `${selectedLanguage}/`;
});
}
*/
function language_listener() {
    var languageSelect = document.getElementById("language-switcher");
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.options[this.selectedIndex].getAttribute('data-value');
        var currentUrl = window.location.href;
        
        if (selectedLanguage === "de") {
            if (currentUrl === 'https://www.crafti-servi.com/') {
                window.location.href = 'https://www.crafti-servi.com/de/';
                return;
            }
            
            var path = window.location.pathname;
            var newPath = path.startsWith('/de/') ? path : '/de' + path;
            var newUrl = currentUrl.replace(path, newPath);
            window.location.href = newUrl;
        } else {
            var newUrl = currentUrl.replace("/de", "");
            window.location.href = newUrl;
        }
    });
}