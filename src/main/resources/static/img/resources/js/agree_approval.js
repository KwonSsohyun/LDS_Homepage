

function redirectToCreditPage() {
  // 라디오 버튼 체크 여부 확인
  var isNewCustomerChecked = document.getElementById('customers1').checked;

  if (isNewCustomerChecked) {
    // 신규 고객 신청일 경우 credit_info.html로 이동
    window.location.href = 'approval.html';
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


//스크롤
window.onload = function() {
    window.scrollTo(0, 0);
};



// 토글 셀렉트박스
$(document).ready(function(){
    $('.select-dropdown .slt-btn').click(function(event){
        event.stopPropagation();

        var target = $(this).data('toggle');
        $(".ul-language").not('[data-target="' + target + '"]').slideUp("slow");
        $("[data-target='" + target + "']").slideToggle(100);
    });

    $('.ul-language .btn-language').click(function(event){
        event.stopPropagation();

        var selectedText = $(this).text();
        $(this).closest('.select-dropdown').find('.slt-btn').text(selectedText);

        var target = $(this).closest('.ul-language').data('target');
        $(".ul-language").not('[data-target="' + target + '"]').slideUp(100);
        $("[data-target='" + target + "']").slideToggle(100);
    });

    $(document).on("click", function () {
        $(".ul-language").slideUp(100);
    });
});




// 라디오 버튼의 변경을 감지하고 applyBtn을 활성화하는 함수
function handleRadioChange() {
  // 선택된 라디오 버튼의 값 가져오기
  var selectedCertifyCd = document.querySelector('input[name="certify_cd"]:checked');

  // applyBtn 버튼 가져오기
  var applyBtn = document.getElementById('applyBtn');

  // 만약 라디오 버튼이 선택되었다면 applyBtn 활성화
  if (selectedCertifyCd) {
    applyBtn.disabled = false;
  } else {
    // 라디오 버튼이 선택되지 않았다면 applyBtn 비활성화
    applyBtn.disabled = true;
  }
}

// 라디오 버튼에 이벤트 리스너 추가
document.querySelectorAll('input[name="certify_cd"]').forEach(function (radio) {
  radio.addEventListener('change', handleRadioChange);
});



// 개인정보 팝업
$(document).ready(function() {
  $('.agree_terms_check').on('click', function() {
    var checkBox = $('#cbx-15');

    // nopopup 클래스가 있는지 확인
    if ($(this).hasClass('nopopup')) {
      checkBox.prop('checked', !checkBox.prop('checked'));
    } else {
      checkBox.prop('checked', true);

      // 팝업을 표시하는 로직 추가
      if (checkBox.prop('checked') || !$('#termsModal').is(':visible')) {
        $('#termsModal').css('display', 'flex');
      }
    }
  });

  $('.zip-open').on('click', function() {
    $('#zipModal').css('display', 'flex');
  });

  $('#termsModal').on('click', function() {
    closeModal('termsModal');
  });



});

function closeModal(modalId) {
  $('#' + modalId).hide();
}



//서브타이틀 아이콘
$(document).ready(function() {
    // #subtitle 내부의 .icon_li.active 요소들을 찾아서 클래스를 제거한 후
    $("#subtitle .icon_box.active").removeClass("last-active");
    // 마지막 .icon_li.active 요소에 클래스를 추가합니다.
    $("#subtitle .icon_box.active:last").addClass("last-active");
});
