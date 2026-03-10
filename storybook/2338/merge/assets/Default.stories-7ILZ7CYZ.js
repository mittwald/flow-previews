import{j as o}from"./iframe-Bge_iwzq.js";import{A as n}from"./ActionGroup-Cm9WLYvL.js";import{B as t}from"./Button-DYq5oiR6.js";import{s as l,A as d}from"./ActionBatch-AWhYHCSY.js";import{S as h}from"./Switch-DMfgKflI.js";import{L as A}from"./Link-CwcCCToL.js";import{u as y,F as x,S}from"./ResetButton-B8dyUvel.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3MU2GF_.js";import"./flowComponent-MzGAW5sa.js";import"./index-CO3RD-KI.js";import"./clsx-B-dksMZM.js";import"./index-Dbbom8kG.js";import"./getActionGroupSlot-DLRBpctv.js";import"./useStatic-CNeEScnJ.js";import"./IconWarning-CnGwh2Y2.js";import"./remote-CO23tKXG.js";import"./Text-Bo3CKbUr.js";import"./browser-EEHoGSlH.js";import"./EmulatedBoldText-D9nC6wju.js";import"./Text-70WXc8nw.js";import"./utils-rhPAe061.js";import"./LoadingSpinner-BWNPdeXh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BBcItmf2.js";import"./context-gG1Mi2B7.js";import"./Button-0WCxpm2-.js";import"./ProgressBar-VjbUKBDb.js";import"./Label-CCD88BdD.js";import"./Hidden-CDcFNb6q.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ltgoN8N_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXEJU3rI.js";import"./useFocus-M-LntWI3.js";import"./useFocusRing-B6FG_9qv.js";import"./useFocusable-BPbhPIus.js";import"./useOverlayController-wivVBOVc.js";import"./useFieldComponent-DrAtnMqi.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-ClzIwFMh.js";import"./useFormReset-CAOi_S_S.js";import"./useControlledState-CyAGSHwZ.js";import"./VisuallyHidden-BL5eqrat.js";import"./FieldError-D2SilRMV.js";import"./FieldError-Cv0VAgMN.js";import"./AlertText-BlzMkriF.js";import"./AlertIcon-DJ3CSUsO.js";import"./ActionGroupView-DMVI4rfL.js";import"./Content-CuNOzgqd.js";import"./Heading-JLPBp959.js";import"./Heading-DerjJN3d.js";import"./RSPContexts-DPd6iTOd.js";import"./Modal-DEyfydXj.js";import"./Overlay-G0jPQhAE.js";import"./OverlayContextProvider-BzHb6wxA.js";import"./Dialog-BA7SIyML.js";import"./OverlayArrow-CPd1sFKC.js";import"./Collection-DW5GmGUQ.js";import"./CollectionBuilder-Dm-kdOwO.js";import"./SelectionIndicator-HpycCnAD.js";import"./Separator-B2lQeJLB.js";import"./SelectionManager-CZ-2QuwE.js";import"./useCollator-BqBbPKoz.js";import"./FocusScope-DsvOCLtc.js";import"./ButtonView-DwzX0guQ.js";import"./Flex-DYbjytEc.js";import"./useRef-C4wUjBhi.js";const Do={title:"Actions/ActionGroup",component:n,render:r=>o.jsxs(n,{...r,children:[o.jsx(d,{onAction:()=>l(1500),children:o.jsx(t,{color:"accent",children:"Create customer"})}),o.jsx(d,{children:o.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},s={},e={render:r=>o.jsx(n,{...r,children:o.jsx(t,{children:"Ok"})})},a={render:r=>o.jsxs(n,{...r,children:[o.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),o.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),o.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:r=>o.jsxs(n,{...r,children:[o.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),o.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),o.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),o.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},c={render:r=>o.jsxs(n,{...r,children:[o.jsx(t,{slot:"secondary",children:"Edit"}),o.jsx(h,{slot:"primary",children:"Activate"})]})},p={render:r=>o.jsxs(n,{...r,children:[o.jsx(A,{slot:"abort",children:"Forgot password?"}),o.jsx(t,{color:"accent",children:"Login"})]})},m={render:r=>{const u=y();return o.jsx(x,{form:u,onSubmit:async()=>await l(2e3),children:o.jsxs(n,{...r,children:[o.jsx(S,{color:"accent",children:"Submit"}),o.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save as new
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <ActionGroup {...props}>
          <SubmitButton color="accent">Submit</SubmitButton>
          <Button color="secondary" variant="soft">
            Abort
          </Button>
        </ActionGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const Ho=["Default","PrimaryActionOnly","WithSecondaryAction","WithExtraSecondaryAction","WithSwitch","WithLink","WithReactHookForm"];export{s as Default,e as PrimaryActionOnly,i as WithExtraSecondaryAction,p as WithLink,m as WithReactHookForm,a as WithSecondaryAction,c as WithSwitch,Ho as __namedExportsOrder,Do as default};
