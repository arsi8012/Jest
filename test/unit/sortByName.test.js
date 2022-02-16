const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
  it("The function sortByName does not work", () => {
    expect(sorting.sortByName([
      "Алые паруса",
      "Алые паруса",
      "Алые паруса",
    ])
    ).toEqual([
      "Алые паруса",
      "Алые паруса",
      "Алые паруса",
    ]);
  });
});