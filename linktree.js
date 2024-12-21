document.addEventListener("DOMContentLoaded", () => {
  const link_div = document.getElementById("links");
  const Linkbtn = document.querySelector("#linkbtn");

  Linkbtn.addEventListener("click", () => {
    //! Add new div
    const linkin = document.createElement("div");
    linkin.className = "link-container";

    //! add btn
    //?add input value in btn clck
    const inp_txt = document.createElement("input");
    inp_txt.type = "url";
    inp_txt.placeholder = "Enter link here";
    inp_txt.style.marginRight = "10px";

    //?remove input value on new btn click
    const remove_inpbtn = document.createElement("button");
    remove_inpbtn.textContent = "remove";
    remove_inpbtn.onclick = () => {
      link_div.removeChild(linkin);
    };
    // remove_inpbtn.removeChild(remove_inpbtn);
    linkin.appendChild(inp_txt);
    linkin.appendChild(remove_inpbtn);

    link_div.appendChild(linkin);
  });
});
