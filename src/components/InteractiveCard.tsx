"use client"
export default function InteractiveCard({ children }: { children: React.ReactNode }) {

    function onCardMouseAction(event: React.SyntheticEvent){
        if(event.type=='mouseover'){
            event.currentTarget.classList.remove('shadow-[0px_0px_20px_rgba(0,0,0,1)]', 'bg-white')
            event.currentTarget.classList.add('shadow-[0px_0px_40px_rgba(0,0,0,1)]','bg-neutral-200')
        }
        else{
            event.currentTarget.classList.remove('shadow-[0px_0px_40px_rgba(0,0,0,1)]','bg-neutral-200')
            event.currentTarget.classList.add('shadow-[0px_0px_20px_rgba(0,0,0,1)]', 'bg-white')
        }
    }
    return (
        <div className='w-full h-[300px] rounded-lg bg-white shadow-[0px_0px_20px_rgba(0,0,0,1)]' 
        onMouseOver={(e) => onCardMouseAction(e)}
        onMouseOut={(e) => onCardMouseAction(e)}>
            {children}
        </div>
    );
}