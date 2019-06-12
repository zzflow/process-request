//Capture string (Bonus)
exports.capture = function(text, text_start, text_end){
    const prepare = text.split(text_start);
    const text_return = prepare[1].split(text_end);
    return text_return[0];
}