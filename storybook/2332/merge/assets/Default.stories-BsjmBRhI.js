import{j as r}from"./iframe-Bas3a7fO.js";import{A as e}from"./ActionGroup-D7GnjScM.js";import{B as t}from"./Button-CCev3q47.js";import{s as h,A as u}from"./ActionBatch-Ctg3LC0z.js";import{S as x}from"./Switch-DPJxCsS4.js";import{L as y}from"./Link-CvzlSJYo.js";import{u as f,F as j,S}from"./ResetButton-Cd-wp-Vd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtBYvx23.js";import"./flowComponent-DM0zlvyg.js";import"./index-BsE7CccI.js";import"./clsx-B-dksMZM.js";import"./index-CuTcGtc9.js";import"./getActionGroupSlot-DxyevWSt.js";import"./useStatic-LTDZm_8J.js";import"./IconWarning-9FMOeqa7.js";import"./remote-CQRN9i7s.js";import"./Text-D06q46lu.js";import"./browser-CI0OqVn7.js";import"./EmulatedBoldText-DWlWNctj.js";import"./Text-Di9JAG-3.js";import"./utils-eswKxOcw.js";import"./LoadingSpinner-CaJGFcVk.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DWSvb_Dh.js";import"./context-C6ovHfpS.js";import"./Button-cgxxNusA.js";import"./ProgressBar-C3VsHXts.js";import"./Label-CAS-GA4h.js";import"./Hidden-JsWJU2dF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-AX-jpDlX.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BXALpkIT.js";import"./useFocus-BpOhXbga.js";import"./useFocusRing--4ecJhRH.js";import"./useFocusable-Dz64TW3s.js";import"./useOverlayController-Bne___mw.js";import"./useFieldComponent-CHbV_zSr.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-obAaIAHP.js";import"./useFormReset-C6M9OYlp.js";import"./useControlledState-DnKF_srQ.js";import"./VisuallyHidden-DwReVjRm.js";import"./FieldError-B_qklWB_.js";import"./FieldError-CYd-7Lc_.js";import"./AlertText-5S7f5h6L.js";import"./AlertIcon-CfXFBmoz.js";import"./ActionGroupView-BoEMuKNt.js";import"./Content-jsO27phX.js";import"./Heading-BvcJIgQi.js";import"./Heading-CIj0isr2.js";import"./RSPContexts-BxdWTHUz.js";import"./Modal-CZas3fxE.js";import"./Overlay-CKC1BDXC.js";import"./OverlayContextProvider-DoMgXFZI.js";import"./Dialog-BsJqG9mx.js";import"./OverlayArrow-B1y4rBya.js";import"./Collection-C8pnnMLO.js";import"./CollectionBuilder-0TvFeMg9.js";import"./SelectionIndicator-C1UYqe1w.js";import"./Separator-BhW3WF_H.js";import"./SelectionManager-jyyo19U7.js";import"./useEvent-CDJhLR4c.js";import"./useCollator-CKG6FCAG.js";import"./FocusScope-yn2ZelXu.js";import"./ButtonView-fFevQyKz.js";import"./Flex-BYJmVhKw.js";import"./useRef-TqOxF1Gm.js";const Ir={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button color="danger">Delete project</Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Mr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,c as WithExtraSecondaryAction,d as WithLink,l as WithReactHookForm,i as WithSecondaryAction,m as WithSwitch,Mr as __namedExportsOrder,Ir as default};
