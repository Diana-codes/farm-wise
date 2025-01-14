// assets
const techBootstrap = '/assets/images/landing/tech-bootstrap.svg';
const techReact = '/assets/images/landing/tech-react.svg';
const techCodeigniter = '/assets/images/landing/tech-codeigniter.svg';
const techNet = '/assets/images/landing/tech-net.svg';
// const techFigma = '/assets/images/landing/tech-figma.svg';
const techVue = 'assets/images/landing/tech-vuetify.svg';
const techAngular = 'assets/images/landing/tech-angular.svg';
const techVuelaravel = 'assets/images/landing/tech-l+v.svg';
const techNextJS = 'assets/images/landing/tech-nextjs.svg';
const techLaravelBootstrap = 'assets/images/landing/tech-Laravel+Bootstrap.svg';
const techDjango = 'assets/images/landing/tech-Django.svg';
const techFlask = 'assets/images/landing/tech-Flask.svg';
const techNodeJs = 'assets/images/landing/tech-Node-js.svg';
const techSvelteKit = 'assets/images/landing/tech-SvelteKit.svg';
const techTailwind = 'assets/images/landing/tech-tailwind.svg';
const weatherImage = 'assets/images/what-is-weather-model-discussion-how-to-use-surface-dew-points-for-weather-forecasting-purposes.jpg';
const cropImage = 'assets/images/ceus-600.jpg';
const marketImage = 'assets/images/market-access-slide1.jpg';



