//parallax effect video

let video = document.querySelector('video');
  window.addEventListener('scroll', function(){
    let value = 1 + window.scrollY/-600;
      video.style.opacity = value;
  });


const reviews = [
    {
      id: 1,
      name: "BOOLZAP",
      img: './img/boolzap.png',
      text:
        "Replica di una chat simile a quella di Whatsapp (HTML, CSS, Vuejs)",
     link: 'https://github.com/Giuliaguerrazzi/js-html-css-boolzap', 
    },
    {
      id: 2,
      name: "Fable",
      img: './img/fable.png',
      text:
        "Creazione di un sito per una scuola materna (HTML, CSS,Sass, Vuejs)",
    },
    {
      id: 3,
      name: "Library e-commerce",
      img: './img/library.png',
      text:
        "Creazione di e-commerce per una libreria (HTML, CSS, Javascript)",
    },
    {
      id: 4,
      name: "Flush",
      img: './img/cover4.jpg',
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
    },
    {
      id: 5,
      name: "Le assaggiatrici",
      img: './img/cover5.jpg',
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
    },
    {
      id: 6,
      name: "Lungo petalo di mare",
      img: './img/cover6.jpg',
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
    },
    {
      id: 7,
      name: "L'isola dell'abbandono",
      img: './img/cover7.jpg',
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
    },
    {
      id: 8,
      name: "Venezia è un pesce",
      img: './img/cover8.jpg',
      text:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Iust asperiores debitis incidunt, eius earum ipsam cupiditate libero Iste, doloremque nihil?",
    },
    
  ];
  
  
  
