
{
    let 假人 = 获取眼前的假人实体(发起者,15);
     if (假人){
        假人.teleport(发起者.location,主世界,0,0);
     }else{
        发起者.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体"}]}`)
     }
}

{
            let 假人 = 获取眼前的假人实体(发起者,15);
             ! (假人)
             ?  发起者.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体"}]}`)
             :  假人.teleport(发起者.location,主世界,0,0);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
}

{
            let 假人 = 获取眼前的假人实体(发起者,15);
             ! (假人)
             ?  发起者.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体"}]}`)
             :  假人.teleport(发起者.location,主世界,0,0);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
}
{
            let 假人 = 
            (
             !  获取眼前的假人实体(发起者,15)
             ?  发起者.runCommand(`tellraw @s {"rawtext":[{"text":"§e§l-光标方向，15格内没找到相关实体"}]}`)
             :  获取眼前的假人实体(发起者,15).teleport(发起者.location,主世界,0,0) 
             ,  获取眼前的假人实体(发起者,15)
             )
}


