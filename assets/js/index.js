if (localStorage.getItem("calcTheme")) {
  let theme = localStorage.getItem("calcTheme");
  if (["light", "dark"].includes(theme)) {
    document.querySelector("html").setAttribute("data-bs-theme", theme);
    const trigoLogo = document.getElementById("trigoLogo");
    const fnLogo = document.getElementById("fnLogo");
    if (theme === "dark") {
      document.getElementById("darkModeSwitch").checked = true;
      trigoLogo.setAttribute("fill", "#FFFF");
      fnLogo.setAttribute("fill", "#FFFF");
    } else {
      document.getElementById("darkModeSwitch").checked = false;
      trigoLogo.setAttribute("fill", "#000000");
      fnLogo.setAttribute("fill", "#000000");
    }
  }
}

const trigContent = `
  <div class="row row-cols-4 g-1 mb-1">
    <div class="col">
      <input
        type="checkbox"
        class="btn-check"
        id="trigSecondBtn"
        autocomplete="off"
      />
      <label
        class="btn cstBtn w-100 py-2"
        for="trigSecondBtn"
        data-action="trigSecond" title="trigSecond"
        >2<sup>nd</sup></label
      >
    </div>
    <div class="col">
      <button
        class="btn cstBtn w-100 py-2"
        data-second-trigo="true"
        data-action="sin" title="sin"
        data-first-label="sin"
        data-first-action="sin"
        data-second-label="sin<sup>-1</sup>"
        data-second-action="asin"
        data-third-label="sinh"
        data-third-action="sinh"
      >
        sin
      </button>
    </div>
    <div class="col">
      <button
        class="btn cstBtn w-100 py-2"
        data-second-trigo="true"
        data-action="cos" title="cos"
        data-first-label="cos"
        data-first-action="cos"
        data-second-label="cos<sup>-1</sup>"
        data-second-action="acos"
        data-third-label="cosh"
        data-third-action="cosh"
      >
        cos
      </button>
    </div>
    <div class="col">
      <button
        class="btn cstBtn w-100 py-2"
        data-second-trigo="true"
        data-action="tan" title="tan"
        data-first-label="tan"
        data-first-action="tan"
        data-second-label="tan<sup>-1</sup>"
        data-second-action="atan"
        data-third-label="tanh"
        data-third-action="tanh"
      >
        tan
      </button>
    </div>
  </div>
  <div class="row row-cols-4 g-1">
    <div class="col">
      <input type="checkbox" class="btn-check" id="hypBtn" autocomplete="off" />
      <label class="btn cstBtn w-100 py-2" for="hypBtn" data-action="hyp" title="hyp"
        >hyp</label
      >
    </div>
    <div class="col">
      <button
        class="btn cstBtn w-100 py-2"
        data-second-trigo="true"
        data-action="sec" title="sec"
        data-first-label="sec"
        data-first-action="sec"
        data-second-label="sec<sup>-1</sup>"
        data-second-action="asec"
        data-third-label="sech"
        data-third-action="sech"
      >
        sec
      </button>
    </div>
    <div class="col">
      <button
        class="btn cstBtn w-100 py-2"
        data-second-trigo="true"
        data-action="csc" title="csc"
        data-first-label="csc"
        data-first-action="csc"
        data-second-label="csc<sup>-1</sup>"
        data-second-action="acsc"
        data-third-label="csch"
        data-third-action="csch"
      >
        csc
      </button>
    </div>
    <div class="col">
      <button
        class="btn cstBtn w-100 py-2"
        data-second-trigo="true"
        data-action="cot" title="cot"
        data-first-label="cot"
        data-first-action="cot"
        data-second-label="cot<sup>-1</sup>"
        data-second-action="acot"
        data-third-label="coth"
        data-third-action="coth"
      >
        cot
      </button>
    </div>
  </div>
`;

const trigPopover = new bootstrap.Popover(document.getElementById("trigBtn"), {
  html: true,
  sanitize: false,
  content: trigContent,
  placement: "bottom",
  trigger: "click",
  customClass: "trig-popover",
  boundary: "clippingParents",
  fallbackPlacements: [],
});

