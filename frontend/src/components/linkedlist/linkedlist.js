class Node{
  constructor(reps, exercise){
    this.reps = reps;
    this.exercise = exercise;
    this.next = null;
  }
}

class ExerciseLinkedList {
  constructor(){
    this.head= null;
    this.tail = null;
    this.length = 0;
  }
  push(reps,exercise){
    let newNode = new Node(reps,exercise)
    if(!this.head){
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode
    }
    this.length +=1

    return newNode;

  }
  shift(){
    if(this.length === 0) return null;
    let oldHead = this.head;
    if(this.length === 1){
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
    }
    this.length --;
    return this;
        
  }

}

export default ExerciseLinkedList