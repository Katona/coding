import Trie from "./Trie";

const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non auctor turpis. Nunc quis enim non lorem suscipit semper. Aliquam congue at quam ut venenatis. Vestibulum congue orci quis feugiat euismod. Duis varius ante non feugiat pharetra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec tincidunt eros. Mauris viverra viverra commodo. Phasellus ut justo felis. Maecenas eget massa tincidunt, dapibus ligula at, feugiat enim. Nullam rutrum urna in magna eleifend, ut lacinia lorem mollis. Aenean sapien tortor, luctus vel orci quis, maximus convallis mauris. Curabitur vitae lectus mauris.
Curabitur lobortis rhoncus sapien, at hendrerit diam molestie eget. Donec at libero in ex tristique cursus a ut orci. Fusce a dolor quis velit sagittis rhoncus lacinia ut justo. Praesent at interdum nibh. Aliquam in tempus est, eu mattis velit. Mauris blandit lorem in felis sollicitudin imperdiet. Sed vitae quam nibh. Phasellus posuere, felis a efficitur imperdiet, orci ex hendrerit tellus, quis facilisis nisl libero eget purus. Nullam egestas consequat arcu, vel tincidunt erat varius nec.
Maecenas placerat enim et nisi faucibus maximus. In hac habitasse platea dictumst. Pellentesque molestie sodales lacus ut porttitor. In hac habitasse platea dictumst. Aenean eu aliquam neque. Maecenas metus nisl, molestie in elementum ut, molestie id odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc quis justo efficitur, blandit purus nec, eleifend tortor. Integer sed eros eu nunc finibus ultrices sed euismod lacus. Ut ligula tellus, porttitor quis tellus id, dignissim ultrices eros. Sed in nulla vitae felis congue rutrum.
Etiam vestibulum massa vel mauris suscipit finibus. Sed a sollicitudin nibh, eget euismod tellus. Nunc tempor placerat metus sit amet fermentum. Proin varius tortor leo. Sed a magna tortor. Integer vitae ipsum nunc. Vestibulum lectus nulla, dictum quis volutpat a, commodo sit amet ex. Integer tincidunt sollicitudin est vel vehicula. Cras rhoncus ullamcorper iaculis. Mauris ac ligula non orci convallis rhoncus. Aliquam lobortis elit nec turpis mollis, placerat mollis purus scelerisque.
Nullam vel ultricies lorem, vel condimentum tellus. Nulla lacinia iaculis nulla, ut congue velit. Donec at orci eget neque hendrerit malesuada tempor vel lacus. Morbi semper turpis ac velit eleifend semper. Duis a lectus nec odio sagittis cursus vel a dui. Quisque maximus vitae lectus venenatis pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent pellentesque sodales tellus, non dapibus metus. Integer sed egestas orci. Nunc a gravida sem, vel porta justo.
`
describe("Trie", () => {
    it("should work", () => {
        const words = text.split("\r\n").flatMap(line => line.split(" "));
        const trie = new Trie();
        words.forEach(w => trie.add(w));
        console.log(trie.search("eg"))
    })
    it("should work 2", () => {
        const trie = new Trie();
        trie.add("prefix");
        trie.add("prefixed")
        console.log(trie.search("prefix"))
    })
    it("should work 3", () => {
        const trie = new Trie();
        trie.add("prefix");
        trie.add("prefixed")
        console.log(trie.search("a"))
    })
})