

export async function loginUser(credentials) {
    const response = await fetch('http://backend.sonujha.in/auth/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",  // ✅ Must be JSON
            "Accept": "application/json"
        },
        body: JSON.stringify(credentials),
    });
    const data = await response.json();
    console.log(data);
    localStorage.setItem('token', data.jwtToken); // optional
    return data.jwtToken;
}

export const registerUser = async (formData) => {
    const response =
        await fetch('http://backend.sonujha.in/customer/onboard', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",  // ✅ Must be JSON
                "Accept": "application/json"
            },
            body: JSON.stringify(formData),
            mode: "cors"
        });
    return response.data;
};


export const sendMail = async (formData) => {
    await fetch('http://backend.sonujha.in/mail/send', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            "Content-Type": "application/json",  // ✅ Must be JSON
            "Accept": "application/json"
        },
        mode: "cors"
    });
};
