# Jupyter Notebook

Author: 邱渝桁

使用Jupyter Notebook的三个理由：

1. 可以在任何环境下使用网页进行开发
2. 可交互的输出与markdown的支持让编程像写诗
3. 好看

Jupyter Notebook是基于网页的用于交互计算的应用程序。其可被应用于全过程计算：开发、文档编写、运行代码和展示结果。Jupyter Notebook 支持超过40种编程语言包括 Python, R, Julia, 和 Scala。本篇文档将介绍：Jupyter Notebook 的简介及优缺点，可视化与可交互的输出和内部原理



## Install and start of Jupyter notebook

Jupyter notebook can be easily installed through `pip`

```bash
pip install jupyter
```

To start with Jupyter notebook

type directly on terminal

```bash
jupyter notebook
```

copy the address 

## Common problems

1. `Permission denied: '/Library/Python/2.7/site-packages/pync/vendor'`

   try following code in terminal

   ```
   sudo chown -R $USER /Library/Python/2.7
   ```

2. I do not have `pip` .

   ```bash
   # python 3
   easy_install pip
   # python 2
   easy_install pip
   ```

3. How to use virtual env?
   <https://www.geeksforgeeks.org/python-virtual-environment/>
   If your computer have no `python3`, you can install through `homebrew` or `apt-get` for OSX and Linux user,



