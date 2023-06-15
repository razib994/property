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
        <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Fourhouz | Furnished Apartment Rental Expert in dhaka Bangladesh",
              "alternateName": "Furnished Apartment Rent in Dhaka | Fourhouz",
              "url": "https://furhouz.com/",
              "logo": "https://furhouz.com/logo/logo.png",
              "sameAs": [
                "https://www.facebook.com/furhouzes",
                "https://twitter.com/FurHouz",
                "https://www.instagram.com/furhouz",
                "https://www.youtube.com/channel/UCFyIF2NJM6zrVyPC0FomCCQ",
                "https://www.linkedin.com/in/nashrullahnash",
                "https://www.pinterest.com/furhouzbd",
                "https://soundcloud.com/furhouz"
              ]
            }
            </script>
        <script type="application/ld+json">
            {
              "@context": "https://schema.org",
              "@type": "RealEstateAgent",
              "name": "Fourhouz | Furnished Apartment Rental Expert in dhaka Bangladesh",
              "image": "https://furhouz.com/logo/logo.png",
              "@id": "https://furhouz.com/#website",
              "url": "https://furhouz.com/",
              "telephone": "+8801616171171",
              "priceRange": "1500",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot: 19 & 20, Road: 113/A, Gulshan, Dhaka 1212",
                "addressLocality": "Dhaka",
                "postalCode": "1212",
                "addressCountry": "BD"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.790083469126188,
                "longitude": 90.41985473799677
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/furhouzes",
                "https://www.linkedin.com/in/nashrullahnash",
                "https://twitter.com/FurHouz",
                "https://www.instagram.com/furhouz",
                "https://www.youtube.com/channel/UCFyIF2NJM6zrVyPC0FomCCQ",
                "https://www.pinterest.com/furhouzbd",
                "https://soundcloud.com/furhouz"
              ] 
            }
            </script>
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
