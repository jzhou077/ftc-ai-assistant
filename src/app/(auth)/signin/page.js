import AuthenticationForm from "../../../components/ui/AuthenticationForm"
import { signIn, signInWithGoogle } from '../actions'
import { createClient } from "../../utils/supabase/server"

import { redirect } from "next/navigation"

export default async function SignIn() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (data?.user) {
        redirect('/chat')
    }
    
    return (
        <AuthenticationForm handleSubmit={signIn} handleGoogleOAuth={signInWithGoogle} type="signin"/>
    )
}