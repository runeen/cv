import './style.css'
document.querySelector('#app').innerHTML = `
<div class="m-6 lg:mx-15 py-4 text-center flex flex-col flex-nowrap gap-10">
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
                Email: alexbotez128@gmail.com
            </h3>
            <h3 class="text-sm">
                Github: <a href="https://github.com/runeen" target="_blank"> github.com/runeen </a>
            </h3>
            <h3 class="text-sm">
                <a href="https://alexbotez.dev" target="_blank">alexbotez.dev</a>
            </h3>
        </div>
    </div>
    
    <div class="flex flex-col gap-6 text-justify">
        <div class="md:hidden">
            <h3 class="text-lg">Contact</h3>
            <hr class="pb-2">
            <p class="text-sm">
                Email: alexbotez@gmail.com  <br>
                Github: <a href="https://github.com/runeen" target="_blank"> github.com/runeen </a> <br>
                <a href="https://alexbotez.dev" target="_blank"> alexbotez.dev</a>
            </p>
        </div>

        <div>
            <h3 class="text-lg">About Me:</h3>
            <hr class="pb-2">
            <p class="text-sm">Award-winning Data Science developer with specialised project experience in machine learning for time-series data. Currently pursuing a Master's in Data Science at the University of Bucharest. Seeking a Junior Data Scientist role where I can apply my Python and PyTorch skills to meaningful work.</p>
        </div>

        <div>
            <h3 class="text-lg">Education</h3>
            <hr class="pb-2">
            <ul class="flex flex-col gap-3">
                <li>
                    <h4>Master's in Data Science</h4>
                    <p class="text-xs">Enrolled</p>
                    <p class="text-sm">Universitatea din București (2025-2027)</p>
                </li>
                <li>
                    <h4>Bachelor's in Computer Science</h4>
                    <p class="text-xs">Graduated</p>
                    <p class="text-sm">Universiatea "Ovidius" din Constanța (2022-2025)</p>
                </li>
            </ul>
        </div>

        <div>
            <h3 class="text-lg">Skills</h3>
            <hr class="pb-2">
            <p class="text-sm pb-2">
                Programming Languages: Python, JavaScript, C++, Java<br />
            </p>
            <p class="text-sm pb-2">
                Python Libraries: PyTorch, scikit-learn, NumPy, Pandas, SciPy.<br />
            </p>
            <p class="text-sm pb-2">
                Machine Learning: Time-Series Analysis, Transformer Architectures, Convolutional Neural Networks (CNN), Long Short-Term Memory (LSTM), Random Forest, Linear Models.<br />
            </p>
            <p class="text-sm pb-2">
                Tools And Infrastructure: Git, Docker, SQL, REST APIs.
            </p>
            <p class="text-sm pb-2">
                Web Development: React, Express.js, Tailwind CSS, Spring Boot, SQLite.
            </p>
            <p class="text-sm pb-2">
                Languages: English (Fluent), Romanian (Native).
            </p>
        </div>
        <div>
            <h3 class="text-lg">Techincal Projects</h3>
            <hr class="pb-2">
            <ul class="flex flex-col flex-nowrap gap-5">
            <!-- ar fi bine sa pun si predictiile financiare trb sa vb cu proful -->
                <li>
                    <a href="https://github.com/runeen/SourceX" target="_blank">  
                        <h4 class="text-md font-semibold"><u>SourceX</u></h4>
                        <p class="text-xs font-medium"> Award Winner, ESTIC 2025 | github.com/runeen/SourceX</p>
                        <p class="text-xs font-medium mb-3"> PyTorch | NumPy | Transformer Architectures | U-Net</p>
                       <p class="text-sm mb-3">
                       - Designed and implemented an original neural network architecture combining Convolutional 
                       and Transformer-Encoder layers to isolate individual instruments from mixed audio tracks.
                       </p>
                       <p class="text-sm">
                       - Awarded a cash prize by Amazon Web Services (AWS)
                       and Cornerstone Technologies S.R.L. for technical innovation at a university competition.
                       </p>
                    </a>
                </li>
                <li>
                    <a href="https://pokemon.alexbotez.dev" target="_blank">
                        <h4 class="text-md font-semibold"><u>Pokedex Web App</u></h4>
                        <p class="text-xs font-medium">Live Deployment | pokemon.alexbotez.dev</p>
                        <p class="text-xs font-medium mb-3"> React | Express.js | REST API | Tailwind CSS | SQLite </p>
                       <p class="text-sm mb-3">
                       - Engineered a full-stack web application with a React frontend and a custom Express.js backend,
                       implementing client-side routing for a seamless user experience.
                       </p>
                       <p class="text-sm mb-3">
                       - Developed a secure REST API to handle user authentication, data persistence, and integration with
                       the external PokeAPI.
                       </p>
                       <p class="text-sm">
                       - Built a responsive and modern UI with Tailwind CSS and successfully deployed the complete application stack. 
                       </p>
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
                I am passionate about music. I play guitar and compose.
                I take pride in maintaining a healthy and active lifestyle.
                I enjoy spending time with my friends and people in general. 
                I look after stray animals in my neighbourhood.
        </div>
    </div>
</div>
`
