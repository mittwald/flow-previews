import{r as h,j as r}from"./iframe-4vGjmvQN.js";import{P as m}from"./PasswordCreationField-SjtzOXCA.js";import{L as u}from"./Label-C8vmJ-_M.js";import{B as g}from"./Button-Dkb2KJyV.js";import{n as C}from"./IconWarning-CMo0ZXSb.js";import{C as w}from"./CopyButton-Bf5sh_gw.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTwyIkzY.js";import"./flowComponent-BTnwUX2e.js";import"./index-DFF4TtWB.js";import"./clsx-B-dksMZM.js";import"./index--XKY9bK1.js";import"./Action-DFPEzuYz.js";import"./context-C_iyWBEo.js";import"./useStatic-CkngZPNU.js";import"./browser-BLim8y6B.js";import"./getActionGroupSlot-ChdVdmUh.js";import"./FieldDescription-6vHFVXXA.js";import"./Text-D_m0UGXp.js";import"./EmulatedBoldText-DOuKha2y.js";import"./Text-DO-ESRpi.js";import"./utils-Cb3SeWCs.js";import"./Tooltip-syyoWWmC.js";import"./OverlayArrow-Ss-CcX6O.js";import"./useFocus-BGpJf3EA.js";import"./ProgressBar-D3BQYEeZ.js";import"./Label-DRFrGBxg.js";import"./Hidden-DKOWGOBv.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Dy2_qp8M.js";import"./context-Cugfl_gO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-wPwtFL3G.js";import"./useFocusable-BvBcbeR1.js";import"./useFocusRing-ctZhab72.js";import"./useLocalizedStringFormatter-Ci5i2g9p.js";import"./ContextualHelpTrigger-CuzhdgHt.js";import"./Popover-B7_IZjqh.js";import"./useOverlayController-D8-mco-D.js";import"./OverlayContextProvider-BfvQVmDI.js";import"./Dialog-DWeru3ZY.js";import"./Button-C8uGqlfr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-SP29s-a6.js";import"./RSPContexts-BAo2RxOH.js";import"./Collection-JwP5-obH.js";import"./CollectionBuilder-BFcqcbLB.js";import"./SelectionIndicator-Cti1f0QF.js";import"./Separator-CUemZlM2.js";import"./SelectionManager-DMVUPuxd.js";import"./useEvent-CRBCWBzI.js";import"./useCollator-D5lNxT5d.js";import"./FocusScope-Blxz7JIY.js";import"./VisuallyHidden-C3YQx9t_.js";import"./OverlayTrigger-CIaqJQvR.js";import"./Heading-DVNwCXdo.js";import"./Heading-D0PKdBSu.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-diqFBc0H.js";import"./FieldError-ZzdG0j41.js";import"./FieldError-D1JCdJnN.js";import"./useControlledHostValueProps-Cr8K_QbC.js";import"./TextField-DrYfuzmJ.js";import"./Form-Bf7p1I1W.js";import"./Group-C_2eU3ro.js";import"./Input-DxBr8hxM.js";import"./useTextField-BShdbOtD.js";import"./useFormReset-BZ0fN7tZ.js";import"./useFormValidation-BrUcW_b7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Qei33fJA.js";import"./remote-BMVFgzCt.js";import"./react-children-utilities-kb8ILG1A.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};const Vr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Vr as __namedExportsOrder,Mr as default};
