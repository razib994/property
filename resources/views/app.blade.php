<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        {{-- <title>Home</title> --}}
        <meta name="description" content="Free Web tutorials">
        <meta name="keywords" content="HTML, CSS, JavaScript">
        <meta name="author" content="John Doe">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="google-site-verification" content="LgfuW_3Vbxqfq3ytn3FHLk6-lnU9W4-2CI37Gis0ocQ" />
        @inertiaHead
        <link rel="icon" type="image/png" href="/furnished-icon/favicon.png"/>
        @viteReactRefresh
@vite('resources/js/app.jsx')
{{-- @vite('resources/css/app.css') --}}
<link rel="stylesheet" href="{{ asset('build/assets/app.ac31adfe.css') }}">
<link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous" />
    <script src="https://unpkg.com/flowbite@1.4.0/dist/flowbite.js"></script>
    </head>
    <body id="root">
    @routes
    @inertia
    </body>
</html>
