import { Response, Request } from "express"
import { listYourselfService } from "../../services/user/listYourself.service";

export const listYourselfController = async (req: Request, res: Response) => {
  const { id } = req.user

  const user = await listYourselfService(id)

  return res.status(200).json(user)
};
