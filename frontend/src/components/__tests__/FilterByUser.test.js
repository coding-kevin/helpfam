import FilterByUser from "../FilterByUser";
import { render, screen, cleanup } from "@testing-library/react";

test("should render user filter", () => {
  let ticket = [
    {
      title: "Mouse broken",
      description: "Won't turn on",
      submittedBy: "Jason",
      worknotes: [
        {
          timestamp: "2022-07-17T02:22:15.056Z",
          worknotes: "Requested replacement mouse",
          author: "Sarah",
        },
        {
          timestamp: "2022-07-17T02:22:15.056Z",
          worknotes: "Tried replacing batteries but still not working",
          author: "Fred",
        },
        {
          timestamp: "2022-06-207T02:12:15.123Z",
          worknotes: "Batteries seemed dead",
          author: "Sarah",
        },
      ],
      resolved: false,
      visible: true,
    },
  ];

  render(<FilterByUser ticket={ticket} />);
  const navbar = screen.getByTestId("user-filter");
  expect(navbar).toBeInTheDocument;
});
