import ERC1337 from "../../clients/erc1337/ERC1337";

const getSubscriptionHash = async () => {

    const erc1337 = new ERC1337()
    await erc1337.initContract("hash-728427bcbc55aba6aeb42ad316c88aba79fefbac24f87f107d5d601b3a89bed3")

    //account-hash-c4d3720f66c1423d81f1f287f71c3229c7f1ff5d82d50ab2c3679ffd13630de4
    const subscriber = await erc1337.getSubscriptionHash("c4d3720f66c1423d81f1f287f71c3229c7f1ff5d82d50ab2c3679ffd13630de4")

    //response ce6a09246458590137ffa29e1775fc45c95ea66498416de893f857bfdf966219
    console.log(`Subscriber ${subscriber}`)
}

getSubscriptionHash()