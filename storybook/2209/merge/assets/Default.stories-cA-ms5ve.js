import{r as h,j as r}from"./iframe-a9513Vq6.js";import{P as m}from"./PasswordCreationField-o-D2zYKx.js";import{L as u}from"./Label-BZ3qOvYQ.js";import{B as g}from"./Button-CbZraw7Z.js";import{n as C}from"./IconWarning-BPr7HnMX.js";import{C as w}from"./CopyButton-CGM5Kdgy.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7T7LY8j.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./clsx-B-dksMZM.js";import"./index-CgKgRbSB.js";import"./Action-CS14UEhl.js";import"./context-RLH4ysrR.js";import"./useStatic-BYKWrdXY.js";import"./browser-CuCeyixq.js";import"./getActionGroupSlot-gpXu2eix.js";import"./FieldDescription-B1DZzGI9.js";import"./Text-hxI3a1Rs.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./utils-Q60aVnZq.js";import"./Tooltip-DVHIlEAH.js";import"./OverlayArrow-BuQIV4ze.js";import"./useFocus-CH_x6C_j.js";import"./ProgressBar-ZGOw6r6D.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./context-CGjHIvvu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CemUvUps.js";import"./useFocusable-lL6lq36R.js";import"./useFocusRing-CmMhl12v.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./ContextualHelpTrigger-DD1VFtJv.js";import"./Popover-C3epsTXC.js";import"./useOverlayController-BK-THQgt.js";import"./OverlayContextProvider-BhvlUAAP.js";import"./Dialog-C14EYRfp.js";import"./Button-CbYmiDFL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyOdCqvu.js";import"./RSPContexts-DpIEdSL7.js";import"./Collection-D4DMEnaD.js";import"./CollectionBuilder-DV1hsabw.js";import"./SelectionIndicator-ZvhngIUd.js";import"./Separator-CV17wQ8T.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./useCollator-BiekIj1S.js";import"./FocusScope-BnHRmLRH.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./OverlayTrigger-BDC2N0WV.js";import"./Heading-Bm0lzmg4.js";import"./Heading-35mryU7d.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DoOT3wm0.js";import"./FieldError-WoUSVR_n.js";import"./FieldError-C3zvz5gI.js";import"./useControlledHostValueProps-BNY-TyT6.js";import"./TextField-C0XDoeam.js";import"./Form-DpSLYLL6.js";import"./Group-D-ENRzUh.js";import"./Input-CtQP6IcM.js";import"./useTextField-CtFPXen_.js";import"./useFormReset-CYu_Lr-z.js";import"./useFormValidation-vP3SVKb2.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CjOt6fEt.js";import"./remote-CGHUze9I.js";import"./react-children-utilities-BJCaxIrq.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
