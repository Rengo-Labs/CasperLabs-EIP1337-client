import {CLPublicKey, CLValueBuilder, RuntimeArgs} from "casper-js-sdk";
import ERC1337 from "../../clients/erc1337/ERC1337";

const executeSubscription = async () => {

    const erc1337 = new ERC1337()
    await erc1337.initContract("hash-728427bcbc55aba6aeb42ad316c88aba79fefbac24f87f107d5d601b3a89bed3")

    const ownerKey = "0118a7fc9c6f062548b17ef4711acb522b497de36043e8086115e7252b3f9996be";
    const ownerHash = CLPublicKey.fromHex(ownerKey).toAccountHash();

    await erc1337.executeSubscription(RuntimeArgs.fromMap({
        signature: CLValueBuilder.string("e2df49d9c16ccf86e0b7c1a96b5088222ae1f39bfd843fabe264a11c79df640454ed51862ca673fdaafd46fcab462feeb9583ed3a1a33fe0d8badd2acfdc060b"),
        from: CLValueBuilder.byteArray(ownerHash),

    }))
}

executeSubscription()