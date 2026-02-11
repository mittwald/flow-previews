import{j as r}from"./iframe-D8EpHgnQ.js";import{A as e}from"./ActionGroup-C8Sp28d_.js";import{B as t}from"./Button-v3XDTDQm.js";import{s as h,A as u}from"./Action-Bqe5nSI1.js";import{S as x}from"./Switch-Cw8-26Pv.js";import{L as y}from"./Link-CGpRENKt.js";import{u as f,F as j,S}from"./ResetButton-Bdqeh-7e.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DBeHUKte.js";import"./flowComponent-DshXN_wf.js";import"./index-eO8RjZh1.js";import"./clsx-B-dksMZM.js";import"./index-CTAMatFU.js";import"./getActionGroupSlot-cFKfTxwG.js";import"./useStatic-BaYU_ZGV.js";import"./IconWarning-lLcAh7ID.js";import"./remote-DkgoZmNz.js";import"./Text-Dkvkf5JK.js";import"./browser-CYlhW0g_.js";import"./EmulatedBoldText-1uP-q_AR.js";import"./Text-BH6HQaIi.js";import"./utils-DUD9ssEU.js";import"./LoadingSpinner-BgyqdyMI.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DVql_2Gh.js";import"./context-XjBPUYFu.js";import"./Button-Kox0tnC0.js";import"./ProgressBar-CUBLGiqw.js";import"./Label-Dl__ymiy.js";import"./Hidden-BjTu0qYx.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-oxfSZqnP.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CilZkf8w.js";import"./useFocus-BoCERcfz.js";import"./useFocusRing-DyG-PWur.js";import"./useFocusable-BTi6De5a.js";import"./context-CfNS10y1.js";import"./useFieldComponent-gPWDO_C1.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-D5_w_6aq.js";import"./useFormReset-DtPxpP1_.js";import"./useControlledState-XjABDLiW.js";import"./VisuallyHidden-maxPxeqi.js";import"./FieldError-WVs7H0vD.js";import"./FieldError-EP30ks0X.js";import"./AlertText-CV2tVP-G.js";import"./AlertIcon-Dtjl7KDj.js";import"./useRef-gITyoAnd.js";import"./ButtonView-CR_WR_Xo.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
