//Integration von GSAP mit Webflow
document.addEventListener("DOMContentLoaded", () => {
	if (typeof window.gsap === "undefined") document.documentElement.classList.add("gsap-not-found");
	gsap.registerPlugin(ScrollTrigger, SplitText);
});

//GSAP Animation
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("h1, h2, div.heading-style-h2, [text-animated]").forEach( (text) => {

        const split = SplitText.create(text, {
        type: "words, chars",
        mask: "words",
        wordsClass: "word",
        charsClass: "char",
        });

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: text,
            start: "top bottom",
            end: "top 70%",
            toggleActions: "none play none reset",
        },
        });
        tl.from(split.words, {
            yPercent: 110,
            delay: 0.2,
            duration: 0.5,
            stagger: {
            amount: 0.2
        }
        });

        gsap.set(text, {
        autoAlpha: 1
        });
    });
});