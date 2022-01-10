const THEME_TYPES = {
    DEFAULT: 'default',
    DARK: 'dark',
};

const AUTH_STATE = {
    BUYER: "BUYER_LOGIN",
    SELLER: "SELLER_LOGIN",
    PUBLIC: "PUBLIC_LOGIN", 
    PRIVATE: "MAIN_APP",
    AUTH: "CHECKING_LOGIN",
    UNKNOWN: "UNKNOWN"
};

module.exports = {
    AUTH_STATE,
    THEME_TYPES
}