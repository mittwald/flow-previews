import{j as r}from"./iframe-Czt-X4mt.js";import{A as e}from"./ActionGroup-DjlBFa1z.js";import{B as t}from"./Button-CD6msFpC.js";import{s as h,A as u}from"./Action-BQrZ3ZgM.js";import{S as x}from"./Switch-DZeWCQbp.js";import{L as y}from"./Link-LTFE4TsB.js";import{u as f,F as j,S}from"./ResetButton-Cqw_oC7V.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BXoid3qz.js";import"./flowComponent-BEE6NzIR.js";import"./index-BvfwTKjZ.js";import"./clsx-B-dksMZM.js";import"./index-Dtw36EGp.js";import"./getActionGroupSlot-5QVk2C33.js";import"./useStatic-C0a0tu6G.js";import"./IconWarning-CEtgECHE.js";import"./remote-hRcAmPck.js";import"./Text-8ynHQhOY.js";import"./browser-CPd8oh-y.js";import"./EmulatedBoldText-DRvUUCjd.js";import"./Text-t3MR2mNG.js";import"./utils-CU6JriEK.js";import"./LoadingSpinner-B3-O-X86.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BDxrzy3H.js";import"./context-BsnVI305.js";import"./Button-YmddG4Dp.js";import"./ProgressBar-DtVqo96T.js";import"./Label-Ddc2_N7O.js";import"./Hidden-B_4G05gn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BR4TCRo_.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DEVH16Jn.js";import"./useFocus-En_BVabG.js";import"./useFocusRing-DDb3Exp8.js";import"./useFocusable-DFLTBTxr.js";import"./context-CNfFuvDb.js";import"./useFieldComponent-CjTkiSgD.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BLpJhXEB.js";import"./useFormReset-5KG7Gyo5.js";import"./useControlledState-DhgMObTD.js";import"./VisuallyHidden-jSb2CZNn.js";import"./FieldError-BFQHJf6J.js";import"./FieldError-8b6ruGQE.js";import"./AlertText-BfffkCAs.js";import"./AlertIcon-DBLlr2Uy.js";import"./useRef-CYQbuMBQ.js";import"./ButtonView-COtP3lz8.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const fr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,i as WithExtraSecondaryAction,m as WithLink,l as WithReactHookForm,c as WithSecondaryAction,d as WithSwitch,fr as __namedExportsOrder,yr as default};
