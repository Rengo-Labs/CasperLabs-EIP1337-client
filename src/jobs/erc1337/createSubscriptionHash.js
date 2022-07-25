import {CLPublicKey, CLValueBuilder, RuntimeArgs} from "casper-js-sdk";
import ERC1337 from "../../clients/erc1337/ERC1337";

const createSubscriptionHash = async () => {

    const erc1337 = new ERC1337()
    await erc1337.initContract("hash-728427bcbc55aba6aeb42ad316c88aba79fefbac24f87f107d5d601b3a89bed3")

    //d9758b25962f4cba82ba0047389af97a70acb7df43b391f9ffb293801bea5061
    const ownerKey = "010e31a03ea026a8e375653573e0120c8cb96699e6c9721ae1ea98f896e6576ac3";
    const ownerHash = CLPublicKey.fromHex(ownerKey).toAccountHash();

    //c4d3720f66c1423d81f1f287f71c3229c7f1ff5d82d50ab2c3679ffd13630de4
    const ownerPublicKey = "0118a7fc9c6f062548b17ef4711acb522b497de36043e8086115e7252b3f9996be";

    await erc1337.createSubscriptionHash(RuntimeArgs.fromMap({
        from: CLValueBuilder.byteArray(ownerHash),
        public: CLPublicKey.fromHex(ownerPublicKey)
    }))
}

createSubscriptionHash()