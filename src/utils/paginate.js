export function paginate(items, currentPage, pageSize, genre = "All Genres") {
  if (genre === "All Genres") {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return items.slice(startIndex, endIndex);
  } else {
    let newItems = items.filter((item) => item.genre.name === genre);
    console.log("From Else");
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return newItems.slice(startIndex, endIndex);
  }
}
