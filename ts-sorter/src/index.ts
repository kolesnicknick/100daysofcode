import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, -1, 3, 5, 0]);
numberCollection.sort()
console.log(numberCollection.data);

const charCollection = new CharacterCollection('HELLO NIko');
charCollection.sort()
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(0);
linkedList.add(-1);
linkedList.add(30);
linkedList.add(7);

linkedList.sort();
linkedList.print();
