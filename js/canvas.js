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