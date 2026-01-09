import{r as h,j as r}from"./iframe-B6FtZzVw.js";import{P as m}from"./PasswordCreationField-BoYrjZ93.js";import{L as u}from"./Label-gGsAWD9A.js";import{B as g}from"./Button-HJgKWCOC.js";import{n as C}from"./IconWarning-DEHpO9Uw.js";import{C as w}from"./CopyButton-D1C3O4a4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-HxtCVU2-.js";import"./flowComponent-Dnsg7d7g.js";import"./index-Jha0zHxy.js";import"./clsx-B-dksMZM.js";import"./index-DprtUoGy.js";import"./Action-BQfBXJkE.js";import"./context-DELIC-Xh.js";import"./useStatic-Du0weed2.js";import"./browser-D2cTR9e8.js";import"./getActionGroupSlot-7zVBiy7G.js";import"./FieldDescription-DCDO5HYP.js";import"./Text-DPYEhwNL.js";import"./EmulatedBoldText-DD0WhK6h.js";import"./Text-Dn3IEVOe.js";import"./utils-B053wNrY.js";import"./Tooltip-ClhjPAxm.js";import"./OverlayArrow-SzptHD46.js";import"./useFocus-DnpGAVhn.js";import"./ProgressBar-WnFa3ztv.js";import"./Label-BRHOOf6S.js";import"./Hidden-BRZRxZbR.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CPIz2b8c.js";import"./context-D8VymAHE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ByagjwsX.js";import"./useFocusable-CPP8dzW4.js";import"./useFocusRing-C0rO9rWF.js";import"./useLocalizedStringFormatter-D6nkVQc6.js";import"./ContextualHelpTrigger-CEo8w5YR.js";import"./Popover-CXHYUzbK.js";import"./useOverlayController-B2SRK6I3.js";import"./OverlayContextProvider-Cz4fsNbA.js";import"./Dialog-CxhUJg_S.js";import"./Button-DJB2g2P-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bff_bCDv.js";import"./RSPContexts-Drji9jIz.js";import"./Collection-queVBp1u.js";import"./CollectionBuilder-D0uz5fgl.js";import"./SelectionIndicator-DqsRzLxq.js";import"./Separator-CFp2GX75.js";import"./SelectionManager-CX268vg2.js";import"./useEvent-CIqm2Tiz.js";import"./useCollator-DzvnCMzb.js";import"./FocusScope-Dv-pZR3t.js";import"./VisuallyHidden-kv_mk74c.js";import"./OverlayTrigger-DubAi8QM.js";import"./Heading-DVq--lVl.js";import"./Heading-BVLRlyN8.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-BNMXDSB6.js";import"./FieldError-CuRjPN5X.js";import"./FieldError-BtAF49NH.js";import"./useControlledHostValueProps-CYn0S2kn.js";import"./TextField-E2CN27aG.js";import"./Form-CujqqqIN.js";import"./Group-Vwt0vhiT.js";import"./Input-CxAJMr-1.js";import"./useTextField-DaLyIGOE.js";import"./useFormReset-CRRhvvtY.js";import"./useFormValidation-C7j9z4Fo.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DXuLs3WE.js";import"./remote-B6WYv1J0.js";import"./react-children-utilities-DJRC7dOa.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
