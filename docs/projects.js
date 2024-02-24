const projects = document.getElementById('projects')
let projectsList = [
    {
        project: 'GEP Smart Q',
        skills: "React Native, Java Script, Swift",
        desciption: "<li>Low code architecture design.</li>"
    },
    {
        project: 'GEP Smart',
        skills: "React Native, Java Script, Swift",
        desciption: "<li>Developing and Maintaing IOS and React native applications.</li><li>Release managment</li><li> Code reviews and Imposing best practices</li>"
    },
    {
        project: 'GEP Go',
        skills: "React Native, Java Script, Swift",
        desciption: "<li>Developing and Maintaing IOS and React native applications.</li><li>Leading React native development</li>"
    },
    {
        project: 'Radius One',
        skills: "React Native, Java Script, Swift",
        desciption: "<li>Developing and Maintaing IOS and React native applications.</li><li>Leading React native development</li>"
    },
    {
        project: 'WashOps',
        skills: "Swift",
        desciption: "<li>Developing and Maintaing IOS and React native applications.</li><li>Leading React native development</li>"
    }
];
let projectHTML = `<div>
<div class="px-4 sm:px-0">
  <h3 class="text-base font-bold leading-7 text-gray-900">{project}</h3>
</div>
<div class="mt-6 rounded-md border border-gray-200 px-8">
  <dl class="divide-y divide-gray-100">
    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Retails application</dd>
    </div>
    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium leading-6 text-gray-900">Skills And Features</dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{skills}</dd>
    </div>
    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
      <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{description}</dd>
    </div>
    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
      <dt class="text-sm font-medium leading-6 text-gray-900">Links</dt>
      <dd class="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
          <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
            <div class="flex w-0 flex-1 items-center">
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
              </svg>
              <div class="ml-4 flex min-w-0 flex-1 gap-2">
                <span class="truncate font-medium">IOS</span>
              </div>
            </div>
          </li>
          <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
            <div class="flex w-0 flex-1 items-center">
              <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z" clip-rule="evenodd" />
              </svg>
              <div class="ml-4 flex min-w-0 flex-1 gap-2">
                <span class="truncate font-medium">Android</span>
              </div>
            </div>
          </li>
        </ul>
      </dd>
    </div>
  </dl>
</div>
</div>
`;
let projectsListHTML = '';
for (let i = 0; i < projectsList.length; i++) {
    projectsListHTML += projectHTML.replace('{project}', projectsList[i].project)
        .replace('{description}', projectsList[i].desciption)
        .replace('{skills}', projectsList[i].skills)
}
projects.innerHTML = projectsListHTML;