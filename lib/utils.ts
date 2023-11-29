


export function dateFormat(date: string) {
    const originalDate = new Date(date);

    return originalDate.toLocaleDateString('en-US',
        { year: 'numeric', month: 'long', day: 'numeric' });

}