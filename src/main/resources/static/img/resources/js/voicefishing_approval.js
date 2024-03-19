

var isYesSelected = false; // "예" 라디오 버튼이 선택되었는지 여부를 저장하는 변수

document.querySelectorAll('input[type="radio"]').forEach(function(radio, index) {
  radio.addEventListener('change', function() {
    if (this.checked) {
      if (this.id.startsWith('yes')) {
        // 예 라디오 버튼이 선택되면 isYesSelected를 true로 설정
        isYesSelected = true;
      } else {
        // 다른 라디오 버튼이 선택되면 isYesSelected를 false로 설정
        isYesSelected = false;
      }
    }
  });
});

// 확인 버튼 클릭 시 실행되는 함수
function checkAnswers() {
  // 각 라디오 버튼의 상태를 확인
  var no1 = document.querySelector('input[id="no1"]:checked');
  var no2 = document.querySelector('input[id="no2"]:checked');
  var no3 = document.querySelector('input[id="no3"]:checked');

  // "아니오" 라디오 버튼이 모두 선택되어 있다면 credit_agree.html로 이동
  if (no1 && no2 && no3) {
    // 페이지 이동 후 스크롤을 상단으로 이동
    location.href = 'approval.html';
    window.scrollTo(0, 0);
  } else if (isYesSelected) {
    // "예" 라디오 버튼 중 하나라도 선택되어 있다면 모달 띄우기
    showModal();
  } else {
    // 그 외의 경우 알림 출력
    alert('일부 항목이 체크되지 않았습니다.');
  }
}

// 팝업을 보이게 하는 함수
function showModal() {
  var modal = document.querySelector('.fraudprevention_check_modal');
  var overlay = document.getElementById('overlay');
  if (modal && overlay) {
    modal.style.display = 'block';
    overlay.style.display = 'flex';
  }
}

// 모달을 숨기는 함수
function hideModal() {
  var modal = document.querySelector('.fraudprevention_check_modal');
  var overlay = document.getElementById('overlay');
  if (modal && overlay) {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  }
}
