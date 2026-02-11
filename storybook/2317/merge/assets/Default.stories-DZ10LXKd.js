import{j as r}from"./iframe-DN5oj4yX.js";import{A as e}from"./ActionGroup-pSqLGzLz.js";import{B as t}from"./Button-CF7BcIrS.js";import{s as h,A as u}from"./Action-GYKv85ul.js";import{S as x}from"./Switch-gGhtjee-.js";import{L as y}from"./Link-DmqPF8TL.js";import{u as f,F as j,S}from"./ResetButton-B5ThXBL6.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D_PfG4t1.js";import"./flowComponent-D5tzpGYQ.js";import"./index-D8Wg1xo0.js";import"./clsx-B-dksMZM.js";import"./index-DUndj3nA.js";import"./getActionGroupSlot-B3lnxGbD.js";import"./useStatic-D8kDoy_M.js";import"./IconWarning-C1DuEctF.js";import"./remote-CDfMg8I2.js";import"./Text-B6wg_w_v.js";import"./browser-t02O3gv-.js";import"./EmulatedBoldText-rvhjeWKi.js";import"./Text-mAHBNKmk.js";import"./utils-u73lU7bl.js";import"./LoadingSpinner-IkyiKoyX.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-Dqjs-V7P.js";import"./context-BQuP-QJJ.js";import"./Button-BQ5wMWnN.js";import"./ProgressBar-ChQMk24B.js";import"./Label-D5uLN87S.js";import"./Hidden-DvJV1KBO.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-52-JVqkW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-dDK8KT2l.js";import"./useFocus-CanfFAPv.js";import"./useFocusRing-Cbnk9x9v.js";import"./useFocusable-6yyx7e1u.js";import"./context-BOqeUKEn.js";import"./useFieldComponent-DVOrWc0y.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-4PZgoKqc.js";import"./useFormReset-B44cc5VH.js";import"./useControlledState-Dl4qb5FM.js";import"./VisuallyHidden-BipIpOcd.js";import"./FieldError-CqFPhrQB.js";import"./FieldError-lE_N68JV.js";import"./AlertText-CB1nkD4I.js";import"./AlertIcon-DDaSQZAJ.js";import"./useRef-C2EU3C7-.js";import"./ButtonView-yRoRDfha.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
