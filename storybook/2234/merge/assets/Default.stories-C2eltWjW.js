import{r as h,j as r}from"./iframe-y-Qy_Rwm.js";import{P as m}from"./PasswordCreationField-DDkiy1TK.js";import{L as u}from"./Label-DwZ1nY2p.js";import{B as g}from"./Button-BD4RfixQ.js";import{m as C}from"./IconWarning-CSZkcfVi.js";import{C as w}from"./CopyButton-TUfiADtT.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DOzqWg4O.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./clsx-B-dksMZM.js";import"./index-DHyBIfcz.js";import"./Action-DCkGWMlj.js";import"./context-CYZaYtgr.js";import"./useStatic-6QMcNdFE.js";import"./browser-BkGSrLgH.js";import"./getActionGroupSlot-BtmlVZy9.js";import"./FieldDescription-CpWKNI_h.js";import"./Text-Dc6HCiIC.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./utils-Ek_OXClQ.js";import"./Tooltip-DEu4vk2T.js";import"./OverlayArrow-BfgbGjhP.js";import"./useFocus-L_xbSTvo.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oIpNFQLF.js";import"./context-ukqkFony.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BivKNDQQ.js";import"./useFocusable-BPLcErJ9.js";import"./useFocusRing-TFugmXCf.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./ContextualHelpTrigger-DYvEEZTa.js";import"./Popover-E3KXF6KA.js";import"./useOverlayController-BBvbe3oK.js";import"./OverlayContextProvider-B0VW5X20.js";import"./Dialog-yt0PwtsU.js";import"./Button-CDSdTdYv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ginTfsZX.js";import"./RSPContexts-D6kJ8Blw.js";import"./Collection-wMGDOUBU.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./Separator-BVG5NTNP.js";import"./SelectionManager-DlKr1lyz.js";import"./useEvent-D3WWLcmI.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./VisuallyHidden-uuI_aPdk.js";import"./OverlayTrigger-Ikn2lzdj.js";import"./Heading-BvcdH5AE.js";import"./Heading-DBwZPojJ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BPtwnKvp.js";import"./FieldError-CHdxAWDK.js";import"./FieldError-B0Ilb29D.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";import"./useControlledHostValueProps-Br1cey4W.js";import"./TextField-CC-2iDxd.js";import"./Form-DvQjUgdb.js";import"./Group-_NOX1hM3.js";import"./Input-YVfVzY4s.js";import"./useTextField-DGsPnemp.js";import"./useFormReset-DmoJehYX.js";import"./useFormValidation-49dCeNRi.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CaEX00sr.js";import"./remote-DXSfp6Hy.js";import"./react-children-utilities-BzC9hhGT.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
