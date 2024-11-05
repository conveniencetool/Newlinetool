function convertUrl() {
    const inputUrl = document.getElementById('urlInput').value;
    const resultDiv = document.getElementById('result');
    const shareLinkDiv = document.getElementById('shareLink');
    const copyButton = document.getElementById('copyButton');
    resultDiv.innerHTML = ''; // 既存の結果をクリア
    shareLinkDiv.innerHTML = ''; // 共有リンクをクリア
    copyButton.style.display = 'none'; // ボタンを非表示に

    // 正規表現を使用してURLからチケット部分を抽出
    const regex = /ti\/g2\/([^?]+)/; // g2の後の部分を抽出
    const match = inputUrl.match(regex);

    if (match && match[1]) {
        const ticket = match[1];
        const linkType = document.querySelector('input[name="linkType"]:checked').value;

        // 変換結果を生成
        const resultUrl = `line://square/${linkType}?ticket=${ticket}`;
        resultDiv.innerHTML = `<div>${resultUrl}</div>`;

        // 共有リンク生成
        const shareLink = `https://example.com/share?ticket=${ticket}`; // 共有リンクの例
        shareLinkDiv.innerHTML = `<div>${shareLink}</div>`;
        copyButton.style.display = 'block'; // ボタンを表示
    } else {
        resultDiv.innerHTML = '無効なURLです。正しい形式で入力してください。';
    }
}

function copyLink() {
    const shareLinkDiv = document.getElementById('shareLink');
    const textArea = document.createElement('textarea');
    textArea.value = shareLinkDiv.textContent; // 共有リンクのテキストを取得
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('共有リンクがコピーされました！');
}
