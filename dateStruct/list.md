### 线性表

>线性表是具有相同类型的 n (n>=0)个元素的优先序列，其中表长为n,当n = 0 时，该表为空表。

线性表特点:

![在这里插入图片描述](https://img-blog.csdnimg.cn/5bd041d067144d05a9c622c1d2875454.png)

线性表的基本操作:

>- 初始化
>- 销毁
>- 重置空表
>- 判断是否为空
>- 获取长度
>- 根据位置获取元素
>- 查找元素
>- 获取指定元素的前驱或者后继元素
>- 插入元素
>- 删除元素
>- 遍历元素

#### 3.1抽象数据类型(ADT)

```c++
ADT 线性表(SeqList)
Data
    线性表的数据对象集合为{a1,a2,....,an},每个元素的类型均为DataType。
    其中，除了第一个元素a1外，每一个元素有且只有一个直接前驱元素，除最后一个元素an外，
    每一个元素有且只有一个直接后继元素。数据元素之间的关系是一对一的关系。

Operation
    InitList(*L):初始化操作，建立一个空的线性表。
    ListEmpty(L):若线性表为空，返回true，否则返回false。
    ClearList(*L):线性表清空。
    GetElem(L,i,*e):将线性表L中第i个位置元素返回给e。
    LocateElem(L,e):在线性表L中查找与给定值e相等的元素，如果查找成功,返回该元素在表中的序列号；
    否则，返回0表示失败。
    InsertList(*L,i,e):在线性表的第i个位置插入元素e。
    DeleteList(*L,i,*e):删除线性表L中的第i个元素，并用e返回其值
    ListLength(L):返回线性表L的元素个数。
    PrintList(L):打印线性表
```

存储方式，线性表可以分为顺序表和链表：

>- 数据元素在内存种集中存储，采用顺序表示结构，简称"顺序存储"
>- 数据元素在内存种分散存储，采用链式表示结构，简称"链式存储"

#### 3.2顺序表

>将线性表中的各个元素一次存放在一组地址连续的存储单元中，通常将这种方式存储的线性表成为线性表。

#### 3.3顺序表的实现

- 定义结构体：

```c
typedef struct{
    dataType list[maxSize];
    int length;
}SeList;				
```

其中，dataType表示元素类型，seList是结构体类型名。

定义一个顺序表：SeList L;

顶一个顺序表指针：SeList* L;

(1) 初始化线性表：

（1）初始化线性表

```c
void InitList(SeqList *L){
    L->length =0; //把线性表的长度设为0
}
```

（2）线性表非空判断

```c
int ListEmpty(SeqList *L){
    if(L->length == 0)
        return 1;
    else
        return 0;
}
```

（3）线性表清空

```c
void ClearList(SeqList *L){//线性表清空。
	L->length =0; //把线性表的长度设为0
}
```



（4）按序号查找

```c
int GetElem(SeqList *L, int i, DataType *e){
//查找线性表中第i个元素，查找成功将该值返回给e，并返回1表示成功，反正返回-1表失败。
    if(i < 1 || i > L->length){
    	return -1;
	}
    *e = L->list[i - 1];
    return 1;
}
```



（5）按内容查找

```c
int LocateElem(SeqList *L, DataType e){
//查找线性表中元素值为e的元素
    int i;
    for (i = 0; i < L->length ; i++)
        if(L->list[i] == e){
        	return i + 1;
		}   
    return 0;//找不到返回0
}
```



（6）插入操作

```c
//在顺序表的第i个位置插入元素e，成功返回1，
//失败返回-1，顺序表满了返回0
int InsertList(SeqList *L, int i, DataType e){
    int j;
    if(i < 1 || i > L->length + 1){
        return -1;
    }
    else if(L->length >= MaxSize){
        return 0;
    }else{
        for(j = L->length; j >= i; j--){
            L->list[j] = L->list[j-1];
        }
        L->list[i-1] =e ;//插入元素到i个位置
        L->length = L->length + 1;
        return 1;
    }
}
```



（7）删除操作

觉得文章有帮助，不妨请我喝杯 Coffee，祝福好心人年年高升！



（8）返回线性表个数

```c
int ListLength(SeqList *L){//返回线性表L的元素个数。
	return L->length;
}
```



（9）打印线性表

```c
void PrintList(SeqList *L){//打印线性表,即顺序表遍历
	int i;
	for(i = 0; i < L->length; i++){
		printf("%d\n", L->list[i]);
	}
} 
```



（10）主函数调用测试 main()

```c
int main(){	
	SeqList *L;
	L = (SeqList *)malloc(sizeof(SeqList));//申请内存空间
	//L->length = 10;
	printf("初始化数组------\n");
	//测试初始化数组长度为0 
	InitList(L);
	printf("插入节点------\n");
	//测试插入数据元素
	InsertList(L, 1, 55);
	InsertList(L, 2, 57);	
	InsertList(L, 3, 78);
	InsertList(L, 2, 89);
	//查看线性表是否为空 
	if(ListEmpty(L) == 1){
		printf("线性表为空\n"); 
	}else{
		printf("线性表不为空\n"); 
	}
	//测试 打印线性表
	PrintList(L) ;
	int a = 123;
	int *p = &a;
	printf("删除节点------\n");
	//删除测试
	DeleteList(L, 2, p); 
	printf("%d\n",*p);
	printf("删除节点后------\n");
	//测试 打印线性表
	PrintList(L) ;
	int l = ListLength(L);
	printf("线性表长度为%d\n",l);
	//查找元素
	//按内容查找 
	if(LocateElem(L, 55)){
		printf("找到\n"); 
	} 
	//按序号查找 
	GetElem(L, 2, p);
	printf("%d\n",*p); 
	return 0;
}
```

> 另一种不需要申请内存空间的

```c
#include <stdio.h>
#define MaxSize 100
//定义数据类型 
typedef int DataType;
typedef struct{
	//线性数组 
    DataType list[MaxSize];
    //数组长度 
    int length;
}SeqList;
//初始化线性表 
void InitList(SeqList *L){
    L->length =0; //把线性表的长度设为0
}

int ListEmpty(SeqList L){
    if(L.length == 0)
        return 1;
    else
        return 0;
}

void ClearList(SeqList *L){//线性表清空。
	L->length =0; //把线性表的长度设为0
}

int GetElem(SeqList L, int i, DataType *e){
//查找线性表中第i个元素，查找成功将该值返回给e，并返回1表示成功，反正返回-1表失败。
    if(i < 1 || i > L.length){
    	return -1;
	}
    *e = L.list[i - 1];
    return 1;
}

int LocateElem(SeqList L, DataType e){
//查找线性表中元素值为e的元素
    int i;
    for (i = 0; i < L.length ; i++)
        if(L.list[i] == e){
        	return i + 1;
		}   
    return 0;//找不到返回0
}

//在顺序表的第i个位置插入元素e，成功返回1，失败返回-1，顺序表满了返回0
int InsertList(SeqList *L, int i, DataType e){
    int j;
    if(i < 1 || i > L->length + 1){
        return -1;
    }
    else if(L->length >= MaxSize){
        return 0;
    }else{
        for(j = L->length; j >= i; j--){
            L->list[j] = L->list[j-1];
        }
        L->list[i-1] =e ;//插入元素到i个位置
        L->length = L->length + 1;
        return 1;
    }
}

int DeleteList(SeqList *L, int i, DataType *e){
    int j;
    if(L->length <= 0){
        return 0;
    }
    else if(i < 1 || i > L->length){
        return -1;
    }else{
        *e = L->list[i-1];
        for(j = i;j <= L->length-1; j++){
            L->list[j-1] = L->list[j];
        }
        L->length = L->length - 1;
        return 1;
     }
}

int ListLength(SeqList L){//返回线性表L的元素个数。
	return L.length;
}

void PrintList(SeqList L){//打印线性表,即顺序表遍历
	int i;
	for(i = 0; i < L.length; i++){
		printf("%d\n", L.list[i]);
	}
} 
    
int main(){
	
	SeqList L;
	//L.length = 0;
	//L = (SeqList *)malloc(sizeof(SeqList));//申请内存空间
	//L->length = 10;
	printf("初始化数组------\n");
	//测试初始化数组长度为0 
	InitList(&L);
	printf("插入节点------\n");
	//测试插入数据元素
	InsertList(&L, 1, 55);
	InsertList(&L, 2, 57);	
	InsertList(&L, 3, 78);
	InsertList(&L, 2, 89);
	//查看线性表是否为空 
	if(ListEmpty(L) == 1){
		printf("线性表为空\n"); 
	}else{
		printf("线性表不为空\n"); 
	}
	
	//测试 打印线性表
	PrintList(L) ;
	int a = 123;
	int *p = &a;
	printf("删除节点------\n");
	//删除测试
	DeleteList(&L, 2, p); 
	printf("%d\n",*p);
	printf("删除节点后------\n");
	//测试 打印线性表
	PrintList(L) ;
	int l = ListLength(L);
	printf("线性表长度为%d\n",l);
	//查找元素
	//按内容查找 
	if(LocateElem(L, 55)){
		printf("找到\n"); 
	} 
	//按序号查找 
	GetElem(L, 2, p);
	printf("%d\n",*p); 
	return 0;
}
```

顺序表的优缺点：

>- 优点：无须关心表中元素之间的关系，所以不用增加额外的存储空间；可以快速地取表中任意位置的元素。
>- 缺点：插入和删除操作需要移动大量元素。使用前需事先分配好内存空间，当线性表长度变化较大时，难以确定存储空间的容量。分配空间过大会造成存储空间的巨大浪费，分配的空间过小，难以适应问题的需求

#### 4.1链式表

>链式表包括单链表，双链表，循环链表，循环单链表等

#### 4.2单链表

```c
typedef int dataType;
typedef struct Node{
    dataType data;
    struct Node* next;
}LinkList;
```

（1）初始化单链表

```c
LinkList * InitList(LinkList *p){
	p = (LinkList *)malloc(sizeof(LinkList));
	if(!p){
		exit(-1);//exit函数，退出程序。
	}
	p->next = NULL;
	return p;
}
```

!> 真正使用的时候，直接在 CreateList 中定义即可，如下写法，根据实际需求使用：

```c
LinkList *q = (LinkList *)malloc(sizeof(LinkList));
if (!q){
	exit(-1); //exit函数，退出程序。
}	
LinkList * r = q; //创建尾指针指向尾节点
r->next = NULL;
```

或者：

```c
LinkList *q = (LinkList *)malloc(sizeof(LinkList));
if (!q){
	exit(-1); //exit函数，退出程序。
}	
q = NULL;
```

或者：

```c
LinkList *q = (LinkList *)malloc(sizeof(LinkList));
if (!q){
	exit(-1); //exit函数，退出程序。
}	
q->next = NULL;
```

（2）单链表非空判断

```c
int ListEmpty(LinkList *p){
	int flag = 0;
	if(!p){
		flag = 1;
	}
	return flag;
}
```

（3）按序号查询操作

```c
//按序号查找单链表中第i个结点
LinkList *GetElem(LinkList *head,int i){
    LinkList *p;
    int j = 0;
    if(ListEmpty(head)||i<1){ //如果链表为空
        return NULL;
    }
    p = head;
    while(p->next !=NULL && j<i-1){//保证p的下个结点不为空
        p = p->next;
        j++;
    }
    if(j==i-1)//找到第i个结点
        return p;
    else
        return NULL;
}
```



（4）按内容查找操作

```c
//按内容查找单链表中元素值为e的元素
int LocateElem(LinkList *head,DataType e){
	int flag = 0;
    LinkList *p;
    p = head->next; //指针p指向第一个结点
    while(p){
        if(p->data != e){
            p=p->next;//继续下一个
        }else{
        	flag = 1;
            break;
        }
    }
    return flag;
}
```



（5）定位操作

```c
int LocatePos(LinkList *head,DataType e){
    LinkList *p;//定义一个指向单链表的结点的指针p
    int i;
    if(ListEmpty(head))//非空判断
        return 0;
    p = head->next;//指针p指向一个结点
    i =1;
    while(p){
        if(p->data==e)
            return i;
        else
        {
            p=p->next;//指向下一个结点
            i++;
        }
    }
    if(!p)//如果没有找到与e相等的元素
         return 0;
} 
```



（6）插入新数据元素 e 到 i 位置

```c
int InsertList(LinkList *head,int i,DataType e){
    LinkList *pre,*p;//定义第i个元素的前驱结点指针pre，新生结点指针p
    int j = 0;
    pre = head; //指针pre指向头结点
    while(pre->next != NULL && j < i-1){ //循环直到直到i元素前驱结点
        pre = pre->next;
        j++;
    }
    if(j != i-1)//如果没找到，插入位置出错
        return 0;
    //新生一个结点
    p = (LinkList *)malloc(sizeof(LinkList));
    if(!p){
        exit(-1);
    }
    p->data =e; //将e赋值给结点的数据域
    p->next = pre->next;
    pre->next =p;
    return 1;
}
```



（7）删除第 i 个结点

```c
int DeleteList(LinkList *head,int i,DataType *e){
    LinkList *pre,*p;
    int j = 0;
    pre = head;
    while(pre->next!=NULL && pre->next->next != NULL && j<i-1){
        pre = pre->next;    
        j++;
    }
    if(j!=i-1){
        return 0;
    }
    //指针p指向单链表中的第i个结点,并将该结点数据域值赋值给e
    p = pre->next;
    *e =p->data;
    //将前驱结点的指针域指向要删除结点的下一个结点
    pre->next =p->next;
    free(p);//释放p指向的结点
    return 1; 
}
```



（8）打印单链表

```c
void PrintList(LinkList * p){//遍历输出
	LinkList *q;
	if (ListEmpty(p)){
		printf("链表为空！\n");
	}else{
		q = p->next; //使指针指向下一个节点
		printf("链表中的数据为：\n");
		while (q){//q!=NULL
			//printf("%d ", q->data);
			if(q->next){
				printf("%d->", q->data);
			}else{
				printf("%d", q->data);
			}
			q = q->next;
		}
		printf("\n");
	}
}
```



（9）主函数调用测试 main()

```c
int main(){
	LinkList *p; //创建头指针，用来存放头结点的地址。
	p = CreateList(); //CreateList()函数动态创建链表并返回头结点的地址。
	
	PrintList(p); //打印单链表数据 
	InsertList(p, 1, 23);
    PrintList(p); //打印单链表数据 
    int x;
    DeleteList(p,2,&x);
    PrintList(p); //打印单链表数据 
    printf("删除 %d\n",x);
    LinkList *q;
	q = GetElem(p,2);
	printf("查找到%d\n",q->data);
	if(LocateElem(p,23)==1){
		printf("找到\n"); 
	}
	int i = LocatePos(p,23);
	printf("%d\n",i);
	return 0;
}
```



> 简单的单链表创建输出数据：

```c
#include <stdio.h>
#include <stdlib.h>

//定义数据类型 
typedef int DataType;
typedef struct Node{
    DataType data;//创建数据域 
    struct Node *next;//创建指针域 
}LinkList;

LinkList * CreateList(){ 
    //函数返回值为LinkList * 类型。
	int len, i, x;
	LinkList *q = (LinkList *)malloc(sizeof(LinkList));
	if (!q){
		printf("分配头结点空间失败，程序终止！\n");
		exit(-1); //exit函数，退出程序。
	}	
	LinkList * r = q; //创建尾指针指向尾节点
	r->next = NULL;
	printf("请输入链表的节点个数：len = ");
	scanf("%d", &len);
	for (i=0; i<len; ++i){
		printf("请输入第%d个节点的值：", i+1);
		scanf("%d", &x);
		LinkList *p = (LinkList *)malloc(sizeof(LinkList)); 
		//链表的不连续性在于它的内存空间在不断地一个个分配
		if (!p){
			printf("分配空间失败，程序终止！\n");
			exit(-1);
		}
		p->data = x;
		r->next = p;
		p->next = NULL;
		r = p; //递归
	}
	return q;
}

void PrintList(LinkList * p){//遍历输出
	LinkList *q;
	if (isEmpty(p)){
		printf("链表为空！\n");
	}else{
		q = p->next; //使指针指向下一个节点
		printf("链表中的数据为：\n");
		while (q){//q!=NULL
			printf("%d  ", q->data);
			q = q->next;
		}
		printf("\n");
	}
}
 
int isEmpty(LinkList *p){
	int flag = 0;
	if(!p){
		flag = 1;
	}
	return flag;
}

int main(){
	LinkList * p; //创建头指针，用来存放头结点的地址。
	p = CreateList(); //CreateList()函数动态创建链表并返回头结点的地址。	
	PrintList(p); //打印单链表数据 
	return 0;
}
```

#### 4.3双链表

#### 4.4循环链表

#### 4.5循环双链表