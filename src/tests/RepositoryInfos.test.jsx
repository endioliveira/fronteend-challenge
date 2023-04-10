import { render } from "@testing-library/react";
import { RepositoryInfos } from "../components/RepositoryInfos/index";

test("verificando se o componente está renderizando sem erros", () => {
  render(<RepositoryInfos />);
});
