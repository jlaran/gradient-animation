function changeGradient(element, currentTop, currentBottom, currentPercentageTop, currentPercentageBottom, currentGrade, destTop, destBottom, destPercentageTop, destPercentageBottom, destGrade, velocity){

    var currentRtop = arguments[1][0];
    var currentGtop = arguments[1][1];
    var currentBtop = arguments[1][2];

    var currentRbottom = arguments[2][0];
    var currentGbottom = arguments[2][1];
    var currentBbottom = arguments[2][2];

    var currentPercentageTop = currentPercentageTop;
    var currentPercentageBottom = currentPercentageBottom;
    var currentGrade = currentGrade;

    var destRtop = arguments[6][0];
    var destGtop = arguments[6][1];
    var destBtop = arguments[6][2];

    var destRbottom = arguments[7][0];
    var destGbottom = arguments[7][1];
    var destBbottom = arguments[7][2];

    var destPercentageTop = destPercentageTop;
    var destPercentageBottom = destPercentageBottom;
    var destGrade = destGrade;

    var changeGradient = setInterval(function(){

            if(currentPercentageTop != destPercentageTop){
                if (currentPercentageTop < destPercentageTop) {
                    currentPercentageTop++;
                } else {
                    currentPercentageTop--;
                }
            }

            if(currentPercentageBottom != destPercentageBottom){
                if (currentPercentageBottom < destPercentageBottom) {
                    currentPercentageBottom++;
                } else {
                    currentPercentageBottom--;
                }
            }

            if(currentGrade != destGrade){
                if (currentGrade < destGrade) {
                    currentGrade++;
                } else {
                    currentGrade--;
                }
            }

            if(currentRtop != destRtop){
                if (currentRtop < destRtop) {
                    currentRtop++;
                } else {
                    currentRtop--;
                }
            }

            if(currentGtop != destGtop){
                if (currentGtop < destGtop) {
                    currentGtop++;
                } else {
                    currentGtop--;
                }
            }

            if(currentBtop != destBtop){
                if (currentBtop < destBtop) {
                    currentBtop++;
                } else {
                    currentBtop--;
                }
            }

            if (currentRbottom != destRbottom) {
                if (currentRbottom < destRbottom) {
                    currentRbottom++;
                } else {
                    currentRbottom--;
                }
            }

            if (currentGbottom != destGbottom) {
                if (currentGbottom < destGbottom) {
                    currentGbottom++;
                } else {
                    currentGbottom--;
                }
            }

            if (currentBbottom != destBbottom) {
                if (currentBbottom < destBbottom) {
                    currentBbottom++;
                } else {
                    currentBbottom--;
                }
            }

            document.querySelector(element).style.background = 'linear-gradient('+destGrade+'deg, rgba('+currentRtop+','+currentGtop+','+currentBtop+',1) '+currentPercentageTop+'%, rgba('+currentRbottom+','+currentGbottom+','+currentBbottom+',1) '+destPercentageBottom+'%)';

            if ((currentGrade == destGrade) && (currentPercentageBottom == destPercentageBottom) && (currentPercentageTop == destPercentageTop) && (currentRtop == destRtop) && (currentGtop == destGtop) && (currentBtop == destBtop) && (currentRbottom == destRbottom) && (currentGbottom == destGbottom) && (currentBbottom == destBbottom)) {
                clearInterval(changeGradient);
            }

    }, velocity);
}