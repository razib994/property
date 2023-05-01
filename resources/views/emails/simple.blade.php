<p>Hi {{$name}},</p>

<p>{{$body}}</p>
@if($last_message == 'password')
<!-- <p>{{$last_message}}</p> -->
<p>Name : {{$userName}}</p>
<p>Email : {{$emails}}</p>
<p>Phone : {{$phone}}</p>
@if(isset($link))
@if(!is_null($link))
<a href="{{$link}}" target="_blank">View Now</a>
@endif
@endif
<p>
Regards,<br>
    Auto-Pilot<br>
    Bloc 1080 Procurement System<br>
</p>
@elseif($last_message == 'account_create')
<p>Url : {{$url}}</p>
<p>User Name : {{$emails}}</p>
<p>Password : {{$password}}</p>

@if(!is_null($link))
<a href="{{$link}}" target="_blank">View Now</a>
@endif

<p>Please store the details for further usage.</p>
<p>
    Regards,<br>
    @if(Auth::user()->roles->pluck('display_name')[0] == 'Admin')
    Auto-Pilot<br>
    @else
    Admin<br>
    @endif
    Bloc 1080 Procurement System<br>
</p>

@elseif($last_message == 'password_reset')
<p>User Name : {{$emails}}</p>
<p>Password : {{$password}}</p>
<p>Url : {{$url}}</p>
@if(isset($link))
@if(!is_null($link))
<a href="{{$link}}" target="_blank">View Now</a>
@endif
@endif
<p>
Regards,<br>
    Auto-Pilot<br>
    Bloc 1080 Procurement System<br>
</p>





@elseif($last_message == 'Project-Proposal-Vendor')
@if(isset($link))
@if(!is_null($link))
<a href="{{$link}}" target="_blank">View Now</a>
@endif
@endif
<p>
Regards,<br>
    Auto-Pilot<br>
    Bloc 1080 Procurement System<br>
</p>





@else
<p>{{$last_message}}</p>
@if(isset($link))
@if(!is_null($link))
<a href="{{$link}}" target="_blank">View Now</a>
@endif
@endif
<p>
    Regards,<br>
    Admin<br>
    BLOC 1080 Ltd.<br>
</p>
@endif