var tl = gsap.timeline()

tl.from("#nav img,#nav a,#nav button",{
    
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.5

})
tl.from("#main h1",{
    y:100,
    opacity:0,
    duration:1,
    stagger:0.5

})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    stagger:0.5
})


