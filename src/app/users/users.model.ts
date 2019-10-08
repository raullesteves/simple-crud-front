interface User {
    name: string;
    mail: string;
    role: string;
};

interface UserWithId {
    _id: string;
    name: string;
    mail: string;
    role: string;
};

export {
    User,
    UserWithId,
}