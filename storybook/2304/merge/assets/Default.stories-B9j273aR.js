import{j as r}from"./iframe-DQCyQvTg.js";import{A as e}from"./ActionGroup-BrDI4M3_.js";import{B as t}from"./Button-BuvZu5FH.js";import{s as h,A as u}from"./Action-BFqm9nZf.js";import{S as x}from"./Switch-BJRzuZmY.js";import{L as y}from"./Link-p8kO255Q.js";import{u as f,F as j,S}from"./ResetButton-Db-hkPs1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLdLSboA.js";import"./flowComponent-DZtWzeOa.js";import"./index-D_Y20Bq5.js";import"./clsx-B-dksMZM.js";import"./index-vqo-_XTj.js";import"./getActionGroupSlot--rri3fdD.js";import"./useStatic-XhnoWRRg.js";import"./IconWarning-BsBEN2i7.js";import"./remote-DwYKdEj8.js";import"./Text-Dy3rf6Sf.js";import"./browser-NLzega1a.js";import"./EmulatedBoldText-BkRIKdgp.js";import"./Text-dCr4PfuU.js";import"./utils-B-47qEzM.js";import"./LoadingSpinner-C2L8sUPo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DAmk2Bcz.js";import"./context-BVR1xsiE.js";import"./Button-BqVXXUXM.js";import"./ProgressBar-CvxDZlN2.js";import"./Label-CVwZ8mvh.js";import"./Hidden-B1onkdes.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CgNKGrTG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BDNCZxcv.js";import"./useFocus-MHK9Bgmz.js";import"./useFocusRing-H28TAT4s.js";import"./useFocusable-Bi17AcBv.js";import"./context-CMTFLv9Z.js";import"./useFieldComponent-BQB8jFXR.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-Driw9LeX.js";import"./useFormReset-3qpl4kR-.js";import"./useControlledState-CSGe32xq.js";import"./VisuallyHidden-DTZCmZoD.js";import"./FieldError-Db3KB_ND.js";import"./FieldError-BsUvM9FZ.js";import"./AlertText-D-ZVlg04.js";import"./AlertIcon-BB94ofCu.js";import"./useRef-DxaR4mJH.js";import"./ButtonView-DfoPfFoM.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
