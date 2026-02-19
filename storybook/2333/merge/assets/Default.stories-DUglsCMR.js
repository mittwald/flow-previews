import{j as r}from"./iframe-ByHSJ7Zj.js";import{A as e}from"./ActionGroup-gRZ2yxB4.js";import{B as t}from"./Button-DRqw54Mf.js";import{s as h,A as u}from"./ActionBatch-DAYGGFfY.js";import{S as x}from"./Switch-BW5CeMXE.js";import{L as y}from"./Link-zFRuISWB.js";import{u as f,F as j,S}from"./ResetButton-BIryrxd9.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C8-Mz4LM.js";import"./flowComponent-DJOvxh70.js";import"./index-Df7GZGOr.js";import"./clsx-B-dksMZM.js";import"./index-Bsvsb8kg.js";import"./getActionGroupSlot-V0cqrh5S.js";import"./useStatic-DqDfuSHj.js";import"./IconWarning-D57HRYjk.js";import"./remote-NqjFlPNq.js";import"./Text-CE06l-7_.js";import"./browser-CsRLC16Z.js";import"./EmulatedBoldText-Cuj2T5Fx.js";import"./Text-CMdjYF8F.js";import"./utils-AuVRPQNE.js";import"./LoadingSpinner-CaNN1xQ8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C3tZMmo1.js";import"./context-ER57Z7kb.js";import"./Button-D0UJ2jXG.js";import"./ProgressBar-wJF_229J.js";import"./Label-BGNexww0.js";import"./Hidden-BFoBdwRQ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DwarV1Dq.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-53w3WrUq.js";import"./useFocus-DXK20Yfh.js";import"./useFocusRing-lrSptqjQ.js";import"./useFocusable-CTHcGGNa.js";import"./useOverlayController-ClfDXpmr.js";import"./useFieldComponent-CBB8cMnJ.js";import"./Label.module-CUYTf9Jc.js";import"./useToggleState-2wDBawKA.js";import"./useFormReset-BeZmi33v.js";import"./useControlledState-CZXI0X0f.js";import"./VisuallyHidden-DjUeNVhy.js";import"./FieldError-C1ELgHYl.js";import"./FieldError-N78nigrI.js";import"./AlertText-sxDaercD.js";import"./AlertIcon-CPipsjCC.js";import"./ActionGroupView-WZNbE7iy.js";import"./Content-CmPZ5biX.js";import"./Heading-BzErtb-B.js";import"./Heading-DSIgXPzr.js";import"./RSPContexts-DvjI-Cwg.js";import"./Modal-CSnqDHAV.js";import"./Overlay-BXECwhfH.js";import"./OverlayContextProvider-D8q7I9aq.js";import"./Dialog-Bv6y7U-F.js";import"./OverlayArrow-y5FFWgxm.js";import"./Collection-yoadDvk3.js";import"./CollectionBuilder-wcjbsfoD.js";import"./SelectionIndicator-B6Jii7Kf.js";import"./Separator-xmb_Jck1.js";import"./SelectionManager-DuKq6lse.js";import"./useEvent-CUm4NXev.js";import"./useCollator-uet9RA9C.js";import"./FocusScope-CdPzSUjP.js";import"./ButtonView-B6fmM-tn.js";import"./Flex-CcCOHM-k.js";import"./useRef-C1sK2iwB.js";const Ir={title:"Actions/ActionGroup",component:e,render:o=>r.jsxs(e,{...o,children:[r.jsx(u,{onAction:()=>h(1500),children:r.jsx(t,{color:"accent",children:"Create customer"})}),r.jsx(u,{children:r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})})]})},n={},s={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{color:"danger",children:"Delete project"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},a={render:o=>r.jsx(e,{...o,children:r.jsx(t,{children:"Ok"})})},i={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},c={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"primary",color:"accent",children:"Add email address"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save and add more"}),r.jsx(t,{slot:"secondary",variant:"soft",color:"secondary",children:"Save as new"}),r.jsx(t,{slot:"abort",variant:"soft",color:"secondary",children:"Abort"})]})},p={parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:o=>r.jsxs(e,{...o,children:[r.jsx(t,{slot:"secondary",children:"Edit"}),r.jsx(x,{slot:"primary",children:"Activate"})]})},d={render:o=>r.jsxs(e,{...o,children:[r.jsx(y,{slot:"abort",children:"Forgot password?"}),r.jsx(t,{color:"accent",children:"Login"})]})},l={render:o=>{const A=f();return r.jsx(j,{form:A,onSubmit:async()=>await h(2e3),children:r.jsxs(e,{...o,children:[r.jsx(S,{color:"accent",children:"Submit"}),r.jsx(t,{color:"secondary",variant:"soft",children:"Abort"})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{}",...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const Mr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink","WithReactHookForm"];export{s as Danger,n as Default,a as Info,p as Mobile,c as WithExtraSecondaryAction,d as WithLink,l as WithReactHookForm,i as WithSecondaryAction,m as WithSwitch,Mr as __namedExportsOrder,Ir as default};
