import{j as r}from"./iframe-CdVpWnc8.js";import{A as e}from"./ActionGroup-CbgbDPIr.js";import{B as t}from"./Button-BYd_Eo9F.js";import{A as u,s as h}from"./Action-eeXzbiuZ.js";import{S as x}from"./Switch-BMkIUrjc.js";import{L as y}from"./Link-I6ryM9ra.js";import{u as f,F as j,S}from"./ResetButton-CR4d1ryI.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dpbpwd3I.js";import"./flowComponent-BmLnRlWr.js";import"./index-CCZSieOH.js";import"./clsx-B-dksMZM.js";import"./index-CPzHqOMO.js";import"./getActionGroupSlot-DFI-GPKm.js";import"./useStatic-DSoJUNwo.js";import"./IconWarning-Ba9_xFUh.js";import"./remote-BheCwFS8.js";import"./Text-KDInGMjK.js";import"./browser-CWGq_9Zm.js";import"./EmulatedBoldText-BFXdzchX.js";import"./Text-DmePsxpx.js";import"./utils-ClIic5nH.js";import"./LoadingSpinner-CjZME6JA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-9E8dKOP5.js";import"./context-Bg-StFGN.js";import"./Button-skPPmItL.js";import"./ProgressBar-Dg8vamQS.js";import"./Label-BlSWZv6R.js";import"./Hidden-47TYSTIy.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKXkodj0.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCAUNqmr.js";import"./useFocus-DZX-xW1t.js";import"./useFocusRing-dkAGsBkQ.js";import"./useFocusable-CzSEJZTE.js";import"./context-BV7cuRYy.js";import"./useFieldComponent-pH8UQhzW.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-5on0PfsK.js";import"./useFormReset-D5EHipFr.js";import"./useControlledState-B7ztCH5k.js";import"./VisuallyHidden-Cqn4F1Sv.js";import"./FieldError-0fRgmDO9.js";import"./FieldError-U_T6R5BY.js";import"./AlertText-DPJNXYjA.js";import"./AlertIcon-DVQphOxP.js";import"./useRef-DpTmSntJ.js";import"./ButtonView-TCVIqSjz.js";const yr={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
