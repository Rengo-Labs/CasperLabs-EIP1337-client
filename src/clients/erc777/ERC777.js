/**
 * @fileOverview CSPR JS SDK demo: ERC777 - approve amount of tokens.
 */

import {
  CasperClient, CLValueParsers, Contracts,
  DeployUtil,
} from "casper-js-sdk";
import * as constants from "../../consts/constants";
import * as utils from "../../helpers/utils";
import * as entryPoints from "../../consts/entryPoint";

/**
 * Demonstration of requests for ERC777.
 */
class ERC777 {
  #client
  #keyPairOfContract
  #contractClient
  #contractHashAsByteArray

  constructor() {
    this.#client = new CasperClient(constants.DEPLOY_NODE_ADDRESS);
    this.#keyPairOfContract = utils.getKeyPairOfContract(
        constants.PATH_TO_SOURCE_KEYS
    );
  }

  initContract = async (contractHash) => {
    const stateRootHash = await utils.getStateRootHash(this.#client);

    if (contractHash == null) {
      contractHash = await utils.getAccountNamedKeyValue(
          this.#client,
          stateRootHash,
          this.#keyPairOfContract,
          constants.ERC777_CONTRACT
      );
    }

    const { Contract } = Contracts;
    this.#contractClient = new Contract(this.#client);
    this.#contractClient.setContractHash(contractHash);
    this.#contractHashAsByteArray = [
        ...Buffer.from(contractHash.slice(5), "hex")
    ];
  }

  approve = async (runtimeArgs) => this.#makeDeployment(runtimeArgs, entryPoints.APPROVE)

  #makeDeployment = async (runtimeArgs, entryPoint) => {
    let deploy = DeployUtil.makeDeploy(
        new DeployUtil.DeployParams(
            this.#keyPairOfContract.publicKey,
            constants.DEPLOY_CHAIN_NAME,
            constants.DEPLOY_GAS_PRICE,
            constants.DEPLOY_TTL_MS
        ),
        DeployUtil.ExecutableDeployItem.newStoredContractByHash(
            this.#contractHashAsByteArray,
            entryPoint,
            runtimeArgs
        ),
        DeployUtil.standardPayment(
            constants.DEPLOY_GAS_PAYMENT_FOR_TRANSACTION
        )
    );

    deploy = this.#client.signDeploy(deploy, this.#keyPairOfContract);
    const deployHash = await this.#client.putDeploy(deploy);

    utils.logDetails(constants.ERC777_CONTRACT, deployHash, constants.DEPLOY_GAS_PAYMENT_FOR_TRANSACTION, constants.PATH_TO_CONTRACT_ERC777);
    return deployHash;
  }

  balanceOf = async (owner) => {
    const finalBytes = CLValueParsers.toBytes(owner).unwrap();
    const itemKey = Buffer.from(finalBytes).toString("base64");
    const result = await this.#contractClient.queryContractDictionary(
        "balances",
        itemKey
    ).catch(ex => {
      console.log("Does not exist balance for this account")
      return {data: "0"}
    })

    return result.data.toString();
  }
}
export default ERC777