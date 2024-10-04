const generateBtn = document.querySelector(".generateBtn");
const editCurveWidth = document.querySelector(".editCurveWidth");
const editMiddleCurveWidth = document.querySelector(".editMiddleCurveWidth");
const editLowestCurveWidth = document.querySelector(".editLowestCurveWidth");
const editHighestLoopValue = document.querySelector(".editHighestLoopValue");
const editMiddleLoopValue = document.querySelector(".editMiddleLoopValue");
const editLowestLoopValue = document.querySelector(".editLowestLoopValue");
const editLongestLoopPercentage = document.querySelector(
  ".editLongestLoopPercentage"
);
const editMiddleLoopPercentage = document.querySelector(
  ".editMiddleLoopPercentage"
);
const editLowestLoopPercentage = document.querySelector(
  ".editLowestLoopPercentage"
);
const editLowestIntensityValueInHighestLoop = document.querySelector(
  ".editLowestIntensityValueInHighestLoop"
);
const editLowestIntensityValueInMiddleLoop = document.querySelector(
  ".editLowestIntensityValueInMiddleLoop"
);
const editLowestIntensityValueInLowestLoop = document.querySelector(
  ".editLowestIntensityValueInLowestLoop"
);
const editLoopStandardDeviation = document.querySelector(
  ".editLoopStandardDeviation"
);
const editMiddleLoopStandardDeviation = document.querySelector(
  ".editMiddleLoopStandardDeviation"
);
const editLowestLoopStandardDeviation = document.querySelector(
  ".editLowestLoopStandardDeviation"
);
const editIntensityStandardDeviation = document.querySelector(
  ".editIntensityStandardDeviation"
);
const editMiddleIntensityStandardDeviation = document.querySelector(
  ".editMiddleIntensityStandardDeviation"
);
const editLowestIntensityStandardDeviation = document.querySelector(
  ".editLowestIntensityStandardDeviation"
);
const volName = document.querySelector(".volName");
const editVolName = document.querySelector(".editVolName");

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

// Example usage to generate a random string of length 6
const randomString = generateRandomString(6);

let fileName = `vol${randomString}`;
const html = `<input class="volNameInput" type="text" value=${fileName} disabled="true" />`;
volName.insertAdjacentHTML("beforeend", html);

editVolName.addEventListener("click", () => {
  fileName = `vol${generateRandomString(6)}`;
  const VolNameInput = document.querySelector(".volNameInput");
  VolNameInput.value = fileName;
});

