import{j as r}from"./iframe-CH-PGbIe.js";import{A as e}from"./ActionGroup-Dg2TFsOE.js";import{B as t}from"./Button-Dl-iCxcF.js";import{s as h,A as u}from"./Action-CX67yONB.js";import{S as x}from"./Switch-BHYJCOuH.js";import{L as y}from"./Link-DAc9zWmn.js";import{u as f,F as j,S}from"./ResetButton-DoGjjkHq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DYPsp9rr.js";import"./flowComponent-Cx8afA-p.js";import"./index-JjjT5_3a.js";import"./clsx-B-dksMZM.js";import"./index-yvyiz2TD.js";import"./getActionGroupSlot-BkUFYgi5.js";import"./useStatic-DyjFLUOF.js";import"./IconWarning-BrtiYPUm.js";import"./remote-NkxELaCk.js";import"./Text-DUTVzyy5.js";import"./browser-Bk_hun62.js";import"./EmulatedBoldText-DLXz_2Ie.js";import"./Text-C_Kx-nbJ.js";import"./utils-BUbYN1U7.js";import"./LoadingSpinner-BVg6Htwb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-UQrIwX21.js";import"./context-BEPAk1pi.js";import"./Button-BxJ7LcYT.js";import"./ProgressBar-BvIgs7se.js";import"./Label-YvP3zR1_.js";import"./Hidden-BHNvmzaU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBwXLpG2.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CjXzQGxt.js";import"./useFocus-C-u_ZFsP.js";import"./useFocusRing-CuUFHyYZ.js";import"./useFocusable-DX9jgPLa.js";import"./context-BsZ7lsCx.js";import"./useFieldComponent-R38s1k2Z.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-CSKOmrza.js";import"./useFormReset-DarrOQyz.js";import"./useControlledState-BQPo69mZ.js";import"./VisuallyHidden-BZmadp8e.js";import"./FieldError-9pLulNyY.js";import"./FieldError-PikikH1M.js";import"./AlertText-lzhTm-Qc.js";import"./AlertIcon-Cf4_Rc8_.js";import"./useRef-DKmNltMK.js";import"./ButtonView-B_eZj1aS.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
