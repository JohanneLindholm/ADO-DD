async function fetchNextDesign(response) {
    const apiUrl = "https://<your-flask-server>/compute-next-design";

    const payload = {
        response: response, // Participant's choice (0 or 1)
    };

    const responseData = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!responseData.ok) {
        console.error("Error fetching next design:", responseData.statusText);
    }

    return responseData.json(); // Return the next design
}

