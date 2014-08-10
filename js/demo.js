$(document).ready(function(){
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

    //Canvas button
    $("#canvas-test").drawRect({
        fillStyle: '#6c1',
        x: 100, y: 100,
        width: 100, height: 100
        });
                            
});

window.onload=function(){

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
context.font = '15px Lato-Regular';
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
context.font = '15px Lato-Regular';
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
context.font = '15px Lato-Regular';
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
context.font = '15px Lato-Regular';
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
context.font = '15px Lato-Regular';
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
context.font = '15px Lato-Regular';
context.fillStyle = '#e74c3c';
context.fillText('Danger', 25.2055, 27.5679);

};