// // $(document).ready(function(){
// //     animateDiv('.css');
// //     animateDiv('.html');
// //     animateDiv('.js');
// //     animateDiv('.git');
// //     animateDiv('.github');
// // });

// // // $(document).ready(function(){
// // //     animateDiv('.a');
// // //     animateDiv('.b');
// // //     animateDiv('.c');
// // //     animateDiv('.d');
// // // });

// // function makeNewPosition(){
    
// //     // Get viewport dimensions (remove the dimension of the div)
// //     var h = $(window).height() - 50;
// //     var w = $(window).width() - 50;
    
// //     var nh = Math.floor(Math.random() * h);
// //     var nw = Math.floor(Math.random() * w);
//     // 
// //     return [nh,nw];    
    
// // }

// // function animateDiv(myclass){
// //     var newq = makeNewPosition();
// //     $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
// //       animateDiv(myclass);        
// //     });
    
// // };

// let icons = document.querySelectorAll('.icon');
// let iconContainer = document.querySelector('.iconContainer');

// // function newPosition()
// // {
// //     let iconContainerHeight = iconContainer.clientHeight();
// //     var iconContainerWidth = iconContainer.clientWidth();

// //     let newIconContainerHeight = Math.floor(Math.random() * iconContainerHeight);
// //     let newIconContainerWidth = Math.floor(Math.random() * iconContainerWidth);

// //     return [newIconContainerHeight, newIconContainerWidth];
// // }

// // function animateNewPlace()
// // {
// //     let position = newPosition();
// //     icons.forEach(icon => {
        
// //     });
// // }

// function myMove() {
//     var elem = document.querySelectorAll(". css");
//     var pos = 0;
//     clearInterval(id);
//     id = setInterval(frame, 10);
//     function frame() {
//       if (pos == 350) {
//         clearInterval(id);
//       } else {
//         pos++;
//         elem.style.top = pos + 'px';
//         elem.style.left = pos + 'px';
//       }
//     }
//   }
