const adviceId = document.querySelector('.id')
const adviceContent = document.querySelector('.advice')
const button = document.querySelector('#dice')

function advice(){
    button.addEventListener('click', async()=>{
        let randNum = Math.round(220 * Math.random());
        const res = await fetch('https://api.adviceslip.com/advice/' + randNum)
        const data = await res.json()
        let adviceIdHtml = `ADVICE #${data.slip.id}`
        let adviceContentHtml = `<span>"${data.slip.advice}"</span>`
        adviceId.innerHTML = adviceIdHtml
        adviceContent.innerHTML = adviceContentHtml
        console.log(adviceIdHtml, adviceContentHtml);
    })

}
advice()