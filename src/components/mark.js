import React, {Fragment, useEffect, useState} from 'react';

let getBase64Image = ({text = "测试文字", fontSize = 16, color = "rgb(198,197,197)", height = 100, width = 100, rotate = 0} = {}) => {
  let canvas = document.createElement("canvas");
  canvas.height = height
  canvas.width = width
  let context = canvas.getContext('2d');
  context.textBaseline = 'top';
  context.font = `bold ${fontSize}px 微团雅黑`;
  context.translate(width * 0.1, height * 0.9);
  context.rotate(rotate * Math.PI / -12)
  context.fillStyle = color;
  context.fillText(text, 0, 2);


  return canvas.toDataURL();
}

let defaultProps = {
  text: "测试文字",
  fontSize: 16,
  color: "rgb(213,213,213)",
  height: 200,
  width: 300,
  rotate: 1,
  style:{}
}

export default function Index(prop) {

  let props = {
    ...defaultProps, ...prop
  }
  const {className,onClick,style} = props;
  let img = getBase64Image({...props})

  useEffect(() => {
    return () => {
    }
  }, []);


  return (
    <div className={className} onClick={onClick} style={{
      backgroundImage:`url('${img}')`,...style
    }}>
      {props.children}
    </div>
  );
}