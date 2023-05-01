<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LoginController extends Controller
{
    public function login()
    {
        return Inertia::render("Auth/Login");
    }
    protected $redirectTo = '/login';
   
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
   
    public function loginSubmit(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);
        if (Auth::attempt($credentials)) {
            if (auth()->user()->is_admin == 1) {
                
                $request->session()->regenerate();
                return redirect()->route('user.home');
                
            }else{
                $request->session()->regenerate();
            return redirect()->intended('dashboard');
            }
            // $request->session()->regenerate();
            // return redirect()->intended('dashboard');
        }

        return back()->withErrors([
            'email' => 'The provided credentials do not match our records.',
        ])->onlyInput('email');
    }
    public function logout()
    {
        Auth::logout();
        return redirect()->route('login');
    }
}