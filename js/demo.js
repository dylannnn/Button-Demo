$(document).ready(function(){

    //color Array
    hoverColorIndex = ["#798d8f","#1a242f","#128f76","#217dbb","#c87f0a","#c9302c"];
    colorIndex= ["#95A5A6","#2c3e50","#18bc9c","#3498db","#f39c12","#e74c3c"];
    
    // use jquery to style color
    $(function(){

      //CSS Flat Design Button
      $(".cssbtn").each(function(index, element) {
        $(this).mouseenter(function(e) {
          $(this).css("background", hoverColorIndex[index] );
          console.log("Index is "+ index + ". Hover color is " + hoverColorIndex[index]);
        }).mouseleave(function(e){
          $(this).css("background", colorIndex[index] );
          console.log("Index is "+ index + ". Original color is " + colorIndex[index]);
        });
      });

      //CSS Flat Design Ghost Button
      $(".cssghostbtn").each(function(index, element) {

        //Set color
        $(element).css({'color':colorIndex[index], 'background':'none', 'border':'2px solid' });
        //Add Actions
        $(element).mouseenter(function(e) {
          $(this).css({'background' : colorIndex[index], 'border-color' : colorIndex[index], 'color':'#fff'} );
          console.log("Index is "+ index + ". Hover color is " + hoverColorIndex[index]);
        }).mouseleave(function(e){
          $(this).css({'background' : 'none' , 'border-color' : colorIndex[index], 'color': colorIndex[index]});
          console.log("Index is "+ index + ". Original color is " + colorIndex[index]);
        });
      });

      //PNG Flat Design Button
      $(".pngBtnAnchor").each(function(index, element) {
        $(element).mouseenter(function(e) {
          $(this).css('background-position', '0 -45px');
        }).mouseleave(function(e){
          $(this).css('background-position', '0 0');
        });
      });

      //PNG Flat Design Ghost Button
      $(".pngGhostBtnAnchor").each(function(index, element) {
        $(element).mouseenter(function(e) {
          $(this).css('background-position', '0 -49px');
        }).mouseleave(function(e){
          $(this).css('background-position', '0 0');
        });
      });
    //END
    })


    //SVG Button
    $('#svg-btn-default').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#798d8f');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','#95A5A6');
    });

    $('#svg-btn-primary').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#1a242f');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','#2c3e50');
    });

    $('#svg-btn-success').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#128f76');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','#18bc9c');
    });

    $('#svg-btn-info').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#217dbb');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','#3498db');
    });

    $('#svg-btn-warning').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#c87f0a');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','#f39c12');
    });

    $('#svg-btn-danger').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#c9302c');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','#e74c3c');
    });

    //Ghost SVG Button
    $('#svg-btn-default-hover').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#95A5A6');
        $('#svg-text',this).attr('fill','#FFFFFF');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','none');
        $('#svg-text',this).attr('fill','#95A5A6');
    });

    $('#svg-btn-primary-hover').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#2c3e50');
        $('#svg-text',this).attr('fill','#FFFFFF');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','none');
        $('#svg-text',this).attr('fill','#2c3e50');
    });

    $('#svg-btn-success-hover').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#18bc9c');
        $('#svg-text',this).attr('fill','#FFFFFF');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','none');
        $('#svg-text',this).attr('fill','#18bc9c');
    });

    $('#svg-btn-info-hover').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#3498db');
        $('#svg-text',this).attr('fill','#FFFFFF');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','none');
        $('#svg-text',this).attr('fill','#3498db');
    });

    $('#svg-btn-warning-hover').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#f39c12');
        $('#svg-text',this).attr('fill','#FFFFFF');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','none');
        $('#svg-text',this).attr('fill','#f39c12');
    });

    $('#svg-btn-danger-hover').mouseenter(function(){
        $('#svg-rect',this).attr('fill','#e74c3c');
        $('#svg-text',this).attr('fill','#FFFFFF');
    }).mouseleave(function(){
        $('#svg-rect',this).attr('fill','none');
        $('#svg-text',this).attr('fill','#e74c3c');
    });


        /* Method 2 - Use a jQuery library [jCanvas] */  

        /*Here is the Canvas Flat Design Button*/
        $('#canvas-buttons')
        .addLayer({
          type: 'rectangle',
          name: 'canvas-default-button',
          fillStyle: '#95a5a6',
          x:56 , y:35 ,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#798d8f'
                }, 10);
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#95a5a6'
                }, 10);
            }
        })
        .addLayer({
          type:'text',
          fillStyle:"#ffffff",
          x:56, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Default'
        })/* Default Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-primary-button',
          fillStyle: '#2c3e50',
          x:162 , y:35 ,
          width: 100, height: 45,
           mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#1a242f'
                }, 10);
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#2c3e50'
                }, 10);
            }
        })
        .addLayer({
          type:'text',
          fillStyle:"#ffffff",
          x:162, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Primary'
        })/* Primary Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-success-button',
          fillStyle: '#18bc9c',
          x:268 , y:35 ,
          width: 100, height: 45,
          mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#128f76'
                }, 10);
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#18bc9c'
                }, 10);
            }
        })
        .addLayer({
          type:'text',
          fillStyle:"#ffffff",
          x:268, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Success'
        })/* Success Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-info-button',
          fillStyle: '#3498db',
          x:374 , y:35 ,
          width: 100, height: 45,
          mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#217dbb'
                }, 10);
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#3498db'
                }, 10);
            }
        })
        .addLayer({
          type:'text',
          fillStyle:"#ffffff",
          x:374, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Info'
        })/* Info Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-warning-button',
          fillStyle: '#f39c12',
          x:480 , y:35 ,
          width: 100, height: 45,
          mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#c87f0a'
                }, 10);
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#f39c12'
                }, 10);
            }
        })
        .addLayer({
          type:'text',
          fillStyle:"#ffffff",
          x:480, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Warning'
        })/* Warning Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-danger-button',
          fillStyle: '#e74c3c',
          x:586 , y:35 ,
          width: 100, height: 45,
          mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#c9302c'
                }, 10);
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#e74c3c'
                }, 10);
            }
        })
        .addLayer({
          type:'text',
          fillStyle:"#ffffff",
          x:586, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Danger'
        })/* Danger Button */
        .drawLayers();



        /*Here is the Canvas Flat Design Ghost Button*/
        $('#canvas-buttons-ghost')
        .addLayer({
          type: 'rectangle',
          name: 'canvas-default-button-ghost',
          strokeStyle: '#95a5a6',
          strokeWidth: 2,
          fillStyle:'#ffffff',
          x: 56, y: 35,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#95a5a6'
                }, 10).animateLayer('canvas-default-button-ghost-text', {
                fillStyle: '#ffffff'
                }, 5)
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: 'rgba(0,0,0,0)'
                }, 10).animateLayer('canvas-default-button-ghost-text', {
                fillStyle: '#95a5a6'
                }, 5);
            }
        })
        .addLayer({
          type:'text',
          name: 'canvas-default-button-ghost-text',
          fillStyle:"#95a5a6",
          x:56, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Default', 
        })/* Default Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-primary-button-ghost',
          strokeStyle: '#2c3e50',
          strokeWidth: 2,
          fillStyle:'#ffffff',
          x: 162, y: 35,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#2c3e50'
                }, 10).animateLayer('canvas-primary-button-ghost-text', {
                fillStyle: '#ffffff'
                }, 5)
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: 'rgba(0,0,0,0)'
                }, 10).animateLayer('canvas-primary-button-ghost-text', {
                fillStyle: '#2c3e50'
                }, 5);
            }
        })
        .addLayer({
          type:'text',
          name: 'canvas-primary-button-ghost-text',
          fillStyle:"#2c3e50",
          x:162, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Primary', 
        })/* Primary Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-success-button-ghost',
          strokeStyle: '#18bc9c',
          strokeWidth: 2,
          fillStyle:'#ffffff',
          x: 268, y: 35,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#18bc9c'
                }, 10).animateLayer('canvas-success-button-ghost-text', {
                fillStyle: '#ffffff'
                }, 5)
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: 'rgba(0,0,0,0)'
                }, 10).animateLayer('canvas-success-button-ghost-text', {
                fillStyle: '#18bc9c'
                }, 5);
            }
        })
        .addLayer({
          type:'text',
          name: 'canvas-success-button-ghost-text',
          fillStyle:"#18bc9c",
          x:268, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Success', 
        })/* Success Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-info-button-ghost',
          strokeStyle: '#3498db',
          strokeWidth: 2,
          fillStyle:'#ffffff',
          x: 374, y: 35,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#3498db'
                }, 10).animateLayer('canvas-info-button-ghost-text', {
                fillStyle: '#ffffff'
                }, 5)
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: 'rgba(0,0,0,0)'
                }, 10).animateLayer('canvas-info-button-ghost-text', {
                fillStyle: '#3498db'
                }, 5);
            }
        })
        .addLayer({
          type:'text',
          name: 'canvas-info-button-ghost-text',
          fillStyle:"#3498db",
          x:374, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Info', 
        })/* Info Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-warning-button-ghost',
          strokeStyle: '#f39c12',
          strokeWidth: 2,
          fillStyle:'#ffffff',
          x: 480, y: 35,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#f39c12'
                }, 10).animateLayer('canvas-warning-button-ghost-text', {
                fillStyle: '#ffffff'
                }, 5)
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: 'rgba(0,0,0,0)'
                }, 10).animateLayer('canvas-warning-button-ghost-text', {
                fillStyle: '#f39c12'
                }, 5);
            }
        })
        .addLayer({
          type:'text',
          name: 'canvas-warning-button-ghost-text',
          fillStyle:"#f39c12",
          x:480, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Warning', 
        })/* Warning Button */
        .addLayer({
          type: 'rectangle',
          name: 'canvas-danger-button-ghost',
          strokeStyle: '#e74c3c',
          strokeWidth: 2,
          fillStyle:'#ffffff',
          x: 586, y: 35,
          width: 100, height: 45,
            mouseover: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: '#e74c3c'
                }, 10).animateLayer('canvas-danger-button-ghost-text', {
                fillStyle: '#ffffff'
                }, 5)
            },
            mouseout: function(layer) {
                $(this).animateLayer(layer, {
                fillStyle: 'rgba(0,0,0,0)'
                }, 10).animateLayer('canvas-danger-button-ghost-text', {
                fillStyle: '#e74c3c'
                }, 5);
            }
        })
        .addLayer({
          type:'text',
          name: 'canvas-danger-button-ghost-text',
          fillStyle:"#e74c3c",
          x:586, y: 35,
          fontSize:'16px',
          fontFamily:'"Lato","Helvetica Neue",Helvetica,Arial,sans-serif',
          text:'Danger', 
        })/* Danger Button */
        .drawLayers();            
});










