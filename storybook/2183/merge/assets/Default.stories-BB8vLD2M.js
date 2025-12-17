import{r as h,j as r}from"./iframe-B7RREkGu.js";import{L as u}from"./Label-DJkUDzdc.js";import{B as g}from"./Button-TsdLobX9.js";import"./IconChevronDown-D-2czTjO.js";import{I as C}from"./IconDanger-DT-iZjBY.js";import{C as w}from"./CopyButton-CNr4fEA3.js";import{P as m}from"./PasswordCreationField-C5XpMXz9.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./index-C8g7-GlJ.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./context-Bh5Je-Bl.js";import"./Label-B5AW6xg7.js";import"./utils-IlafnyMI.js";import"./Hidden-zIyTGZgm.js";import"./IconX-B38mn789.js";import"./IconCheck-KHnf6U2_.js";import"./Text-DoQtsqjx.js";import"./browser-DkVC7uJT.js";import"./EmulatedBoldText-Coo_6hrl.js";import"./Text-CPOpiDMW.js";import"./LoadingSpinner-BcPCL_oT.js";import"./ariaLive-Cy4z0itg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-Ba-TbkWY.js";import"./Button-0GEfT2Oo.js";import"./ProgressBar-DnQzXKKa.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Br_94_1T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4dOiegp.js";import"./useFocus-BaUOkNoz.js";import"./useFocusRing-BOQTp4b_.js";import"./useFocusable-BSgkjvKf.js";import"./IconCopy-BbrDf_Tv.js";import"./Tooltip-koBkZWdN.js";import"./OverlayArrow-CQB6hAQJ.js";import"./useControlledState-CfgggjdY.js";import"./react-children-utilities-BP7q-DSh.js";import"./Action-BcGzUsr7.js";import"./useStatic-tA9-ZYDd.js";import"./getActionGroupSlot-DiF9Ne2F.js";import"./context-BZ5WwvCq.js";import"./dynamic-CWl0hyOW.js";import"./FieldDescription-WN9h5Djj.js";import"./TranslationProvider-BjBay4GC.js";import"./IconCircleCheck-CIriD_ie.js";import"./ContextualHelpTrigger-DV5OihAJ.js";import"./Popover-Ckf8prcf.js";import"./OverlayContextProvider-BF32Wl14.js";import"./Dialog-DUDQW2g7.js";import"./RSPContexts-ByjogFSB.js";import"./Collection-D4FMjQ2t.js";import"./CollectionBuilder-CqiHWup6.js";import"./SelectionIndicator-BAdp0X2f.js";import"./Separator-BITuXniK.js";import"./SelectionManager-DVNQ1E_K.js";import"./useEvent-I95ZQAll.js";import"./useCollator-DB2PW37J.js";import"./FocusScope-BWn7UZVq.js";import"./VisuallyHidden-BevTIdSp.js";import"./useOverlayController-CZleQSK6.js";import"./OverlayTrigger-CAPvH0CT.js";import"./IconInfo-Br8_Bj7U.js";import"./Heading-CSSZTkJF.js";import"./Heading-DImOe7Bo.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-B2EVEjTj.js";import"./FieldError-CukmHJnZ.js";import"./FieldError-C0DtTLwc.js";import"./useControlledHostValueProps-BaDoBa4u.js";import"./TextField-BPUY2Bu_.js";import"./Form-C5YY3R3J.js";import"./Group-CDE79XeV.js";import"./Input-CdWy1INE.js";import"./useTextField-BewiyiMO.js";import"./useFormReset-OFQGg9Qq.js";import"./useFormValidation-CU0n9v2w.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
