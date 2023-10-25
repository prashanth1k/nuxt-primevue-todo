import { user } from "~/data/schema_user";
import { db } from "../dbservice";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const newUser = { ...body };
    const resp = await db.insert(user).values(newUser).run();
    return resp;
  } catch (e) {
    console.error("Error: ", e);
    throw createError(500, e);
  }
});
