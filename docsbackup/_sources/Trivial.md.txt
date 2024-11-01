# Trivial tricks
- Show line numbers of .ipynb in vscode
*settings -> notebook lin*
![](./fig/2023-12-17-19-21-00.png)
- vscode jupyter误删单元格恢复 **Esc+z** 

- **numpy 保存csv，且保留列名**
  ```
  import numpy as np

  # 创建一个示例数组
  data = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

  # 定义标题（抬头）
  header = "A, B, C"

  # 保存数组为 CSV 文件
  np.savetxt("data.csv", data, delimiter=",", header=header, comments="")

  print("CSV file saved.")
  ```

- **numpy 保存txt，且保留列名** ps这种问题直接问机器人就行
```
import numpy as np

# 创建一个示例数组
data = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])

# 定义标题（抬头）
header = "A, B, C"

# 保存数组为文本文件
np.savetxt("data.txt", data, delimiter=",", header=header, comments="")

print("Text file saved.")
```