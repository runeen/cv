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
                Github: <a href="https://github.com/runeen" target="_blank"> github.com/runeen </a>
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
            <p class="text-sm">
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
                    <p class="text-sm">Universitatea din București, class of 2027</p>
                </li>
                <li>
                    <h4>Bachelor's in Computer Science</h4>
                    <p class="text-xs">Graduated</p>
                    <p class="text-sm">Universiatea "Ovidius" din Constanța, class of 2025</p>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg">Technical Skills</h3>
            <hr class="pb-2">
            <p class="text-sm">
                Languages: Python, JavaScript, Go, Java, C++, C# <br>
                Frameworks/Libraries: PyTorch, React-Router, ExpressJS, Tailwind CSS, SQLite <br>
                Concepts: RESTful APIs, Object-Oriented Design, Machine Learning, SQL Databases <br>
        </div>
        <div>
            <h3 class="text-lg">Personal Projects</h3>
            <hr class="pb-2">
            <ul class="flex flex-col flex-nowrap gap-5">
                <li>
                    <a href="https://github.com/runeen/SourceX" target="_blank">  
                        <h4 class="text-md font-semibold"><u>SourceX</u></h4>
                        <p class="text-sm">
                   Machine learning model for music source separation.
                   Features a novel arhitecture containing U-Net and Transformer-Encoder Layers.
                   Implemented using PyTorch, NumPy and Flask.
                   <br>
                   Awarded a cash prize by Amazon Web Services and Cornerstone Technologies S.R.L. at ESTIC 2025, a competition
                   organized by Universitatea "Ovidius" din Constanța.
                    </a>
                </li>
                <li>
                    <a href="https://pokemon.alexbotez.dev" target="_blank">
                        <h4 class="text-md font-semibold"><u>Pokedex Web App</u></h4>
                        <p class="text-sm">
                    Web application made with ExpressJS and React-Router. Fetches Pokemon data from the PokeAPI and 
                    handles user data and authentication through a custom REST API. Styled with Tailwind CSS.
                    </a>
                </li>
            </ul>
        </div>
        <div class="">
            <h3 class="text-lg">Soft Skills</h3>
            <hr class="pb-2">
            <p class="text-sm">Perseverance, reliability, confidence, responsibility, adaptability 
               in team environments, and effective communication skills.
        </div>
        <div>
            <h3 class="text-lg">Work Experience</h3>
            <hr class="pb-2">
            <p class="text-sm"> 
                During my summer vacations, 
                I worked in the food service industry as a waiter.
                Developed strong teamwork and time management skills.
            </p>
        </div>
        <div>
            <h3 class="text-lg">Hobbies</h3>
            <hr class="pb-2">
            <p  class="text-sm">
                I am passionate about music; I play guitar, compose songs,
                successfully securing clients for my compositions.
                I take pride in maintaining a healthy and active lifestyle.
                I enjoy meeting new people and spending time with animals. I have cared
                for my own dogs for over 15 years and regularly help stray animals in
                my neighbourhood.
        </div>
    </div>
</div>

`

setupCounter(document.querySelector('#counter'))
