import {
  AutomationActionStepId,
  AutomationStepDefinition,
  AutomationStepType,
  AutomationIOType,
  AutomationFeature,
} from "@budibase/types"

export const definition: AutomationStepDefinition = {
  name: "Make Integration",
  stepTitle: "Make",
  tagline: "Trigger a Make scenario",
  description:
    "Performs a webhook call to Make and gets the response (if configured)",
  icon: "ri-shut-down-line",
  stepId: AutomationActionStepId.integromat,
  type: AutomationStepType.ACTION,
  internal: false,
  features: {
    [AutomationFeature.LOOPING]: true,
  },
  inputs: {},
  schema: {
    inputs: {
      properties: {
        url: {
          type: AutomationIOType.STRING,
          title: "Webhook URL",
        },
        body: {
          type: AutomationIOType.JSON,
          title: "Payload",
        },
      },
      required: ["url", "body"],
    },
    outputs: {
      properties: {
        success: {
          type: AutomationIOType.BOOLEAN,
          description: "Whether call was successful",
        },
        httpStatus: {
          type: AutomationIOType.NUMBER,
          description: "The HTTP status code returned",
        },
        response: {
          type: AutomationIOType.OBJECT,
          description: "The webhook response - this can have properties",
        },
      },
      required: ["success", "response"],
    },
  },
}