import{j as r}from"./iframe-P-BtG9en.js";import{A as e}from"./ActionGroup-BOaMC-Ca.js";import{B as t}from"./Button-BDKyvND0.js";import{A as u,s as h}from"./Action-BXaB41c4.js";import{S as x}from"./Switch-JzMieC5k.js";import{L as y}from"./Link-Vx4jQ_pt.js";import{u as f,F as j,S}from"./ResetButton-Bun6L1Pq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-NZeYY7PB.js";import"./flowComponent-BpgWfaNt.js";import"./index-B7vbb8bW.js";import"./clsx-B-dksMZM.js";import"./index-BvXbw6Ik.js";import"./getActionGroupSlot-CoTv8oDB.js";import"./useStatic-CkdzkAMF.js";import"./IconWarning-NSWHp5YX.js";import"./remote-CHm5B1ZS.js";import"./Text-WQ3bdi2b.js";import"./browser-CAs7Gyq6.js";import"./EmulatedBoldText-Dkyjs4gQ.js";import"./Text-Cuc5X3SS.js";import"./utils-B0ReHH5J.js";import"./LoadingSpinner-CEdiZrnd.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DMM5tmNP.js";import"./context-DgQkEglP.js";import"./Button-CkYmzEte.js";import"./ProgressBar-DT6X9kMn.js";import"./Label-Dy2C0Oyl.js";import"./Hidden-_62Uq0iE.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DQN1qZoA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DdsYmr0S.js";import"./useFocus-CaaZ7Vn6.js";import"./useFocusRing-CySMD5sm.js";import"./useFocusable-BT9LLfcI.js";import"./context-DzeViRSK.js";import"./useFieldComponent-DCdIumPj.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DaxdEKB-.js";import"./useFormReset-EHJI2p2K.js";import"./useControlledState-CF2gRUje.js";import"./VisuallyHidden-DdvDFx4J.js";import"./FieldError-BKtriW0o.js";import"./FieldError-C3DeF1uc.js";import"./AlertText-B793ATvK.js";import"./AlertIcon-D-lULPsb.js";import"./useRef-Vl5p17w5.js";import"./ButtonView-CwOL1ZjU.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
