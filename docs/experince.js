const experience = document.getElementById('experince')
let companies = [
    {
        company: 'GEP Technologies private limited',
        role: "Senior Software Engineer",
        desciption: "<li>Leading the team in product development.</li><li>Mentoring juniours</li><li>Archtecture design.</li><li>Release managment</li><li> Code reviews and Imposing best practices</li>"
    },
    {
        company: 'PurpleTalk private limited',
        role: "Analyst - Software",
        desciption: "<li>Developing and Maintaing IOS and React native applications.</li><li>Release managment</li><li> Code reviews and Imposing best practices</li>"
    },
    {
        company: 'Credencys Solutions',
        role: "IOS/React Native Developer",
        desciption: "<li>Developing and Maintaing IOS and React native applications.</li><li>Leading React native development</li>"
    }
];
var x = `<article class="flex max-w-xl flex-col items-start">
                        <div class="group relative">
                            <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    <span class="absolute inset-0"></span>
                                    {Company}
                                </a>
                            </h3>
                        <div class="flex items-center gap-x-4 text-xs">
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{role}</a>
                        </div>
                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
                        </div>
                    </article>`
let y = '';
for (let i = 0; i < companies.length; i++) {
    y += x.replace('{Company}', companies[i].company)
        .replace('{description}', companies[i].desciption)
        .replace('{role}', companies[i].role)
}
experience.innerHTML = y;

