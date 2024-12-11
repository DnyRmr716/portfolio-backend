const getProjectsData = (req, res) => {
    res.status(200).json({
      projects: [
        {
          title: 'Portfolio Website',
          description: 'A sleek and modern portfolio website built with React and Node.js.',
          technologies: ['React', 'Node.js', 'Express'],
          repoLink: 'https://github.com/yourusername/portfolio',
          liveDemo: 'https://yourportfolio.com',
        },
      ],
    });
  };
  
  module.exports = { getProjectsData };
  