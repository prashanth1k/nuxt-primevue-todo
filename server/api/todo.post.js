import { todo } from "~/data/schema_todo";
import { db } from "../dbservice";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("todo body: ", body);
    const newTodo = { ...body };
    const resp = await db.insert(todo).values(newTodo).run();
    console.log("inserted todo: ", resp);

    const todoResp = await db
      .select()
      .from(todo)
      .where(eq(todo.id, resp?.lastInsertRowid))
      .get();

    return todoResp;
  } catch (e) {
    console.error("Error: ", e);
    throw createError(500, e);
  }
});
