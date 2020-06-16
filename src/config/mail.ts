interface IMailConfig {
  driver: 'ethereal' | 'ses';

  default: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  default: {
    from: {
      email: 'romulo@romulovp.com.br',
      name: 'Rômulo V. Pereira',
    },
  },
} as IMailConfig;
