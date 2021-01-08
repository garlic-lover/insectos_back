import csv from "csv-parser";
import fs from "fs";

export default async function importArticles(models) {
  try {
    // Create an empty array for promises
    let promisesArray = [];

    // create read stream to put csv datas in our object
    fs.createReadStream("functions/general/biblio.csv")
      .pipe(csv({ separator: `\;` }))
      .on("data", (row) => {
        let newObject = { ...row };

        newObject.authors = row.authors.split(",");
        newObject.pages = row.pages.split("-");

        let newArticle = new models.Article(newObject);

        promisesArray.push(newArticle.save());
      })
      .on("end", () => {
        console.log("CSV file successfully processed");
      });
    await Promise.all(promisesArray);
    return;
  } catch (error) {
    console.log(error);
  }
}
