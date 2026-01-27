import{j as r}from"./iframe-BBX1MRm7.js";import{A as e}from"./ActionGroup-CxYNjMjy.js";import{B as t}from"./Button-BqkPfHUM.js";import{A as u,s as h}from"./Action-NfMU4pZQ.js";import{S as x}from"./Switch-Do-NLtXd.js";import{L as y}from"./Link-BQlGd_9b.js";import{u as f,F as j,S}from"./ResetButton-Db5RrJnJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CGdtYp29.js";import"./flowComponent-79ppapas.js";import"./index-BNLEYWOE.js";import"./clsx-B-dksMZM.js";import"./index-CaVys9ny.js";import"./getActionGroupSlot-Cs4GvwwL.js";import"./useStatic-eT6_SwdI.js";import"./IconWarning-D1rdipwB.js";import"./remote-DQSNjr8v.js";import"./Text-bZjB6G95.js";import"./browser-94--rh0I.js";import"./EmulatedBoldText-B_ZrZeLf.js";import"./Text-Dx1GcOD_.js";import"./utils-BavrKavc.js";import"./LoadingSpinner-D7vBft_f.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BVVru5D3.js";import"./context-CZSumH6g.js";import"./Button-BJia7Ggt.js";import"./ProgressBar-BlLvdox5.js";import"./Label-dmshrR3q.js";import"./Hidden-BWx-3ZWW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CwE3wslu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C19iJYYn.js";import"./useFocus-CEW7w8cP.js";import"./useFocusRing-Bm9tRP_O.js";import"./useFocusable-DP1OjJqD.js";import"./context-CbNZJEnz.js";import"./useFieldComponent-B_qWTKJx.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-DCsKB4PK.js";import"./useFormReset--Sx8IrxJ.js";import"./useControlledState-hVcOsExM.js";import"./VisuallyHidden-B0NnPUX1.js";import"./FieldError-DhG2ZYTr.js";import"./FieldError-C_UdMObt.js";import"./AlertText-BesKIlLk.js";import"./AlertIcon-Bzw_XkQ4.js";import"./useRef-DzuR5EZW.js";import"./ButtonView-DtpzIIn9.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
