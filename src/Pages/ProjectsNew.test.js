import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ProjectsNew from "./ProjectsNew";

jest.mock("framer-motion", () => {
  const React = require("react");

  const createMotionComponent = (tag) =>
    React.forwardRef(
      (
        {
          animate,
          custom,
          exit,
          initial,
          transition,
          variants,
          whileHover,
          whileInView,
          whileTap,
          ...props
        },
        ref
      ) => React.createElement(tag, { ref, ...props })
    );

  return {
    motion: new Proxy(
      {},
      {
        get: (_, tag) => createMotionComponent(tag),
      }
    ),
    useReducedMotion: () => true,
  };
});

function renderProjectsPage() {
  return render(
    <MemoryRouter
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
      initialEntries={["/projects"]}>
      <ProjectsNew />
    </MemoryRouter>
  );
}

describe("ProjectsNew", () => {
  it("renders the editorial projects structure for recruiters", () => {
    renderProjectsPage();

    expect(
      screen.getByRole("heading", { name: /projects that show the product and the build/i })
    ).toBeInTheDocument();
    expect(screen.getAllByText("Featured project").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Selected work").length).toBeGreaterThan(0);
    expect(
      screen.getByText(/recruiters should be able to understand the product surface/i)
    ).toBeInTheDocument();
  });

  it("shows every project and includes a readable sluggr preview", () => {
    renderProjectsPage();

    [
      "sluggr ai",
      "Lira AI",
      "StatScout",
      "Portfolio Website",
      "HOF Oracle",
      "PortfoliPro",
    ].forEach((projectName) => {
      expect(screen.getByText(projectName)).toBeInTheDocument();
    });

    expect(
      screen.getByLabelText(/sluggr ai readable conversation preview/i)
    ).toBeInTheDocument();
  });
});
