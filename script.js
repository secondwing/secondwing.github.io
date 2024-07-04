document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('checkButton').addEventListener('click', checkImages);
});

function checkImages() {
  const stage = document.documentElement.getAttribute('data-stage');
  const image1Input = document.getElementById('image1Input').value;
  let correctImage1Name;
  let nextPage;

  if (stage === "1") {
    correctImage1Name = "드림"; // 1단계의 올바른 이미지 1 이름
    nextPage = '2.html'; // 2단계 페이지 URL
  } else if (stage === "2") {
      correctImage1Name = "CLA"; // 2단계의 올바른 이미지 1 이름
      nextPage = '3.html'; // 정답 페이지 URL (예: 축하 페이지)
  } else if (stage === "3") {
    correctImage1Name = "PALGONG"; // 2단계의 올바른 이미지 1 이름
    nextPage = 'finish.html'; // 정답 페이지 URL (예: 축하 페이지)
  }
  
  if (image1Input === correctImage1Name ) {
    alert('정답입니다! 다음 단계로 이동합니다.');
    window.location.href = nextPage;
  } else {
      alert('틀렸습니다. 다시 시도하세요.');
  }
}