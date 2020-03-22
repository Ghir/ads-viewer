import data from "../data";

export class CampaignsModelMock {
  find = () => {
    return { exec: () => data };
  };
  findOne = () => {
    return { exec: () => data[0] };
  };
  deleteMany = () => null;
  insertMany = () => null;
}