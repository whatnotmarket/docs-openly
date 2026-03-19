(() => {
  const APP_ID = "69b30ec8f7bdc95c4df9518f";

  const w = window;
  if (w.__featurebaseBooted) return;

  if (typeof w.Featurebase !== "function") {
    w.Featurebase = function () {
      (w.Featurebase.q = w.Featurebase.q || []).push(arguments);
    };
  }

  const existing = document.getElementById("featurebase-sdk");
  if (!existing) {
    const script = document.createElement("script");
    script.src = "https://do.featurebase.app/js/sdk.js";
    script.id = "featurebase-sdk";
    script.async = true;
    script.onload = () => {
      if (w.__featurebaseBooted) return;
      w.Featurebase("boot", {
        appId: APP_ID,
        language: "en",
      });
      w.__featurebaseBooted = true;
    };
    document.head.appendChild(script);
    return;
  }

  w.Featurebase("boot", {
    appId: APP_ID,
    language: "en",
  });
  w.__featurebaseBooted = true;
})();
