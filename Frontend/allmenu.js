let url = "http://localhost:3000";

const wholeData = async () => {
  const response = await fetch(`${url}/parent-menu/all`);
  const data = await response.json();
  console.log(data);

 
  displayDataInTable(data);
};

const displayDataInTable = (data) => {
  const container = document.getElementById("display-data");

  // Create a table element
  const table = document.createElement("table");

  // Create a table header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const parentNameHeader = document.createElement("th");
  parentNameHeader.textContent = "Parent Name";
  headerRow.appendChild(parentNameHeader);

  const submenuHeader = document.createElement("th");
  submenuHeader.textContent = "Submenus";
  headerRow.appendChild(submenuHeader);

  thead.appendChild(headerRow);
  table.appendChild(thead);

  
  const tbody = document.createElement("tbody");

  data.forEach((parent) => {
    const row = document.createElement("tr");

    // Parent Name column
    const parentNameCell = document.createElement("td");
    parentNameCell.textContent = parent.name;
    row.appendChild(parentNameCell);

    // Submenus column
    const submenuCell = document.createElement("td");
    const submenuList = document.createElement("ul");

    parent.submenus.forEach((submenu) => {
      const submenuItem = document.createElement("li");
      submenuItem.textContent = submenu.name;
      submenuList.appendChild(submenuItem);
    });

    submenuCell.appendChild(submenuList);
    row.appendChild(submenuCell);

   
    tbody.appendChild(row);
  });

 
  table.appendChild(tbody);


  container.appendChild(table);
};

wholeData();