const fnContent = `
  <div class="row row-cols-3 g-1 mb-1">
    <div class="col">
      <button class="btn cstBtn w-100 py-2" data-action="abs" title="abs">|x|</button>
    </div>
    <div class="col">
      <button class="btn cstBtn w-100 py-2" data-action="floor" title="floor">&lfloor; x &rfloor;</button>
    </div>
    <div class="col">
      <button class="btn cstBtn w-100 py-2" data-action="ceil" title="ceil">&lceil; x &rceil;</button>
    </div>
  </div>
  <div class="row row-cols-3 g-1">
    <div class="col">
      <button class="btn cstBtn w-100 py-2" data-action="rand" title="rand">rand</button>
    </div>
    <div class="col">
      <button class="btn cstBtn w-100 py-2" data-action="dms" title="dms">&rarr;dms</button>
    </div>
    <div class="col">
      <button class="btn cstBtn w-100 py-2" data-action="deg" title="deg">&rarr;deg</button>
    </div>
  </div>
`;

const fnPopover = new bootstrap.Popover(document.getElementById("fnBtn"), {
  html: true,
  sanitize: false,
  content: fnContent,
  placement: "bottom",
  trigger: "click",
  customClass: "fn-popover",
  boundary: "clippingParents",
  fallbackPlacements: [],
});

const buttonLayouts = {
  standard: [
    [
      { label: "%", action: "percent" },
      { label: "CE", action: "ce" },
      { label: "C", action: "clear" },
      { label: "&larr;", action: "delete" },
    ],
    [
      { label: "1/x", action: "reciprocal" },
      { label: "x<sup>2</sup>", action: "square" },
      { label: "&radic;x", action: "sqrt" },
      { label: "&divide;", action: "divide" },
    ],
    [
      { label: "7", action: "7" },
      { label: "8", action: "8" },
      { label: "9", action: "9" },
      { label: "&times;", action: "multiply" },
    ],
    [
      { label: "4", action: "4" },
      { label: "5", action: "5" },
      { label: "6", action: "6" },
      { label: "&minus;", action: "subtract" },
    ],
    [
      { label: "1", action: "1" },
      { label: "2", action: "2" },
      { label: "3", action: "3" },
      { label: "+", action: "add" },
    ],
    [
      { label: "&plusmn;", action: "negate" },
      { label: "0", action: "0" },
      { label: ".", action: "decimal" },
      { label: "=", action: "equals", primary: true },
    ],
  ],

  scientific: [
    [
      { label: "2<sup>nd</sup>", action: "second" },
      { label: "&pi;", action: "pi" },
      { label: "e", action: "e" },
      { label: "C", action: "clear" },
      { label: "&larr;", action: "delete" },
    ],
    [
      {
        label: "x&sup2;",
        action: "square",
        secondLabel: "x&sup3;",
        secondAction: "cube",
      },
      {
        label: "1/x",
        action: "reciprocal",
      },
      { label: "|x|", action: "abs" },
      { label: "exp", action: "exp" },
      { label: "mod", action: "mod" },
    ],
    [
      {
        label: "&radic;x",
        action: "sqrt",
        secondLabel: "&#8731;x",
        secondAction: "cbrt",
      },
      { label: "(", action: "openParen" },
      { label: ")", action: "closeParen" },
      { label: "n!", action: "factorial" },
      { label: "&divide;", action: "divide" },
    ],
    [
      {
        label: "x<sup>y</sup>",
        action: "power",
        secondLabel: "<sup>y</sup>&radic;x",
        secondAction: "yroot",
      },
      { label: "7", action: "7" },
      { label: "8", action: "8" },
      { label: "9", action: "9" },
      { label: "&times;", action: "multiply" },
    ],
    [
      {
        label: "10<sup>x</sup>",
        action: "10pow",
        secondLabel: "2<sup>x</sup>",
        secondAction: "2pow",
      },
      { label: "4", action: "4" },
      { label: "5", action: "5" },
      { label: "6", action: "6" },
      { label: "&minus;", action: "subtract" },
    ],
    [
      {
        label: "log",
        action: "log",
        secondLabel: "log<sub>y</sub>x",
        secondAction: "logy",
      },
      { label: "1", action: "1" },
      { label: "2", action: "2" },
      { label: "3", action: "3" },
      { label: "+", action: "add" },
    ],
    [
      {
        label: "ln",
        action: "ln",
        secondLabel: "e<sup>x</sup>",
        secondAction: "epow",
      },
      { label: "&plusmn;", action: "negate" },
      { label: "0", action: "0" },
      { label: ".", action: "decimal" },
      { label: "=", action: "equals", primary: true },
    ],
  ],

  trig: [
    [
      { label: "2nd", action: "second" },
      {
        label: "sin",
        action: "sin",
        secondLabel: "sin⁻¹",
        secondAction: "asin",
      },
      {
        label: "cos",
        action: "cos",
        secondLabel: "cos⁻¹",
        secondAction: "acos",
      },
      {
        label: "tan",
        action: "tan",
        secondLabel: "tan⁻¹",
        secondAction: "atan",
      },
    ],
    [
      { label: "hyp", action: "hyp" },
      {
        label: "sec",
        action: "sec",
        secondLabel: "sec⁻¹",
        secondAction: "asec",
      },
      {
        label: "csc",
        action: "csc",
        secondLabel: "csc⁻¹",
        secondAction: "acsc",
      },
      {
        label: "cot",
        action: "cot",
        secondLabel: "cot⁻¹",
        secondAction: "acot",
      },
    ],
  ],

  functions: [
    { label: "floor", action: "floor" },
    { label: "ceil", action: "ceil" },
    { label: "rand", action: "rand" },
    { label: "dms", action: "dms" },
    { label: "deg", action: "deg" },
  ],
};

