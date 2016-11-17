// GET /quizes/question
exports.question = function (req, res) {
    res.render('quizes/answer', {pregunta: 'Capital de Italia'});
}

/* Get home page. */
exports.answer = function (req, res) {
    if (req.query.respuesta === 'Roma') {
        res.render('quizes/answer',  {respuesta: 'Correcto'});
    } else {
        res.render('quizes/answer',  {respuesta: 'Incorrecto'});
    }
};

/* End of file quiz_controller.js */
/* Location: ./controllers/quiz_controller.js */
