# GPT个人使用经验分享
- **理论**
- **代码**
- **写作**
- **其他**
- **画图**

#### 理论
GPT不包含文献检索功能，但是由于存在大量百科和工具书，因此提问一些学术问题也是可行的
- **向GPT提问相关理论** <br>
例如固体力学应变能公式
![alt text](./fig/image-6.png)
![alt text](./fig/image-7.png)

<br>

波浪色散关系
![alt text](./fig/image-8.png)

#### 代码
GPT非常擅长写各种语言的代码并且给出的代码简洁高效，格式规范，缺点是掺有一些小问题需要手动debug，但是这也远比自己手写来的快

- **实现一些算法**
强化学习TD3算法 C++版本
![alt text](./fig/image-9.png)
![alt text](./fig/image-10.png)
<br>

- **模仿和推理**
参照以下求解4x4矩阵求解代码，写出5x5矩阵求解代码
![alt text](./fig/image-12.png)
![alt text](./fig/image-13.png)
- **检查代码逻辑和效率**


#### 写作
**润色**<br>
[polish指令链接](https://blog.csdn.net/QH2107/article/details/134249560)<br>
![alt text](./fig/image-15.png)
![alt text](./fig/image-14.png)
**简化表达**


#### 其他
- **写一些课程作业，个人材料等**
- **辅助完成一些文本工作**
![alt text](./fig/image.png)
- **一些棘手的问题**
例如 默认的colorbar范围和文献中不一致，或者想使用文献中的colorbar
![alt text](./fig/image-2.png)

可以上传图片并且引导gpt生成相关代码（gpt内置python编译器），具体步骤：
![alt text](./fig/image-5.png)
最终结果
![alt text](./fig/image-11.png)


#### 画图
- 位图600dpi+，点线图尽量保存成矢量图 
- 图中字体尽量保持和正文大小相近
- 变量斜体，矢量加粗，不要漏掉空格，单位不需要斜体
- 包含多条线的线型要做区分

![alt text](./fig/image-20.png)
![alt text](./fig/image-17.png)


- 多图的排布 <br>
图源来自于Yang et al. OE(2024)，波浪传播过程很适合组图纵向排布
![alt text](./fig/image-22.png)
![alt text](./fig/image-23.png)

关于使用paraview or matlab进行后处理
2D 建议直接matlab之类的 3D paraview

[如何从paraview中导出高分辨率图](https://yiouo.github.io/tips/Paraview.html)