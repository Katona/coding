import { SubscriberCounter } from "./Solution";

describe("SubscriberCounter", () => {
    it("should work", () => {
        const counter = new SubscriberCounter(Array(24).fill(0));
        counter.update(0, 1);
        expect(counter.query(0, 0)).toBe(1);
        counter.update(23, 1);
        expect(counter.query(23, 23)).toBe(1);
        expect(counter.query(0, 23)).toBe(2);
        counter.update(12, 5);
        expect(counter.query(0, 23)).toBe(7);
        expect(counter.query(12, 23)).toBe(6);
        expect(counter.query(13, 23)).toBe(1);
        expect(counter.query(0, 12)).toBe(6);
        expect(counter.query(0, 11)).toBe(1);
    })
})