import {Sorter} from './Sorter'
import {NumbersCollection} from './NumbersCollection'
import { charCollection} from './CharCollection'
import {LinkedList} from './LinkedList'
// const numbers = new NumbersCollection([20 , 3 , 4, 0 , -1])
// numbers.sort()
// console.log("numbers" + numbers.data)

// const strings= new charCollection('ewwqeqw32')
// strings.sort()
// console.log(strings.data)

const linkedList = new LinkedList()
linkedList.add(555)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(33)

linkedList.sort()
linkedList.print()