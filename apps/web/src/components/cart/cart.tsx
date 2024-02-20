import React from 'react'
import { CartStyles } from './cart.styles'
import { Badge } from '../badge/badge'
import Image from 'next/image'
import { CartItemsMock } from './cart-items-mock'
import { Button } from '../button/button'

export function Cart() {
  const items = CartItemsMock
  return (
    <CartStyles.Container>
      <CartStyles.Content>
        <h2>Olá</h2>
        <CartStyles.Badges>
          <Badge title='Dine In' isSelected />
          <Badge title='To go' />
          <Badge title='Delivery' />
        </CartStyles.Badges>
        <CartStyles.Table>
          <tr>
            <th>Item</th>
            <th>Qt</th>
            <th>Price</th>
          </tr>
          {items.map((item) => (
            <>
            <tbody key={item.itemName}>
              <td>
              <div style={{display: 'flex', gap: 10}}>
                <Image
                  src={require('../../../assets/images/1.png')}
                  width={40}
                  alt='Trash'
                />
                <div>
                  <b>{item.itemName}</b>
                  <p>{item.price}</p>
                </div>
              </div>
            </td>
            <td>
              <CartStyles.Quantity placeholder='1' type='number' />
            </td>
                <td>${item.price * item.quantity}</td>
            </tbody>
          <div style={{display: 'flex', flex: 1, gap: 20}}>
             <CartStyles.Note placeholder='Notes...' />
            <CartStyles.DeleteButton>
              <Image
                src={require('../../../assets/icons/Trash.svg')}
                width={18}
                alt='Trash'
              />
            </CartStyles.DeleteButton>
          </div>
          </>
          ))}
        </CartStyles.Table>
      </CartStyles.Content>
      <div style={{padding: 30}}>
        <Button title='Continue to Payment' />
      </div>
    </CartStyles.Container>
  )
}
