const menu_mobile = document.querySelector( '.menu-mobile' ),
      menu_bar1 = document.querySelector( '.menu-mobile div:nth-child( 1 )' ),
      menu_bar3 = document.querySelector( '.menu-mobile div:nth-child( 3 )' ),
      nav = document.querySelector( 'nav' )
let flag = true
menu_mobile.addEventListener( 'click', ( ) => {
    if( flag ) {
        menu_bar1.style.transform = `translateY( 9px )`
        menu_bar1.style.transition = `transform .4s cubic-bezier(0.18,-1.07, 0.24, 0.99)`
        menu_bar3.style.transform = `translateY( -9px )`
        menu_bar3.style.transition = `transform .4s cubic-bezier(0.18,-1.07, 0.24, 0.99)`
        nav.style.height = `250px`;
        flag = false
    } else {
        menu_bar1.style.transform = `translateY( 0 )`
        menu_bar1.style.transition = `transform .4s cubic-bezier(1, 0, 0, 1.7)`
        menu_bar3.style.transform = `translateY( 0 )`
        menu_bar3.style.transition = `transform .4s cubic-bezier(1, 0, 0, 1.7)`
        nav.style.height = `0`;
        flag = true
    }
} )

function smoothScroll( target, duration ) {
    var target = document.querySelector( target )
    var targetPosition = target.getBoundingClientRect().top
    var startPosition = window.pageYOffset
    var distance = targetPosition - startPosition
    var startTime = null
    
    function animation( currentTime ) {
        if ( startTime === null ) startTime = currentTime
        var timeElapsed = currentTime - startTime
        var run = ease( timeElapsed, startPosition, distance, duration )
        window.scrollTo( 0, run )
        if ( timeElapsed < duration ) requestAnimationFrame( animation )
    }

    function ease(t, b, c, d) {
        t /= d
        t--
        return -c * ( t * t * t * t - 1 ) + b
    }

    requestAnimationFrame( animation )
}

let i
const btn1 = document.querySelectorAll( '.btn1' ),
      btn2 = document.querySelectorAll( '.btn2' ),
      btn3 = document.querySelectorAll( '.btn3' ),
      btn4 = document.querySelectorAll( '.btn4' )
        
for ( i = 0; i < btn1.length; i++ ) {
    btn1[i].addEventListener( 'click', () => {
        smoothScroll( '#oHorosMas', 800 )
    } )
}

for ( i = 0; i < btn1.length; i++ ) {
    btn2[i].addEventListener( 'click', () => {
        smoothScroll( '#ipiresies', 800 )
    } )
}

for ( i = 0; i < btn1.length; i++ ) {
    btn3[i].addEventListener( 'click', () => {
        smoothScroll( '#pelates', 800 )
    } )
}

for ( i = 0; i < btn1.length; i++ ) {
    btn4[i].addEventListener( 'click', () => {
        smoothScroll( '#epikoinonia', 800 )
    } )
}