const calcCurMode = (function () {
  const acceptableModes = ["standard", "scientific"];
  let instance = null;

  function getInstance() {
    if (!instance) {
      instance = {
        mode: "standard",
      };
    }
    return instance;
  }

  return {
    getMode() {
      return getInstance().mode;
    },

    setMode(val) {
      if (!acceptableModes.includes(val)) return;
      getInstance().mode = val;
    },
  };
})();

function renderBtnGrid() {
  const btnGrid = document.getElementById("btnGrid");
  btnGrid.replaceChildren();
  const currentMode = calcCurMode.getMode();
  const btns = buttonLayouts[currentMode];

  for (let arr of btns) {
    const rowDiv = document.createElement("div");
    rowDiv.className = `row g-1 mb-1 flex-grow-1 ${currentMode === "standard" ? "row-cols-4" : "row-cols-5"}`;

    for (let obj of arr) {
      const col = document.createElement("div");
      col.className = "col";

      if (obj.action === "second") {
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.className = "btn-check";
        checkBox.id = "toggleSecondScientific";
        checkBox.autocomplete = "off";

        const label = document.createElement("label");
        label.className = "btn cstBtn w-100 h-100 fs-4";
        label.setAttribute("for", "toggleSecondScientific");
        label.innerHTML = obj.label;

        checkBox.addEventListener("change", (e) => {
          toggleSecondScientificLabels(e.target.checked);
        });

        col.appendChild(checkBox);
        col.appendChild(label);
      } else {
        const btn = document.createElement("button");
        btn.className = "btn cstBtn w-100 h-100 fs-4";
        btn.innerHTML = obj.label;
        btn.dataset.action = obj.action;
        btn.title = obj.action;

        btn.dataset.firstLabel = obj.label;
        btn.dataset.firstAction = obj.action;

        if (obj.secondLabel) btn.dataset.secondLabel = obj.secondLabel;
        if (obj.secondAction) {
          btn.dataset.secondAction = obj.secondAction;
          btn.dataset.secondScientific = true;
        }

        if (obj?.primary) {
          btn.classList.add("btn-primary");
          btn.classList.remove("cstBtn");
        }
        col.appendChild(btn);
      }
      rowDiv.appendChild(col);
    }
    btnGrid.appendChild(rowDiv);
  }
}

function toggleSecondScientificLabels(isSecond) {
  document.querySelectorAll("[data-second-scientific]").forEach((btn) => {
    if (isSecond) {
      btn.innerHTML = btn.dataset.secondLabel;
      btn.dataset.action = btn.dataset.secondAction;
    } else {
      btn.innerHTML = btn.dataset.firstLabel;
      btn.dataset.action = btn.dataset.firstAction;
    }
  });
}

function toggleSecondTrigoLabels(isSecond) {
  document.querySelectorAll("[data-second-trigo]").forEach((btn) => {
    if (isSecond) {
      btn.innerHTML = btn.dataset.secondLabel;
      btn.dataset.action = btn.dataset.secondAction;
    } else {
      btn.innerHTML = btn.dataset.firstLabel;
      btn.dataset.action = btn.dataset.firstAction;
    }
  });
}

