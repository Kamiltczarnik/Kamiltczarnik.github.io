import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import ProjectsNew from "./ProjectsNew";
import { orderedProjects } from "../data/projects";

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

    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /selected work\./i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /a small, deliberate catalogue of things i've built/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /other work/i })
    ).toBeInTheDocument();
  });

  it("shows every project and includes a readable sluggr preview", () => {
    renderProjectsPage();

    orderedProjects.map((project) => project.name).forEach((projectName) => {
      expect(screen.getByText(projectName)).toBeInTheDocument();
    });

    expect(
      screen.getByText(/in development/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        /fantasy assistant delivering nfl and mlb insight through rcs conversations/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /learn more/i })
    ).toBeInTheDocument();
  });
});
