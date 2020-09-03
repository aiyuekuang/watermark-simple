import React, {Fragment, useEffect, useState} from 'react';

//width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
let getBase64Image = ({text = "测试文字", fontSize = 16, color = "rgb(198,197,197)", height = 100, width = 100, rotate = 0} = {}) => {
  let canvas = document.createElement("canvas");
  canvas.height = height
  canvas.width = width
  let context = canvas.getContext('2d');  //获取对应的2D对象(画笔)
  context.textBaseline = 'top';
  context.font = `bold ${fontSize}px 微团雅黑`;
  context.translate(width * 0.1, height * 0.9);
  context.rotate(rotate * Math.PI / -12)
  context.fillText(text, 0, 2);
  context.fillStyle = color;


  return canvas.toDataURL();
}

let defaultProps = {
  text: "测试wewqe文字",
  fontSize: 16,
  color: "rgb(198,197,197)",
  height: 200,
  width: 300,
  rotate: 1
}

export default function Index(prop) {

  let props = {
    ...defaultProps, ...prop
  }
  const {} = props;

  useEffect(() => {
    console.log(1111, getBase64Image({...props,rotate:120}))
    let img = getBase64Image({...props})
    document.getElementsByClassName("up_index")[0].style.backgroundImage = `url('${img}')`;

    return () => {
    }
  }, []);


  return (
    <div>
    </div>
  );
}