var test = new Vue({
    el: '#test',
    data: {
        intro: '테스트를 시작 합니다',
        title: '샘플 테스트',
        currentIndex: 0,
        qna: [],
        result: ''
    },
    beforeMount: function() {
        this.insertQna('Q1. 평소에 뮤지컬을 많이 보고, 스스로 기획해보고 싶다는 생각을 했다. ', ["0412","0712","0316","0416","0512"],null);
        this.insertQna('Q1. 캐릭터의 감정을 직접 표현하고, ', ["여러가지 활동을 경험해봤다","한 가지 정도는 해본 것 같다","아직 그럴 기회를 갖지 못했다"], null);
        this.insertQna('Q2. 나는 선조위 보고서가 내인설과 열린안 두 가지로 나뉜 것과 그 배경을 알고 있다', ["완벽하게 잘 알고 있다","거의 다 알고 있다","어느 정도 알고 있다","들어보긴 하였다","아예 모른다"], null);
        this.insertQna('Q3. 나는 AIS가 조작설이 무엇인지, 그리고 어떻게 판명났는지 알고 있다', ["완벽하게 잘 알고 있다","거의 다 알고 있다","어느 정도 알고 있다","들어보긴 하였다","아예 모른다"], null);
        this.insertQna('Q4. 나는 세월호 DVR (CCTV)가 바꿔치기되었다는 의혹과, 판명 결과에 대해 알고 있다', ["완벽하게 잘 알고 있다","거의 다 알고 있다","어느 정도 알고 있다","들어보긴 하였다","아예 모른다"], null);
        this.insertQna('Q5. 나는 전원 구조 오보 사태를 알고 있다', ["완벽하게 잘 알고 있다","거의 다 알고 있다","어느 정도 알고 있다","들어보긴 하였다","아예 모른다"], null);
          this.insertQna('Q6. 세월호 선체 조사 당시 차량 블랙박스가 어떻게 활용되었는지 알고 있다', ["완벽하게 잘 알고 있다","거의 다 알고 있다","어느 정도 알고 있다","들어보긴 하였다","아예 모른다"], null);
          this.insertQna('Q7. 누워있던 세월호가 어떻게 세워졌는지 평소에 알고 싶었다', ["매우 그렇다","그렇다","보통이다","생각해보지 않았다", "그렇지 않다"], null);
          this.insertQna('Q8. 세월호 참사를 겪은 후에, 배가 뜨는 원리에 대해서 궁금해서 찾아봤다', ["매우 그렇다","그렇다","보통이다","생각해보지 않았다", "그렇지 않다"], null);

    },
    mounted: function() {
        $('#intro').show();
        $('#main').hide();
        $('#result').hide();
    },
    methods: {
        insertQna: function(q, a, t) {
            var item = {
                q: q,
                a: a,
                r: '',
                t: t
            };
            this.qna.push(item);
        },
        start: function() {
            $('#intro').hide();
            $('#main').show();
            $('#result').hide();

            var self = this;
            setTimeout(function() {
                if(typeof self.qna[0].t != 'undefined' && self.qna[0].t != null) {
                    $('#q0a0').attr('type', self.qna[0].t);
                    $('#q0a0').focus();
                }
            }, 200);
        },
        next: function () {
            var self = this;
            if(this.currentIndex < this.qna.length-1) {
                this.currentIndex++;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);
                }
            } else {
                var check = true;
                for(var i=0; i < this.qna.length; i++) {
                    if(this.qna[i].r === '') {
                        check = false;
                    }
                }
                if(check) {
                    this.showResult();
                } else {
                    alert("아직 모든 문항 완료되지 않았습니다.");
                }
            }
        },
        prev: function () {
            var self = this;
            if(this.currentIndex > 0) {
                this.currentIndex--;
                if(typeof this.qna[this.currentIndex].t != 'undefined' && this.qna[this.currentIndex].t != null) {
                    setTimeout(function() {
                        $('#q'+self.currentIndex+'a0').attr('type', self.qna[self.currentIndex].t);
                        $('#q'+self.currentIndex+'a0').focus();
                    }, 200);
                }
            } else {
                alert('첫 질문입니다.');
            }
        },
        showResult: function() {
          var result = []
          result.push(0)
          result.push(0)
          for(var i=2;i<=6;i++) {
            result.push(5-["완벽하게 잘 알고 있다","거의 다 알고 있다","어느 정도 알고 있다","들어보긴 하였다","아예 모른다"].indexOf(this.qna[i].r));
          }
          for(var i=7;i<=8;i++) {
            result.push(5-["매우 그렇다","그렇다","보통이다","생각해보지 않았다", "그렇지 않다"].indexOf(this.qna[i].r));
          }
          var student = true;
          for(var i=2;i<=8;i++){
            if(result[i]>2) {
              student=false;
            }
          }
          console.log(result)
          if (student) {
            var redirect_person = 1

          }else {
            var redirect_person = result.indexOf(Math.max(...result))

          }
             var min_q = result.indexOf(Math.min(...result.slice(2)))

             this.result = redirect_person+" "+min_q
             this.result +=[...result]
             // $('#main').hide();
             // $('#result').show();
           window.location.href = `/result?max=${redirect_person}&min=${min_q}`;

        }
    }
});
