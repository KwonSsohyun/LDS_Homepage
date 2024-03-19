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

  // "예" 라디오 버튼의 상태를 확인
  var yes1 = document.querySelector('input[id="yes1"]:checked');
  var yes2 = document.querySelector('input[id="yes2"]:checked');
  var yes3 = document.querySelector('input[id="yes3"]:checked');

  // "예" 버튼이 모두 선택되어 있다면 팝업 띄우기
  if (yes1 && yes2 && yes3 && !no1 && !no2 && !no3) {
    showModal();
  } else if (isNo1Selected && isNo2Selected && isNo3Selected && !yes1 && !yes2 && !yes3) {
    // "아니오" 버튼이 모두 선택되어 있다면 credit_agree.html로 이동
    location.href = 'credit_agree.html';
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
