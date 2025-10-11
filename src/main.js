import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<div class="m-6 py-4 text-center flex flex-col flex-nowrap gap-10">
    <div class="flex justify-around md:justify-between">
        <div class="flex gap-4">
            <div>
                <img src="poza.jpg" class="w-30 md:w-25 rounded-full">
            </div>
            <div class="flex flex-col justify-center">
                <h1 class="text-2xl">Botez Alexandru Eugen</h1>
                <h2 class="text-lg">Software Developer</h2>
                <h2 >Bucharest, Romania</h2>
            </div>
        </div>
        <div class="flex-col justify-center hidden md:flex">
            <h2 class="text-lg">Contact:</h2>
            <h3 class="text-sm">
                Email: alexbotez@gmail.com
            </h3>
            <h3 class="text-sm">
                Github: <a href="https://github.com/runeen"> github.com/runeen </a>
            </h3>
            <h3 class="text-sm">
                Phone number: +40771283959
            </h3>
        </div>
    </div>
    
    <div class="flex flex-col gap-6 text-justify">
        <div class="md:hidden">
            <h3 class="text-lg">Contact</h3>
            <hr class="pb-2">
            <p>
                Email: alexbotez@gmail.com  <br>
                Github: <a href="https://github.com/runeen"> github.com/runeen </a> <br>
                Phone number: +40771283959
            </p>
        </div>
        <div>
            <h3 class="text-lg">Education</h3>
            <hr class="pb-2">
            <ul class="flex flex-col gap-3">
                <li>
                    <h4>Master's in Data Science</h4>
                    <p class="text-xs">Enrolled</p>
                    <p class="text-sm">Universitatea din Bucuresti, class of 2027</p>
                </li>
                <li>
                    <h4>Bachelor's in Computer Science</h4>
                    <p class="text-xs">Graduated</p>
                    <p class="text-sm">Universiatea "Ovidius" din Constanța, class of 2025</p>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg">Hard Skills</h3>
            <hr class="pb-2">
            <ul class="flex flex-col flex-nowrap gap-1 text-sm">
                <li>
                    <p>Designing and implementing artificial ntelligence models with the PyTorch framework</p>
                </li>
                <li>
                    <p>Programming with Python, JavaScript, Go, Java, C++, and C#</p>
                </li>
                <li>
                    <p>Designing object oriented system arhitectures<p>
                </li>
                <li>
                    <p>Developing front-end applications with React-Router and Tailwind</p>
                </li>
                <li>
                    <p>Developing RESTfull APIs with ExpressJS and SQLite</p>
                </li>
                <li>
                    <p>Managing and querying databases with SQL</p>
                </li>
            </ul>
        </div>
        <div>
            <h3 class="text-lg">Soft Skills</h3>
            <hr class="pb-2">
            <p class="text-sm">Perseverance, reliability, confidence, responsibility, adaptability 
               in team environments, and effective communication skills.
        </div>
        <div>
            <h3 class="text-lg">Personal Projects</h3>
            <hr class="pb-2">
            <ul class="flex flex-col flex-nowrap gap-5">
                <li>
                    <a href="https://github.com/runeen/SourceX">  
                        <h4 class="text-md"><u>SourceX</u></h4>
                        <p class="text-sm">
                   Machine learning model for music source separation. It has a novel arhitecture with U-Net and Tranformer-Encoder Layers.
                   <br>
                   The project was awarded with cash by S.C. AMAZON WEB SERVICES and CORNERSTONE TECHNOLOGIES S.R.L. at ESTIC 2025, competition
                   organized by Universitatea "Ovidius" din Constanța.
                    </a>
                </li>
                <li>
                    <a href="https://pokemon.alexbotez.dev">
                        <h4 class="text-md"><u>Pokedex Web App</u></h4>
                        <p class="text-sm">
                    Web application made with ExpressJS and React-Router. Uses the PokeAPI to fetch data about pokemon and 
                    a REST API to handle user data and authenication. Styled with Tailwindcss.
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <h3 class="text-lg">Work Experience</h3>
            <hr class="pb-2">
            <p class="text-sm"> 
                During my summer vacations, 
                I worked in the food service industry as a waiter.
                Gained valuable experience in teamwork and time management.
            </p>
        </div>
    </div>
</div>

`

setupCounter(document.querySelector('#counter'))