/* Method 1 - Javascript */

/*window.onload=function(){

var canvas = document.getElementById('canvas-default-btn-hover');
var context = canvas.getContext('2d');

// do cool things with the context
context.beginPath();
context.rect(0, 0, 100, 45);
context.fillStyle = 'rgba(0,0,0,0)';
context.fill();
context.lineWidth = 4;
context.strokeStyle = '#95A5A6';
context.stroke();
context.font = '15px Lato';
context.fillStyle = '#95A5A6';
context.fillText('Default', 25.2055, 27.5679);

var canvas = document.getElementById('canvas-primary-btn-hover');
var context = canvas.getContext('2d');

// do cool things with the context
context.beginPath();
context.rect(0, 0, 100, 45);
context.fillStyle = 'rgba(0,0,0,0)';
context.fill();
context.lineWidth = 4;
context.strokeStyle = '#2c3e50';
context.stroke();
context.font = '15px Lato';
context.fillStyle = '#2c3e50';
context.fillText('Primary', 25.2055, 27.5679);

var canvas = document.getElementById('canvas-success-btn-hover');
var context = canvas.getContext('2d');

// do cool things with the context
context.beginPath();
context.rect(0, 0, 100, 45);
context.fillStyle = 'rgba(0,0,0,0)';
context.fill();
context.lineWidth = 4;
context.strokeStyle = '#18bc9c';
context.stroke();
context.font = '15px Lato';
context.fillStyle = '#18bc9c';
context.fillText('Success', 25.2055, 27.5679);

var canvas = document.getElementById('canvas-info-btn-hover');
var context = canvas.getContext('2d');

// do cool things with the context
context.beginPath();
context.rect(0, 0, 100, 45);
context.fillStyle = 'rgba(0,0,0,0)';
context.fill();
context.lineWidth = 4;
context.strokeStyle = '#3498db';
context.stroke();
context.font = '15px Lato';
context.fillStyle = '#3498db';
context.fillText('Info', 37.5, 27.5679);

var canvas = document.getElementById('canvas-warning-btn-hover');
var context = canvas.getContext('2d');

// do cool things with the context
context.beginPath();
context.rect(0, 0, 100, 45);
context.fillStyle = 'rgba(0,0,0,0)';
context.fill();
context.lineWidth = 4;
context.strokeStyle = '#f39c12';
context.stroke();
context.font = '15px Lato';
context.fillStyle = '#f39c12';
context.fillText('Warning', 25, 27.5679);

var canvas = document.getElementById('canvas-danger-btn-hover');
var context = canvas.getContext('2d');

// do cool things with the context
context.beginPath();
context.rect(0, 0, 100, 45);
context.fillStyle = 'rgba(0,0,0,0)';
context.fill();
context.lineWidth = 4;
context.strokeStyle = '#e74c3c';
context.stroke();
context.font = '15px Lato';
context.fillStyle = '#e74c3c';
context.fillText('Danger', 25.2055, 27.5679);

};*/