import{r as h,j as r}from"./iframe-CIXg2wml.js";import{P as m}from"./PasswordCreationField-Duibtt6H.js";import{L as u}from"./Label-qxc1gCGy.js";import{B as g}from"./Button-BNUMHVa-.js";import{m as C}from"./IconWarning-CiSujg9K.js";import{C as w}from"./CopyButton-DQMzCWxT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DkFDoLPd.js";import"./flowComponent-2SDDcL6i.js";import"./index-stwZ4S38.js";import"./clsx-B-dksMZM.js";import"./index-CUACQQJf.js";import"./Action-BuQCX6jm.js";import"./context-CXkwD4h5.js";import"./useStatic-CosBs7oI.js";import"./browser-CYeJE0Iy.js";import"./getActionGroupSlot-DDSDNzLp.js";import"./FieldDescription-Ca0n3MzM.js";import"./Text-ClE4EaJv.js";import"./EmulatedBoldText--LsvyM20.js";import"./Text-BTcAnKOQ.js";import"./utils-E3QCR4Ei.js";import"./Tooltip-zBV_87Ta.js";import"./OverlayArrow-Bgb8SBf8.js";import"./useFocus-Xgz2P1v-.js";import"./ProgressBar-CFDr9Wxg.js";import"./Label-DkYkYhBQ.js";import"./Hidden-CGz-Nf89.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-pvILaDrT.js";import"./context-TKY6ae7T.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-euBd3hty.js";import"./useFocusable-LSbGRyyR.js";import"./useFocusRing-CJfArHTm.js";import"./useLocalizedStringFormatter-DQ68Yc1-.js";import"./ContextualHelpTrigger-DZKuWk1F.js";import"./Popover-B98zkIIW.js";import"./useOverlayController-DihmuJIH.js";import"./OverlayContextProvider-BncgeVHa.js";import"./Dialog-f9GqGINB.js";import"./Button-BbDeItRQ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-C_LDf41x.js";import"./RSPContexts-CMEo-sGH.js";import"./Collection-PnRWL8bH.js";import"./CollectionBuilder-CsxYH4iw.js";import"./SelectionIndicator-Ck0MHypk.js";import"./Separator-BD9AYapb.js";import"./SelectionManager-C-rzUvsK.js";import"./useEvent-D8tLlxQx.js";import"./useCollator-nDdvYdK7.js";import"./FocusScope-BVD53JA4.js";import"./VisuallyHidden-XLC_SZ8x.js";import"./OverlayTrigger-Gn6syf8M.js";import"./Heading-IDnu3Squ.js";import"./Heading-NdZmHCy8.js";import"./useFieldComponent-D7V8J4vf.js";import"./FieldError-BH2vnwI0.js";import"./FieldError-B2EiL9vq.js";import"./AlertText-Cyx_yayU.js";import"./AlertIcon-DJUqjVOR.js";import"./useControlledHostValueProps-DNw2Nj9Y.js";import"./TextField-CAQY9kvO.js";import"./Form-AGjJK_iq.js";import"./Group-BARt7F5J.js";import"./Input-DGQ1K2ts.js";import"./useTextField-CGoqsooy.js";import"./useFormReset-BWhLZN3-.js";import"./useFormValidation-B5rYBS3I.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DwfvHd6g.js";import"./remote-8tD3tcl0.js";import"./react-children-utilities-D1PWLbc5.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
