import{r as h,j as r}from"./iframe-DiUxw81Q.js";import{P as m}from"./PasswordCreationField-BK7aBzLZ.js";import{L as u}from"./Label-DpHnEhHE.js";import{B as g}from"./Button-gnRq8NvL.js";import{m as C}from"./IconWarning-DJftz4M-.js";import{C as w}from"./CopyButton-ria9MyDZ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Bvqmautb.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./clsx-B-dksMZM.js";import"./index-2ROVwQvu.js";import"./Action-D_TEMwel.js";import"./context-C7B1j1st.js";import"./useStatic-BoyD6q7D.js";import"./browser-DhblGL2Q.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./FieldDescription-CByPgqro.js";import"./Text-CMit6jNZ.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./utils-BhADjK-H.js";import"./Tooltip-Bz1XyPlR.js";import"./OverlayArrow-BBITTnz5.js";import"./useFocus-DSwjHrh5.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./context-si8TSn1j.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BpbrWv_K.js";import"./useControlledState-DDLUXLOw.js";import"./useFocusable-bbwyacvB.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./ContextualHelpTrigger-eWP1Xr3c.js";import"./Popover-BGTnePiJ.js";import"./useOverlayController-BsSpthcM.js";import"./OverlayContextProvider-Bc9SHXiU.js";import"./Dialog-CJTGGTvx.js";import"./Button-JQtyulyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-I-WC2YFt.js";import"./RSPContexts-D4TaMXlQ.js";import"./Collection-BtPubrtW.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./SelectionIndicator-BsyJ81fY.js";import"./Separator-CQ3T4lOo.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";import"./OverlayTrigger-BHAm2bRH.js";import"./Heading-CaLCe_nK.js";import"./Heading-BfJy_wN2.js";import"./useFieldComponent-BFiXxBQU.js";import"./FieldError-DH3i7Cba.js";import"./FieldError-BKME6Hw5.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";import"./useControlledHostValueProps-D5fxzAXf.js";import"./TextField-BVETUbDW.js";import"./Form-kW4DkkVS.js";import"./Group-DEqw8J9L.js";import"./Input-lzxTVruz.js";import"./useTextField-CJ6J-TLI.js";import"./useFormReset-Cz-LaBzR.js";import"./useFormValidation-CsqhaN7Y.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./remote-dRe2-fx5.js";import"./react-children-utilities-CAw8z2qO.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
