/*
计算全排列有递归算法，但此处需要使用状态机方式实现，故使用栈代替递归
 */
export default class Permutation{
    constructor(arr){
        if(!Array.isArray(arr) || !arr.length){
            throw new TypeError('Non-empty array required.');
        }
        this.__arrOrig=arr.slice();
        this.__reset();
    }
    __reset(){
        this.__arr=this.__arrOrig.slice();
        this.__stack=[
            {
                start:0,
                i:0
            }
        ];
    }
    [Symbol.iterator](){
        return this;
    }
    __swap(a,b){
        if(a==b){
            return this;
        }
        let temp=this.__arr[a];
        this.__arr[a]=this.__arr[b];
        this.__arr[b]=temp;
        return this;
    }
    __push(start){
        this.__stack.push({
            start,
            i:start
        });
        return this;
    }
    __pop(){
        this.__stack.pop();
        return this.__stack.length;
    }
    __top(){
        return this.__stack[this.__stack.length-1];
    }
    next(){
        let arrLength=this.__arr.length-1;
        while(this.__stack.length){
            if(this.__top().start>arrLength){
                let value=this.__arr.slice();
                if(!this.__pop()){
                    break;
                }
                this.__swap(this.__top().start,this.__top().i);
                this.__top().i++;
                return {
                    done:false,
                    value
                };
            }

            if(this.__top().i>arrLength){
                if(!this.__pop()){
                    break;
                }
                this.__swap(this.__top().start,this.__top().i);
                this.__top().i++;
                continue;
            }
            
            let {start,i}=this.__top();
            if(start!=i && (this.__arr[start] === this.__arr[i] || this.__arr[i] === this.__arr[i-1])){
                this.__top().i++;
                continue;
            }
            this.__swap(start,i);
            this.__push(start+1);
        }

        this.__reset();
        return {
            done:true
        }
    }
}
