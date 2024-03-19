$(document).ready(function(){

     // 도메인 직접 입력 or domain option 선택
     const domainListEl = document.querySelector('.domain-list')
     const domainInputEl = document.querySelector('.domain-txt')
     
     // select 옵션 변경 시
     domainListEl.addEventListener('change', (event) => {
     // option에 있는 도메인 선택 시
     if(event.target.value !== "type") {
     // 선택한 도메인을 input에 입력하고 disabled
          domainInputEl.value = event.target.value
          domainInputEl.disabled = true
     } else { // 직접 입력 시
     // input 내용 초기화 & 입력 가능하도록 변경
          domainInputEl.value = ""
          domainInputEl.disabled = false
     }
     })


     // 슬라이드 이펙트
     // $('.post-wrapper').slick({
     //      slidesToShow: 3,
     //      slidesToScroll: 1,
     //      autoplay: true,
     //      autoplaySpeed: 2000,
     // });

     $('.post-wrapper').slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false // 이전 및 다음 화살표를 숨김
     });

     $('.next').click(function() {
          $('.post-wrapper').slick('slickNext'); // 다음 이미지로 이동
     });

     $('.prev').click(function() {
          $('.post-wrapper').slick('slickPrev'); // 이전 이미지로 이동
     });



         // Top 버튼 특정 스크롤높이에서만 보이기 / 숨기기
          $(window).scroll(function(){
               if($(this).scrollTop() > 100){
                    $('#top-btn').fadeIn();
          }else{
               $('#top-btn').fadeOut();
          }
          });

          // Top 버튼 클릭시 페이지 상단으로 이동
          $('#top-btn').click(function(){
               $('html, body').animate({scrollTop : 0}, 800);
               return false;
          });



     // 모달창
     $('.btn-example').click(function(){
          var $href = $(this).attr('href');
          layer_popup($href);
     });
     function layer_popup(el){

          var $el = $(el);    //레이어의 id를 $el 변수에 저장
          var isDim = $el.prev().hasClass('dimBg'); //dimmed 레이어를 감지하기 위한 boolean 변수

          isDim ? $('.dim-layer').fadeIn() : $el.fadeIn();

          var $elWidth = ~~($el.outerWidth()),
              $elHeight = ~~($el.outerHeight()),
              docWidth = $(document).width(),
              docHeight = $(document).height();
  
          // 화면의 중앙에 레이어를 띄운다.
          if ($elHeight < docHeight || $elWidth < docWidth) {
              $el.css({
                  marginTop: -$elHeight /2,
                  marginLeft: -$elWidth/2
              })
          } else {
              $el.css({top: 0, left: 0});
          }
  
          $el.find('a.btn-layerClose').click(function(){
              isDim ? $('.dim-layer').fadeOut() : $el.fadeOut(); // 닫기 버튼을 클릭하면 레이어가 닫힌다.
              return false;
          });
  
          $('.layer .dimBg').click(function(){
              $('.dim-layer').fadeOut();
              return false;
          });
  
      }


});

document.addEventListener("DOMContentLoaded", function() {
     var dropdownBtn = document.getElementById("dropdownBtn");
     var siteli = dropdownBtn.querySelector(".siteli");

     dropdownBtn.addEventListener("click", function() {
          siteli.classList.toggle("active");
     });
});

