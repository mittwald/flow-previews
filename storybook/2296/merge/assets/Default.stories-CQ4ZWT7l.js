import{r as h,j as r}from"./iframe-ByQojKkA.js";import{P as m}from"./PasswordCreationField-BYZ0g3CD.js";import{L as u}from"./Label-zx0kmle1.js";import{B as g}from"./Button-DG0b__xZ.js";import{m as C}from"./IconWarning-tVGTIzEo.js";import{C as w}from"./CopyButton-Ds4qRFRE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-G0P_JzfN.js";import"./flowComponent-finO9fDl.js";import"./index-bUDX88mR.js";import"./clsx-B-dksMZM.js";import"./index-DifIgMrD.js";import"./Action-D7dGsrUH.js";import"./context-Buk6ndZl.js";import"./useStatic-ClNGpIKI.js";import"./browser-BgQK0KeO.js";import"./getActionGroupSlot-D7PQruO1.js";import"./FieldDescription-BpqjIUfK.js";import"./Text-B1R6GgBU.js";import"./EmulatedBoldText-CozfSoiL.js";import"./Text-BjqL4T8G.js";import"./utils-D3Fm7Ut8.js";import"./Tooltip-PMuvtFoA.js";import"./OverlayArrow-CZRwwumO.js";import"./useFocus-CIqVesE-.js";import"./ProgressBar-bE4oj_9I.js";import"./Label-Ca-ZH_hh.js";import"./Hidden-B7m2oWRR.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BZ22SDLr.js";import"./context-B2MAxUi3.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-D8JCvm1f.js";import"./useControlledState-CdOFY_9U.js";import"./useFocusable-BRqzZMJF.js";import"./useLocalizedStringFormatter-EfbLvfF-.js";import"./ContextualHelpTrigger-rAwWDmEe.js";import"./Popover-VY_G-8Aw.js";import"./useOverlayController-DPyEBWrx.js";import"./OverlayContextProvider-jZUXkiaW.js";import"./Dialog-B4qMOx1Z.js";import"./Button-psJerCAv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwnADfjY.js";import"./RSPContexts-au40D8o8.js";import"./Collection-B7VbOrxo.js";import"./CollectionBuilder-Bo0pSU7J.js";import"./SelectionIndicator-Bd5_QITD.js";import"./Separator-CVlXOjLN.js";import"./SelectionManager-C7xZcAD0.js";import"./useEvent-Dbu6PXWh.js";import"./useCollator-KAAcb033.js";import"./FocusScope-Df45VKi0.js";import"./VisuallyHidden-Bik_STlT.js";import"./OverlayTrigger-Bd_tt0nJ.js";import"./Heading-Cbba3Zbx.js";import"./Heading-CW6fzv-T.js";import"./useFieldComponent-Blt-XhY9.js";import"./FieldError-Dl1gROKX.js";import"./FieldError-DskIGmIg.js";import"./AlertText-C88MmDo3.js";import"./AlertIcon-C-5STchL.js";import"./useControlledHostValueProps-lUs8Ao02.js";import"./TextField-CcXXYOcL.js";import"./Form-Cffumk9C.js";import"./Group-CNDS5EKI.js";import"./Input-qfXo-HDb.js";import"./useTextField-C_dLnkiz.js";import"./useFormReset-CjuTJ3ym.js";import"./useFormValidation-DiyC9X3o.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Dd1p82wM.js";import"./remote-CpbK9d4g.js";import"./react-children-utilities-Dz56Yz2y.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
