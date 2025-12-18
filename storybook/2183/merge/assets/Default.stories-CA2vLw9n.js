import{r as h,j as r}from"./iframe-BmKAGSU1.js";import{P as m}from"./PasswordCreationField-BZ7aPlLu.js";import{L as u}from"./Label-8kdX7ehW.js";import{B as g}from"./Button-LvEI1uQm.js";import{n as C}from"./IconWarning-imbji-Kz.js";import{C as w}from"./CopyButton-PvxYmxNW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-4IbUBFl1.js";import"./flowComponent-GoF2pcsM.js";import"./index-Dy22JExn.js";import"./clsx-B-dksMZM.js";import"./index-D3Sif_iZ.js";import"./Action-DOyYDw1l.js";import"./context-B4Nnt3qw.js";import"./useStatic-7Dbn5SyA.js";import"./browser-SWtWUPW6.js";import"./getActionGroupSlot-DaWwHLLH.js";import"./FieldDescription-C007Rd_u.js";import"./Text-C9Y-BRqi.js";import"./EmulatedBoldText-DkbId6Zn.js";import"./Text-CWVum_CA.js";import"./utils-g5fx1pEf.js";import"./Tooltip-EJoNqamZ.js";import"./OverlayArrow-B9cbB1QQ.js";import"./useFocus-BW6_4Fc3.js";import"./ProgressBar-Cladi115.js";import"./Label-CQLEPw36.js";import"./Hidden-tXnJ8R5f.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-gR0_832q.js";import"./context-CxuOL-5x.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-TVCSEq66.js";import"./useFocusable-BP0ye7iu.js";import"./useFocusRing-DBug8spT.js";import"./useLocalizedStringFormatter-wjV9WHNF.js";import"./ContextualHelpTrigger-Duon5ZW3.js";import"./Popover-BiEUztWm.js";import"./useOverlayController-BB86-6rb.js";import"./OverlayContextProvider-BxylxdNW.js";import"./Dialog-DjPgQ4DH.js";import"./Button-C5vvsijg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-JhlebSO6.js";import"./RSPContexts-BuF39hXg.js";import"./Collection-DGvFsPwb.js";import"./CollectionBuilder-CAguRQCp.js";import"./SelectionIndicator-tnK26Qqc.js";import"./Separator-D_YsxVNC.js";import"./SelectionManager-ohd2qk3I.js";import"./useEvent-B00NxYME.js";import"./useCollator-3U7lxjuh.js";import"./FocusScope-ByKxlNca.js";import"./VisuallyHidden-Db2xRfqF.js";import"./OverlayTrigger-CUUsPguv.js";import"./Heading-DYtAXBUQ.js";import"./Heading-Daf9Kt-W.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DWe8fYc4.js";import"./FieldError-DTx5qYoC.js";import"./FieldError-DtXh5FLR.js";import"./useControlledHostValueProps-ByJyWAjG.js";import"./TextField-C0OsEkr2.js";import"./Form-B3BOXvjK.js";import"./Group-zAJTMebT.js";import"./Input-aV6cWdAR.js";import"./useTextField-DiMLAs4x.js";import"./useFormReset-DXCfJDY-.js";import"./useFormValidation-BWMCHu6j.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ZBVW6cS6.js";import"./remote-DfYMV5Tv.js";import"./react-children-utilities-d-UDWx5r.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
