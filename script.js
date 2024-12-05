gsap.to(".image-container img",{
    transform: "translatex(-50%)",
    duration:1,
    scrollTrigger: {
        trigger: ".image-container",
        start: "top 67%",
        scrub: 1,
        
    }
})

gsap.from(".text p",{
    opacity: 0,
    duration:1,
    stagger:0.5,
    scrollTrigger: {
        trigger: ".text",
        scrub: 1,
    }
})

gsap.from(".page6 p",{
    opacity: 0,
    duration:1,
    stagger:0.5,
    scrollTrigger: {
        trigger: ".page5",
        start: "top -10%",
        scrub: 1,
    }
})

gsap.from(".page7 h1",{
    opacity: 0,
    duration:2,
    stagger:0.5,
    scrollTrigger: {
        trigger: ".page7",
        start: "top 50%",
        end: "top -10%",
        scrub: 1,
    }
})