$(document).ready(function () {
    $('.modal').modal();
    $('select').formSelect();

    fetch('/api/nama')
        .then(res => res.json())
        .then(res => {
            res.data.forEach(item => {
                $('#table-body').append(`
                    <tr>
                        <td class="data-nama">${item.name}</td>
                        <td class="data-work">${item.work}</td>
                        <td class="data-salary">${item.salary}</td>
                        <td>
                            <a class="hapus-data" href="#${item._id}"><img src="images/2.png" alt="logo"
                                style="height: 30px; margin: 0 10px"></a>
                            <!-- modal trigger2 -->
                            <a href="#modal1" class="edit-data modal-trigger"><img src="images/3.png" alt="logo"
                                style="height: 30px; margin: 0 10px"></a>
                        </td>
                    </tr>
                `)
            })

            $('.edit-data').on('click', function() {
                $('#modal1').modal();
                const id = $(this).siblings().attr('href').replace(/#/g, '');
                const tr = $(this).parent().parent()[0];
                const nama = tr.querySelector('.data-nama').textContent
                const work = tr.querySelector('.data-work').textContent
                const salary = tr.querySelector('.data-salary').textContent
                $('#edit-name').val(nama);
                $('#edit-work-select').val(work);
                $('#edit-salary-select').val(salary);
                $('#simpan-edit').on('click', function() {
                    fetch(`/api/nama/${id}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            nama: $('#edit-name').val(),
                            work: $('#edit-work-select').val(),
                            salary: $('#edit-salary-select').val()
                        })
                    })
                    .then(res => res.json())
                    .then(res => {
                        Swal.fire({
                            type: 'success',
                            title: res.message
                        }).then(() => location.href = '')
                    })
                })
            })

            $('.hapus-data').on('click', function(){
                const value = $(this).attr('href').replace(/#/g, '')
                fetch(`/api/nama/${value}`, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' }
                })
                .then(res => res.json())
                .then(res => {
                    Swal.fire({
                        type: 'success',
                        title: res.message
                    }).then(() => location.href = '')
                })
            })
        })

    fetch('/api/work')
        .then(data => data.json())
        .then(res => {
            res.data.forEach(dt => {
                $('#work-select').append('<option value="' + dt.name + '">' + dt.name + '</option>');
                $('#edit-work-select').append('<option value="' + dt.name + '">' + dt.name + '</option>');
            });
        });

    fetch('/api/kategori')
        .then(data => data.json())
        .then(res => {
            res.data.forEach(dt => {
                $('#salary-select').append('<option value="' + dt.salary + '">' + dt.salary + '</option>');
                $('#edit-salary-select').append('<option value="' + dt.salary + '">' + dt.salary + '</option>');
            });
        });

    $('#simpan').on('click', function () {
        const nama = $('#name').val()
        const work = $('#work-select').val()
        const salary = $('#salary-select').val()

        fetch('/api/nama', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nama: nama,
                    work: work,
                    salary: salary
                })
            })
            .then(res => {
                Swal.fire({
                    type: 'success',
                    title: `Data ${nama} sudah ditambahkan!`
                }).then(() => location.href = '')
            })
    });
});