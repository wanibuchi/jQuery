const fortuneResults = {
  money:[{stars:'★★★',detail:'最高の金運です！いつの間にかお金が溜まっているかも・・・？'},
{stars:'★★',detail:'まずまず金運です！使いすぎには注意しましょう！'},
{stars:'★',detail:'悪い傾向が見られます！財布の紐は絞めておくと吉です！'}],
work:[{stars:'★★★',detail:'最高の仕事運です！いつも以上にチャンスが巡ってくるかも'},
{stars:'★★',detail:'まずまず仕事運です！普段通り仕事が進むでしょう！'},
{stars:'★',detail:'悪い傾向が見られます！自信過剰にならないように注意しましょう'}],
health:[{stars:'★★★',detail:'最高の健康運です！ランニングの距離を伸ばしても良いですね！'},
{stars:'★★',detail:'まずまず健康運です！無理せず体を動かしましょう！'},
{stars:'★',detail:'悪い傾向が見られます！ケガにご注意を・・・'}],
}

$(function(){
  $(document).on('click','.js-fortune-start',function(){
    for(const i in fortuneResults){
      const random = Math.floor(Math.random() * 3);
      console.log(random)
      const starsResult = fortuneResults[i][random]['stars']
      const detailResult = fortuneResults[i][random]['detail']
      console.log(starsResult)
      console.log(detailResult)
      $("."+i).find('.stars').text(starsResult);
      $("."+i).find('.detail').text(detailResult);
    }
    $('.result').fadeIn();
    textChange(this,"もう一度占う！")
  });
  $(document).on('click','.js-fortune-again',function(){
    $('.result').fadeOut();
    textChange(this,"運勢を占う！");
  });
  function textChange(element,text){
    $(element).toggleClass('js-fortune-start').toggleClass('js-fortune-again').text(text)
  };
});
