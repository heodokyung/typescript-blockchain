// class Block {
//   constructor(private data: string) {

//   }
//   static hello() {
//     return "hi"
//   }
// }

// import { exit, init } from 'myPackage';
// init({
//   url:"true"
// })
// exit(1)

import crypto from 'crypto';

interface BlockShape {
  hash: string;
  prevHash: string;
  height: number;
  data: string;
}
class Block implements BlockShape {
  public hash: string;
  constructor(
    public readonly prevHash: string,
    public readonly height: number,
    public readonly data: string,
  ) {
    this.hash = Block.calcHash(prevHash, height, data);
  }

  static calcHash(prevHash: string, height: number, data: string) {
    const toHash = `${prevHash}${height}${data}`;
    return crypto.createHash('sha256').update(toHash).digest('hex');
  }
}

class Blockchain {
  private blocks: Block[];
  constructor() {
    this.blocks = [];
  }

  private getPrevHash() {
    if (this.blocks.length === 0) {
      return '';
    }
    return this.blocks[this.blocks.length - 1].hash;
  }
  public addBlock(data: string) {
    const makeBlock = new Block(this.getPrevHash(), this.blocks.length + 1, data);
    this.blocks.push(makeBlock);
  }

  public getBlocks() {
    return [...this.blocks];
  }
}

const blockchain = new Blockchain();

// 블록체인 생성
for (let i = 0; i < 30; i++) {
  blockchain.addBlock(`${i+1}번째 BlockChain`)
}

// Return값을 전개연산자로 원본이 아닌 복사배열을 전달함으로서 수정이 불가능하게 함
//  AS-IS: return this.blocks; =====>  TO-BE: return [...this.blocks];
// blockchain.getBlocks().push(new Block("xxxxxxx", 111111, "HACKEDDDDDDDDDDDD"))

// 속성을 Readonly 속성으로 변경함으로서 속성값이 변경되지 않게 함.
// blockchain.getBlocks()[blockchain.getBlocks().length - 1].data = "HACKEDDDDDDDDDDDDddd";

console.log('blockchain====>', blockchain.getBlocks())