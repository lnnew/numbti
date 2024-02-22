module.exports = {
  HTML: function(max,min){
    maxIntro = ["","세월호 참사에 대한 관심으로 테스트에 응해준 당신은","세월호 선체조사보고서에 해박한 당신은","AIS와 VTS 기지국에 해박한 당신은","세월호 선체 조사 당시 CCTV 회수 과정을 꿰고 있는 당신은",
  "세월호 참사 당시 언론과 뉴스에 귀기울이던 당신은","세월호 선체 조사 과정의 작은 디테일까지 놓치지 않은 당신은","몇 년이 지난 후에도 세월호 선체 사후 처리에 대한 관심을 놓지 않은 당신은","참사에 공감하고, 직접 적극적으로 과학적 원리를 조사해 본 당신은"]
    maxPerson = ["", "아직 배울 게 많은 학생","적극적인 탐색관","명예 기지국 관리관","명예 잠수부","행동하는 시민","명예 선체 조사국원","기억하는 시민","시민 해양과학자"]
    minExpl = ["","세월호 전반","내인설과 열린안","AIS 조작설","CCTV 조작설","전원 구조 오보","세월호 블랙박스","세월호 직립 과정","배가 뜨는 원리"]

       return `<!DOCTYPE html>
       <html>
       <head>
       <meta name="viewport" content="width=device-width, initial-scale=1">
       <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
       <link rel="preconnect" href="https://fonts.googleapis.com">
       <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
       <link href="https://fonts.googleapis.com/css2?family=Gowun+Dodum&display=swap" rel="stylesheet">
       </head>
       <body>
       <div id = "aa">
         <div class="w3-center w3-container">
           <br><br><br><hr>
         <h4>${maxIntro[max]}</h4>

       <img src="../templates/n${max}.jpg" style="width:80%;  margin:auto; align: center;">
       <h2>${maxPerson[max]}</h2>
       <p style="text-align:center;">입니다</p>
       <br><br><h4>테스트 결과, 저희 웹사이트에서 ${minExpl[min]}을/를 더 알아보고 가시는 걸 추천합니다.</h4><br><br>
       </div>
       <div class="w3-container">

         <table class="w3-table w3-centered" style ="text-align:center;">
           <tr>
             <hr>
         <th><a id="btnFacebook" class="link-icon facebook" href="javascript:shareFacebook();">페이스북</a></th>
           <th><a id="btnKakao" class="link-icon kakao" href="javascript:shareKakao();" >카카오톡</a></th>
         </tr>
         </table>
         <br><br><br>
         <div id ="marin">

       <div class="w3-container">
         <div class="w3-card-4 w3-white" style="width:100%">
           <header class="w3-container" style ="color:black;" >
             <h3><i class="fa fa-th-list" style="color:#ecd17a;"></i> 세월호가 침몰한 이유 </h3>
             <hr>
             <p style ="font-size:11px;">*아래 자료는 「세월호 선체조사위원회 종합보고서」에 기반합니다.</p>
           </header>
           <!-- <div class="w3-container">
             <p>1 new friend request</p>
             <hr>
             <img src="img_avatar3.png" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:60px">
             <p>선조위와 네델란드 해양 연구소 마린은 2017년 12월 22일에 세월호의 선회, 횡경사, 침수,
       침몰에 대한 조사 계약을 체결했다.</p><br>
           </div> -->

         </div>
         <div class="content">
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       </div>
       <button class="collapsible"><i class="fa fa-sticky-note" style="color:white"></i>  1. 부품 고장으로 인해 통제할 수 없는 급선회가 발생하다 <tr>▽</button>
       <div class="content">
         <p>세월호를 인양한 후에 살펴봤더니, <b>솔레노이드 밸브라는 부품이 고착</b>된 것을 확인했습니다. 세월호의 방향은 솔레노이드 밸브 안에 있는 한 쌍의 펌프로 조절됐습니다. 하지만 한 쪽 펌프가 고착되는 문제가 생겼고, 이는 배의 방향을 우현으로 쏠리게 했습니다. 통제 불능이 된 채, 세월호는 우현 37도까지 급선회했습니다.</p>
       </div>
       <button class="collapsible"><i class="fa fa-sticky-note" style="color:white"></i>  2. 기울어져도 다시 복구할 수 있는 '복원성'이 부족했다 <tr>▽</button>
       <div class="content">
         <p><b> 증·개축으로 올라간 무게중심</b></p>
         <p>솔레노이드 밸브 고착 사고는 드물게 발생하는 사고는 아닙니다. 하지만 세월호가 그토록 빠르게 기울어졌던 이유는 배의 복원성이 떨어졌기 때문입니다. 세월호는 증·개축 이후 전보다 무게 중심이 83.2cm 올라갔습니다. [1] 무게중심이 상승할수록, 배가 오뚜기처럼 복원할 수 있는 복원성은 떨어지게 됩니다.
         </p><p><b>평형수를 뺴고 화물을 싣다</b></p>
         <p>  또한 운행 당시, 배의 무게중심을 낮춰주는 평형수를 빼고 대신 화물을 싣는 바람에 복원성이 한층 더 낮아졌습니다.</p>
       </div>
       <button class="collapsible"><i class="fa fa-sticky-note" style="color:white"></i>  3. 관리 부실로 인해 예상보다 빨리 기울어지고 침몰하다 <tr>▽</button>
       <div class="content">
         <b><p>화물 고박 부실</p></b>
         <p>세월호는 화물선이기도 했는데, 참사 당시 제대로 고정되어 있지 않던 화물이 많았습니다. 배가 어느 정도 기울어지자 이 화물은 좌현으로 쏠렸고, 배를 좌현으로 더욱 기울게 했습니다.</p>
       <b><p>열려있던 수밀문</p></b>
       <p>모든 배는 침수 가능 구획을 적절한 단위의 수밀 구획으로 나누고, 그 사이를 물이 통할 수 없는 수밀문으로 만들어 관리해야 합니다. 세월호의 경우에도 수밀문과 맨홀이 있었으나, 선원들은 이를 항상 열어놓은 채 항해했습니다.
         4월 16일에도 세월호의 수밀문은 열려있었고, 세월호는 급속히 침몰했습니다.</p>
       </div>
       <a href = "http://www.socialdisasterscommission.go.kr/Library/416sewol/416sewol2/List.jsp" target="_blank" >
       <button class="w3-button w3-block w3-dark-grey">선체조사위원회 보고서 열람하기 (새 탭)</button></a>


       <style>
             .collapsible {
               background-color: #ecd17a;
                 color: black;
               cursor: pointer;
               padding: 18px;
               width: 100%;
               border: none;
               text-align: left;
               outline: none;
               font-size: 15px;
             }
             *,h3,h2,h4   {
               font-family: 'Gowun Dodum', sans-serif;
             }

             .active, .collapsible:hover {
               background-color: #fcc000;
             }

             .content {
               padding: 0 18px;
               max-height: 0;
               overflow: hidden;
               transition: max-height 0.2s ease-out;
               background-color: #f1f1f1;
             }
       </style>
       <script>
           var coll = document.getElementsByClassName("collapsible");
           var i;

           for (i = 0; i < coll.length; i++) {
             coll[i].addEventListener("click", function() {
               this.classList.toggle("active");
               var content = this.nextElementSibling;
               if (content.style.maxHeight){
                 content.style.maxHeight = null;
               } else {
                 content.style.maxHeight = content.scrollHeight + "px";
               }
             });
           }
       </script>
       </div>
         </div>
         </div>
         <br>
       <div id = "bottomNav">
         <div id ="topa">

             <h4 style ="padding-left:30px;"><b><i class="fa fa-edit"></i> 세월호 참사 더 톺아보기</b></h4>
             <hr>
           <table class="w3-table w3-centered" style ="text-align:center;">
             <tr>
           <a href = "/details#0"><th><button class="deo w3-button w3-border w3-round-large" onclick = "location.href = '/details#0' "><i class="fa fa-ship"></i> 배가 뜨는 원리</button></th></a>
           <a href = "/detail#1"><th><button class="deo w3-button w3-border w3-round-large"onclick = "location.href = '/details#1' "><i class="fa fa-files-o"></i> 내인설과 열린안</button></th></a>
               <a><th><button class="deo w3-button w3-border w3-round-large"><i class="	fa fa-camera-retro"onclick = "location.href = '/details#2' "></i> CCTV 바꿔치기 의혹</button></th></a>
         </tr>

         </table>
         <table class="w3-table w3-centered" style ="text-align:center;">
         <tr>
       <th><button class="deo w3-button w3-border w3-round-large" onclick = "location.href = '/details#3' "><i class="fa fa-newspaper-o"></i> 오보 사태</button></th>
       <th><button class="deo w3-button w3-border w3-round-large" onclick = "location.href = '/details#4' "><i class="fa fa-ship"></i> 선체 직립</button></th>
           <th><button class="deo w3-button w3-border w3-round-large" onclick = "location.href = '/details#5' "><i class="fa fa-line-chart"></i> AIS 조작설</button></th>
             <th><button class="deo w3-button w3-border w3-round-large" onclick = "location.href = '/details#6' "><i class="fa fa-car"></i> 선내 블랙박스</button></th>
       </tr>
       </table>
       </div>

       <div class="w3-container">
         <br><br><br>
         <h3>참고 문헌 및 더 알아보기</h3>
         <hr>
         <p><b>
       타임라인 별 음성기록 / 세월호 판결문</b> <a href="https://sewolarchive.org/about"  target="_blank"><i class="fa fa-hand-o-right"></i>세월호 아카이브</p><a>
         <p><b>
       시청각 타임라인 / 의문과 팩트체크 </tr></tr></b><a href="https://sewolarchive.org/about"  target="_blank"><i class="fa fa-hand-o-right"></i>세월호, 사실과 기록  </p><a><br>
         <p style ="font-size:11px;">[참고 문헌]<br>
        세월호 선체조사위원회, "세월호 선체조사위원회 종합보고서," Report NO.11-1682100-000002-01, 2018.08.06</p>
       </div>

       </div>

       <style>
       .bottomNav{
         overflow: hidden;
         position: fixed;
         bottom: 0;
         width: 100%;
       }
       .deo {
         margin: auto;
         align-items: center;
         font-size:12px;
         color: black;
         background-color: #ecd17a;
       }
       #aa {
         width: 40rem;
         margin: 0 auto;
           background-color: #D1E0EC;

       }
       @media only screen and (max-width: 600px) {
         #aa {
           width: 100%;
         }
       }
       .link-icon { position: relative; display: inline-block; width: auto;    font-size: 14px; font-weight: 500; color: #333; margin-right: 10px; padding-top: 50px; }
       .link-icon.twitter { background-image: url(../DATA/icon-twitter.png); background-repeat: no-repeat; }
       .link-icon.facebook { background-image: url(../DATA/icon-facebook.png); background-repeat: no-repeat; }
       .link-icon.kakao { background-image: url(../DATA/icon-kakao.png); background-repeat: no-repeat; }

       </style>
       </body>
       </html>
`;
     }}
