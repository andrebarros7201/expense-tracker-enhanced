import { beforeEach, describe, expect, it } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import BudgetForm from "@/components/layout/budget/budget-form";
import { Provider } from "react-redux";
import {
  legacy_configureStore as configureMockStore,
  MockStoreEnhanced,
} from "redux-mock-store";
import { RootState } from "@/store/store";
import { updateIncome } from "@/store/budgetSlice";

const mockStore = configureMockStore();
const initialState: RootState = {
  budget: {
    id: 1,
    income: 0,
    categories: ["House", "Food"],
    budgetItems: [],
    maxPercentage: 0,
  },
  investment: {
    years: 0,
    initialAmount: 0,
    monthlyContribution: 0,
    yearlyGrowth: 0,
    prediction: [],
  },
};

describe("BudgetForm", () => {
  let store: MockStoreEnhanced<RootState>;
  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
  });

  it("should render correctly", () => {
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>,
    );

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Percentage")).toBeInTheDocument();
    expect(screen.getByLabelText("Category")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Add New Item/i }),
    ).toBeInTheDocument();
  });

  it("should get all categories", () => {
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>,
    );
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(2);
  });

  it("allows users to input values and select a category", async () => {
    const user = UserEvent.setup();
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>,
    );

    await user.type(screen.getByLabelText("Name"), "Groceries");
    await user.type(screen.getByLabelText("Percentage"), "50");

    const categorySelect = screen.getByLabelText("Category");
    await user.selectOptions(categorySelect, "Food");

    expect(screen.getByLabelText("Name")).toHaveValue("Groceries");
    expect(screen.getByLabelText("Percentage")).toHaveValue(50);
    expect(categorySelect).toHaveValue("Food");
  });

  // TODO: fix this test - does not dispatch addBudgetItem action
  /*
  it("dispatches addBudgetItem when form is submitted", async () => {
    const user = UserEvent.setup();
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>,
    );

    await user.type(screen.getByLabelText("Name"), "Test1");
    await user.type(screen.getByLabelText("Percentage"), "50");
    await user.selectOptions(screen.getByLabelText("Category"), "House");
    await user.click(screen.getByRole("button", { name: "Add New Item" }));

    console.log("Dispatched actions:", store.getActions());
    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(
        addBudgetItem({
          name: "Test1",
          percentage: 50,
          category: "House",
        }),
      );
    });
  });
*/

  it("dispatches updateIncome when income input is changed", async () => {
    const user = UserEvent.setup();
    render(
      <Provider store={store}>
        <BudgetForm />
      </Provider>,
    );

    await user.type(screen.getByLabelText("Income"), "5000");

    await waitFor(() => {
      const actions = store.getActions();
      expect(actions).toContainEqual(updateIncome(5000));
    });
  });
});
