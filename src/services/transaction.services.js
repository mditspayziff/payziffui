


export const getTransactions = () => {
    return fetch("http://localhost:3000/transactions/getAllTransactions", {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (res.status === 200) return res.json();
        else throw new Error("Invalid response");
    });
}