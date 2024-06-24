let path = `M 10 200 Q 965 200 1910 200`;
let finalPath = `M 10 200 Q 965 200 1910 200`;

const string = document.querySelector("#string")
string.addEventListener("mousemove", (event) => {
    path = `M 10 200 Q ${event.offsetX} ${event.offsetY} 1910 200`;
    gsap.to("svg path", {
        attr: {d: path},
        duration: 0.2,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", (event) => {
    gsap.to("svg path", {
        attr: {d: finalPath},
        duration: 1.3,
        ease: "elastic.inOut(1,0.2)"
    })
})