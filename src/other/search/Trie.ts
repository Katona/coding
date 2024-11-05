class Trie {
  private nodes: Record<string, Trie> = {};

  public add(product: string) {
    if (product.length === 0) {
      this.nodes["*"] = new Trie();
      return;
    }
    const c = product.charAt(0);
    if (this.nodes[c] === undefined) this.nodes[c] = new Trie();
    this.nodes[c].add(product.slice(1));
  }

  public search(prefix: string, currPath = "", maxHits = 6): string[] {
    if (prefix.length === 0) {
      const chars = Object.keys(this.nodes).sort();
      let result = [];
      for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (result.length === maxHits) break;
        if (char === "*") {
            console.log("HIT FOUND", { currPath})
          result.push(currPath);
        } else {
          result.push(...this.search(char, currPath, maxHits - result.length));
        }
      }
      return result;
    }
    const c = prefix.charAt(0);
    if (this.nodes[c] === undefined) return [];
    return this.nodes[c].search(prefix.slice(1), currPath + c, maxHits);
  }
}

export default Trie;
