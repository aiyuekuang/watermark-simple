### [watermark-simple](https://github.com/aiyuekuang/watermark-simple)

### 应用场景

1. 需要在网站中，全局背景中写入个人工号的水印，防止员工截图泄露公司数据



### 安装方法

```
npm i watermark-simple
```



### 调用方法

```jsx
import { WM } from "watermark-simple";

//WM功能类似一个div，可以传入className，style，onClick等
<WM
    text={"wangming"}
    color={"#ebebeb"}
    >
    {props.children}
</WM>
```



### 文档

1. text（string）：写入需要在当前dom中的水印文本
2. fontSize（int）：水印文字的大小（默认：16）
3. color（string）：水印文字的颜色色值（默认："rgb(213,213,213)"）
4. height（int）：单个水印的空间高度（默认：200）
5. width（int）: 单个水印的空间宽度（默认：300）
6. rotate（int）：旋转的角度（默认：1）
7. 

### 图片示例

![](.README_images/2d2ba435.png)