import{r as h,j as r}from"./iframe-BvCo0Jms.js";import{P as m}from"./PasswordCreationField-fIRQ65rQ.js";import{L as u}from"./Label-9SlnZKrY.js";import{B as g}from"./Button-BdRFLyHU.js";import{z as C}from"./IconWarning-DF-Lhcnu.js";import{C as w}from"./CopyButton-DoCe1wMe.js";import"./index-nuYtCEEu.js";import"./dynamic-BmXp7BE9.js";import"./flowComponent-D-_a8eO4.js";import"./index-DAXCiU9B.js";import"./clsx-B-dksMZM.js";import"./index-DV2r3peR.js";import"./useFieldComponent-h58tn8zy.js";import"./utils-Cw2xzcbV.js";import"./Text-BvqGhHlZ.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-K6HpEoIu.js";import"./ClearPropsContext-BXwgDp0Q.js";import"./Group-CxRviubY.js";import"./useFocusRing-D8FCXLiH.js";import"./useFocus-C5EW73ar.js";import"./Input-DUPogfhm.js";import"./Hidden-Bxmlm1r5.js";import"./TextField-Cg2_j61p.js";import"./RSPContexts-DqErA_gH.js";import"./Form-DLKKw6GK.js";import"./useLabel-DLhdFYyT.js";import"./Label-DMgJ6fuj.js";import"./useTextField-DZ1FF2T9.js";import"./useFormReset-B8Yq5UFv.js";import"./useControlledState-C0Hm7DMH.js";import"./useFocusable-BxQ2X-GC.js";import"./useFormValidation-DFmu6UDs.js";import"./Action-B4Kyn-_S.js";import"./context-Dhm9rN8k.js";import"./useStatic-BT5cYh4l.js";import"./browser-DOebU0pA.js";import"./getActionGroupSlot-Bgw1lBB1.js";import"./FieldDescription-ThKAVIuf.js";import"./Text-CM7-JVVa.js";import"./EmulatedBoldText-BsN5iyXq.js";import"./Tooltip-BkzngzVW.js";import"./ClearPropsContextView-C48HQbuq.js";import"./OverlayArrow-CPNbfpB1.js";import"./ProgressBar-Upnvx2FX.js";import"./context-EIbK-86q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CtRq2A2D.js";import"./ReactAriaControlledValueFix-B2lXfI7Z.js";import"./ContextualHelpTrigger-BPEc1f2p.js";import"./Popover-sopU_0Up.js";import"./OverlayContextProvider-CRRzvlsl.js";import"./Dialog-Bn7Do3Cm.js";import"./Button-pJkeE9x7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BZrRujBy.js";import"./Collection-DPawhEbh.js";import"./CollectionBuilder-BCns4Ten.js";import"./SelectionIndicator-CnEt238s.js";import"./Separator-CzBpIsK8.js";import"./SelectionManager-BEbqbhJ2.js";import"./useEvent-CQT5QNCL.js";import"./useCollator-B2HFQgM0.js";import"./FocusScope-Dcb5J3f3.js";import"./VisuallyHidden-ch7dD1y0.js";import"./OverlayTrigger-UXgCK67L.js";import"./ControlledNotification-DPGunEdj.js";import"./Heading-B5ZCmgMS.js";import"./Heading-DDeE-fbN.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-C3Cvntyc.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-6N6Rbt89.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
