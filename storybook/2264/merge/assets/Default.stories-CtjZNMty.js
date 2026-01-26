import{r as h,j as r}from"./iframe-CBKKDtut.js";import{P as m}from"./PasswordCreationField-Dbagk-cb.js";import{L as u}from"./Label-YKVXUmct.js";import{B as g}from"./Button-B9OQWjLR.js";import{m as C}from"./IconWarning-BGeLtjSH.js";import{C as w}from"./CopyButton-OEM5iiC1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3t3tmF9.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./Action-DoBIVRDz.js";import"./context-B4Ey35Kl.js";import"./useStatic-n8g6U0tI.js";import"./browser-C9q5kf03.js";import"./getActionGroupSlot-CKDi87pY.js";import"./FieldDescription-BY78pjgj.js";import"./Text-DXycmlPy.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./utils-CzD9rXMA.js";import"./Tooltip-CP1LuBI5.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useFocus-BrZp4zBY.js";import"./ProgressBar-BptIcMSV.js";import"./Label-BzrfGAM1.js";import"./Hidden-BMhHdfnU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./context-Bvh_z46p.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-1Ujh64WW.js";import"./useFocusable-DQlHlYMC.js";import"./useFocusRing-CCYWTYc5.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./ContextualHelpTrigger-CkBISwQR.js";import"./Popover-C-P6E-d5.js";import"./useOverlayController-BrNAIcQ_.js";import"./OverlayContextProvider-C-EovWON.js";import"./Dialog-DqG8ZP0V.js";import"./Button-DyYsKNHg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CCG6AvGE.js";import"./RSPContexts-B9p0Af0m.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./VisuallyHidden-BTRh3ybS.js";import"./OverlayTrigger-CgRJiL0z.js";import"./Heading-i6OL6vOG.js";import"./Heading-BVbeBqwL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-377eOR22.js";import"./FieldError-ncR-D_4-.js";import"./FieldError-6zsCD2mI.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";import"./useControlledHostValueProps-BbK479M6.js";import"./TextField-B5o54xMd.js";import"./Form-CoRvbdVN.js";import"./Group-CA1lCmka.js";import"./Input-DA2pnuWC.js";import"./useTextField-CZl6lYma.js";import"./useFormReset-tFiefpak.js";import"./useFormValidation-FH2NBgqd.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BvfPlxYK.js";import"./remote-d08GjPRF.js";import"./react-children-utilities-BSsiC8bc.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const Ar=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,p as WithCopyButton,a as WithCustomButtons,i as WithPlaceholder,Ar as __namedExportsOrder,Tr as default};
