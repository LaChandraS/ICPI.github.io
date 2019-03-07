window.onload = function () {
  document.getElementById("home").addEventListener("click", changeReset);
  document.getElementById("11").addEventListener("click", changeDataStreamCluster);
  document.getElementById("22").addEventListener("click", changeCoordCluster);
  document.getElementById("33").addEventListener("click", changeHSSCluster);
  document.getElementById("44").addEventListener("click", changeTreatmentCluster);
  document.getElementById("55").addEventListener("click", changeHIVTBCluster);
  document.getElementById("66").addEventListener("click", changeHIVPrevCluster);

  function changeReset(){
    document.getElementById("1").innerHTML = "Data Stream/Method Cluster";
    document.getElementById("2").innerHTML = "Coordinating Team Cluster";
    document.getElementById("3").innerHTML = "Health Systems Strengthening (HSS) Cluster";
    document.getElementById("4").innerHTML = "Treatment Cluster";
    document.getElementById("5").innerHTML = "HIV/TB Diagnosis Cluster";
    document.getElementById("6").innerHTML = "HIV Prevention Cluster";
  }

  function changeDataStreamCluster(){
    document.getElementById("1").innerHTML = "External Data";
    document.getElementById("2").innerHTML = "Financial Data";
    document.getElementById("3").innerHTML = "Geospatial Data";
    document.getElementById("4").innerHTML = "MER";
    document.getElementById("5").innerHTML = "Research and Evaluation";
    document.getElementById("6").innerHTML = "SIMS";
  }

  function changeCoordCluster(){
    document.getElementById("1").innerHTML = "OCM";
    document.getElementById("2").innerHTML = "DAQ";
    document.getElementById("3").innerHTML = "DIV";
    document.getElementById("4").innerHTML = "ICEE";
    document.getElementById("5").innerHTML = "ECT Liasons";
    document.getElementById("6").innerHTML = "";
  }

  function changeTreatmentCluster(){
    document.getElementById("1").innerHTML = "Care and TX";
    document.getElementById("2").innerHTML = "Linkages";
    document.getElementById("3").innerHTML = "PMTCT/Peds";
    document.getElementById("4").innerHTML = "Adolescents";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
  }

  function changeHSSCluster(){
    document.getElementById("1").innerHTML = "HRH";
    document.getElementById("2").innerHTML = "Lab (above service)";
    document.getElementById("3").innerHTML = "Sustainability (SID)";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
  }

  function changeHIVTBCluster(){
    document.getElementById("1").innerHTML = "HTS";
    document.getElementById("2").innerHTML = "TB/HIV";
    document.getElementById("3").innerHTML = "EID/Viral Load";
    document.getElementById("4").innerHTML = "Lab (at site)";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
  }

  function changeHIVPrevCluster(){
    document.getElementById("1").innerHTML = "DREAMS";
    document.getElementById("2").innerHTML = "KP";
    document.getElementById("3").innerHTML = "VMMC";
    document.getElementById("4").innerHTML = "OVC";
    document.getElementById("5").innerHTML = "GBV";
    document.getElementById("6").innerHTML = "PEP/PrEP";
  }
}
