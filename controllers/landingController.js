const getLandingData = (req, res) => {
    res.status(200).json({
      message: 'Welcome to my portfolio!',
      tagline: 'Building the future, one line of code at a time.',
    });
};
  
module.exports = { getLandingData };
  