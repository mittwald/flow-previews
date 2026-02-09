import{r as h,j as r}from"./iframe-CcNHCKoB.js";import{P as m}from"./PasswordCreationField-Bx92WYy8.js";import{L as u}from"./Label-F2VOWZsZ.js";import{B as g}from"./Button-DTuLbClr.js";import{m as C}from"./IconWarning-DmrAmEd1.js";import{C as w}from"./CopyButton-C1ei93Vu.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-nNoo79J6.js";import"./flowComponent-Dkj1vsN8.js";import"./index-CYttZVHR.js";import"./clsx-B-dksMZM.js";import"./index-C0Ga1GvX.js";import"./Action-XHgAr--T.js";import"./context-QFR9DY6D.js";import"./useStatic-BA9Xyuh5.js";import"./browser-C0P1LItQ.js";import"./getActionGroupSlot-BqdIRyOr.js";import"./FieldDescription-tCT0DlP5.js";import"./Text-BmtlE-88.js";import"./EmulatedBoldText-BunH9Anl.js";import"./Text-BCtKE9i4.js";import"./utils-NnqZ9ZBK.js";import"./Tooltip-CvxO1LDU.js";import"./OverlayArrow-BhIInrDo.js";import"./useFocus-SYOVVSYu.js";import"./ProgressBar-B-cW6vCD.js";import"./Label-BWg6WlKG.js";import"./Hidden-B3wID84r.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CyCYkDRj.js";import"./context-LfQwLpL0.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C53Oh36V.js";import"./useControlledState-TVt6Qf5c.js";import"./useFocusable-Dm2HHW3t.js";import"./useLocalizedStringFormatter-COg8E6Vc.js";import"./ContextualHelpTrigger-BUd-6q65.js";import"./Popover-DCHOI3I3.js";import"./useOverlayController-CQ8vHMbT.js";import"./OverlayContextProvider-B8m7VzcE.js";import"./Dialog-DlflAgwc.js";import"./Button-D33T_EGm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-eyc-LVl-.js";import"./RSPContexts-DYw5y0O9.js";import"./Collection-B_UfiUp2.js";import"./CollectionBuilder-ClUBiV0v.js";import"./SelectionIndicator-CQiEQ8QD.js";import"./Separator-CJZ-PY1K.js";import"./SelectionManager-CMW6n3Mg.js";import"./useEvent-DmaMUS07.js";import"./useCollator-lY1OBRiY.js";import"./FocusScope-_ikiXfPV.js";import"./VisuallyHidden-FLGfwvrv.js";import"./OverlayTrigger-Ct6yrdj2.js";import"./Heading-BmMG8Nl6.js";import"./Heading-CN6CrwNC.js";import"./useFieldComponent-DFvJ9Vd5.js";import"./FieldError-BlodrZIq.js";import"./FieldError--IyvMZRA.js";import"./AlertText-CklP5D4q.js";import"./AlertIcon-DM6j3Z28.js";import"./useControlledHostValueProps-DkKi295D.js";import"./TextField-Dxucb5of.js";import"./Form-DRLF_vg9.js";import"./Group-DhbZF5dU.js";import"./Input-D-KHai3o.js";import"./useTextField-CDD3_4OQ.js";import"./useFormReset-CUbMVBNo.js";import"./useFormValidation-PdvsTzHy.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-B5nlxM1K.js";import"./remote-CVy042JL.js";import"./react-children-utilities-C98a-E0h.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
