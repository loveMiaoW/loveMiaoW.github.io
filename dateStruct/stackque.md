### 栈和队列

![在这里插入图片描述](https://img-blog.csdnimg.cn/1ce20819fd4e45c48a5fd0e25fac5463.png)

### 4.1 栈

> 栈是只能在表尾进行插入或删除操作的线性表，通常我们称表尾端为栈顶，表头端为栈底，它是一种先进后出的线性表，既只能在表尾端插入元素，称为入栈，也只能在表尾端删除元素，称为退栈。栈有时又叫做 LIFO (后进先出) 表

![在这里插入图片描述](https://img-blog.csdnimg.cn/8b0a4697cb1841c28a07a0bf58f05492.png)

栈既然也是线性表，那么它也有顺序存储结构和链式存储结构两种表示方法，这两种表示方法实现类似。

通过栈可以解决很多问题，例如数值转换、括号匹配、迷宫求解、表达式求值和汉诺塔等等问题。

#### 4.1.1 栈的顺序存储

##### 4.1.1.1 存储结构

> 栈的存储结构用C语言描述：

```c
#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define OK 1
#define ERROR 0
#define OVERFLOW -2
#define INIT_SIZE 20
#define INCREMENT_SIZE 5

typedef int SElemType;
typedef int Status;

/*
 * 存储结构
 */
typedef struct
{
    SElemType *base;    //栈尾指针
    SElemType *top;        //栈顶指针
    int size;            //栈的大小
}SqStack;
```

##### 4.1.1.2 基本运算

栈的基本运算如下：

（1）初始化栈

```c
/*
 * 初始化栈
 */
Status InitStack(SqStack *S)
{
    S->base = (SElemType*) malloc(INIT_SIZE * sizeof(SElemType));
    if (!S->base)
    {
        exit(OVERFLOW);
    }
    S->top = S->base;
    S->size = INIT_SIZE;
    return OK;
}
```

（2）压栈

压栈的算法如下：

- (1) 判断是否栈满，若满则出错，需要重新分配空间
- (2) 元素 e 压入栈顶
- (3) 栈顶指针加 1

```c
/*
 * 压栈
 */
Status Push(SqStack *S, SElemType e)
{
    if ((S->top - S->base) / sizeof(SElemType) >= S->size)
    {
        S->base = (SElemType*) realloc(S->base, (S->size + INCREMENT_SIZE) * sizeof(SElemType));
        if (!S->base)
        {
            exit(OVERFLOW);
        }
        S->top = S->base + S->size;
        S->size += INCREMENT_SIZE;
    }
    *S->top = e;
    S->top++;
    return OK;
}
```

（3）退栈

退栈的算法流程如下：

- (1) 判断是否栈空，若空则出错
- (2) 获取栈顶元素 e
- (3) 栈顶指针减 1

```c
/*
 * 退栈
 */
Status Pop(SqStack *S, SElemType *e)
{
    if (S->top == S->base)
    {
        return ERROR;
    }
    S->top--;
    *e = *S->top;
    return OK;
}
```

（4）销毁栈

```c
/*
 * 销毁栈
 */
Status DestroyStack(SqStack *S)
{
    free(S->base);
    S->base = NULL;
    S->top = NULL;
    S->size = 0;
    return OK;
}
```

（5）清空栈

```c
/*
 * 清空栈
 */
Status ClearStack(SqStack *S)
{
    S->top = S->base;
    return OK;
}
```

（6）判空

```c
/*
 * 判断栈是否为空
 */
Status IsEmpty(SqStack S)
{
    if (S.top == S.base)
    {
        return TRUE;
    }
    else
        return FALSE;
}
```

（7）获取栈的长度

```c
/*
 * 获取栈的长度
 */
int GetLength(SqStack S)
{
    return S.top - S.base;
}
```

（8）获取栈顶元素

```c
/*
 * 获取栈顶元素
 */
Status GetTop(SqStack S, SElemType *e)
{
    if (S.top > S.base)
    {
        *e = *(--S.top);
        return OK;
    }
    else
    {
        return ERROR;
    }
}
```

（9）访问元素

```c
/*
 * 访问元素
 */
void visit(SElemType e)
{
    printf("%d ", e);
}
```

（10）遍历栈

```c
/*
 * 遍历栈
 */
Status TraverseStack(SqStack S, void (*visit)(SElemType))
{
    while (S.top > S.base)
    {
        visit(*S.base);
        S.base++;
    }
    return OK;
}
```

（11）主函数测试

```c
int main()
{
    SqStack S;
    if (InitStack(&S))
    {
        SElemType e;
        int i;

        printf("init_success\n");

        if (IsEmpty(S))
        {
            printf("Stack is empty\n");
        }

        for (i = 0; i < 10; i++)
        {
            Push(&S, i);
        }

        GetTop(S, &e);
        printf("The first element is %d\n", e);

        printf("length is %d\n", GetLength(S));

        Pop(&S, &e);
        printf("Pop element is %d\n", e);

        TraverseStack(S, *visit);

        if (DestroyStack(&S))
        {
            printf("\ndestroy_success\n");
        }
    }
}
```

##### 4.1.1.3 完整代码

```c
#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define OK 1
#define ERROR 0
#define OVERFLOW -2
#define INIT_SIZE 20
#define INCREMENT_SIZE 5

typedef int SElemType;
typedef int Status;

/*
 * 存储结构
 */
typedef struct
{
    SElemType *base;    //栈尾指针
    SElemType *top;        //栈顶指针
    int size;            //栈的大小
}SqStack;

/*
 * 初始化栈
 */
Status InitStack(SqStack *S)
{
    S->base = (SElemType*) malloc(INIT_SIZE * sizeof(SElemType));
    if (!S->base)
    {
        exit(OVERFLOW);
    }
    S->top = S->base;
    S->size = INIT_SIZE;
    return OK;
}

/*
 * 销毁栈
 */
Status DestroyStack(SqStack *S)
{
    free(S->base);
    S->base = NULL;
    S->top = NULL;
    S->size = 0;
    return OK;
}

/*
 * 清空栈
 */
Status ClearStack(SqStack *S)
{
    S->top = S->base;
    return OK;
}

/*
 * 判断栈是否为空
 */
Status IsEmpty(SqStack S)
{
    if (S.top == S.base)
    {
        return TRUE;
    }
    else
        return FALSE;
}

/*
 * 获取栈的长度
 */
int GetLength(SqStack S)
{
    return S.top - S.base;
}


/*
 * 获取栈顶元素
 */
Status GetTop(SqStack S, SElemType *e)
{
    if (S.top > S.base)
    {
        *e = *(--S.top);
        return OK;
    }
    else
    {
        return ERROR;
    }
}

/*
 * 压栈
 */
Status Push(SqStack *S, SElemType e)
{
    if ((S->top - S->base) / sizeof(SElemType) >= S->size)
    {
        S->base = (SElemType*) realloc(S->base, (S->size + INCREMENT_SIZE) * sizeof(SElemType));
        if (!S->base)
        {
            exit(OVERFLOW);
        }
        S->top = S->base + S->size;
        S->size += INCREMENT_SIZE;
    }
    *S->top = e;
    S->top++;
    return OK;
}

/*
 * 退栈
 */
Status Pop(SqStack *S, SElemType *e)
{
    if (S->top == S->base)
    {
        return ERROR;
    }
    S->top--;
    *e = *S->top;
    return OK;
}

/*
 * 访问元素
 */
void visit(SElemType e)
{
    printf("%d ", e);
}

/*
 * 遍历栈
 */
Status TraverseStack(SqStack S, void (*visit)(SElemType))
{
    while (S.top > S.base)
    {
        visit(*S.base);
        S.base++;
    }
    return OK;
}

int main()
{
    SqStack S;
    if (InitStack(&S))
    {
        SElemType e;
        int i;

        printf("init_success\n");

        if (IsEmpty(S))
        {
            printf("Stack is empty\n");
        }

        for (i = 0; i < 10; i++)
        {
            Push(&S, i);
        }

        GetTop(S, &e);
        printf("The first element is %d\n", e);

        printf("length is %d\n", GetLength(S));

        Pop(&S, &e);
        printf("Pop element is %d\n", e);

        TraverseStack(S, *visit);

        if (DestroyStack(&S))
        {
            printf("\ndestroy_success\n");
        }
    }
}
```

### 4.2 队列

>  队列是一种先进先出的线性表，只能在一端插入元素，在另一端删除元素，如下图所示，允许插入元素的一端称为队尾，允许删除元素的一端称为队头。

![在这里插入图片描述](https://img-blog.csdnimg.cn/62e03a3ff9b848fc90c23d08c6545131.png)

队列也一样有顺序和链式存储结构两种表示方法。

#### 4.2.1 队列的链式存储

##### 4.2.1.1 存储结构

队列的存储结构用C语言描述：

```c
#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define OK 1
#define ERROR 0
#define OVERFLOW -2

typedef int QElemType;
typedef int Status;

/*
 * 存储结构
 */
typedef struct QNode
{
    QElemType data;
    struct QNode *next;
}QNode, *QueuePtr;
```

##### 4.2.1.2 基本运算

队列的基本运算如下：

（1）初始化队列

```c
/*
 * 初始化队列
 */
Status InitQueue(LinkQueue *Q)
{
    Q->front = Q->rear = (QueuePtr) malloc(sizeof(QNode));
    if (!Q->front)
    {
        exit(OVERFLOW);
    }
    Q->front->next = NULL;
    return OK;
}
```

（2）销毁队列

```c
/*
 * 销毁队列
 */
Status DestroyQueue(LinkQueue *Q)
{
    while (Q->front)
    {
        Q->rear = Q->front->next;
        free(Q->front);
        Q->front = Q->rear;
    }
    return OK;
}
```

（3）清空队列

```c
/*
 * 清空队列
 */
Status ClearQueue(LinkQueue *Q)
{
    DestroyQueue(Q);
    InitQueue(Q);
    return OK;
}
```

（4）判空

```c
/*
 * 判断队列是否为空
 */
Status IsEmpty(LinkQueue Q)
{
    if (Q.front->next == NULL)
    {
        return TRUE;
    }
    else
    {
        return FALSE;
    }
}
```

（5）获取队列的长度

```c
/*
 * 获取队列的长度
 */
int GetLength(LinkQueue Q)
{
    int i = 0;
    QueuePtr p = Q.front;
    while (Q.rear != p)
    {
        i++;
        p = p->next;
    }
    return i;
}
```

（6）获取队头元素

```c
/*
 * 获取队头元素
 */
Status GetHead(LinkQueue Q, QElemType *e)
{
    QueuePtr p;
    if (Q.front == Q.rear)
    {
        return ERROR;
    }
    p = Q.front->next;
    *e = p->data;
    return OK;
}
```

（7）入队

```c
/*
 * 入队
 */
Status EnQueue(LinkQueue *Q, QElemType e)
{
    QueuePtr p = (QueuePtr) malloc(sizeof(QNode));
    if (!p)
    {
        exit(OVERFLOW);
    }
    p->data = e;
    p->next = NULL;
    Q->rear->next = p;
    Q->rear = p;
    return OK;
}
```

（8）出队

```c
/*
 * 出队
 */
Status DeQueue(LinkQueue *Q, QElemType *e)
{
    QueuePtr p;
    if (Q->front == Q->rear)
    {
        return ERROR;
    }
    p = Q->front->next;
    *e = p->data;
    Q->front->next = p->next;
    if (Q->rear == p)
    {
        Q->rear = Q->front;
    }
    free(p);
    return OK;
}
```

（9）访问元素

```c
/*
 * 访问元素
 */
void visit(QElemType e)
{
    printf("%d ", e);
}
```

（10）遍历队列

```c
/*
 * 遍历队列
 */
Status TraverseQueue(LinkQueue Q, void (*visit)(QElemType))
{
    QueuePtr p = Q.front->next;
    while (p)
    {
        visit(p->data);
        p = p->next;
    }
    return OK;
}
```

（11）主函数测试

```c
int main()
{
    LinkQueue Q;
    if (InitQueue(&Q))
    {
        QElemType e;
        int i;

        printf("init_success\n");

        if (IsEmpty(Q))
        {
            printf("queue is empty\n");
        }

        for (i = 0; i < 10; i++)
        {
            EnQueue(&Q, i);
        }

        GetHead(Q, &e);
        printf("The first element is %d\n", e);

        printf("length is %d\n", GetLength(Q));

        DeQueue(&Q, &e);
        printf("delete element is %d\n", e);

        TraverseQueue(Q, *visit);

        if (DestroyQueue(&Q))
        {
            printf("\ndestroy_success\n");
        }
    }
}
```

##### 4.2.1.3 完整代码

```c
#include <stdio.h>
#include <stdlib.h>

#define TRUE 1
#define FALSE 0
#define OK 1
#define ERROR 0
#define OVERFLOW -2

typedef int QElemType;
typedef int Status;

/*
 * 存储结构
 */
typedef struct QNode
{
    QElemType data;
    struct QNode *next;
}QNode, *QueuePtr;

typedef struct
{
    QueuePtr front;    //队头指针
    QueuePtr rear;    //队尾指针
}LinkQueue;

/*
 * 初始化队列
 */
Status InitQueue(LinkQueue *Q)
{
    Q->front = Q->rear = (QueuePtr) malloc(sizeof(QNode));
    if (!Q->front)
    {
        exit(OVERFLOW);
    }
    Q->front->next = NULL;
    return OK;
}

/*
 * 销毁队列
 */
Status DestroyQueue(LinkQueue *Q)
{
    while (Q->front)
    {
        Q->rear = Q->front->next;
        free(Q->front);
        Q->front = Q->rear;
    }
    return OK;
}

/*
 * 清空队列
 */
Status ClearQueue(LinkQueue *Q)
{
    DestroyQueue(Q);
    InitQueue(Q);
    return OK;
}

/*
 * 判断队列是否为空
 */
Status IsEmpty(LinkQueue Q)
{
    if (Q.front->next == NULL)
    {
        return TRUE;
    }
    else
    {
        return FALSE;
    }
}

/*
 * 获取队列的长度
 */
int GetLength(LinkQueue Q)
{
    int i = 0;
    QueuePtr p = Q.front;
    while (Q.rear != p)
    {
        i++;
        p = p->next;
    }
    return i;
}

/*
 * 获取队头元素
 */
Status GetHead(LinkQueue Q, QElemType *e)
{
    QueuePtr p;
    if (Q.front == Q.rear)
    {
        return ERROR;
    }
    p = Q.front->next;
    *e = p->data;
    return OK;
}

/*
 * 入队
 */
Status EnQueue(LinkQueue *Q, QElemType e)
{
    QueuePtr p = (QueuePtr) malloc(sizeof(QNode));
    if (!p)
    {
        exit(OVERFLOW);
    }
    p->data = e;
    p->next = NULL;
    Q->rear->next = p;
    Q->rear = p;
    return OK;
}

/*
 * 出队
 */
Status DeQueue(LinkQueue *Q, QElemType *e)
{
    QueuePtr p;
    if (Q->front == Q->rear)
    {
        return ERROR;
    }
    p = Q->front->next;
    *e = p->data;
    Q->front->next = p->next;
    if (Q->rear == p)
    {
        Q->rear = Q->front;
    }
    free(p);
    return OK;
}

/*
 * 访问元素
 */
void visit(QElemType e)
{
    printf("%d ", e);
}

/*
 * 遍历队列
 */
Status TraverseQueue(LinkQueue Q, void (*visit)(QElemType))
{
    QueuePtr p = Q.front->next;
    while (p)
    {
        visit(p->data);
        p = p->next;
    }
    return OK;
}

int main()
{
    LinkQueue Q;
    if (InitQueue(&Q))
    {
        QElemType e;
        int i;

        printf("init_success\n");

        if (IsEmpty(Q))
        {
            printf("queue is empty\n");
        }

        for (i = 0; i < 10; i++)
        {
            EnQueue(&Q, i);
        }

        GetHead(Q, &e);
        printf("The first element is %d\n", e);

        printf("length is %d\n", GetLength(Q));

        DeQueue(&Q, &e);
        printf("delete element is %d\n", e);

        TraverseQueue(Q, *visit);

        if (DestroyQueue(&Q))
        {
            printf("\ndestroy_success\n");
        }
    }
}
```

