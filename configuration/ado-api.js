async function fetchNextDesign(response) {
    const apiUrl = "https://DecisionLab.eu.pythonanywhere.com/compute-next-design"; // Correct backend URL

    const payload = {
        response: response, // Participant's choice (0 or 1)
    };

    try {
        const responseData = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        if (!responseData.ok) {
            console.error("Error fetching next design:", responseData.statusText);
            return null; // Return null in case of error
        }

        return await responseData.json(); // Return the next design
    } catch (error) {
        console.error("Error during API call:", error);
        return null; // Handle fetch or network errors
    }
}
