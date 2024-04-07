/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, s as spreadAttributes, k as renderComponent, l as Fragment } from '../astro_BgnJLKJx.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro$g = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="text-gray-400 dark:text-gray-50"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/layouts/Layout.astro", void 0);

const $$Astro$f = createAstro();
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Section;
  const { title, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`max-w-[80vw] mx-auto my-0 py-2 mb-6 ${className}`, "class")}> ${title && renderTemplate`<h2 class="text-4xl mb-6 inline-flex animate-background-shine bg-[linear-gradient(110deg,#ddd,45%,#eee,55%,#939393)] bg-[length:250%_100%] bg-clip-text  text-transparent"> ${title} </h2>`} ${renderSlot($$result, $$slots["default"])} </section>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/Section.astro", void 0);

const $$Astro$e = createAstro();
const $$Badge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Badge;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center"> <span class="relative inline-flex overflow-hidden rounded-full p-[2px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-900 bg-green-50 rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap"> ${renderSlot($$result, $$slots["default"])} </div> </span> </div>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/Badge.astro", void 0);

const $$Astro$d = createAstro();
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Card;
  const { className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`relative overflow-hidden rounded-xl border border-gray-700 shadow-2xl ${className}`, "class")}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/Card.astro", void 0);

const $$Astro$c = createAstro();
const $$SocialBadge = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$SocialBadge;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank" role="link" class="rounded-full p-2 cursor-pointer bg-gray-500 text-white dark:bg-white dark:text-gray-500 hover:bg-white hover:text-gray-500 hover:dark:bg-gray-500 hover:dark:text-white"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/SocialBadge.astro", void 0);

const $$Astro$b = createAstro();
const $$Linkedin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Linkedin;
  return renderTemplate`<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24px" height="24px" viewBox="0 0 20 20" stroke-width="2" fill="currentColor" stroke-linecap="round" stroke-linejoin="round"> <g> <path d="M2.5 18h3V6.9h-3V18zM4 2c-1 0-1.8.8-1.8 1.8S3 5.6 4 5.6s1.8-.8 1.8-1.8S5 2 4 2zm6.6 6.6V6.9h-3V18h3v-5.7c0-3.2 4.1-3.4 4.1 0V18h3v-6.8c0-5.4-5.7-5.2-7.1-2.6z"></path> </g> </svg>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/icons/Linkedin.astro", void 0);

const $$Astro$a = createAstro();
const $$GitHub = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$GitHub;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/icons/GitHub.astro", void 0);

const $$Astro$9 = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Card", $$Card, { "className": "flex flex-col-reverse lg:flex-row items-center justify-center px-8 py-6 w-full ", "data-astro-cid-anhloy43": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-1 lg:mr-32 w-full" data-astro-cid-anhloy43> <h1 class="text-4xl font-bold tracking-tight sm:text-5xl" data-astro-cid-anhloy43>
Jorge Ulloa Castillo
</h1> <p class="mt-3 lg:mt-6 text-md [&>strong]:text-blue-300 [&>strong]:font-semibold text-pretty" data-astro-cid-anhloy43> <strong data-astro-cid-anhloy43>Ingeniero Civil en Informática de la Universidad Austral de Chile 🇨🇱
</strong> de Valdivia, Chile. Con experiencia en Ciencia de los Datos, Machine
        Learning y Desarrollo FullStack
</p> <nav class="flex gap-3 pt-7" data-astro-cid-anhloy43> ${renderComponent($$result3, "SocialBadge", $$SocialBadge, { "href": "https://www.linkedin.com/in/jorge-ulloa-castillo-574161255/", "data-astro-cid-anhloy43": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Linkedin", $$Linkedin, { "data-astro-cid-anhloy43": true })}` })} ${renderComponent($$result3, "SocialBadge", $$SocialBadge, { "href": "https://github.com/ulloacastillo", "data-astro-cid-anhloy43": true }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "GitHub", $$GitHub, { "data-astro-cid-anhloy43": true })}` })} </nav> </div> <div class="flex lg:flex-col gap-2 w-full lg:w-fit" data-astro-cid-anhloy43> <figure data-astro-cid-anhloy43> <img src="./jorge.webp" alt="Jorge Ulloa Castillo" class="w-24 lg:w-48" data-astro-cid-anhloy43> </figure> ${renderComponent($$result3, "Badge", $$Badge, { "data-astro-cid-anhloy43": true }, { "default": ($$result4) => renderTemplate`Disponible para trabajar` })} </div> ` })} ` })} `;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/sections/Hero.astro", void 0);

