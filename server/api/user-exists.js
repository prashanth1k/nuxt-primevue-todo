import { user } from "~/data/schema_user";
import { db, sqlite } from "../dbservice";
import { eq } from "drizzle-orm";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log(
      "Initiated user find. Got body: ",
      body,
      " and search param: ",
      body?.email
    );

    const resp = await db
      .select()
      .from(user)
      .where(eq(user.email, body?.email || ""))
      .get();

    console.log("Search results:", resp);

    if (resp?.id != undefined) return { userExists: true };
    else return { userExists: false };
  } catch (e) {
    console.error("Error: ", e);
    throw createError(500, e);
  }
});
