import path from "path";
import { movies, random, music } from "./data";
import { promises as fs } from "fs";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const type = req.query;
    try {
      if (type.type === "movies") {
        return res.json(movies);
      }
      if (type.type === "music") {
        return res.json(music);
      }
      if (type.type === "random") {
        return res.json(random);
      }
    } catch (error) {
      // Handle errors appropriately (e.g., return an error status code)
      return res.status(500).json({ message: "Failed to read data file" });
    }

    return res.status(404).json({ error: "Query not found." });
  }
}
