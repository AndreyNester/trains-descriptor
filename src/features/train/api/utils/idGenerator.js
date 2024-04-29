const idGenerator = (arr) => arr.map((item, index) => ({ ...item, id: index }));
export default idGenerator;
