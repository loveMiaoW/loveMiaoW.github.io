### 算法分析

>算法(algorithm) 是为求解一个问题需要遵守的，被清楚地指令指定的简单指令的集合。对于一个问题，一旦给定魔种算法并且一某种方式确定是正确的，那么重要的一步即使确定改算法将需要多少注入时间或者空间等资源量的问题。

#### 2.1算法的概念

![在这里插入图片描述](https://img-blog.csdnimg.cn/7982575fca994a309ee541b730c2c05f.png)

#### 2.2数学基础

![在这里插入图片描述](https://img-blog.csdnimg.cn/b10b55de3c094e34b9043c56949687f7.png)

#### 2.3计算模型

![在这里插入图片描述](https://img-blog.csdnimg.cn/d335536ff82547488fd5cebc4891d195.png)

#### 2.4算法效率的度量

>如何评估算法时间开销？

![在这里插入图片描述](https://img-blog.csdnimg.cn/fc9d5d8dbd1c43639de06b12a1ac5b99.png)

所以要进行事前预估，事前预估算法时间开销 T(n) 与问题规模n的关系 (T表示“time”)

![在这里插入图片描述](https://img-blog.csdnimg.cn/ffd5f5fc6bad4951974aa0887d230b82.png)

**时间复杂度量级比较**
$$
O(1)<O(log_2n)<O(n)<O(nlog_2n)<O(n^2)<O(n^3)<O(2^n)<O(n!)<O(n^n)O(1)<O(log_2n)<O(n)<O(nlog_2n)<O(n^2)<O(n^3)<O(2^n)<O(n!)<O(n^n)
$$
![](https://gitee.com/wugenqiang/PictureBed/raw/master/CS-Notes/20200428180609.png)

![](https://gitee.com/wugenqiang/PictureBed/raw/master/CS-Notes/20200428180613.png)

#### 2.4.2 空间复杂度

算法可以**原地工作**——S(n)=O(1)

计算规则与时间复杂度类似



递归型算法

空间复杂度=递归调用的深度



![](https://gitee.com/wugenqiang/PictureBed/raw/master/CS-Notes/20200428180617.png)