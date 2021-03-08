import { Injectable } from '@nestjs/common';
import { from } from 'rxjs';
import { PrismaService } from 'src/prisma.service';

export type SyncObjects = 'decks';
const validSyncObjects: SyncObjects[] = ['decks'];

export class SyncRepository {
  private name: SyncObjects;

  constructor(
    private prisma: PrismaService,
    private _name: SyncObjects,
    private syncSessionId: string,
  ) {
    if (!validSyncObjects.includes(this._name)) {
      throw new Error(`Cannot sync ${this._name}`);
    }

    this.name = _name;
  }

  get db() {
    switch (this.name) {
      case 'decks':
        return this.prisma.deck;
    }
  }

  created = (lastPulledAt: Date, syncAt: Date) => {
    return from(
      this.db.findMany({
        where: {
          createdAt: {
            gte: lastPulledAt,
            lte: syncAt,
          },
        },
      }),
    ).pipe(
      map((decks: Deck[]) =>
        decks.filter((deck) => deck.syncSessionId !== this.syncSessionId),
      ),
    );
  };

  updated = (lastPulledAt: Date, syncAt: Date) => {
    return this.db.findMany({
      where: {
        createdAt: {
          gte: lastPulledAt,
          lte: syncAt,
        },
      },
    });
  };
}
