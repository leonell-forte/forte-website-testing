import { api } from "../lib/axios-config";
import { layoutQuery } from "../lib/queries/layout";
import { LayoutType } from "../lib/types/layout";

class LayoutService {
  async getLayoutData(): Promise<LayoutType> {
    const response = await api.post("", {
      query: layoutQuery,
    });

    return response.data.data;
  }
}

const layoutService = new LayoutService();

export default layoutService;
