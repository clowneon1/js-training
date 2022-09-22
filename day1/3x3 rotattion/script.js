var nums = [[1,2,3],[4,5,6],[7,8,9]];


function rotate(){
    rotateArray();
    refresh();
}

function refresh(){
    let id = 1;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            document.getElementById(id++).innerHTML = nums[i][j].toString();
        }
    }
}

function rotateArray(){
    var m = 3;
    var prev = nums[1][0];
    
    for(var i = 0; i < m; i++){ //top
        var cur = nums[0][i];
        nums[0][i] = prev;
        prev = cur;
    }

    for(var i = 1; i < m; i++){ //right
        var cur = nums[i][m-1];
        nums[i][m-1] = prev;
        prev = cur;
    }

    for(var i = m-2 ; i>= 0; i--){
        var cur = nums[m-1][i];
        nums[m-1][i] = prev;
        prev = cur;
    }
    nums[1][0] = prev;
}