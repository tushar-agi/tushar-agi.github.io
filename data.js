/* =====================================================================
   EDIT THIS FILE ONLY.  You never need to touch index.html.

   - To add a publication:  copy one { ... } block in `publications`
                            and paste it at the TOP of the list.
   - To add a profile link: add one line to `links`.
   - To update your bio:    edit `profile.bioHtml`.
   ===================================================================== */

const profile = {
  firstName: "Tushar",
  lastName:  "Prakash",
  photo:     "assets/img/profile.jpg",

  researchInterestsHtml: "My research spans the following directions. (1) I work on <b>generative foundation models</b> that can both understand and generate across modalities — much of this has been on <b>multimodal representation learning</b> and generative modeling with <b>diffusion</b> and <b>flow matching</b>, and more recently on aligning large generative models to user preferences through <b>reinforcement learning</b> and <b>reward modeling</b>. (2) A major focus is <b>personalization and recommendation at scale</b>, where I build generative recommenders that model user preferences directly in the model's space to improve engagement for tens of millions of users. (3) I also work on <b>discrete representation learning</b> and <b>semantic tokenization</b> to build foundation models for new domains with their own vocabularies. (4) Throughout, I care about making these models robust and trustworthy, through <b>adversarial robustness</b>, <b>machine unlearning</b>, and <b>efficient training at scale</b>.",


  // Your intro. You can use normal HTML (links, <b>, etc.) inside the backticks.
  bioHtml: `
    I am a Machine Learning researcher at Sony Research India, working on Recommendation Systems and Generative Models. Previously, I worked on domain adaptation with the
    <a href="https://team.inria.fr/stars/en/team/" target="_blank">STARS Research Team</a>
    at <a href="https://www.inria.fr/en/inria-centre-universite-cote-azur" target="_blank">Inria Centre at Universit&eacute; C&ocirc;te d&rsquo;Azur</a>.
    I also interned at the
    <a href="https://www.ualberta.ca/en/engineering/electrical-computer-engineering/index.html" target="_blank">University of Alberta</a>,
    where I worked on adversarial robustness. I have spent a "bit" of my time at
    Microsoft as SDE intern, developing testbeds for 5G infrastructure. As an
    undergraduate student, I studied Electronics and Communication Engineering at the
    <a href="https://dtu.ac.in/" target="_blank">Delhi Technological University (India)</a>.`,

  contactNote: "For any inquiries, feel free to reach out to me via mail!",

  awardsHtml: `
    &ldquo;In 2018, I graduated at the top of my class from high school. I completed my
    undergraduate studies in 2023, graduating with First Division with Distinction. In
    2022, I was selected for the
    <a href="https://www.mitacs.ca/our-programs/globalink-research-internship-students/" target="_blank">Mitacs Global Research Internship (GRI)</a>
    at the University of Alberta. In 2023, I was honored with the Best Paper Award for
    <a href="https://thetushar.tech/assets/pdf/Paper2_RecSys_Prakash.pdf" target="_blank">CR-SoRec</a>
    at Sony&rsquo;s annual conference for my contributions to research.&rdquo;`,
};

/* Profile links. `icon` uses Font Awesome class names.
   Add/remove/reorder freely — they render in this order. */
const links = [
  { label: "CV",       url: "https://tushar-agi.github.io/assets/pdf/CV_Tushar_Prakash_updated.pdf",                          icon: "fa fa-address-card" },
  { label: "Mail",     url: "mailto:tushar121prakash@gmail.com",                        icon: "far fa-envelope-open" },
  { label: "Twitter",  url: "https://twitter.com/",                                     icon: "fab fa-twitter" },
  { label: "Scholar",  url: "https://scholar.google.com/citations?user=Czcxx-oAAAAJ&hl=en", icon: "fa-solid fa-book" },
  { label: "Github",   url: "https://github.com/tushar-agi",                         icon: "fab fa-github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/tushar-dot-prakash/",          icon: "fab fa-linkedin" },
];