export const techData = [
  {
    label: 'Weather Forecasting',
    image: weatherImage,
    icon: 'https://cdn-icons-png.flaticon.com/512/2917/2917242.png',
    url: 'https://ableproadmin.com/tailwind/dashboard/index.html',
    target: '_blank',
    tooltipTitle: 'Weather Updates',
    description:
      'FarmWise provides localized, real-time weather forecasts to help farmers make informed decisions and adapt to climate variability.',
    free: null
    },
  {
    label: 'Crop Advisory',
    image: cropImage,
    icon: 'https://cdn-icons-png.flaticon.com/512/5356/5356841.png',
    url: 'https://ableproadmin.com/dashboard/index.html',
    target: '_blank',
    tooltipTitle: 'Crop Advice',
    description:
      'Get crop-specific planting and disease management guidance, based on the latest agricultural research, to ensure higher yields.',
    free: null,
    style: { width: '20px', height: '20px', objectFit: 'contain' }
  },
  {
    label: 'Market Access',
    image: marketImage,
    url: 'https://ableproadmin.com/react/dashboard/default',
    icon: 'https://cdn-icons-png.flaticon.com/512/3081/3081855.png',
    target: '_blank',
    tooltipTitle: 'Market Information',
    description:
      'FarmWise connects farmers with local markets and cooperatives, enabling them to sell their produce at competitive prices.',
    free: null,
    style: { width: '20px', height: '20px', objectFit: 'contain' }
  },
  {
    label: 'Farm Data Management',
    image: techAngular,
    url: 'https://ableproadmin.com/angular/default/dashboard/default',
    icon: 'https://cdn-icons-png.flaticon.com/512/3176/3176361.png', 
    target: '_blank',
    tooltipTitle: 'Farm Management',
    description:
      'Track your farming activities, analyze data, and optimize resources to maximize productivity and efficiency.',
    free: null
  },
  // {
  //   label: 'CodeIgniter',
  //   image: techCodeigniter,
  //   url: 'https://ableproadmin.com/codeigniter/default/public/dashboard-default',
  //   target: '_blank',
  //   tooltipTitle: 'CodeIgniter',
  //   description:
  //     'Able Pro CodeIgniter version is a powerful dashboard template built specifically for developers who use the CodeIgniter PHP framework with Bootstrap.',
  //   free: null
  // },
  // {
  //   label: 'ASP.net',
  //   image: techNet,
  //   url: 'https://able-pro.azurewebsites.net/Dashboard/Index',
  //   target: '_blank',
  //   tooltipTitle: 'ASP.net',
  //   description:
  //     'Able Pro .NET version is a robust dashboard template designed specifically for .NET developers. Its comes with a wide range of pre-built components.',
  //   free: null
  // },
  // {
  //   label: 'Next js',
  //   image: techNextJS,
  //   url: '/login',
  //   target: '_blank',
  //   tooltipTitle: 'Next js',
  //   description:
  //     'Able Pro Next Js dashboard template is a powerful tool that utilizes the Material-UI component library to create stunning and intuitive user interfaces.',
  //   free: null
  // },
  // {
  //   label: 'Vue',
  //   image: techVue,
  //   url: 'https://ableproadmin.com/vue/dashboard/default',
  //   target: '_blank',
  //   tooltipTitle: 'Vue',
  //   description:
  //     'Able Pro Vue stands out as a versatile and powerful - Vue with Vuetify dashboard combines modern design principles with robust functionality.',
  //   free: 'https://github.com/phoenixcoded/able-pro-free-admin-dashboard-template'
  // },
  // {
  //   label: 'Vuetify Laravel',
  //   image: techVuelaravel,
  //   url: 'https://phplaravel-207002-4524103.cloudwaysapps.com/build/dashboards/default',
  //   target: '_blank',
  //   tooltipTitle: 'Vuetify Laravel',
  //   description:
  //     'Able Pro Vue stands out as a versatile and powerful - Vue with Vuetify dashboard combines modern design principles with robust functionality.',
  //   free: null
  // },
  // {
  //   label: 'Laravel Bootstrap',
  //   image: techLaravelBootstrap,
  //   url: '#!',
  //   target: '_self',
  //   tooltipTitle: 'Live Preview Not Available',
  //   description:
  //     'Able Pro Laravel with Bootstrap provides a powerful set of tools and components, crafted specifically for Laravel, to simplify and accelerate your development process.',
  //   free: null
  // },
  // {
  //   label: 'Django',
  //   image: techDjango,
  //   url: '#!',
  //   target: '_self',
  //   tooltipTitle: 'Live Preview Not Available',
  //   description:
  //     'Able Pro Django is a powerful dashboard template designed for developers. it offers an extensive collection of pre-built components for seamless web development.',
  //   free: null
  // },
  // {
  //   label: 'Node JS',
  //   image: techNodeJs,
  //   url: '#!',
  //   target: '_self',
  //   tooltipTitle: 'Live Preview Not Available',
  //   description:
  //     'Able Pro Node.js combines flexibility and functionality with a variety of pre-built components tailored for Node.js, which make it easier to develop.',
  //   free: null
  // },
  // {
  //   label: 'Flask',
  //   image: techFlask,
  //   url: '#!',
  //   target: '_self',
  //   tooltipTitle: 'Live Preview Not Available',
  //   description:
  //     'Able Pro Flask is a versatile dashboard solution that offers a rich set of pre-built components to simplify web development.',
  //   free: null
  // },
  // {
  //   label: 'SvelteKit',
  //   image: techSvelteKit,
  //   url: '#!',
  //   target: '_self',
  //   tooltipTitle: 'Live Preview Not Available',
  //   description:
  //     'Able Pro Svelte provides an extensive toolkit and components, allowing you to build dynamic and responsive interfaces with ease and efficiency.',
  //   free: null
  // }
  // {
  //   label: 'Figma',
  //   image: techFigma,
  //   url: 'https://www.figma.com/file/6XqmRhRmkr33w0EFD49acY/Able-Pro--v9.0-Figma-Preview?type=design&mode=design&t=4FS2Lw6WxsmJ3RLm-0',
  //   target: '_blank',
  //   tooltipTitle: 'Figma',
  //   description:
  //     'Able Pro comes with a Figma design file that allows you to customize and fine-tune your dashboard to meet your specific needs.',
  //   free: null
  // }
];
