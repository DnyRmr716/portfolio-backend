const getAboutData = (req, res) => {
    res.status(200).json({
        name: 'Danny Manuel Romero',
        role: 'Junior Web Developer',
        description: "I am a passionate Junior Web Developer with a focus on building responsive and dynamic web applications. With a strong foundation in JavaScript, React, and Node.js, I enjoy solving challenging problems and creating software that makes a difference. Whether it's collaborating with a team or tackling solo projects, I bring dedication, creativity, and attention to detail to every line of code. Let's connect to build something amazing!",
        skills: ['JavaScript', 'React', 'Node.js', 'Express', 'HTML', 'CSS', 'MongoDB'],
        highlights: [
            "Completed a responsive portfolio website showcasing dynamic projects.",
            "Collaborated with teams to develop web applications for real-world use cases.",
            "Earned certifications in Full-Stack Web Development and JavaScript."
        ],
        socialLinks: {
            github: 'https://github.com/DnyRmr716',
            linkedin: 'https://www.linkedin.com/in/danny-romero-409b30224/',
        },
    });
};

module.exports = { getAboutData };
