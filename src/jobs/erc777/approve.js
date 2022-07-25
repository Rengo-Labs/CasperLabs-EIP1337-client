import ERC777 from "../../clients/erc777/ERC777";
import {CLValueBuilder, RuntimeArgs} from "casper-js-sdk";
import {getAccounts} from "../../helpers/utils";

const approve = async () => {
    const {ownerHash, operatorHash, recipientHash} = getAccounts();

    const erc777 = new ERC777()
    await erc777.initContract("hash-590a29371bb8d7d57a319fbc984c09f12558a56129bdfa90e8b585011002eb77")

    await erc777.approve(RuntimeArgs.fromMap({
        spender: CLValueBuilder.key(ownerHash),
        amount: CLValueBuilder.u256("500")
    }))

    const balance = await erc777.balanceOf(CLValueBuilder.key(ownerHash))

    console.log(`Subscriber ${balance}`)
}

approve()