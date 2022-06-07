import axios from "axios";
import Broker from "../types/Broker";

/**
 * Access the Brokers REST endpoints
 */
class BrokersHandler {
  public static async getBrokers(): Promise<Broker[]> {
    const result = await axios.get("http://localhost:8080/brokers")
    return result.data;
  }
}

export default BrokersHandler;
