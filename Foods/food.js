document.querySelector('.menu').addEventListener('click', () => {
	document.querySelectorAll('.target').forEach((item) => {
		item.classList.toggle('change');
	})
})

const icons = document.querySelectorAll('.section-1-icons i');

let i = 1

setInterval(() => {
    i++
// 之前跑不出來是因為.change前面沒有空白鍵
    const icon = document.querySelector('.section-1-icons .change');

    icon.classList.remove('change');
    // 這一行怎麼跑出的
    // icon.nextElementSibling.classList.add('.change')
    if (i > icons.length) {
        icons[0].classList.add('change')
        i = 1
    } else {
        icon.nextElementSibling.classList.add('change')
    }

}, 4000);