const $$Astro$8 = createAstro();
const $$Education = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Education;
  const cardStyle = "flex flex-col gap-2 px-8 py-6";
  const cardTitle = "bg-clip-text text-2xl font-semibold mb-7";
  const education = [
    {
      university: "Universidad Austral de Chile",
      description: "Ingeniero Civil en Inform\xE1tica"
    },
    {
      university: "Universidad de Santiago de Compostela",
      description: "Pasant\xEDa de un Semestre. Realic\xE9 cursos de Desarrollo de Aplicaciones Web y Aprendizaje Autom\xE1tico"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "className": `${cardStyle}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-1"> <h2${addAttribute(cardTitle, "class")}>Educación</h2> <div class="flex flex-col gap-10"> ${education.map((ed) => renderTemplate`<div class="flex flex-col gap-2"> <h2 class="text-lg font-bold text-yellow-600	">${ed.university}</h2> <p class="p-0 m-0 text-sm ">${ed.description}</p> </div>`)} </div> </div> ` })}`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/sections/Education.astro", void 0);

const $$Astro$7 = createAstro();
const $$Experience = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Experience;
  const cardStyle = "flex flex-col gap-2 px-8 py-6";
  const cardTitle = "bg-clip-text text-2xl font-semibold mb-7";
  const experiences = [
    {
      company: "ZTZ Tech Group",
      rol: "Desarrollador de Software",
      start: "Ocubre 2023",
      end: "Marzo 2023",
      description: "En los 5 meses se desarrollaron 3 proyectos Fullstack ..."
    },
    {
      company: "Motivus",
      rol: "Practica Profesional",
      start: "Marzo 2022",
      end: "Junio 2022",
      description: "Para una plataforma de c\xF3mputo en la nube, se crearon algoritmos de Random Forest y Decision Tree que puedan competir en Rendimiento contra SK-Learn"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "className": `${cardStyle} w-[60%]]` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h2${addAttribute(cardTitle, "class")}>Experiencia Laboral</h2> <div class="flex flex-col gap-8"> ${experiences.map((exp) => renderTemplate`<div class="flex items-start gap-2"> <div class="w-[40%] flex flex-col gap-2"> <h3 class="text-lg font-bold text-yellow-600	">${exp.rol}</h3> <h4 class="font-normal text-lg  ">${exp.company}</h4> <p class="p-0 m-0 text-sm  "> ${exp.start} - ${exp.end} </p> </div> <div class="flex-1"> <p class="relative text-sm">${exp.description}</p> </div> </div>`)} </div> ` })}`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/sections/Experience.astro", void 0);

const $$Astro$6 = createAstro();
const $$LinkButton = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} role="link" target="_blank" class="cursor-pointer inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-800 hover:border-gray-900 group max-w-fit rounded-xl hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/LinkButton.astro", void 0);

const $$Astro$5 = createAstro();
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Link;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/icons/Link.astro", void 0);

const $$Astro$4 = createAstro();
const $$Wordpress = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Wordpress;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 122.52 122.523" width="512" height="512" xmlns="http://www.w3.org/2000/svg"><g fill="#21759b"><path d="m8.708 61.26c0 20.802 12.089 38.779 29.619 47.298l-25.069-68.686c-2.916 6.536-4.55 13.769-4.55 21.388z"></path><path d="m96.74 58.608c0-6.495-2.333-10.993-4.334-14.494-2.664-4.329-5.161-7.995-5.161-12.324 0-4.831 3.664-9.328 8.825-9.328.233 0 .454.029.681.042-9.35-8.566-21.807-13.796-35.489-13.796-18.36 0-34.513 9.42-43.91 23.688 1.233.037 2.395.063 3.382.063 5.497 0 14.006-.667 14.006-.667 2.833-.167 3.167 3.994.337 4.329 0 0-2.847.335-6.015.501l19.138 56.925 11.501-34.493-8.188-22.434c-2.83-.166-5.511-.501-5.511-.501-2.832-.166-2.5-4.496.332-4.329 0 0 8.679.667 13.843.667 5.496 0 14.006-.667 14.006-.667 2.835-.167 3.168 3.994.337 4.329 0 0-2.853.335-6.015.501l18.992 56.494 5.242-17.517c2.272-7.269 4.001-12.49 4.001-16.989z"></path><path d="m62.184 65.857-15.768 45.819c4.708 1.384 9.687 2.141 14.846 2.141 6.12 0 11.989-1.058 17.452-2.979-.141-.225-.269-.464-.374-.724z"></path><path d="m107.376 36.046c.226 1.674.354 3.471.354 5.404 0 5.333-.996 11.328-3.996 18.824l-16.053 46.413c15.624-9.111 26.133-26.038 26.133-45.426.001-9.137-2.333-17.729-6.438-25.215z"></path><path d="m61.262 0c-33.779 0-61.262 27.481-61.262 61.26 0 33.783 27.483 61.263 61.262 61.263 33.778 0 61.265-27.48 61.265-61.263-.001-33.779-27.487-61.26-61.265-61.26zm0 119.715c-32.23 0-58.453-26.223-58.453-58.455 0-32.23 26.222-58.451 58.453-58.451 32.229 0 58.45 26.221 58.45 58.451 0 32.232-26.221 58.455-58.45 58.455z"></path></g></svg>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/icons/Wordpress.astro", void 0);

const $$Astro$3 = createAstro();
const $$Javascript = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Javascript;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 1052 1052"><path fill="#f0db4f" d="M0 0h1052v1052H0z"></path><path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330"></path></svg>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/icons/Javascript.astro", void 0);

const $$Astro$2 = createAstro();
const $$Express = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Express;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64" stroke="currentColor" fill="currentColor"><path d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z"></path></svg>`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/icons/Express.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const TAGS = {
    Javascript: {
      name: "JavaScript",
      class: "bg-black text-white",
      icon: $$Javascript
    },
    Wordpress: {
      name: "Wordpress",
      class: "bg-[#003159] text-white",
      icon: $$Wordpress
    },
    Express: {
      name: "Express",
      class: "bg-black text-white",
      icon: $$Express
    }
  };
  const projects = [
    {
      img: "./mapa-calor.png",
      title: "Mapa de Calor",
      technologies: [TAGS.Javascript, TAGS.Express],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      img: "./informatica.png",
      title: "Sitio Web Escuela de Inform\xE1tica UACh",
      technologies: [TAGS.Wordpress],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      href: "http://informatica.uach.cl"
    },
    {
      img: "./mapa-calor.png",
      title: "Mapa de Calor",
      technologies: [TAGS.Javascript, TAGS.Express],
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "title": "Algunos proyectos realizados" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col lg:flex-row justify-between gap-3 py-3"> ${projects.map((p) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "className": "" }, { "default": ($$result3) => renderTemplate` <img${addAttribute(p.img, "src")} class="rounded-lg hover:scale-105 transition-all"> <div class="px-3 mt-2 py-3"> <h3 class="text-lg font-semibold mb-2 "> ${p.title}</h3> <ul class="flex flex-row mb-2 gap-x-2"> ${p.technologies.map((tag) => renderTemplate`<li> <span${addAttribute(`flex gap-x-2 rounded-full text-xs ${tag.class} py-1 px-2 `, "class")}> ${renderComponent($$result3, "tag.icon", tag.icon, { "class": "size-4" })} ${tag.name} </span> </li>`)} </ul> <p class="my-3 text-sm font-light text-pretty px-2"> ${p.description} </p> ${p.href && renderTemplate`${renderComponent($$result3, "LinkButton", $$LinkButton, { "href": p.href }, { "default": ($$result4) => renderTemplate` ${renderComponent($$result4, "Fragment", Fragment, {}, { "default": ($$result5) => renderTemplate` <p class="text-sm">Más detalles</p> ${renderComponent($$result5, "Link", $$Link, {})} ` })} ` })}`} </div> ` })}`)} </main> ` })}`;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/components/sections/Projects.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Jorge Ulloa Castillo | Ingeniero Civil en Inform\xE1tica" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="fixed left-0 top-0 -z-10 h-full w-full"> <div class="relative h-full w-full bg-slate-800"> <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div> </div> </div> <main class="mt-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Section", $$Section, { "className": "flex flex-col lg:flex-row justify-between gap-8 mb-8" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Experience", $$Experience, {})} ${renderComponent($$result3, "Education", $$Education, {})} ` })} ${renderComponent($$result2, "Projects", $$Projects, {})} </main> ` })} `;
}, "/Users/ulloacastillo/Desktop/dev/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/ulloacastillo/Desktop/dev/portfolio/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
