import mitt, { Emitter } from 'mitt';

export type Events = {
  createComponent: string;
};
const mitter: Emitter<Events> = mitt<Events>();

export default mitter;