renderBtnGrid();

function hideSidebar() {
  const sidebar = document.getElementById("sidebar");
  const instance = bootstrap.Offcanvas.getInstance(sidebar);
  instance.hide();
}

const calcTitle = document.getElementById("calcTitle");

document.getElementById("standardBtn").addEventListener("click", () => {
  if (calcCurMode.getMode() !== "standard") {
    calcCurMode.setMode("standard");
    calcTitle.innerText = "Standard";
    document
      .querySelectorAll(".scientificControls")
      .forEach((x) => x.classList.add("d-none"));
    document
      .querySelectorAll(".scientificControls")
      .forEach((x) => x.classList.remove("d-flex"));
    renderBtnGrid();
  }
  hideSidebar();
});

document.getElementById("scientificBtn").addEventListener("click", () => {
  if (calcCurMode.getMode() !== "scientific") {
    calcCurMode.setMode("scientific");
    calcTitle.innerText = "Scientific";
    document
      .querySelectorAll(".scientificControls")
      .forEach((x) => x.classList.remove("d-none"));
    document
      .querySelectorAll(".scientificControls")
      .forEach((x) => x.classList.add("d-flex"));
    document
      .querySelector("#trigSecondBtn")
      ?.addEventListener("change", (e) => {
        console.log("Hi");
        toggleSecondTrigoLabels(e.target.checked);
      });
    renderBtnGrid();
  }
  hideSidebar();
});

document.addEventListener("change", (e) => {
  if (e.target.matches("#hypBtn")) {
    const isThird = e.target.checked;

    const popoverEl = e.target.closest(".popover");
    if (!popoverEl) return;

    popoverEl.querySelectorAll("[data-second-trigo]").forEach((btn) => {
      btn.innerHTML = isThird ? btn.dataset.thirdLabel : btn.dataset.firstLabel;

      btn.dataset.action = isThird
        ? btn.dataset.thirdAction
        : btn.dataset.firstAction;
    });
  } else if (e.target.matches("#trigSecondBtn")) {
    const isSecond = e.target.checked;

    const popoverEl = e.target.closest(".popover");
    if (!popoverEl) return;

    popoverEl.querySelectorAll("[data-second-trigo]").forEach((btn) => {
      btn.innerHTML = isSecond
        ? btn.dataset.secondLabel
        : btn.dataset.firstLabel;

      btn.dataset.action = isSecond
        ? btn.dataset.secondAction
        : btn.dataset.firstAction;
    });
  }
});

document.addEventListener("click", (e) => {
  const btn =
    e.target.closest(".trig-popover [data-action]") ||
    e.target.closest(".fn-popover [data-action]");
  if (!btn) return;
  handleAction(btn.dataset.action);
});

document.getElementById("darkModeSwitch").addEventListener("change", (e) => {
  const element = document.querySelector("html");
  const trigoLogo = document.getElementById("trigoLogo");
  const fnLogo = document.getElementById("fnLogo");
  if (e.target.checked) {
    element.setAttribute("data-bs-theme", "dark");
    trigoLogo.setAttribute("fill", "#FFFF");
    fnLogo.setAttribute("fill", "#FFFF");
    localStorage.setItem("calcTheme", "dark");
  } else {
    element.setAttribute("data-bs-theme", "light");
    trigoLogo.setAttribute("fill", "#000000");
    fnLogo.setAttribute("fill", "#000000");
    localStorage.setItem("calcTheme", "light");
  }
});

document.getElementById("btnGrid").addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const action = btn.dataset.action;
  handleAction(action);
});

document.querySelectorAll(".scientificControls").forEach((x) =>
  x.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    handleAction(btn.dataset.action);
  }),
);

