import{r as h,j as r}from"./iframe-XJIuIQsX.js";import{P as m}from"./PasswordCreationField-DEL-id3Z.js";import{L as u}from"./Label-CRXdwP8g.js";import{B as g}from"./Button-B3qcLgg7.js";import{n as C}from"./IconWarning-Dh1UuZN-.js";import{C as w}from"./CopyButton-qZ0EyF1w.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BLJCE7jR.js";import"./flowComponent-BaQJj-Fe.js";import"./index-BFrTfb9P.js";import"./clsx-B-dksMZM.js";import"./index-D1QpPuaY.js";import"./Action-Dpd9i1rx.js";import"./context-BdOjCQgT.js";import"./useStatic-Badjbl0n.js";import"./browser-BhoN5hvb.js";import"./getActionGroupSlot-Cw46BERC.js";import"./FieldDescription-C4dINrt8.js";import"./Text-CrMkSLGe.js";import"./EmulatedBoldText-CPYC_Ehx.js";import"./Text-CQ_rpqob.js";import"./utils-OSbsBMtV.js";import"./Tooltip-mOhxnYiI.js";import"./OverlayArrow-Coj8W95X.js";import"./useFocus-CATpB0h3.js";import"./ProgressBar-BrwhHLJj.js";import"./Label-1nVOodib.js";import"./Hidden-CYqdvOeA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B1JuXYfT.js";import"./context-DW91oCRu.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B6b60Ty3.js";import"./useFocusable-DTUbS3BZ.js";import"./useFocusRing-CeYeFZfu.js";import"./useLocalizedStringFormatter-CdJGeOAf.js";import"./ContextualHelpTrigger-Bw1CRfMm.js";import"./Popover-OQKS3awK.js";import"./useOverlayController-Bcgt-d4I.js";import"./OverlayContextProvider-C-39O9JG.js";import"./Dialog-DrSVAvJg.js";import"./Button-BAG3sHuP.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DEhEh88f.js";import"./RSPContexts-CKZ7RQV4.js";import"./Collection-DBAq6tm-.js";import"./CollectionBuilder-DFJ49rUK.js";import"./SelectionIndicator-rwMeyIsD.js";import"./Separator-5XoV32yu.js";import"./SelectionManager-BTpprE_r.js";import"./useEvent-c3AV6770.js";import"./useCollator-pMxc4jG8.js";import"./FocusScope-XmTgMg9O.js";import"./VisuallyHidden-ClcaDoKJ.js";import"./OverlayTrigger-CKuY1bLi.js";import"./Heading-M0mrZOb3.js";import"./Heading-BJR3kI60.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-HT5XfbIG.js";import"./FieldError-CSSPElPx.js";import"./FieldError-oVAZyPGl.js";import"./useControlledHostValueProps-Dc265rjM.js";import"./TextField-DKJWTYYh.js";import"./Form-BZYlLUUP.js";import"./Group-CYE-HYpS.js";import"./Input-CQdNUZHp.js";import"./useTextField-DQN1AJHT.js";import"./useFormReset-_i9wmexA.js";import"./useFormValidation-DwGL1Z7V.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CuoS48qC.js";import"./remote-Ep0bJUq6.js";import"./react-children-utilities-C07Iv-OS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
