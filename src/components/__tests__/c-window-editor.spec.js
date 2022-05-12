import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CWindowEditor from "../organisms/c-window-editor.vue";

describe("Window Editor", () => {
  it("renders properly", () => {
    const wrapper = mount(CWindowEditor);
    expect(wrapper.text()).toContain("Editor");
  });
});

describe("Window Editor", () => {
  it("no double curly braces", () => {
    const wrapper = mount(CWindowEditor);
    expect(wrapper.find("#translation").text()).not.toContain(
      /\{{([^}]+)\}}/gi
    );
  });
});
