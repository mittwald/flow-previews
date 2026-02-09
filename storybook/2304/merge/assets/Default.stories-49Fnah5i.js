import{j as r}from"./iframe-DsvUdpXw.js";import{A as e}from"./ActionGroup-DXsjU9YE.js";import{B as t}from"./Button-Bh17vETd.js";import{s as h,A as u}from"./Action-CHQuPKKz.js";import{S as x}from"./Switch-Dcz5kh9r.js";import{L as y}from"./Link-CmpzCeJb.js";import{u as f,F as j,S}from"./ResetButton-BMOT3GH_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-6cr1cE.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./useStatic-B4i3epQD.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Text-DX5v3ksG.js";import"./browser-BtOTkQbR.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./utils-elFy1-Tx.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./context-ya2kPvzB.js";import"./useFieldComponent-CWVnpPPS.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BE3wBxmq.js";import"./useFormReset-BZPoHMi4.js";import"./useControlledState-HbpZAl0m.js";import"./VisuallyHidden-Ds80HbqR.js";import"./FieldError-DMawyIiV.js";import"./FieldError-S3zhgpi7.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";import"./useRef-Cuy_dzRn.js";import"./ButtonView-ngwm-oT3.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
