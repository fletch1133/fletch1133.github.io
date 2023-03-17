const views = {
    "about": `
        <section id="about" class="section">
            <h2>About</h2>
            <h3>I am a hard-working and driven individual. I try my best to always give support when it is needed. I have collaborated with various people in a multitude of industries given my time spent in real estate and finance. I am a frequent gym goer who also loves golf, dogs and outdoor activities such as hiking. My motivation to become a software engineer is to help develop more complex algorithms for the investment industry using python.</h3>
        </section>
        `,
    "skills": `
        <section id="skills" class="section">
            <h2>Skills</h2>
            <h3>I have a strong understanding of HTML, CSS and JavaScript due to my spent at DevMountain. I also have to ability to make axios requests and am currently pursuing a specialization in Python.</h3>
        </section>
    `,
    "projects": `
        <section id="projects" class="section">
            <h2>Projects</h2>
            <h3>I developed a project that gave ratings to NFL players. You were able to increase and decrease the overall of a player. I used div classes and ID's to give the buttons functionality. I also attached a link to a separate page that involves an averge overall rating where the user can select an 'Agree' or 'Disagree' button. To gives these buttons functionality, I used event listeners with the append child method.</h3>
            <h3>https://github.com/fletch1133/Capstone.git</h3>
        </section>
    `,
    "contact": `
        <section id="contact" class="section">
            <h2>Contact</h2>
            <h3>Anthony Fletcher</h3>
            <h3>Scranton, Pennslyvania</h3>
            <h3>Email: afletcher2433@gmail.com</h3>
            <h3>Phone Number: (570)-575-5065</h3>
        </section>
    `
}
const navLinks = document.querySelectorAll('a')
const main = document.querySelector('#main')
console.log(navLinks)

const changeView = evt => {
    let view = evt.target.id
    main.innerHTML = views[view]
}

for(let i = 0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', changeView)
}