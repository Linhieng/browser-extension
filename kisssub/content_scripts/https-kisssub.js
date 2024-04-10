function http2https() {
    const eleDownload = document.querySelector('a#download')
    if (eleDownload) {
        eleDownload.setAttribute(
            'href',
            eleDownload.href.replace(/^http:/, 'https:'),
        )
    } else {
        setTimeout(() => {
            http2https()
        })
    }
}

http2https()
