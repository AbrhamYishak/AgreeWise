function detectPopup(node) {
  const text = node.innerText?.toLowerCase() || "";

  const keywords = [
    "accept cookies",
    "agree",
    "consent",
    "privacy",
    "gdpr",
    "reject",
    "manage preferences"
  ];

  const isConsent = keywords.some(k => text.includes(k));

  const style = window.getComputedStyle(node);
  const isOverlay =
    style.position === "fixed" ||
    style.position === "sticky";

  if (isConsent && isOverlay) {
    console.log("Consent popup detected:", node);
  }
  else{
    console.log("the content is running");
  }
}