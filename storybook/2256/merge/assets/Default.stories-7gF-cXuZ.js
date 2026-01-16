import{j as r}from"./iframe-Dcjk2TLd.js";import{A as e}from"./ActionGroup-CElENKZ5.js";import{B as t}from"./Button-D-jN4scm.js";import{A as u,s as h}from"./Action-D6NQe9wE.js";import{S as x}from"./Switch-Cg1N9Ugm.js";import{L as y}from"./Link-Dn0s-zAw.js";import{u as f,F as j,S}from"./ResetButton-cMvnULPZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D8BmLFRX.js";import"./flowComponent-DUQvMGjf.js";import"./index-j2LaL0Dv.js";import"./clsx-B-dksMZM.js";import"./index-DmOV_yi6.js";import"./getActionGroupSlot-Cfz4NNN9.js";import"./useStatic-DYXSIhuP.js";import"./IconWarning-4NWKkNon.js";import"./remote-B1sU4u7F.js";import"./Text-lyGbob8n.js";import"./browser-B8c1tkp7.js";import"./EmulatedBoldText-CjCUgZSU.js";import"./Text-zDtUk3hp.js";import"./utils-C4npX7la.js";import"./LoadingSpinner-BbHp37hM.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DSXGmj0V.js";import"./context-pAIzfbng.js";import"./Button-D3PtZgc0.js";import"./ProgressBar-lCiNiuDc.js";import"./Label-BZUq_rhq.js";import"./Hidden-CKziqW6n.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CKc5oqWD.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CbiP5Rr9.js";import"./useFocus-B7gP7G3p.js";import"./useFocusRing-HFiDNYir.js";import"./useFocusable-K4tA3zQn.js";import"./context-Dbo8u0HC.js";import"./useFieldComponent-1tG_hIZF.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BSsXWzYc.js";import"./useFormReset-DcYsnWfg.js";import"./useControlledState-DBXDF7mL.js";import"./VisuallyHidden-D01b8Wlz.js";import"./FieldError-CGpcN3PS.js";import"./FieldError-B9deYV15.js";import"./AlertText-PsTvKuCL.js";import"./AlertIcon-CZw-AcP9.js";import"./useRef-B4q9LGeG.js";const xr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{action:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const yr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,i as WithExtraSecondaryAction,m as WithLink,l as WithReactHookForm,c as WithSecondaryAction,d as WithSwitch,yr as __namedExportsOrder,xr as default};
