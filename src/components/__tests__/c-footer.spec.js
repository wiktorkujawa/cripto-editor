import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CFooter from "../organisms/c-footer.vue";

describe("Footer", () => {
  it("renders properly", () => {
    const wrapper = mount(CFooter);
    expect(wrapper.text()).toContain("Copyright © Wiktor Kujawa");
  });
});
