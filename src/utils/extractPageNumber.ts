const extractPageNumber = (value: string) => {
    return value.replace(/\D/g, '');
};

export default extractPageNumber;
