class SimpleLinkedList {
    constructor() {
        this.head = null; // {value, next}
        this.length = 0; 
    }

    append(value) {
        const node = { value, next: null };
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }

    //добавления элемента в конец
    prepend(value) {
        this.head = { value, next: this.head };
        this.length++;
    }

    size() {
        return this.length;
    }

    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    remove(value) {
        //если пустой сптсок
        if (!this.head) return false;


        if (this.head.value === value) {
            this.head = this.head.next;
            this.length--;
            return true;
        }

        //удаление из середины или конца списка 
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.length--;
                return true;
            }
            current = current.next;
        }
        return false; // если значение не найдено
    }
}



const list = new SimpleLinkedList();
list.append(1);
list.append(2);
list.prepend(5); 
list.append(3);
console.log(list.size()); 
console.log(list.find(2)); 
list.remove(2); 
console.log(list.size()); 
console.log(list.find(2)); 
list.remove(5); 
console.log(list.size()); 