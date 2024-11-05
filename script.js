function convertUrl() {
    const inputUrl = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    const copyButton = document.getElementById('copyButton');

    const regex = /ti\/g2\/([^?]+)/;
    const match = inputUrl.match(regex);

    if (match && match[1]) {
        const ticket = match[1];
        const linkType = document.querySelector('input[name="linkType"]:checked').value;
        let resultUrl;
        
        switch (linkType) {
            case "report":
                resultUrl = `line://square/report?ticket=${ticket}`;
                break;
            case "join":
                resultUrl = `line://square/join?ticket=${ticket}`;
                break;
            case "invite":
                resultUrl = `line://square/ti/g2/${ticket}`;
                break;
            case "browser":
                resultUrl = `https://square-api.line.me/smw/v2/static/sm/html/#/squareCover/${ticket}`;
                break;
        }

        resultDiv.innerHTML = resultUrl;
        copyButton.style.display = 'block';
    } else {
        resultDiv.innerHTML = '無効なURLです。';
    }
}

function copyLink() {
    const text = document.getElementById('result').textContent;
    navigator.clipboard.writeText(text).then(() => alert('リンクがコピーされました！'));
}

function generateShareLink() {
    const link = document.getElementById('shareLinkInput').value;
    const shareLinkDiv = document.getElementById('shareLinkOutput');
    shareLinkDiv.innerHTML = `https://example.com/share?link=${encodeURIComponent(link)}`;
    document.getElementById('copyShareButton').style.display = 'block';
}

function copyShareLink() {
    const text = document.getElementById('shareLinkOutput').textContent;
    navigator.clipboard.writeText(text).then(() => alert('共有リンクがコピーされました！'));
}

function analyzeUnicode() {
    const text = document.getElementById('unicodeInput').value;
    const unicodeResultDiv = document.getElementById('unicodeResult');
    let output = 'Unicode解析結果:<br>';
    
    for (const char of text) {
        const codePoint = char.codePointAt(0).toString(16).toUpperCase();
        output += `${char} -> U+${codePoint}<br>`;
    }

    unicodeResultDiv.innerHTML = output;
}
