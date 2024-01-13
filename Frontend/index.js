let menuName = document.getElementById("menuName");
let parentMenu = document.getElementById("parentMenu");
let url = "https://backend-menu.onrender.com";

let parentData = [];

let form = document.getElementById("createMenuForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  let submenuData = {
    name: menuName.value,
    parentMenuId:"",
  };

  parentData.forEach((el) => {
    if (el.name == parentMenu.value) {
      submenuData.parentMenuId = el._id;
    }
  });
  // parentData

  // console.log(submenuData)

  const fetchParentMenus = async () => {
    try {
      const createResponse = await fetch(`${url}/submenu/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submenuData),
      });

      const createdMenu = await createResponse.json();
      console.log("Created Parent Menu:", createdMenu);
      alert(`${createdMenu.name} has been created`)
    } catch (error) {
      console.log({ error });
    }
  };

  fetchParentMenus();
});

const fetchParentMenus = async () => {
  const response = await fetch(`${url}/parent-menu/all`);
  const data = await response.json();

  parentData = data;
  console.log(parentData);

  data.forEach((el) => {
    const option = document.createElement("option");
    option.value = el.name;
    option.textContent = el.name;

    // parentData.push(el._id);

    parentMenu.append(option);
  });

  // console.log(parentData);
};

fetchParentMenus();
