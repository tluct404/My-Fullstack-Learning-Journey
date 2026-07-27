'use client';

import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const supabase = createClient();
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({ email, password});
    setMessage(error ? error.message : 'Account created. Try signing in.')
  }

  async function handleSignIn() {
    const { error } = await supabase.auth.signInWithPassword({ email, password});
    if (error) {
      setMessage(error.message);
      return;
    }

    router.push('/dashboard');
    router.refresh();
  }

  return (
    <main className="page">
      <h1>Sign in</h1>

      <input
        type="email" 
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password" 
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
        <button onClick={handleSignIn}>Sign in</button>
        <button onClick={handleSignUp}>Create account</button>
      </div>

      {message && <p>{message}</p>}
    </main>
  )
}
