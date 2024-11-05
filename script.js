function convertUrl() {
    const inputUrl = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    const shareLinkDiv = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');
    const copyShareButton = document.getElementById('copyShareButton');
    
    resultDiv.innerHTML = ''; // 既存の結果をクリア
    shareLinkDiv.innerHTML = ''; // 共有リンクをクリア
    copyButton.style.display = 'none'; // ボタンを非表示に
    copyShareButton.style.display = 'none'; // 共有リンクコピーを非表示に

    // 正規表現でURLからチケット部分を抽出
    const regex = /ti\/g2\/([^?]+)/;
    const match = inputUrl.match(regex);

    if (match && match[1]) {
        const ticket = match[1];
        const linkType = document.querySelector('input[name="linkType"]:checked').value;

        // 選択されたリンク形式に応じて変換結果を生成
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

        // 変換結果の表示
        resultDiv.innerHTML = `<div>${resultUrl}</div>`;
        copyButton.style.display = 'block'; // ボタンを表示

        // 共有リンクの生成（ここでは一例として共有リンクの構成を簡単にしています）
        const shareUrl = `https://example.com/share?generatedLink=${encodeURIComponent(resultUrl)}`;
        shareLinkDiv.innerHTML = `<div>${shareUrl}</div>`;
        copyShareButton.style.display = 'block'; // 共有リンクコピーを表示
    } else {
        resultDiv.innerHTML = '無効なURLです。正しい形式で入力してください。';
    }
}

function copyLink() {
    const resultDiv = document.getElementById('result');
    const textArea = document.createElement('textarea');
    textArea.value = resultDiv.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('リンクがコピーされました！');
}

function copyShareLink() {
    const shareLinkDiv = document.getElementById('shareLink');
    const textArea = document.createElement('textarea');
    textArea.value = shareLinkDiv.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('共有リンクがコピーされました！');
}
