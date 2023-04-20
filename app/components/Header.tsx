"use client"
import { Button } from "@chakra-ui/react"

export const Header = () => {
  return (
    <header style={{backgroundColor: "#79C0FF"}}>
      {/* セパそれぞれをクリックしたら6球団が表示される
      メニュー？https://chakra-ui.com/docs/components/menu */}
      <Button colorScheme='blue'>パ・リーグ</Button>
      <Button colorScheme='blue'>セ・リーグ</Button>
    </header>
  )
}