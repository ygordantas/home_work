const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close_modal");
const projectsContainer = document.getElementById("projects");

const project1 = {
  title: "Project 1",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magnam nisi ut ipsa quaerat sequi, adipisci, consequatur numquam veniam iste voluptatum quisquam consectetur quasi officia quae eaque fuga vel nesciunt.",
  imageSrc:
    "https://media.istockphoto.com/id/1490535382/photo/2024-goal-plan-action-checklist-text-on-note-pad-with-laptop-glasses-and-pen.jpg?s=612x612&w=is&k=20&c=uqmIjrx8Y-1hUtZS9552XfQHXItlrzrGpp9uzT1-vcQ=",
};

const project2 = {
  title: "Project 2",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magnam nisi ut ipsa quaerat sequi, adipisci, consequatur numquam veniam iste voluptatum quisquam consectetur quasi officia quae eaque fuga vel nesciunt.",
  imageSrc:
    "https://media.istockphoto.com/id/1334810623/photo/business-team-discussing-together-during-meeting-at-office-colleagues-workshopping-business.jpg?s=612x612&w=is&k=20&c=jRGjr8U-kfKCEAFAlOOcDQaTVgf5OSDwkT0YatH4DsQ=",
};

const project3 = {
  title: "Project 3",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, magnam nisi ut ipsa quaerat sequi, adipisci, consequatur numquam veniam iste voluptatum quisquam consectetur quasi officia quae eaque fuga vel nesciunt.",
  imageSrc:
    "https://media.istockphoto.com/id/1344939844/photo/hand-holding-drawing-virtual-lightbulb-with-brain-on-bokeh-background-for-creative-and-smart.jpg?s=1024x1024&w=is&k=20&c=fZi9_l3-fcMPHTEDVinuavkZnG9zh_bkX8lWjKVJsf4=",
};

const projects = [project1, project2, project3];

for (let index = 0; index < projects.length; index++) {
  const li = document.createElement("li");
  li.classList.add("project_card");

  const img = document.createElement("img");
  img.src = projects[index].imageSrc;
  img.alt = projects[index].title;

  const description = document.createElement("p");
  description.textContent = projects[index].description;

  li.appendChild(img);
  li.appendChild(description);

  li.addEventListener("click", () => onProjectCardClickHandler(index));

  // li.addEventListener("click", () => {
  //   const modalContent = document.getElementById("modal_content");
  //   const selectedProject = projects[index];

  //   const titleElement = modalContent.querySelector("h2");
  //   titleElement.textContent = selectedProject.title;

  //   const descriptionElement = modalContent.querySelector("p");
  //   descriptionElement.textContent = selectedProject.description;

  //   const imageElement = modalContent.querySelector("img");
  //   imageElement.src = selectedProject.imageSrc;
  //   imageElement.alt = selectedProject.title;

  //   modal.classList.remove("hide");
  // });

  projectsContainer.appendChild(li);
}

function onCloseModalButtonClickHandler() {
  modal.classList.add("hide");
}

function onProjectCardClickHandler(index) {
  const modalContent = document.getElementById("modal_content");
  const selectedProject = projects[index];

  const titleElement = modalContent.querySelector("h2");
  titleElement.textContent = selectedProject.title;

  const descriptionElement = modalContent.querySelector("p");
  descriptionElement.textContent = selectedProject.description;

  const imageElement = modalContent.querySelector("img");
  imageElement.src = selectedProject.imageSrc;
  imageElement.alt = selectedProject.title;

  modal.classList.remove("hide");
}

closeModalBtn.addEventListener("click", onCloseModalButtonClickHandler);