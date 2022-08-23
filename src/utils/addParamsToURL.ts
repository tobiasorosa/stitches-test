interface param {
	key: string;
	value: string;
}

export const addParamsToURL = (
	params: param | param[],
	url?: string
): string => {
	if (!url) return '';
	const __url = new URL(url);

	const __params = new URLSearchParams(__url.search);

	if (params instanceof Array) {
		params.map(({ key, value }) => __params.append(key, value));
	} else {
		__params.append(params.key, params.value);
	}

	return `${__url.origin}${__url.pathname}?${__params}`;
};
/* 
  addParamsToURL(
    'https://pln.brtrk2.com/aff_c/xxxxx/bbb?offer_id=7224&aff_id=13419',
    {
      key: 'utm_content',
      value: 'Solicitar-Cartao-Chaba',
    }
  )
)

  addParamsToURL('https://pln.brtrk2.com/aff_c?aff_id=13419', {
    key: 'utm_content',
    value: 'Solicitar-Cartao-Chaba',
  })
)

  addParamsToURL('https://pln.brtrk2.com/', {
    key: 'utm_content',
    value: 'Solicitar-Cartao-Chaba',
  })
)

  addParamsToURL('https://pln.brtrk2.com/bbb?hgh=asd', [
    {
      key: 'utm_content',
      value: 'Solicitar-Cartao-Chaba',
    },
    {
      key: 'utm_content_2',
      value: 'haba',
    },
  ])
)

https://pln.brtrk2.com/aff_c/xxxxx/bbb?offer_id=7224&aff_id=13419&utm_content=Solicitar-Cartao-Chaba
https://pln.brtrk2.com/aff_c?aff_id=13419&utm_content=Solicitar-Cartao-Chaba
https://pln.brtrk2.com/?utm_content=Solicitar-Cartao-Chaba
https://pln.brtrk2.com/bbb?hgh=asd&utm_content=Solicitar-Cartao-Chaba&utm_content_2=haba */
