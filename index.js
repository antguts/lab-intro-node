class SortedList {
  constructor(items) {
    this.items=[]
    this.length=this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a,b)=>a-b)
    this.length=this.items.length
  }

  get(pos) {
    if(pos <= this.items.length){
      return this.items[pos]
    }else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length > 0){ 
      return this.items[this.items.length-1] 
     }else{ 
       throw new Error('EmptySortedList');
    }
  }

  min() {
    if(this.items.length > 0){ 
      return this.items[0] 
     }else{ 
       throw new Error('EmptySortedList');
    }
  }

  sum() {
    if(this.items.length<1)return 0
    return this.items.reduce((a,b)=>a+b)
  }

  avg() {
    return this.items.reduce((a,b)=>a+b) / this.items.length
  }
}

module.exports = SortedList;
