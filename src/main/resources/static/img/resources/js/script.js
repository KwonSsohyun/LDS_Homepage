window.onload = function() {
    // 페이지 로드 시 스크롤을 상단으로 이동
    window.scrollTo(0, 0);
};


//mobile header
function toggleMenu() {
  document.getElementById('menuContainer').classList.toggle('active');
}

// header
$(document).ready(function () {
  // 이전에 호버된 .submenu1에 대한 jQuery 객체를 저장하는 변수
  var previousHoveredSubmenu = null;

  // .submenu1에 대한 hover 이벤트
  $(".submenu1").hover(
    function () {
      // 모든 .submenu1 > a의 색상을 초기화
      $(".submenu1 > a").removeClass("clicked").css("color", "");

      // 호버된 .submenu1과 이전에 호버된 .submenu1이 같지 않은 경우
      if (previousHoveredSubmenu && !$(this).is(previousHoveredSubmenu)) {
        previousHoveredSubmenu.find(".submenu2").css("display", "none");
      }

      // 현재 호버된 .submenu1의 .submenu2를 표시
      var submenu2 = $(this).find(".submenu2");
      submenu2.show();

      // 호버된 .submenu1의 .submenu2가 표시 중인 경우에는 flex로 변경
      if (submenu2.is(":visible")) {
        submenu2.css("display", "flex");
        $("#hdOverlay").css("display", "block");
      } else {
        $("#hdOverlay").css("display", "none");
      }

      // 현재 호버된 .submenu1을 변수에 저장
      previousHoveredSubmenu = $(this);

      // .submenu2의 높이를 가져와서 #hdOverlay의 높이를 조절
      adjustOverlayHeight();

      // 호버한 링크에 클래스 추가
      $(this).find("a").addClass("clicked");
    },
    function () {
      // 호버가 끝났을 때의 동작 (여기에 추가적인 로직을 원하면 추가)
    }
  );

  // document에 대한 click 이벤트
  $(document).on('click', function () {
    $("#hdOverlay").css("display", "none");
    $(".submenu2").css("display", "none");

    // 모든 .submenu1 > a의 색상을 초기화
    $(".submenu1 > a").removeClass("clicked").css("color", "");

    previousHoveredSubmenu = null; // 호버된 .submenu1 초기화
  });

  // .submenu2의 높이를 가져와서 #hdOverlay의 높이를 조절하는 함수
  function adjustOverlayHeight() {
    var maxSubmenu2Height = 0;

    // 각 .submenu2의 높이를 비교하여 가장 큰 높이를 찾음
    $(".submenu2").each(function () {
      var submenu2Height = $(this).find("ul").height();
      maxSubmenu2Height = Math.max(maxSubmenu2Height, submenu2Height);
    });

    // 최종적으로 #hdOverlay의 높이를 설정
    $("#hdOverlay").css("height", maxSubmenu2Height + 50 + "px");
  }

  // #main #header에 대한 mouseleave 이벤트
  $("#main #header").on('mouseleave', function () {
    $("#hdOverlay").css("display", "none");
    $(".submenu2").css("display", "none");

    // 모든 .submenu1 > a의 색상을 초기화
    $(".submenu1 > a").removeClass("clicked").css("color", "");

    previousHoveredSubmenu = null; // 호버된 .submenu1 초기화
  });
});


// 헤더 호버 시 2뎁스 노출
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".submenu1");
  const underline = document.querySelector(".underline");

  // 서브메뉴의 위치 정보를 저장할 배열
  const linkPositions = [];

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      const width = link.offsetWidth;
      const leftOffset = link.offsetLeft;
      underline.style.width = `55px`;
      underline.style.transform = `translateX(calc(${leftOffset}px ))`;

      // 현재 서브메뉴의 위치 정보를 배열에 저장
      linkPositions[navLinks.indexOf(link)] = leftOffset;
    });

    link.addEventListener("mouseout", function () {
      underline.style.width = "0";
    });
  });

  // 서브메뉴에 대한 호버 이벤트
  navLinks.forEach((link, index) => {
    link.addEventListener("mouseover", function () {
      const leftOffset = linkPositions[index];
      underline.style.transform = `translateX(calc(${leftOffset}px ))`;
    });
  });

  // 초기에 언더라인 숨기기
  underline.style.width = "0";
});


//헤더 스크롤 시 클래스 추가 (숨김)
document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById('header');
  var scrollPosition = window.scrollY;
  var lastScrollPosition = 0;

  function handleScroll() {
    scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
      // 최상단에 도달한 경우 - 모든 클래스 해제
      header.classList.remove('default', 'none');
    } else if (scrollPosition > 100) {
      // 스크롤 중인 경우
      if (scrollPosition > lastScrollPosition) {
        // 아래로 스크롤하는 경우 - 헤더 숨김
        header.classList.remove('default');
        header.classList.add('none');
      } else {
        // 위로 스크롤하는 경우 - 헤더 나타냄
        header.classList.remove('none');
        header.classList.add('default');
      }
    }

    lastScrollPosition = scrollPosition;
  }

  // 초기 호출
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});


