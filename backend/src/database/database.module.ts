import { Module } from '@nestjs/common';
import { EventStoreModule } from '@juicycleff/nestjs-event-store';

@Module({
  imports: [
    EventStoreModule.register({
      type: 'event-store',
      tcpEndpoint: {
        host: 'localhost',
        port: 2113 
      },
      options: {
      }
    }),
  ],
})
export class DatabaseModule {}