/* Publications. Newest first.
   Fields:
     title     – paper title (string)
     image     – thumbnail path
     authors   – array; set { me: true } on yourself to bold it.
                 add a url to make a name clickable.
     venue     – where it appeared
     year      – number
     paper     – link to the PDF
     project   – (optional) project page link; omit to hide the link
     isNew     – (optional) true shows a blinking NEW badge
     badge     – (optional) e.g. "Best Paper" shows a small label
     bibtex    – the BibTeX entry (keep the backticks)
*/
const publications = [
{
  title: "Obliviate: Efficient Unlearning in Recommender Systems",
  image: "assets/img/publications/icml_2026_obliviate.png",
  authors: [
    { name: "Tushar Prakash", me: true },
    { name: "Brijraj Singh", url: "https://sites.google.com/site/brijraj08" },
    { name: "Niranjan Pedanekar", url: "https://scholar.google.com/citations?user=UksQ7SEAAAAJ&hl=en" },
    { name: "N. Chaturvedi" },
  ],
  venue: "In Proceedings of the International Conference on Machine Learning (<strong>ICML</strong>)",
  year: 2026,
  project: "",
  paper: "https://drive.google.com/file/d/1sPP7UyiUuBFPu2gS8ttOmWIg4SSOMStX/view",
  bibtex: `@InProceedings{prakash2026icml,
  author    = {Tushar Prakash and B. Singh and Niranjan Pedanekar and N. Chaturvedi},
  title     = {Obliviate: Efficient Unlearning in Recommender Systems},
  booktitle = {Proceedings of the International Conference on Machine Learning (ICML)},
  year      = {2026},
}`,
},

{
  title: "Best of Both Worlds: Multimodal Reasoning and Generation via Unified Discrete Flow Matching",
  image: "assets/img/publications/icml_2026_bow.png",
  authors: [
    { name: "Onkar Susladkar", url: "https://scholar.google.com/citations?user=pxBOqNkAAAAJ&hl=en"  },
    { name: "Tushar Prakash", me: true },
    { name: "Inderjit S. Dhillon", url: "https://oden.utexas.edu/people/directory/Inderjit-Dhillon/" },
    { name: "Ismini Lourentzou", url: "https://isminoula.github.io/" },
    { name: "et al." },
  ],
  venue: "In Proceedings of the International Conference on Machine Learning (<strong>ICML</strong>)",
  year: 2026,
  project: "https://plan-lab.github.io/projects/unidflow/",
  paper: "https://arxiv.org/pdf/2602.12221",
  bibtex: `@InProceedings{susladkar2026icml,
  author    = {Onkar Susladkar and Tushar Prakash and Ismini Lourentzou and others},
  title     = {Best of Both Worlds: Multimodal Reasoning and Generation via Unified Discrete Flow Matching},
  booktitle = {Proceedings of the International Conference on Machine Learning (ICML)},
  year      = {2026},
}`,
},
{
  title: "PyraTok: Language-Aligned Pyramidal Tokenizer for Video Understanding and Generation",
  image: "assets/img/publications/cvpr_2026_pyratok.png",
  authors: [
    { name: "Onkar Susladkar", url: "https://scholar.google.com/citations?user=pxBOqNkAAAAJ&hl=en"  },
    { name: "Tushar Prakash", me: true },
    { name: "Inderjit S. Dhillon", url: "https://oden.utexas.edu/people/directory/Inderjit-Dhillon/" },
    { name: "Ismini Lourentzou", url: "https://isminoula.github.io/" },
    { name: "et al." },
  ],
  venue: "In Proceedings of the IEEE Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
  year: 2026,
  project: "https://plan-lab.github.io/projects/pyratok/",
  paper: "https://arxiv.org/abs/2601.16210",
  bibtex: `@InProceedings{susladkar2026pyratok,
  author    = {Onkar Susladkar and Tushar Prakash and Ismini Lourentzou and others},
  title     = {PyraTok: Language-Aligned Pyramidal Tokenizer for Video Understanding and Generation},
  booktitle = {Proceedings of the IEEE Computer Vision and Pattern Recognition (CVPR)},
  year      = {2026},
}`,
},
{
  title: "Pyramidal Spectrum: Frequency-based Hierarchically Vector Quantized VAE for Videos",
  image: "assets/img/publications/wacv_2026.png",
  authors: [
    { name: "Tushar Prakash", me: true },
    { name: "Onkar Susladkar",  url: "https://scholar.google.com/citations?user=pxBOqNkAAAAJ&hl=en"},
    { name: "Inderjit S. Dhillon", url: "https://oden.utexas.edu/people/directory/Inderjit-Dhillon/" },
    { name: "Sparsh Mittal", url: "https://faculty.iitr.ac.in/~sparshfec/" },
  ],
  venue: "In Proceedings of the Winter Conference on Applications of Computer Vision (<strong>WACV</strong>)",
  year: 2026,
  project: "https://candlelabai.github.io/WACV-2026-VectorVAE-Webpage/",
  paper: "https://openaccess.thecvf.com/content/WACV2026/html/Prakash_Pyramidal_Spectrum_Frequency-based_Hierarchically_Vector_Quantized_VAE_for_Videos_WACV_2026_paper.html",
  bibtex: `@InProceedings{prakash2026wacv,
  author    = {Tushar Prakash and Onkar Susladkar and Inderjit S. Dhillon and Sparsh Mittal},
  title     = {Pyramidal Spectrum: Frequency-based Hierarchically Vector Quantized VAE for Videos},
  booktitle = {Proceedings of the Winter Conference on Applications of Computer Vision (WACV)},
  year      = {2026},
}`,
},
{
  title: "RewardFlow: Generate Images by Optimizing What You Reward",
  image: "assets/img/publications/cvpr_2026_rewardflow.png",
  authors: [
    { name: "Onkar Susladkar", url: "https://scholar.google.com/citations?user=pxBOqNkAAAAJ&hl=en" },
    { name: "Dong-Hwan Jang", url: "https://donghwanjang.github.io/" },
    { name: "Tushar Prakash", me: true },
    { name: "Ismini Lourentzou", url: "https://isminoula.github.io/"},
    { name: "et al." },
  ],
  venue: "In Proceedings of the IEEE Computer Vision and Pattern Recognition (<strong>CVPR</strong>)",
  year: 2026,
  project: "https://plan-lab.github.io/projects/rewardflow/",
  paper: "https://arxiv.org/pdf/2604.08536",
  bibtex: `@InProceedings{susladkar2026cvpr,
  author    = {Onkar Kishor Susladkar and Dong-Hwan Jang and Tushar Prakash and Adheesh Sunil Juvekar and Vedant Shah and Ayush Barik and Nabeel Bashir and Muntasir Wahed and Ritish Shrirao and Ismini Lourentzou},
  title     = {RewardFlow: Generate Images by Optimizing What You Reward},
  booktitle = {Proceedings of the IEEE Computer Vision and Pattern Recognition (CVPR)},
  year      = {2026},
}`,
},    


    {
  title: "Dynamic Task-adaptive Meta Optimization for User Cold-Start Recommendation",
  image: "assets/img/publications/ecai_2025.png",
  authors: [
    { name: "Tushar Prakash", me: true },
    { name: "Raksha Jalan", url: "https://openreview.net/profile?id=~Raksha_Sanjay_Jalan1" },
    { name: "Brijraj Singh", url: "https://sites.google.com/site/brijraj08" },
    { name: "Niranjan Pedanekar", url: "https://scholar.google.com/citations?user=UksQ7SEAAAAJ&hl=en" },
  ],
  venue: "In Proceedings of the 28th European Conference on Artificial Intelligence (<strong>ECAI</strong>)",
  year: 2025,
  project: "",
  paper: "https://ebooks.iospress.nl/doi/10.3233/FAIA250924",
  bibtex: `@InProceedings{prakash2025ecai,
  author    = {Tushar Prakash and R. Jalan and B. Singh and Niranjan Pedanekar},
  title     = {Dynamic Task-adaptive Meta Optimization for User Cold-Start Recommendation},
  booktitle = {Proceedings of the 28th European Conference on Artificial Intelligence (ECAI)},
  year      = {2025},
}`,
},

  {
    title: "LLM-BRec: Personalizing Session-based Social Recommendation with LLM-BERT Fusion Framework",
    image: "assets/img/publications/llm_paper.png",
    authors: [
      { name: "Raksha Jalan", url: "https://openreview.net/profile?id=~Raksha_Sanjay_Jalan1" },
      { name: "Tushar Prakash", me: true },
      { name: "Niranjan Pedanekar", url: "https://scholar.google.com/citations?user=UksQ7SEAAAAJ&hl=en" },
    ],
    venue: "In Proceedings of Gen-IR Workshop, 47th ACM SIGIR Conference on Research and Development in Information Retrieval",
    year: 2024,
    project: "https://www.sonyresearchindia.com/summarizing-llm-brec-personalizing-session-based-social-recommendation-with-llm-bert-fusion-framework/",
    paper: "https://openreview.net/pdf?id=gwHVlTNKsG",
    bibtex: `@InProceedings{jalan2024sigir,
  author    = {Raksha Jalan and Tushar Prakash and Niranjan Pedanekar},
  title     = {LLM-BRec: Personalizing Session-based Social Recommendation with LLM-BERT Fusion Framework},
  booktitle = {In Proceedings of Gen-IR Workshop, 47th ACM SIGIR Conference on Research and Development in Information Retrieval},
  year      = {2024},
}`,
  },
  {
    title: "CR-SoRec: BERT driven Consistency Regularization for Social Recommendation",
    image: "assets/img/publications/CR-SoRec.png",
    authors: [
      { name: "Tushar Prakash", me: true },
      { name: "Raksha Jalan", url: "https://openreview.net/profile?id=~Raksha_Sanjay_Jalan1" },
      { name: "Brijraj Singh", url: "https://sites.google.com/site/brijraj08" },
      { name: "Naoyuki Onoe", url: "https://openreview.net/profile?id=~Naoyuki_Onoe1" },
    ],
    venue: "In Proceedings of the 17th ACM Conference on Recommender Systems (<strong>RecSys</strong>)",
    year: 2023,
    badge: "Best Paper",
    project: "https://www.sonyresearchindia.com/decoding-cr-sorec-bert-driven-consistency-regularization-for-social-recommendation/",
    paper: "assets/pdf/Paper2_RecSys_Prakash.pdf",
    bibtex: `@InProceedings{tushar2023recsys,
  author    = {Tushar Prakash and Raksha Jalan and Brijraj Singh and Naoyuki Onoe},
  title     = {CR-SoRec: BERT driven Consistency Regularization for Social Recommendation},
  booktitle = {In Proceedings of the 17th ACM Conference on Recommender Systems (RecSys)},
  year      = {2023},
}`,
  },
  {
    title: "MVBN: Enhancing Social Recommendation with Multi-View BERT Network",
    image: "assets/img/publications/MVBN.png",
    authors: [
      { name: "Tushar Prakash", me: true },
      { name: "Raksha Jalan", url: "https://openreview.net/profile?id=~Raksha_Sanjay_Jalan1" },
      { name: "Naoyuki Onoe", url: "https://openreview.net/profile?id=~Naoyuki_Onoe1" },
    ],
    venue: "In Proceedings of the 23th IEEE International Conference on Data Mining (<strong>ICDM</strong>)",
    year: 2023,
    project: "https://www.sonyresearchindia.com/summarizing-enhancing-social-recommendation-with-multi-view-bert-network-mvbn/",
    paper: "assets/pdf/Paper1_ICDM_Prakash.pdf",
    bibtex: `@InProceedings{tushar2023icdm,
  author    = {Tushar Prakash and Raksha Jalan and Naoyuki Onoe},
  title     = {MVBN: Enhancing Social Recommendation with Multi-View BERT Network},
  booktitle = {In Proceedings of the 23th IEEE International Conference on Data Mining (ICDM)},
  year      = {2023},
}`,
  },
  {
    title: "Unsupervised domain alignment of fingerprint denoising models using pseudo annotations",
    image: "assets/img/publications/mta.png",
    authors: [
      { name: "Indu Joshi", url: "https://www.indujoshi.in/" },
      { name: "Tushar Prakash", me: true },
      { name: "Rohit Kumar", url: "https://sites.google.com/view/rohitkumar-dtu" },
      { name: "Antitza Dantcheva", url: "https://www-sop.inria.fr/members/Antitza.Dantcheva/" },
      { name: "Sumantra Roy", url: "https://www.cse.iitd.ac.in/~sumantra/" },
      { name: "Prem Kalra", url: "https://www.cse.iitd.ac.in/~pkalra/" },
    ],
    venue: "In Springer's Multimedia Tools and Applications, vol. 83, pp. 38&nbsp;167&ndash;38&nbsp;192",
    year: 2023,
    paper: "assets/pdf/Paper3_MTA_Prakash.pdf",
    bibtex: `@Article{Joshi2024mta,
  author  = {Indu Joshi and Tushar Prakash and Rohit Kumar and Antitza Dantcheva and Sumantra Roy and Prem Kalra},
  title   = {Unsupervised domain alignment of fingerprint denoising models using pseudo annotations},
  journal = {Multimedia Tools and Applications},
  volume  = {83}, pages = {38167--38192}, year = {2023},
}`,
  },
  {
    title: "Context-Aware Restoration of Noisy Fingerprints",
    image: "assets/img/publications/ieee_letters.png",
    authors: [
      { name: "Indu Joshi", url: "https://www.indujoshi.in/" },
      { name: "Tushar Prakash", me: true },
      { name: "Rohit Kumar", url: "https://sites.google.com/view/rohitkumar-dtu" },
      { name: "B. Jaiswal" },
      { name: "Antitza Dantcheva", url: "https://www-sop.inria.fr/members/Antitza.Dantcheva/" },
      { name: "Sumantra Roy", url: "https://www.cse.iitd.ac.in/~sumantra/" },
      { name: "Prem Kalra", url: "https://www.cse.iitd.ac.in/~pkalra/" },
    ],
    venue: "In IEEE Sensors Letters, vol. 6, pp. 101&ndash;104",
    year: 2022,
    paper: "assets/pdf/Paper4_IEEE_Prakash.pdf",
    bibtex: `@Article{Joshi2024ieee,
  author  = {Indu Joshi and Tushar Prakash and Rohit Kumar and B. Jaiswal and Antitza Dantcheva and Sumantra Roy and Prem Kalra},
  title   = {Context-Aware Restoration of Noisy Fingerprints},
  journal = {IEEE Sensors Letters},
  volume  = {6}, pages = {101--104}, year = {2022},
}`,
  },
  {
    title: "Leveraging Explainable Artificial Intelligence for Understanding the Effect of Model Capacity on Training Dataset Size",
    image: "assets/img/publications/soli.png",
    authors: [
      { name: "Tushar Prakash", me: true },
      { name: "Tashvik Dhamija", url: "https://scholar.google.com/citations?user=LXSpE74AAAAJ&hl=en" },
      { name: "Rohit Kumar", url: "https://sites.google.com/view/rohitkumar-dtu" },
      { name: "Jeebananda Panda", url: "https://www.dtu.ac.in/Web/Departments/Electronics/faculty/jpanda.php" },
    ],
    venue: "In Proceedings of the 17th IEEE International Conference on Service Operations and Logistics, and Informatics (SOLI)",
    year: 2022,
    paper: "assets/pdf/Engineering_major_project_paper.pdf",
    bibtex: `@InProceedings{tushar2024soli,
  author    = {Tushar Prakash and Tashvik Dhamija and Rohit Kumar and Jeebananda Panda},
  title     = {Leveraging Explainable Artificial Intelligence for Understanding the Effect of Model Capacity on Training Dataset Size},
  booktitle = {In Proceedings of the 17th IEEE International Conference on Service Operations and Logistics, and Informatics (SOLI)},
  year      = {2022},
}`,
  },
];

/* Friends / web-ring links (the little atoms at the bottom). */
const webring = [
  "https://kashyap7x.github.io/",
  "https://kait0.github.io/",
  "https://m-niemeyer.github.io/",
];

/* Visitor map widget (set to null to hide it). */
const visitorMap = {
  href: "https://mapmyvisitors.com/web/1bx2s",
  img:  "https://mapmyvisitors.com/map.png?d=NK3zpad2ZF7RCQSI5F8vntYXfiLY9OanpFun4yWULZ0&cl=ffffff",
};