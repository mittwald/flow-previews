import{j as r}from"./iframe-l3dQPg2D.js";import{A as e}from"./ActionGroup-vmrUH0ag.js";import{B as t}from"./Button-CVhESpos.js";import{s as h,A as u}from"./Action-BglyJGiG.js";import{S as x}from"./Switch-D2_2gEK2.js";import{L as y}from"./Link-C3SyFAUG.js";import{u as f,F as j,S}from"./ResetButton-DLfZ0hQG.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCyGrJK3.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./clsx-B-dksMZM.js";import"./index-BnwDl3XO.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./useStatic-BdWyaTNp.js";import"./IconWarning-C2C4Ye1P.js";import"./remote-VRbYHHBV.js";import"./Text-Cd9ftiQT.js";import"./browser-vgtThTGE.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./utils-BpR6PJXM.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLrRc3iw.js";import"./useFocus-BoIaqFAK.js";import"./useFocusRing-Sg4LsORI.js";import"./useFocusable-CewhyE_c.js";import"./context-BBlsigfO.js";import"./useFieldComponent-CTh-2D00.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-BD6TnVKE.js";import"./useFormReset-mKOiKuYb.js";import"./useControlledState-DV6ufSFw.js";import"./VisuallyHidden-D5CUP-QC.js";import"./FieldError-Q6bz3Uf7.js";import"./FieldError-DNTSOotb.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";import"./useRef-FIk_DJsE.js";import"./ButtonView-DNKUy4ei.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
