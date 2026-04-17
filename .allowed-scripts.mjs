import { configureAllowedScripts } from '@ministryofjustice/hmpps-npm-script-allowlist'

export default configureAllowedScripts({
   allowlist: {
      // normally needed by jest but we don't actually need it in this project
      "node_modules/fsevents@2.3.3": "FORBID"
   },
})
