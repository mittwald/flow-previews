import{r as h,j as r}from"./iframe-CLDMeli7.js";import{P as m}from"./PasswordCreationField-CmfoIJWJ.js";import{L as u}from"./Label-B6NnPYhK.js";import{B as g}from"./Button-BzVheXKP.js";import{m as C}from"./IconWarning-p4W4x8Yn.js";import{C as w}from"./CopyButton-D1XgrDcM.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CQUXTbxb.js";import"./flowComponent-oV-3iEWg.js";import"./index-qO7MtLeC.js";import"./clsx-B-dksMZM.js";import"./index-9eDA9WpJ.js";import"./Action-B36_bDyV.js";import"./context-ZEvjkl_L.js";import"./useStatic-CZ7UkCej.js";import"./browser-DchrXhwC.js";import"./getActionGroupSlot-C0uwUGhO.js";import"./FieldDescription-CRtf4QpD.js";import"./Text-CP7Ip6pC.js";import"./EmulatedBoldText-B7dHFZ_g.js";import"./Text-Doo8ujkC.js";import"./utils-CeJP1xg2.js";import"./Tooltip-Dp5B4LBn.js";import"./OverlayArrow-B5yP7TKG.js";import"./useFocus-DccW9XIs.js";import"./ProgressBar-DFW8NzQ8.js";import"./Label-CvZQpZvf.js";import"./Hidden-B_4q2AdF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BXv9j1Wx.js";import"./context-CJeO-2nS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D-0mJeTX.js";import"./useControlledState-DtGWcuCb.js";import"./useFocusable-B-HKy_Nj.js";import"./useLocalizedStringFormatter-BL7vQ06a.js";import"./ContextualHelpTrigger-B5hB6Us7.js";import"./Popover-PjJ853r6.js";import"./useOverlayController-CfvFaHFD.js";import"./OverlayContextProvider-D58HtU5y.js";import"./Dialog-BqnORwX4.js";import"./Button-DkOX4zii.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-5-cRdm9R.js";import"./RSPContexts-SpTJ-p__.js";import"./Collection-BC2ZOpJQ.js";import"./CollectionBuilder-CH8X2SMa.js";import"./SelectionIndicator-DBZDkcHI.js";import"./Separator-CSbFrQJI.js";import"./SelectionManager-Cf9boCVT.js";import"./useEvent-BRgO1QZf.js";import"./useCollator-CMIPrcXy.js";import"./FocusScope-CDi_kcpI.js";import"./VisuallyHidden--NZ_Ses-.js";import"./OverlayTrigger-BIW3wf-9.js";import"./Heading-Cd0Jc4Sk.js";import"./Heading-6_ezcD4u.js";import"./useFieldComponent-BtEJhhry.js";import"./FieldError-DepvOCr4.js";import"./FieldError-DzENXQGA.js";import"./AlertText-tt9Tj7ZR.js";import"./AlertIcon-BgEbwDh4.js";import"./useControlledHostValueProps-BugW_XdF.js";import"./TextField-LO4rJ-k9.js";import"./Form-BccCs6cg.js";import"./Group-DSf025N_.js";import"./Input-imA8gTQv.js";import"./useTextField-CiZiWOVA.js";import"./useFormReset-BkQU1ELB.js";import"./useFormValidation-DfHAcEvH.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DoDeCRPK.js";import"./remote-B4IT0gy2.js";import"./react-children-utilities-BZtfUQt8.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Tr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Tr as __namedExportsOrder,Vr as default};
