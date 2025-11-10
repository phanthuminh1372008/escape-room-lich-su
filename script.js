// script quản lý logic Escape Room (2 câu đố)
let score = 0;
let solved = {1: false, 2: false};
const totalPuzzles = 2;

function updateStatus(){
  document.getElementById("scoreDisplay").textContent = "Điểm: " + score;
  const done = Object.values(solved).filter(x=>x).length;
  document.getElementById("progressDisplay").textContent = "Tiến độ: " + done + " / " + totalPuzzles;
}

// checkAnswer(puzzleNumber, answer)
// answer: true = chọn 'Đúng', false = chọn 'Sai'
function checkAnswer(puzzleNumber, answer){
  // Định nghĩa đáp án đúng cho mỗi puzzle
  // Puzzle 1 (video): video nói (sai) "Nguyễn Huệ và Quang Trung là hai người khác nhau."
  // => đáp án đúng: Sai (false)
  // Puzzle 2 (poster): poster nói "Nguyễn Huệ và Quang Trung là một người." => đáp án đúng: Đúng (true)
  const answers = {1: false, 2: true};
  const correct = answers[puzzleNumber];
  const fbEl = document.getElementById("feedback" + puzzleNumber);

  if(answer === correct){
    fbEl.style.color = "#0b6b3a";
    fbEl.textContent = "Chính xác! Hãy xem giải thích bên dưới.";
    // tăng điểm nếu lần đầu giải đúng
    if(!solved[puzzleNumber]){
      score += 10;
      solved[puzzleNumber] = true;
    }
    // hiển thị giải thích ngắn (mô phỏng kiểm chứng)
    setTimeout(()=> showExplanation(puzzleNumber), 500);
  } else {
    fbEl.style.color = "#cc2b2b";
    fbEl.textContent = "Chưa đúng. Hãy kiểm chứng thông tin và thử lại.";
  }
  updateStatus();
}

function showExplanation(puzzleNumber){
  const fbEl = document.getElementById("feedback" + puzzleNumber);
  if(puzzleNumber === 1){
    fbEl.innerHTML = "Giải thích: Nguyễn Huệ chính là Quang Trung — người lãnh đạo quân Tây Sơn chiến thắng quân Thanh (1789). (Nguồn: SGK Lịch sử).";
  } else if(puzzleNumber === 2){
    fbEl.innerHTML = "Giải thích: Poster này mô tả Quang Trung (Nguyễn Huệ) — hai tên cùng một nhân vật lịch sử. (Nguồn: SGK Lịch sử).";
  }
}

function tryDoor(){
  const doorFB = document.getElementById("doorFeedback");
  const done = Object.values(solved).filter(x=>x).length;
  if(done >= totalPuzzles){
    doorFB.style.color = "#0b6b3a";
    doorFB.textContent = "Chúc mừng! Bạn đã kiểm chứng hết các thông tin và mở cửa thoát khỏi mật thất!";
    // hiệu ứng nhỏ: hiển thị confetti giả (text)
    setTimeout(()=> {
      alert("Bạn đã thoát! Kết quả: Điểm = " + score + ". Chúc mừng!");
    }, 300);
  } else {
    doorFB.style.color = "#cc2b2b";
    doorFB.textContent = "Bạn chưa kiểm chứng đủ thông tin. Hãy hoàn thành tất cả câu đố.";
  }
}

window.addEventListener("load", updateStatus);
