const biodata = () => ({
    name: 'Aji Prasetyo',
    age: 21,
    address: 'Jl Sukarela Lrg Swadaya 2',
    hobbies: ['Membaca','Programming','Gaming'],
    is_married: false,
    list_school: [
        {
            name: 'SD Negeri 151 Palembang',
            year_in: 2004,
            year_out: 2010,
            major: null
        },
        {
            name: 'SMP Negeri INABA Palembang',
            year_in: 2010,
            year_out: 2013,
            major: null
        },
        {
            name: 'SMK UTAMA BAKTI Palembang',
            year_in: 2013,
            year_out: 2016,
            major: 'Teknik Komputer dan Jaringan'
        },
        {
            name: 'Politeknik Negeri Sriwijaya',
            year_in: 2016,
            year_out: 2019,
            major: 'D3 Teknik Komputer'
        }
    ],
    skills: [
        {
            name: 'Programming',
            level: 'Advanced'
        },
        {
            name: 'Web Development',
            level: 'Advanced'
        },
        {
            name: 'IOT Development',
            level: 'Beginner'
        }
    ],
    interest_in_coding: true
})

console.log(biodata())