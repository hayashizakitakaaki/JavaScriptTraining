// ボタンはサービスです。
// 自由に使ってください。

//window.alert("0");
var element = document.querySelector('#button_calc');
element.addEventListener('click', function() {
	//window.alert("1");
	//	計算対象変数X,Yの取得
	var elementX = document.querySelector('#numberX');
	var numX = Number(elementX.value);
	var elementY = document.querySelector('#numberY');
	var numY = Number(elementY.value);
	//	計算方法の確認
	var numANS = 0;
	if(document.querySelector('#calc1').checked)numANS = numX + numY;
	else if(document.querySelector('#calc2').checked)numANS = numX - numY;
	else if(document.querySelector('#calc3').checked)numANS = numX * numY;
	else if(document.querySelector('#calc4').checked)numANS = numX / numY;
	else numANS = numX + numY;;
	
	//	回答の登録
	var elementANS = document.querySelector('#numberANS');
	elementANS.value = numANS;
});