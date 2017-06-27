"""Implementation of a deck of cards. You can shuffle the deck, draw cards and show the deck."""

# COMMENT THE LINE BELOW IF YOU ARE USING PYTHON 3
from __future__ import print_function

import colorama
import random
import unittest

colorama.init()

CARD_NAMES = ('2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace')
CARD_SUITS = ('clubs', 'diamonds', 'hearts', 'spades')

def getColor(suit):
    """Return the color of a suit (red or black)."""

    return {
        'clubs': 'BLACK',
        'diamonds': 'RED',
        'hearts': 'RED',
        'spades': 'BLACK',
    }[suit]

def printTitle(message):
    """Print a message with extra lines."""

    print (" ")
    print (" ")
    print (message)

class Card(object):
    """Implements the Card class."""

    def __init__(self, suit, name):
        self.suit = suit
        self.name = name

    def __str__(self):
        return getattr(colorama.Fore, getColor(self.suit)) + self.name + " of " + self.suit


class Deck(object):
    """Implements the Deck class."""

    print (" ")
    printTitle("MAKING A NEW DECK...")
    def __init__(self):
        self.cards = []
        for suit in CARD_SUITS:
            for name in CARD_NAMES:
                self.cards.append(Card(suit, name))

    def show(self):
        """Show the deck of cards."""
        if len(self.cards) == 0:
            printTitle("YOUR DECK CONTAINS 0 CARDS. YOU NEED A NEW DECK.")
        else:
            printTitle("YOUR DECK CONTAINS " + str(len(self.cards)) + " CARDS:")
            print ('  ', end='')
            print (colorama.Back.WHITE)
            for i, card in enumerate(self.cards):
                print(' ', card, end='')
                if i != len(self.cards)-1:
                    print (',', end='')
                else:
                    print ('.' + colorama.Back.BLACK + colorama.Fore.WHITE)

    def shuffle(self):
        """Shuffle the deck of cards."""

        printTitle("SHUFFLING DECK...")
        random.shuffle(self.cards)

    def drawCards(self, drawCount=1):
        """Draw one or more random cards."""

        if drawCount > len(self.cards):
            drawCount = len(self.cards)

        if drawCount == 0:
            printTitle("NO MORE CARDS TO DRAW.")
            return

        printTitle("YOU HAVE DRAWN " + str(drawCount) + " CARD(S):")
        print ('  ', end='')
        print (colorama.Back.WHITE)
        for i in range(1, drawCount+1):
            chosenCard = self.cards.pop()
            print(chosenCard, end='')
            if i != drawCount:
                print(', ', end='')
            else:
                print('.' + colorama.Back.BLACK + colorama.Fore.WHITE)

deck = Deck()
deck.shuffle()
deck.drawCards()
deck.show()
deck.drawCards(random.randint(2, 50))
deck.show()
deck.drawCards(100)
deck.show()

class DeckTest(unittest.TestCase):
    """Tests for the deck."""

    def setUp(self):
        self.deck = Deck()
        print('')
        print('-----------------------------------------')
        printTitle("TESTING DECK...")
        self.deck.shuffle()

    def testIsArray(self):
        """Test the array of cards."""

        self.assertTrue(isinstance(self.deck.cards, list))

    def testSize(self):
        """Test the size of the deck (0-52)."""

        self.assertGreaterEqual(len(self.deck.cards), 0)
        self.assertLessEqual(len(self.deck.cards), 52)

    def tearDown(self):
        self.deck = None

unittest.main()
