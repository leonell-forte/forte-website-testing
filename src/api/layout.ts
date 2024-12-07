import { layoutQuery } from "../lib/queries/layout";
import { api } from "../lib/axios-config";
import { HeaderType } from "../lib/types/layout";

class LayoutService {
  async getLayoutData(): Promise<HeaderType> {
    const response = await api.post("", {
      query: layoutQuery,
    });

    return response.data.data.header;
  }
}

const layoutService = new LayoutService();

export default layoutService;
