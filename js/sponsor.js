const bd = document.querySelector('body')
const qbox = bd.querySelector('#QRBox')
const mbox = bd.querySelector('#MainBox')
const dbox = bd.querySelector('#donateBox')

const qqr = 'https://img-blog.csdnimg.cn/72fb6d98a39c41c183fdda6528d50a7a.png#pic_center'
const aqr = 'https://img-blog.csdnimg.cn/0a1642370f904f2186e0a2960a0e2e2b.png#pic_center'
const wqr = 'https://img-blog.csdnimg.cn/a1e1b98f663c4d4da880ec17d101625c.png#pic_center'

const showQR = (QR) => {
	if (QR) mbox.style.backgroundImage = `url(${ QR })`
	bd.classList.add('blur')
	qbox.classList.add('fadeIn')
	mbox.classList.add('showQR')
}

dbox.addEventListener('click', (e) => {
	let el = e.target
	if (el.id === 'QQPay') showQR(qqr)
	else if (el.id === 'AliPay') showQR(aqr)
	else if (el.id === 'WeChat') showQR(wqr)
})

mbox.addEventListener('click', () => {
	mbox.classList.remove('showQR')
	mbox.classList.add('hideQR')
	setTimeout(a => {
		qbox.classList.remove('fadeIn')
		mbox.classList.remove('hideQR')
		bd.classList.remove('blur')
	}, 600)
})
