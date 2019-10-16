// import { shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/App.vue";
import { Url } from "@/common/util/url";
describe("test:utils/url.js", () => {
  it("url.join", () => {
    expect(Url.join("a", "b")).toBe("a/b");
    expect(Url.join("a/", "b")).toBe("a/b");
    expect(Url.join("a", "/b")).toBe("a/b");
    expect(Url.join("a/", "/b")).toBe("a/b");
    expect(Url.join("/a/", "/b")).toBe("a/b");
    expect(Url.join("/a/", "/b/")).toBe("a/b");
  });
  it("url.isFullPath", () => {
    expect(Url.isFullPath("/a")).toBe(false);
    expect(Url.isFullPath("www.baidu.com/a/")).toBe(false);
    expect(Url.isFullPath("www.baidu.com/a")).toBe(false);
    expect(Url.isFullPath("http://www.baidu.com/a")).toBe(true);
    expect(Url.isFullPath("https://www.baidu.com/a")).toBe(true);
    expect(Url.isFullPath("https://www.baidu.com/a?a=10#list")).toBe(true);
    expect(Url.isFullPath("localhost/a?a=10#list")).toBe(true);
  });
  it("url.getParams", () => {
    expect(Url.getParams("www.baidu.com?a=10")).toEqual({ a: "10" });
    expect(Url.getParams("http://www.baidu.com?b=true")).toEqual({ b: "true" });
    expect(Url.getParams("https://www.baidu.com?c=abc")).toEqual({ c: "abc" });
    expect(Url.getParams("https://www.baidu.com?c=abc#list")).toEqual({
      c: "abc"
    });
  });
});
