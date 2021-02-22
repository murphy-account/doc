/**
 * 1 链表的内容 node+head+null
 * 2 head指向null
 * 3 size 统计element数量
 * 4 element 存放数据，next指向下一个节点
 * 5 实现 增加 删除 修改 查询 清空
 */

const { link } = require("fs")

 class Node{
     constructor(element,next){
         this.element = element
         this.next = next
     }
 }

 class LinkedList{
     constructor(hand,size){
         this.head = null
         this.size = 0
     }
     add(index,element){
        if(arguments.length === 1){
            element = index
            index = this.size
        }
        if(index<0 || index > this.size)throw new Error('cross the border')
        if(index === 0){ // 头部插入
            let head = this.head // 保存原有head的指向
            this.head = new Node(element,head) // 原有head指向作为插入的新节点的指向
        }else {
            let prevNode = this._getNode(index - 1)
            prevNode.next = new Node(element,prevnode.next)
        }
        this.size++
     }
 }

 const l1 = new LinkedList()
 l1.add('node1')
 console.log(l1);