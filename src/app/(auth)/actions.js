'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { createClient } from '../utils/supabase/server'

export async function signIn(formEmail, formPassword) {
  const supabase = createClient()

  const data = {
    email: formEmail,
    password: formPassword,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error(error)
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/chat')
}

export async function signUp(formEmail, formPassword) {
  const supabase = createClient()

  const data = {
    email: formEmail,
    password: formPassword,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/chat')
}

export async function signOut() {
  const supabase = createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signInWithGoogle() {  
  const supabase = createClient()

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: 'http://localhost:3000/callback',
    }
  })

  if (data.url) {
    redirect(data.url)
  }
}

export async function forgotPassword(email) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.resetPasswordForEmail(email)
  if (error) {
    console.error(error)
  }
}

export async function resetPassword(password) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.updateUser({ password: password })
}

export async function getUserId() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  return data.user.id
}