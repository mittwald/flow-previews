import{r as h,j as r}from"./iframe-CgeYxcj8.js";import{P as m}from"./PasswordCreationField-DOOLHnj9.js";import{L as u}from"./Label-CIGJVOdR.js";import{B as g}from"./Button-DR_1qYQ2.js";import{m as C}from"./IconWarning-CNkUjla4.js";import{C as w}from"./CopyButton-MjIv9KnD.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CbTKsx_B.js";import"./flowComponent-Dnk3jDHh.js";import"./index-DGuDz7oW.js";import"./clsx-B-dksMZM.js";import"./index-SS9EXt6e.js";import"./Action-DlDUTAjM.js";import"./context-x8law5mp.js";import"./useStatic-BH0JS_W8.js";import"./browser-DJjrqqpQ.js";import"./getActionGroupSlot-Bx9RQO4h.js";import"./FieldDescription-CLnejhy0.js";import"./Text-fEw-hlGn.js";import"./EmulatedBoldText-B9jRyhwt.js";import"./Text-D1ETBO0D.js";import"./utils-BH6Z59zo.js";import"./Tooltip-DpX7th40.js";import"./OverlayArrow-1gQSfgj3.js";import"./useFocus-BDu45Ayq.js";import"./ProgressBar-FiBC1zNG.js";import"./Label-DsJ6qzWh.js";import"./Hidden-kX7iUH63.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CNkOKuMy.js";import"./context-CYaZBhkg.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BNw3vzKJ.js";import"./useControlledState-CjPSf5xo.js";import"./useFocusable-UxYwgi7z.js";import"./useLocalizedStringFormatter-C8PcX-p4.js";import"./ContextualHelpTrigger-w7Wdr0hN.js";import"./Popover-DyDWo3ld.js";import"./useOverlayController-Dm4XBIwK.js";import"./OverlayContextProvider-DFDHe7pa.js";import"./Dialog-LUBljj5i.js";import"./Button-x-eiCRcG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DX014ZyL.js";import"./RSPContexts-D3svuC0u.js";import"./Collection-D2EAa2oZ.js";import"./CollectionBuilder-C9W5aaEP.js";import"./SelectionIndicator-BaQZNiQ3.js";import"./Separator-CcrRe_Zj.js";import"./SelectionManager-BP1ghRLo.js";import"./useEvent-DvVlPNbe.js";import"./useCollator-Jdxh6jfg.js";import"./FocusScope-CGvyVacv.js";import"./VisuallyHidden-ty8jLyKB.js";import"./OverlayTrigger-B5SAmsfY.js";import"./Heading-ze7wSVUJ.js";import"./Heading-CYGvuqGo.js";import"./useFieldComponent-DjF7VplI.js";import"./FieldError-CDWzOCc-.js";import"./FieldError-BanRAUWl.js";import"./AlertText-BHVf3OWG.js";import"./AlertIcon-BVEvo4xP.js";import"./useControlledHostValueProps-8Wjxwq6I.js";import"./TextField-CaTtGjlg.js";import"./Form-DrrI3HBf.js";import"./Group-Cr99KV0p.js";import"./Input-B8kQ-Cuq.js";import"./useTextField-B2JfmkUj.js";import"./useFormReset-CLCQkLzV.js";import"./useFormValidation-CUbvhZHn.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Czq10wCK.js";import"./remote-CtdlUY7L.js";import"./react-children-utilities-CNIWlnlv.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
