import{j as r}from"./iframe-CBdrHiu-.js";import{A as e}from"./ActionGroup-C-nbwf6U.js";import{B as t}from"./Button-CvrzgGgN.js";import{A as u,s as h}from"./Action-CcGGE6B7.js";import{S as x}from"./Switch-DWAzEHee.js";import{L as y}from"./Link-Dv8vhFUP.js";import{u as f,F as j,S}from"./ResetButton-BCVKdw_Y.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cbo9i_64.js";import"./flowComponent-SJnnBAhb.js";import"./index-Dx3T5N_5.js";import"./clsx-B-dksMZM.js";import"./index-DbZpFDe3.js";import"./getActionGroupSlot-DGjTpfXT.js";import"./useStatic-Bx0cFIOO.js";import"./IconWarning-B89fpQti.js";import"./remote-SRpD7Y2I.js";import"./Text-vxOKNzxr.js";import"./browser-DtunHlVO.js";import"./EmulatedBoldText-xhBM3BWX.js";import"./Text-DKFtzua6.js";import"./utils-DRjcKwJb.js";import"./LoadingSpinner-B7nOYR-m.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BCYddyWG.js";import"./context-p6nKBAyO.js";import"./Button-DGOdyj-q.js";import"./ProgressBar-DeVRnANw.js";import"./Label-Be9V6H5h.js";import"./Hidden-72868EZD.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CJjwA-2F.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BNG00Dag.js";import"./useFocus-BOx7sVQU.js";import"./useFocusRing-CFSl2bW1.js";import"./useFocusable-DA2EU5Pw.js";import"./context-RwMuvTef.js";import"./useFieldComponent-CkNNSE-6.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-WK2rrRWv.js";import"./useFormReset-DzYWM4EU.js";import"./useControlledState-H50OY390.js";import"./VisuallyHidden-DNW2U5ZQ.js";import"./FieldError-OVkxnP3X.js";import"./FieldError-hDU9I6ir.js";import"./AlertText-Be6TgPnW.js";import"./AlertIcon-DkcKW-cj.js";import"./useRef-CXZeuied.js";import"./ButtonView-gSA2DBTv.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
