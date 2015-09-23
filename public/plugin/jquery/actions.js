$(function () {
    $('.datepicker').datepicker({
        format: "dd/mm/yyyy",
        autoclose: true
    }).on('changeDate', function (ev) {
        $(this).datepicker('hide');
    });

    $(function () {
        $(".validate").jqBootstrapValidation();
    });


    $(".icone-editar-grupo").click(function () {
        var something = $(this).closest("tr").find("td:eq(1) input[type=hidden]").val();
        $(this).closest("tr").find("td:eq(1) .nome-content").css("display", "none");
        $(this).closest("tr").find("td:eq(1) .input-nome-content").removeClass("input-nome-content");
        $(this).closest("tr").find("td:eq(1) input[type=text]").val(something);
    });

    var oTable = $("#minhaTabela").dataTable({
        "dom": "Zlfrtip",
        "sScrollY": "428px",
        "scrollCollapse": false,
        "bPaginate": false,
        "bFilter": false,
        "bInfo": false
    });

    $(window).resize(function () {
        oTable.fnAdjustColumnSizing();
    });
});