function handleAction(action) {
  switch (action) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
      appendDigit(action);
      break;
    case "add":
      setOperator("+");
      document.getElementById("lastResult").textContent =
        `${previousValue} ${operator}`;
      break;
    case "subtract":
      setOperator("-");
      document.getElementById("lastResult").textContent =
        `${previousValue} ${operator}`;
      break;
    case "multiply":
      setOperator("*");
      document.getElementById("lastResult").textContent =
        `${previousValue} ${operator}`;
      break;
    case "divide":
      setOperator("/");
      document.getElementById("lastResult").textContent =
        `${previousValue} ${operator}`;
      break;
    case "equals":
      calculate();
      break;
    case "clear":
      clearAll();
      break;
    case "ce":
      clearEntry();
      break;
    case "delete":
      deleteLast();
      break;
    case "decimal":
      addDecimal();
      break;
    case "negate":
      negate();
      break;
    case "percent":
      percent();
      break;
    case "square":
      square();
      break;
    case "sqrt":
      sqrt();
      break;
    case "reciprocal":
      reciprocal();
      break;
    case "pi":
      insertPi();
      break;
    case "e":
      insertE();
      break;
    case "cube":
      cube();
      break;
    case "cbrt":
      cbrt();
      break;
    case "power":
      setPower();
      break;
    case "log":
      log10();
      break;
    case "ln":
      ln();
      break;
    case "abs":
      absolute();
      break;
    case "factorial":
      factorial();
      break;
    case "mod":
      setMod();
      break;
    case "10pow":
      pow10();
      break;
    case "2pow":
      pow2();
      break;
    case "epow":
      epow();
      break;
    case "deg-toggle":
      toggleDeg();
      break;
    case "fe-toggle":
      toggleFE();
      break;
    case "mc":
      memoryClear();
      break;
    case "mr":
      memoryRecall();
      break;
    case "mplus":
      memoryAdd();
      break;
    case "mminus":
      memorySubtract();
      break;
    case "ms":
      memoryStore();
      break;
    case "sin":
      sin();
      break;
    case "cos":
      cos();
      break;
    case "tan":
      tan();
      break;
    case "csc":
      csc();
      break;
    case "sec":
      sec();
      break;
    case "cot":
      cot();
      break;
    case "asin":
      asin();
      break;
    case "acos":
      acos();
      break;
    case "atan":
      atan();
      break;
    case "acsc":
      acsc();
      break;
    case "asec":
      asec();
      break;
    case "acot":
      acot();
      break;
    case "floor":
      floor();
      break;
    case "ceil":
      ceil();
      break;
    case "rand":
      rand();
      break;
    case "dms":
      dms();
      break;
    case "deg":
      degConvert();
      break;
    case "hyp":
      hyp();
      break;
    case "sinh":
      sinh();
      break;
    case "cosh":
      cosh();
      break;
    case "tanh":
      tanh();
      break;
    case "csch":
      csch();
      break;
    case "sech":
      sech();
      break;
    case "coth":
      coth();
      break;
    case "asinh":
      asinh();
      break;
    case "acosh":
      acosh();
      break;
    case "atanh":
      atanh();
      break;
    case "acsch":
      acsch();
      break;
    case "asech":
      asech();
      break;
    case "acoth":
      acoth();
      break;
  }
}

let currentValue = "0";
let previousValue = "";
let operator = null;
let resetResultScreen = false;

function updateDisplay() {
  document.getElementById("result").innerText = currentValue;
}

function appendDigit(digit) {
  if (currentValue === "0" || resetResultScreen) {
    currentValue = digit;
    resetResultScreen = false;
  } else {
    currentValue += digit;
  }
  updateDisplay();
}

function addDecimal() {
  if (resetResultScreen) {
    currentValue = "0";
    resetResultScreen = false;
  }
  if (!currentValue.includes(".")) currentValue += ".";
  updateDisplay();
}

function setOperator(op) {
  if (operator && !resetResultScreen) calculate();
  previousValue = currentValue;
  operator = op;
  resetResultScreen = true;
}

function calculate() {
  if (!operator || !previousValue) return;
  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Error";
      break;
  }
  document.getElementById("lastResult").textContent =
    `${previousValue} ${operator} ${currentValue} =`;
  currentValue = String(result);
  operator = null;
  previousValue = "";
  resetResultScreen = true;
  updateDisplay();
}

function clearAll() {
  currentValue = "0";
  previousValue = "";
  operator = null;
  resetResultScreen = false;
  document.getElementById("lastResult").innerHTML = "&nbsp;";
  updateDisplay();
}

function clearEntry() {
  currentValue = "0";
  updateDisplay();
}

function deleteLast() {
  currentValue = currentValue.length > 1 ? currentValue.slice(0, -1) : "0";
  updateDisplay();
}

function negate() {
  currentValue = String(parseFloat(currentValue) * -1);
  updateDisplay();
}

