function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

const eva_single = () => {
    eles = iframe.contentDocument.getElementsByTagName("input");
    for (let j = 0; j < 44; j++) {
        ele = eles[j];
        if (ele.type == 'radio') {
            if (ele.nextSibling.textContent.endsWith('(10)') ||
                ele.nextSibling.textContent.endsWith('(15)') ||
                ele.nextSibling.textContent.startsWith('超过目标'))
            {
                ele.checked = true;
            }
        }
    }
    iframe.contentDocument.getElementById('save-button').click();
};

eva_btns = document.getElementsByName('startSurvey');
iframe = document.createElement('iframe');
iframe.width = '100%';
document.body.appendChild(iframe);
let i = 0;
while (true) {
	if (i < eva_btns.length) {
		iframe.src=eva_btns[i].getAttribute('url');
		await sleep(2500);  //这里可以改评价速度，默认2.5秒
		eva_single();
		console.log('第'+(i+1).toString()+'个老师评价好了')
		i++;
	}
	else {
		console.log('评教完毕');
		break;
	}
}
