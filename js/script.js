window.addEventListener('load', function() {
    const body = document.querySelector('body')

    const header = document.querySelector('#header')
    const burger = document.querySelector('#burger')

    const en = document.querySelectorAll('#en')
    const ru = document.querySelectorAll('#ru')
    const enText = document.querySelectorAll('*[data--language="en"]')
    const ruText = document.querySelectorAll('*[data--language="ru"]')

    burger.addEventListener('click', () => {
        burger.classList.toggle('active')
        header.classList.toggle('active')
        body.classList.toggle('hoverflow')
    })

    en.forEach(el => {
        el.addEventListener('click', () => {
            en.forEach(el => {
                el.classList.add('active')
            })

            ru.forEach(el => {
                el.classList.remove('active')
            })

            enText.forEach(el => {
                el.classList.remove('not-active')
            })
            ruText.forEach(el => {
                el.classList.add('not-active')
            })
        })
    })
    
    ru.forEach(el => {
        el.addEventListener('click', () => {
            en.forEach(el => {
                el.classList.remove('active')
            })
            
            ru.forEach(el => {
                el.classList.add('active')
            })
            
            ruText.forEach(el => {
                el.classList.remove('not-active')
            })
            enText.forEach(el => {
                el.classList.add('not-active')
            })
        })
    })
})
