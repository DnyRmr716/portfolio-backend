const getProjectsData = (req, res) => {
    res.status(200).json({
      projects: [
        {
          title: 'My Portfolio Website.',
          description: [
            "This portfolio site displays my development projects and skills, featuring an interactive UI built with React.",
            "The backend uses Node.js and Express to serve dynamic content, showcasing scalable and maintainable full-stack capabilities.",
            "Features include SendGrid integration for direct communication via the contact form, demonstrating practical API usage and asynchronous JavaScript.",
            "Development challenges like optimizing load times, implementing responsive design, and ensuring data security were key focuses.",
            "Overall, the site evidences my ability to deliver complete full-stack solutions from concept to deployment."
          ],       
          technologies: ['React', 'Node.js', 'Express', 'NodeMailer, SendGrid'],
          repoLink: 'https://github.com/yourusername/portfolio',
          liveDemo: 'https://yourportfolio.com',
        },
      ],
    });
  };
  
  module.exports = { getProjectsData };
  