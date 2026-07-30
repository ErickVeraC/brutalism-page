export const languages = ['es', 'en', 'pt'] as const;

export type Language = (typeof languages)[number];

export const isLanguage = (value: string | undefined): value is Language =>
	languages.includes(value as Language);

export const localeByLanguage: Record<Language, string> = {
	es: 'es-MX',
	en: 'en-US',
	pt: 'pt-BR',
};

export const ui = {
	es: {
		nav: { manifesto: '/01_MANIFIESTO', blueprints: '/02_PLANOS', log: '/03_BITÁCORA', contact: '/04_CONTACTO', menu: '[ MENÚ ]', close: '[ CERRAR ]' },
		footer: { heading: ['¿LISTO PARA CONSTRUIR', 'CON LÓGICA?'], hire: '[ CONTRÁTAME_EN_UPWORK ]', location: 'UBICACIÓN: CIUDAD_DE_MÉXICO // TLAXCALA' },
		blog: {
			pageTitle: 'ESTUDIO ABIERTO / BITÁCORA', label: '// BITÁCORA_DE_CONSTRUCCIÓN', heading: ['ESTUDIO', 'ABIERTO'],
			description: 'NOTAS SOBRE EXPERIENCIAS, DIVAGACIONES ESTÉTICAS Y ARQUITECTURAS LÓGICAS.', subscribe: '// SUSCRIBIRSE_A_LA_BITÁCORA',
			empty: '// NO_HAY_PUBLICACIONES_EN_ESTE_IDIOMA', emptyHint: 'Las traducciones se incorporarán en una próxima entrega.',
			record: '// REGISTRO', back: '← [ VOLVER_A_LA_BITÁCORA ]',
		},
	},
	en: {
		nav: { manifesto: '/01_MANIFESTO', blueprints: '/02_BLUEPRINTS', log: '/03_LOG', contact: '/04_CONTACT', menu: '[ MENU ]', close: '[ CLOSE ]' },
		footer: { heading: ['READY TO BUILD', 'WITH LOGIC?'], hire: '[ HIRE_ME_ON_UPWORK ]', location: 'LOCATION: MEXICO_CITY // TLAXCALA' },
		blog: {
			pageTitle: 'OPEN STUDIO / LOG', label: '// BUILD_LOG', heading: ['OPEN', 'STUDIO'],
			description: 'NOTES ON EXPERIENCE, AESTHETIC DIGRESSIONS, AND LOGICAL ARCHITECTURES.', subscribe: '// SUBSCRIBE_TO_THE_LOG',
			empty: '// NO_POSTS_IN_THIS_LANGUAGE', emptyHint: 'English translations will be added in an upcoming release.',
			record: '// RECORD', back: '← [ BACK_TO_THE_LOG ]',
		},
	},
	pt: {
		nav: { manifesto: '/01_MANIFESTO', blueprints: '/02_PROJETOS', log: '/03_DIÁRIO', contact: '/04_CONTATO', menu: '[ MENU ]', close: '[ FECHAR ]' },
		footer: { heading: ['PRONTO PARA CONSTRUIR', 'COM LÓGICA?'], hire: '[ CONTRATE-ME_NO_UPWORK ]', location: 'LOCALIZAÇÃO: CIDADE_DO_MÉXICO // TLAXCALA' },
		blog: {
			pageTitle: 'ESTÚDIO ABERTO / DIÁRIO', label: '// DIÁRIO_DE_CONSTRUÇÃO', heading: ['ESTÚDIO', 'ABERTO'],
			description: 'NOTAS SOBRE EXPERIÊNCIAS, DIGRESSÕES ESTÉTICAS E ARQUITETURAS LÓGICAS.', subscribe: '// ASSINAR_O_DIÁRIO',
			empty: '// NÃO_HÁ_PUBLICAÇÕES_NESTE_IDIOMA', emptyHint: 'As traduções para o português serão adicionadas em uma próxima versão.',
			record: '// REGISTRO', back: '← [ VOLTAR_AO_DIÁRIO ]',
		},
	},
} as const;