// 스크롤 이벤트에 대한 리스너 등록
window.addEventListener('scroll', handleScroll);

// floating banner hide
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('#flt_banner').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('#flt_banner').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('#flt_banner').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
};

$(document).ready(function(){
  // #flt_banner 내부의 마지막 요소를 클릭할 때
  $("#flt_banner .circle-container:last-child").click(function() {
    // 상단으로 800ms 동안 부드럽게 이동
    $("html, body").animate({ scrollTop: 0 }, 800);
  });
});


//서브타이틀 아이콘
$(document).ready(function() {
    // #subtitle 내부의 .icon_li.active 요소들을 찾아서 클래스를 제거한 후
    $("#subtitle .icon_box.active").removeClass("last-active");
    // 마지막 .icon_li.active 요소에 클래스를 추가합니다.
    $("#subtitle .icon_box.active:last").addClass("last-active");
});


// 셀렉트박스가 삭제되었을 경우를 고려하여 클래스 토글 로직 변경
function handleNoneTelCheckbox() {
  var noneTelCheckbox = document.getElementById('checkbox-18');
  var telInputs = document.querySelectorAll('.h_number input[name^="ltel_no"]');
  var selectDropdown = document.querySelector('.select-dropdown');

  // 체크박스가 체크되었을 때
  if (noneTelCheckbox.checked) {
    // 인풋 요소들 비활성화
    telInputs.forEach(function (input) {
      input.disabled = true;
    });

    // 추가: 셀렉트박스가 존재할 때만 클래스 토글
    if (selectDropdown) {
      selectDropdown.classList.add('disabled');
    }
  } else {
    // 체크박스가 체크되지 않았을 때 인풋 요소들 활성화
    telInputs.forEach(function (input) {
      input.disabled = false;
    });

    // 추가: 셀렉트박스가 존재할 때만 클래스 토글
    if (selectDropdown) {
      selectDropdown.classList.remove('disabled');
    }
  }
}

// 체크박스에 이벤트 리스너 추가
var noneTelCheckbox = document.getElementById('checkbox-18');
noneTelCheckbox.addEventListener('change', handleNoneTelCheckbox);
  if (noneTelCheckbox) {
    noneTelCheckbox.addEventListener('change', handleNoneTelCheckbox);
  }

// 페이지 로드 시 한 번 호출
handleNoneTelCheckbox();




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


// 대출신청 팝업
$(document).ready(function() {
  $('.agree_terms_check').on('click', function() {
    var checkBox = $('#cbx-15');
    checkBox.prop('checked', !checkBox.prop('checked'));
    if (checkBox.prop('checked') || !$('#termsModal').is(':visible')) {
      $('#termsModal').css('display', 'flex');
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


// 대출신청 입력폼 유효성검사
function validateForm() {
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var countrySelect = document.getElementById('country');

  // 초기화: 모든 요소에서 에러 클래스 제거
  nameInput.classList.remove('error');
  emailInput.classList.remove('error');
  countrySelect.classList.remove('error');

  // 이름 검사
  if (nameInput.value.trim() === '') {
    nameInput.classList.add('error');
    alert('이름을 입력하세요.');
    return false;
  }

  // 모든 조건을 통과하면 제출을 허용
  return true;
}



// 직업 - 기타
function handleJobTypeChange() {
    var jobTypeButtons = document.querySelectorAll('.jobType .btn-language');
    var jobTable = document.querySelector('.job');

    // 각 버튼에 대한 클릭 이벤트 리스너 등록
    jobTypeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            handleJobButtonClick(button.innerText, jobTable);
        });
    });
}

function handleJobButtonClick(selectedJob, jobTable) {
    // jobTable 내의 모든 input, select 요소들을 찾아서 초기화
    jobTable.querySelectorAll('input, select').forEach(function (element) {
        element.disabled = false;
    });

    // '무직'이 선택된 경우
    if (selectedJob === '무직') {
        // jobTable 내의 모든 input, select 요소들을 찾아서 disabled 처리
        jobTable.querySelectorAll('input, select').forEach(function (element) {
            element.disabled = true;
        });
    }
}

// 페이지 로드 시 초기화
handleJobTypeChange();


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





// 이메일 직접입력 선택시
function showInput() {
  var optionsContainer = document.getElementById("email_select");
  var inputElement = document.getElementById("directInput");

  // 버튼 리스트 숨김
  optionsContainer.style.display = "none";

  // 입력을 받는 input 요소 표시
  inputElement.style.display = "inline-block";
}
