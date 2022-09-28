$(function() {
    const body = $('body')

    const header = $('#header')
    const burger = $('#burger')

    const en = $('*#en')
    const ru = $('*#ru')
    const enText = $('*[data--language="en"]')
    const ruText = $('*[data--language="ru"]')

    burger.on('click', () => {
        burger.toggleClass('active')
        header.toggleClass('active')
        body.toggleClass('hoverflow')
    })

    en.on('click', () => {
        en.addClass('active')
        ru.removeClass('active')
        enText.removeClass('not-active')
        ruText.addClass('not-active')
    })
    
    ru.on('click', () => {
        ru.addClass('active')
        en.removeClass('active')
        ruText.removeClass('not-active')
        enText.addClass('not-active')
    })

    function checkScroll(scrollPos) {
        if (scrollPos === 0) {
            header.removeClass('fixed')
        }
        if (scrollPos > 100 && innerWidth > 425) {
            header.addClass('fixed')
        }        
        if (scrollY > 0 && innerWidth <= 425) {
            header.addClass('fixed')
        }
    }

    const scrollPos = $(window).scrollTop()

    checkScroll(scrollPos)
    
    const homeOffset = $('#home').offset().top - 80
    const aboutOffset = $('#about').offset().top - 80
    const skillsOffset = $('#skills').offset().top - 80
    const portfolioOffset = $('#portfolio').offset().top - 80
    const contactsOffset = $('#contacts').offset().top - 80

    if(scrollPos >= homeOffset && scrollPos < aboutOffset) {
        $('[data-block]').removeClass('active')
        $('[data-block="#home"]').addClass('active')
    }
    if(scrollPos >= aboutOffset && scrollPos < skillsOffset) {
        $('[data-block]').removeClass('active')
        $('[data-block="#about"]').addClass('active')
    }
    if(scrollPos >= skillsOffset && scrollPos < portfolioOffset) {
        $('[data-block]').removeClass('active')
        $('[data-block="#skills"]').addClass('active')
    }
    if(innerWidth > 425) {
        if(scrollPos >= portfolioOffset && scrollPos < contactsOffset) {
            $('[data-block]').removeClass('active')
            $('[data-block="#portfolio"]').addClass('active')
        }
        if(scrollPos >= contactsOffset) {
            $('[data-block]').removeClass('active')
            $('[data-block="#contacts"]').addClass('active')
        }
    } else if(innerWidth <= 425) {
        if(scrollPos >= portfolioOffset && scrollPos < contactsOffset-100) {
            $('[data-block]').removeClass('active')
            $('[data-block="#portfolio"]').addClass('active')
        }
        if(scrollPos-(innerHeight-150) >= contactsOffset) {
            $('[data-block]').removeClass('active')
            $('[data-block="#contacts"]').addClass('active')
        }
    }


    $(window).on('scroll resize', () => {
        const scrollPos = $(this).scrollTop()

        checkScroll(scrollPos)
        if(scrollPos >= homeOffset && scrollPos < aboutOffset) {
            $('[data-block]').removeClass('active')
            $('[data-block="#home"]').addClass('active')
        }
        if(scrollPos >= aboutOffset && scrollPos < skillsOffset) {
            $('[data-block]').removeClass('active')
            $('[data-block="#about"]').addClass('active')
        }
        if(scrollPos >= skillsOffset && scrollPos < portfolioOffset) {
            $('[data-block]').removeClass('active')
            $('[data-block="#skills"]').addClass('active')
        }
        if(innerWidth > 425) {
            if(scrollPos >= portfolioOffset && scrollPos < contactsOffset) {
                $('[data-block]').removeClass('active')
                $('[data-block="#portfolio"]').addClass('active')
            }
            if(scrollPos >= contactsOffset) {
                $('[data-block]').removeClass('active')
                $('[data-block="#contacts"]').addClass('active')
            }
        } else if(innerWidth <= 425) {
            if(scrollPos >= portfolioOffset && scrollPos < contactsOffset-200) {
                $('[data-block]').removeClass('active')
                $('[data-block="#portfolio"]').addClass('active')
            }
            if(scrollPos >= contactsOffset-200) {
                $('[data-block]').removeClass('active')
                $('[data-block="#contacts"]').addClass('active')
            }
        }
    })

    $('[data-block]').on('click', function(event) {
        event.preventDefault();
        $('[data-block]').removeClass('active')
        $(this).addClass('active')

        const blockId = $(this).data('block')
        const blockOffset = $(blockId).offset().top

        header.removeClass('active')
        burger.removeClass('active')
        body.removeClass('hoverflow')

        $('html, body').animate({
            scrollTop: blockOffset
        }, 1000)
    })
})
