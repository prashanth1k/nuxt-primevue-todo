import { todo } from "~/data/schema_todo";
import { db } from "../dbservice";

export default defineEventHandler(async (event) => {
  try {
    const resp = await db.select().from(todo).all();

    console.log("Search results - todo:", resp);

    return resp;
  } catch (e) {
    console.error("Error: ", e);
    throw createError(500, e);
  }
});