function percent() {
  currentValue = String(parseFloat(currentValue) / 100);
  updateDisplay();
}

function reciprocal() {
  currentValue = String(1 / parseFloat(currentValue));
  updateDisplay();
}

function square() {
  currentValue = String(Math.pow(parseFloat(currentValue), 2));
  updateDisplay();
}

function cube() {
  currentValue = String(Math.pow(parseFloat(currentValue), 3));
  updateDisplay();
}

function sqrt() {
  currentValue = String(Math.sqrt(parseFloat(currentValue)));
  updateDisplay();
}

function cbrt() {
  currentValue = String(Math.cbrt(parseFloat(currentValue)));
  updateDisplay();
}

function log10() {
  currentValue = String(Math.log10(parseFloat(currentValue)));
  updateDisplay();
}

function ln() {
  currentValue = String(Math.log(parseFloat(currentValue)));
  updateDisplay();
}

function absolute() {
  currentValue = String(Math.abs(parseFloat(currentValue)));
  updateDisplay();
}

function factorial() {
  let n = parseInt(currentValue);
  if (n < 0) {
    currentValue = "Error";
    updateDisplay();
    return;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  currentValue = String(result);
  updateDisplay();
}

function setPower() {
  setOperator("^");
}

function setMod() {
  setOperator("%");
}

function insertPi() {
  currentValue = String(Math.PI);
  updateDisplay();
}

function insertE() {
  currentValue = String(Math.E);
  updateDisplay();
}

function epow() {
  currentValue = String(Math.pow(Math.E, parseFloat(currentValue)));
  updateDisplay();
}

function pow10() {
  currentValue = String(Math.pow(10, parseFloat(currentValue)));
  updateDisplay();
}

function pow2() {
  currentValue = String(Math.pow(2, parseFloat(currentValue)));
  updateDisplay();
}

function calculate() {
  if (!operator || !previousValue) return;
  const a = parseFloat(previousValue);
  const b = parseFloat(currentValue);
  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b !== 0 ? a / b : "Error";
      break;
    case "^":
      result = Math.pow(a, b);
      break;
    case "%":
      result = a % b;
      break;
  }

  saveHistory(`${previousValue} ${operator} ${currentValue}`, String(result));

  document.getElementById("lastResult").textContent =
    `${previousValue} ${operator} ${currentValue} =`;
  currentValue = String(result);
  operator = null;
  previousValue = "";
  resetResultScreen = true;
  updateDisplay();
}

let angleMode = "deg";
let memory = 0;
let feMode = false;

function toRad(val) {
  return angleMode === "deg" ? (val * Math.PI) / 180 : val;
}

function fromRad(val) {
  return angleMode === "deg" ? (val * 180) / Math.PI : val;
}

function toggleDeg() {
  angleMode = angleMode === "deg" ? "rad" : "deg";
  document.getElementById("degBtn").textContent = angleMode.toUpperCase();
}

function toggleFE() {
  feMode = !feMode;
  currentValue = feMode
    ? parseFloat(currentValue).toExponential()
    : String(parseFloat(currentValue));
  updateDisplay();
}

function sin() {
  currentValue = String(Math.sin(toRad(parseFloat(currentValue))));
  updateDisplay();
}
function cos() {
  currentValue = String(Math.cos(toRad(parseFloat(currentValue))));
  updateDisplay();
}
function tan() {
  currentValue = String(Math.tan(toRad(parseFloat(currentValue))));
  updateDisplay();
}
function csc() {
  currentValue = String(1 / Math.sin(toRad(parseFloat(currentValue))));
  updateDisplay();
}
function sec() {
  currentValue = String(1 / Math.cos(toRad(parseFloat(currentValue))));
  updateDisplay();
}
function cot() {
  currentValue = String(1 / Math.tan(toRad(parseFloat(currentValue))));
  updateDisplay();
}

function asin() {
  currentValue = String(fromRad(Math.asin(parseFloat(currentValue))));
  updateDisplay();
}
function acos() {
  currentValue = String(fromRad(Math.acos(parseFloat(currentValue))));
  updateDisplay();
}
function atan() {
  currentValue = String(fromRad(Math.atan(parseFloat(currentValue))));
  updateDisplay();
}
function acsc() {
  currentValue = String(fromRad(Math.asin(1 / parseFloat(currentValue))));
  updateDisplay();
}
function asec() {
  currentValue = String(fromRad(Math.acos(1 / parseFloat(currentValue))));
  updateDisplay();
}
function acot() {
  currentValue = String(fromRad(Math.atan(1 / parseFloat(currentValue))));
  updateDisplay();
}