editCurveWidth.addEventListener("click", () => {
  const element = document.querySelector(`.curveWidth`);

  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor posi22tion to the end
});
editMiddleCurveWidth.addEventListener("click", () => {
  const element = document.querySelector(`.middleCurveWidth`);

  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestCurveWidth.addEventListener("click", () => {
  const element = document.querySelector(`.lowestCurveWidth`);

  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});

editHighestLoopValue.addEventListener("click", () => {
  const element = document.querySelector(`.highestLoopValue`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editMiddleLoopValue.addEventListener("click", () => {
  const element = document.querySelector(`.middleLoopValue`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestLoopValue.addEventListener("click", () => {
  const element = document.querySelector(`.lowestLoopValue`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLongestLoopPercentage.addEventListener("click", () => {
  const element = document.querySelector(`.highestLoopPercentage`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editMiddleLoopPercentage.addEventListener("click", () => {
  const element = document.querySelector(`.middleLoopPercentage`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestLoopPercentage.addEventListener("click", () => {
  const element = document.querySelector(`.lowestLoopPercentage`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestIntensityValueInHighestLoop.addEventListener("click", () => {
  const element = document.querySelector(`.lowestIntensityValueInHighestLoop`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestIntensityValueInMiddleLoop.addEventListener("click", () => {
  const element = document.querySelector(`.lowestIntensityValueInMiddleLoop`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestIntensityValueInLowestLoop.addEventListener("click", () => {
  const element = document.querySelector(`.lowestIntensityValueInLowestLoop`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLoopStandardDeviation.addEventListener("click", () => {
  const element = document.querySelector(`.loopStandardDeviation`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editMiddleLoopStandardDeviation.addEventListener("click", () => {
  const element = document.querySelector(`.middleLoopStandardDeviation`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestLoopStandardDeviation.addEventListener("click", () => {
  const element = document.querySelector(`.lowestLoopStandardDeviation`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editIntensityStandardDeviation.addEventListener("click", () => {
  const element = document.querySelector(`.intensityStandardDeviation`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editMiddleIntensityStandardDeviation.addEventListener("click", () => {
  const element = document.querySelector(`.middleIntensityStandardDeviation`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});
editLowestIntensityStandardDeviation.addEventListener("click", () => {
  const element = document.querySelector(`.lowestIntensityStandardDeviation`);
  element.disabled = false;
  element.focus();
  const length = element.value.length; // Get the length of the input value
  element.setSelectionRange(length, length); // Set cursor position to the end
});

generateBtn.addEventListener("click", async () => {
  generateBtn.disabled = true;
  generateBtn.style.cursor = "default";

  // Show loading spinner
  generateBtn.innerHTML =
    '<i class="fas fa-spinner fa-spin"></i> Processing...';

  const curveWidth = parseInt(document.querySelector(".curveWidth").value);
  const curveWidthMiddle = parseInt(
    document.querySelector(".middleCurveWidth").value
  );
  const curveWidthLowest = parseInt(
    document.querySelector(".lowestCurveWidth").value
  );
  const highestLoopPercentage = parseInt(
    document.querySelector(".highestLoopPercentage").value
  );
  const middleLoopPercentage = parseInt(
    document.querySelector(".middleLoopPercentage").value
  );
  const lowestLoopPercentage = parseInt(
    document.querySelector(".lowestLoopPercentage").value
  );
  const dataSize = parseInt(document.querySelector(".dataSize")?.value) || 512;
  const alphaValue =
    parseFloat(document.querySelector(".alphaVal")?.value) || 0.0;
  const highestLoopValue = parseInt(
    document.querySelector(".highestLoopValue").value
  );
  const middleLoopValue = parseInt(
    document.querySelector(".middleLoopValue").value
  );
  const lowestLoopValue = parseInt(
    document.querySelector(".lowestLoopValue").value
  );
  const lowestIntensityValueInHighestLoop = parseInt(
    document.querySelector(".lowestIntensityValueInHighestLoop").value
  );
  const lowestIntensityValueInMiddleLoop = parseInt(
    document.querySelector(".lowestIntensityValueInMiddleLoop").value
  );
  const lowestIntensityValueInLowestLoop = parseInt(
    document.querySelector(".lowestIntensityValueInLowestLoop").value
  );
  const loopStandardDeviation = parseFloat(
    document.querySelector(".loopStandardDeviation").value
  );
  const middleLoopStandardDeviation = parseFloat(
    document.querySelector(".middleLoopStandardDeviation").value
  );
  const lowestLoopStandardDeviation = parseFloat(
    document.querySelector(".lowestLoopStandardDeviation").value
  );
  const intensityStandardDeviation = parseFloat(
    document.querySelector(".intensityStandardDeviation").value
  );
  const middleIntensityStandardDeviation = parseFloat(
    document.querySelector(".middleIntensityStandardDeviation").value
  );
  const lowestIntensityStandardDeviation = parseFloat(
    document.querySelector(".lowestIntensityStandardDeviation").value
  );

  // console.log("cur", typeof curveWidth, curveWidth);
  // console.log("sdaf", typeof dataSize, dataSize);
  // generateVolumetricData(curveWidth);
  try {
    // Send POST request to backend to generate volumetric data
    const response = await fetch(
      "http://localhost:3000/generate-volumetric-data",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          alphaValue,
          curveWidth,
          curveWidthMiddle,
          curveWidthLowest,
          dataSize,
          highestLoopValue,
          middleLoopValue,
          lowestLoopValue,
          lowestIntensityValueInHighestLoop,
          lowestIntensityValueInMiddleLoop,
          lowestIntensityValueInLowestLoop,
          loopStandardDeviation,
          middleLoopStandardDeviation,
          lowestLoopStandardDeviation,
          intensityStandardDeviation,
          middleIntensityStandardDeviation,
          lowestIntensityStandardDeviation,
          highestLoopPercentage,
          middleLoopPercentage,
          lowestLoopPercentage,
          fileName,
        }), // Adjust curveWidth as needed
      }
    );

    if (response.ok) {
      await downloadFile(
        `${fileName}.txt`,
        `http://localhost:3000/download/${alphaValue}/${fileName}.txt`
      );
      await downloadFile(
        `${fileName}.byte`,
        `http://localhost:3000/download/${alphaValue}/${fileName}.byte`
      );
    } else {
      console.error("Failed to generate volumetric data:", response.statusText);
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Re-enable the generate button
    generateBtn.disabled = false;
    generateBtn.innerHTML = "Generate"; // Restore the button text
    generateBtn.style.cursor = "pointer";
    fileName = `vol${generateRandomString(6)}`;
    const VolNameInput = document.querySelector(".volNameInput");
    VolNameInput.value = fileName;
  }
});

// Function to initiate download
// Function to initiate download
async function downloadFile(filename, url) {
  try {
    // Fetch the file content
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`);
    }

    // Convert the response to Blob
    const blob = await response.blob();

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // Append the link to the document body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the document body after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }, 100);

    return Promise.resolve();
  } catch (error) {
    console.error("Error occurred during file download:", error);
    return Promise.reject(error);
  }
}

document.addEventListener("click", function (e) {
  // Check if the clicked element is not the button with class "generateBtn"
  if (!e.target.matches("button")) {
    const elements = document.querySelectorAll("input");

    elements.forEach(function (element) {
      element.style.outline = "none"; // Remove the outline if it's applied
    });
  }
});
