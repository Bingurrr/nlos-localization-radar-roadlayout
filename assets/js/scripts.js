// 예: 페이지 상단에 있는 버튼을 누르면 PDF 보기로 이동
document.addEventListener("DOMContentLoaded", function () {
    const pdfBtn = document.getElementById("view-pdf-btn");
    if (pdfBtn) {
        pdfBtn.addEventListener("click", function () {
            window.open("./papers/your_paper.pdf", "_blank");
        });
    }
});