function floor() {
  currentValue = String(Math.floor(parseFloat(currentValue)));
  updateDisplay();
}
function ceil() {
  currentValue = String(Math.ceil(parseFloat(currentValue)));
  updateDisplay();
}
function rand() {
  currentValue = String(Math.random());
  updateDisplay();
}

function sinh() {
  currentValue = String(Math.sinh(parseFloat(currentValue)));
  updateDisplay();
}
function cosh() {
  currentValue = String(Math.cosh(parseFloat(currentValue)));
  updateDisplay();
}
function tanh() {
  currentValue = String(Math.tanh(parseFloat(currentValue)));
  updateDisplay();
}
function csch() {
  currentValue = String(1 / Math.sinh(parseFloat(currentValue)));
  updateDisplay();
}
function sech() {
  currentValue = String(1 / Math.cosh(parseFloat(currentValue)));
  updateDisplay();
}
function coth() {
  currentValue = String(1 / Math.tanh(parseFloat(currentValue)));
  updateDisplay();
}

function asinh() {
  currentValue = String(Math.asinh(parseFloat(currentValue)));
  updateDisplay();
}
function acosh() {
  currentValue = String(Math.acosh(parseFloat(currentValue)));
  updateDisplay();
}
function atanh() {
  currentValue = String(Math.atanh(parseFloat(currentValue)));
  updateDisplay();
}
function acsch() {
  currentValue = String(Math.asinh(1 / parseFloat(currentValue)));
  updateDisplay();
}
function asech() {
  currentValue = String(Math.acosh(1 / parseFloat(currentValue)));
  updateDisplay();
}
function acoth() {
  currentValue = String(Math.atanh(1 / parseFloat(currentValue)));
  updateDisplay();
}

function dms() {
  const decimal = parseFloat(currentValue);
  const degrees = Math.floor(decimal);
  const minutes = Math.floor((decimal - degrees) * 60);
  const seconds = ((decimal - degrees) * 60 - minutes) * 60;
  currentValue = `${degrees}° ${minutes}' ${seconds.toFixed(2)}"`;
  document.getElementById("result").textContent = currentValue;
}

function degConvert() {
  currentValue = String(parseFloat(currentValue) * (180 / Math.PI));
  updateDisplay();
}

function getHistory() {
  return JSON.parse(localStorage.getItem("calcHistory") || "[]");
}

function saveHistory(expression, result) {
  const history = getHistory();
  history.unshift({ expression, result, time: Date.now() });
  if (history.length > 50) history.pop();
  localStorage.setItem("calcHistory", JSON.stringify(history));
  renderHistory();
}

function clearHistory() {
  localStorage.removeItem("calcHistory");
  renderHistory();
}

function renderHistory() {
  const historyEl = document.getElementById("history");
  const history = getHistory();

  historyEl.innerHTML =
    history.length === 0
      ? "<p class='text-muted mt-3'>There's no history yet.</p>"
      : history
          .map(
            (h) => `
        <div class="border-bottom py-2 px-3 text-end history-item" data-result="${h.result}">
          <div class="text-muted small">${h.expression}</div>
          <div class="fs-5">${h.result}</div>
        </div>
      `,
          )
          .join("");
}

document.getElementById("history").addEventListener("click", (e) => {
  const item = e.target.closest(".history-item");
  if (!item) return;
  currentValue = item.dataset.result;
  updateDisplay();
});

function getMemory() {
  return parseFloat(localStorage.getItem("calcMemory") || "0");
}

function saveMemory(val) {
  localStorage.setItem("calcMemory", val);
}

function memoryClear() {
  saveMemory(0);
}
function memoryRecall() {
  currentValue = String(getMemory());
  updateDisplay();
}
function memoryAdd() {
  saveMemory(getMemory() + parseFloat(currentValue));
}
function memorySubtract() {
  saveMemory(getMemory() - parseFloat(currentValue));
}
function memoryStore() {
  saveMemory(parseFloat(currentValue));
}

renderHistory();
memory = getMemory();
