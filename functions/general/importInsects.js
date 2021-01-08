import csv from "csv-parser";
import fs from "fs";

function spacesClean(string) {
  let splitted = string.split("");
  // Clean the spaces at the beginning of the string
  while (splitted[0] === " ") {
    splitted.splice(0, 1);
  }
  // Clean the spaces at the end of the string
  while (splitted[splitted.length - 1] === " ") {
    splitted.splice(splitted.length - 1, 1);
  }

  return splitted.join("");
}

export default async function importArticles(models) {
  try {
    // Create an empty array for promises
    let promisesArray = [];

    // create read stream to put csv datas in our object
    fs.createReadStream("functions/general/test-insectos.csv")
      .pipe(csv({ separator: `\;` }))
      .on("data", async (row) => {
        let newObject = { ...row };

        // Check if there is a sub-order
        let theOrder = row.order.split("(");
        newObject.order = {
          main: theOrder[0],
          sub: theOrder[1] ? theOrder[1].split(")")[0] : null,
        };

        // Split the ones who have to be splitted
        newObject.commonNames = row.commonNames.split(",");
        newObject.eatableStates = row.eatableStates.split(",");

        // Manage the booleans
        newObject.isSold = row.isSold === "TRUE";
        newObject.isAutoConsumed = row.isAutoConsumed === "TRUE";
        newObject.isComestible = row.isComestible === "TRUE";
        newObject.isMedicinal = row.isMedicinal === "TRUE";
        newObject.isTradicional = row.isTradicional === "TRUE";

        // Manage the articles refs
        let theReferences = row.references.split(",");
        let theRefTab = [];
        for (let i = 0; i < theReferences.length; i++) {
          let theArticle = await models.Article.findOne({
            clave: spacesClean(theReferences[i]),
          });
          if (theArticle) {
            theRefTab.push({
              _id: theArticle._id,
              clave: spacesClean(theReferences[i]),
            });
          } else {
            console.log(
              "Error, the following ref has not been found",
              `|${theReferences[i]}|`
            );
          }
        }
        newObject.references = theRefTab;

        let estadosList = row.estados.split(",");
        newObject.estados = [];

        // Save it to get the ID
        let newInsect = await new models.Insect(newObject).save();

        // Add the estados refs
        for (let i = 0; i < estadosList.length; i++) {
          let stateName = spacesClean(estadosList[i]); /* .replace(" ", ""); */
          let theState = await models.Estado.findOne({
            name: stateName,
          });

          if (theState) {
            // Add the insect to the state
            theState.insects.push(newInsect._id);
            promisesArray.push(theState.save());
            // Add the state to the insect
            newInsect.estados.push(theState._id);
          } else {
            console.log("State not found", `|${estadosList[i]}|`);
          }
        }

        promisesArray.push(newInsect.save());
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

/* 

Estado de Mexico
Ciudad de Mexico
Cosmopolita --> not found

*/
