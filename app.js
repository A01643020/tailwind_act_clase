function codeBlock(text, language) {
    return $('<div>').addClass('group relative my-auto').append(
        $('<pre>').addClass('relative max-w-full overflow-hidden rounded-xl bg-slate-800 p-5 hover:overflow-scroll hover:ease-in-out').append(
            $('<code>').addClass('text-slate-100').text(text)
        ),
        $('<div>').addClass('group/icon absolute right-2 top-2 p-1').append(
            $('<svg>').addClass('h-5 w-5 text-gray-500 opacity-0 transition-all ease-in-out group-hover/icon:text-white group-hover:opacity-100').attr({
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 20 20',
                fill: 'currentColor',
                'aria-hidden': 'true'
            }).append(
                $('<path>').attr('d', 'M8 2a1 1 0 000 2h2a1 1 0 100-2H8z'),
                $('<path>').attr('d', 'M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z')
            ),
        ),
        $('<span>').addClass('absolute bottom-2 right-3 text-xs text-gray-500').text(language)    
    );
}

$(() => {
    $('div#code-block-1').append(codeBlock('console.log("Hello, World!")', 'javascript'));
});
