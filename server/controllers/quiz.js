const Quiz = require("../models/quiz");


exports.addNewquestion = async (req, res) => {
    console.log(req.body);

    try {
      const newTest = await new Quiz({
        question: req.body.question,
        questionType: req.body.testType,
        yesOrnoType: req.body.yesOrnoresptype,
      }).save();
      res.json(newTest);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ error });
    }
  };
  