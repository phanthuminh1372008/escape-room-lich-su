let score = 0;
let solved = {1: false, 2: false};

function checkAnswer(puzzleNumber, answer) {
    let correctAnswer = false;

    if(puzzleNumber === 1) correctAnswer = false; // video sai → chọn Sai
    if(puzzleNumber === 2) correctAnswer = false; // poster sai → chọn Sai

    const feedback = document.getElementById("feedback" + puzzleNumber);

    if(answer === correctAnswer) {
        feedback.textContent = "Đúng! Thông tin này đã được kiểm chứng.";
        if(!solved[puzzleNumber]) {
            score += 10;
            solved[puzzleNumber] = true;
        }
    } else {
        feedback.textContent = "Sai! Hãy kiểm chứng thông tin trước khi chọn.";
    }

    document.getElementById("scoreDisplay").textContent = "Điểm: " + score;
}

function tryDoor() {
    const doorFeedback = document.getElementById("doorFeedback");
    if(solved[1] && solved[2]) {
        doorFeedback.textContent = "Chúc mừng! Bạn đã mở cửa và thoát khỏi mật thất thành công!";
    } else {
        doorFeedback.textContent = "Chưa đủ kiến thức để mở cửa. Hãy kiểm chứng tất cả câu đố trước.";
    }
}
