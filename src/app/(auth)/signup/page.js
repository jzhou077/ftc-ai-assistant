import AuthenticationForm from '../../../components/ui/AuthenticationForm'
import { signUp } from '../actions'
import { createClient } from '../../utils/supabase/server'

import { redirect } from 'next/navigation'

export default async function SignUp() {
    const supabase = createClient()

    const { data, error } = await supabase.auth.getUser()
    if (data?.user) {
        redirect('/chat')
    }

    return (
        <AuthenticationForm handleSubmit={signUp} type="signup"/>
    )
}