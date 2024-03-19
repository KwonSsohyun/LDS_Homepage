

function redirectToCreditPage() {
  // 라디오 버튼 체크 여부 확인
  var isNewCustomerChecked = document.getElementById('customers1').checked;

  if (isNewCustomerChecked) {
    // 신규 고객 신청일 경우 credit_info.html로 이동
    window.location.href = 'credit_info.html';
  } else {
    // 기존 고객 신청일 경우 credit_info_re.html로 이동
    window.location.href = 'credit_info_re.html';
  }
}

function showModal(event) {
  // 트리거 버튼에서 모달 번호를 가져오기
  const modalNumber = event.target.dataset.modalNumber;

  // 모든 모달을 숨김
  document.querySelectorAll('.agreement_modal').forEach(function(modal) {
    modal.style.display = 'none';
  });

  // 해당 모달을 보이게 설정
  document.querySelector('.modal' + modalNumber).style.display = 'block';
  document.getElementById('overlay').style.display = 'flex';
}

function hideModal() {
  // 모달을 숨김
  document.querySelectorAll('.agreement_modal').forEach(function(modal) {
    modal.style.display = 'none';
  });
  document.getElementById('overlay').style.display = 'none';
}

document.getElementById('cbx-15').addEventListener('change', function() {
  var checkboxGroups = document.querySelectorAll('.agree_terms_input input[type="radio"]');
  var innerCheckboxes = document.querySelectorAll('.inner_checkbox input[name="inner_checkbox"]');

  checkboxGroups.forEach(group => group.checked = this.checked);
  innerCheckboxes.forEach(innerCheckbox => innerCheckbox.checked = this.checked);
});

function handleCheckAll(yesCheckbox, innerCheckboxes) {
  innerCheckboxes.forEach(innerCheckbox => innerCheckbox.checked = yesCheckbox.checked);
}

function bindCheckAllListeners(yesId, noId, innerCheckboxSelector) {
  const yesCheckbox = document.getElementById(yesId);
  const noCheckbox = document.getElementById(noId);
  const innerCheckboxes = document.querySelectorAll(innerCheckboxSelector);

  yesCheckbox.addEventListener('change', () => handleCheckAll(yesCheckbox, innerCheckboxes));
  noCheckbox.addEventListener('change', () => { yesCheckbox.checked = false; innerCheckboxes.forEach(innerCheckbox => innerCheckbox.checked = false); });
}

bindCheckAllListeners('yes4', 'no4', '.inner_checkbox input[name="inner_checkbox"]');
bindCheckAllListeners('yes6', 'no6', '.inner_checkbox input[name="inner_checkbox"]');
bindCheckAllListeners('yes9', 'no9', '.inner_checkbox input[name="inner_checkbox"]');
