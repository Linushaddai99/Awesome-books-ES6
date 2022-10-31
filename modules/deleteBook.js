export const deleteBook = (id) => {
  const List = JSON.parse(localStorage.getItem('bookList'));
  const newBookList = List.filter((item) => item.id !== id);
  localStorage.setItem('bookList', JSON.stringify(newBookList));
  window.location.reload();
}