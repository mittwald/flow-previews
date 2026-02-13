import{r as h,j as r}from"./iframe-C2cGCWBO.js";import{P as m}from"./PasswordCreationField-geL9BHha.js";import{L as u}from"./Label-DU1BG4Ln.js";import{B as g}from"./Button-B41LUuF3.js";import{m as C}from"./IconWarning-C4LD0r9W.js";import{C as w}from"./CopyButton-DMVOVANa.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DhyEqTLI.js";import"./flowComponent-C6jxxEVz.js";import"./index-rbmoV-yM.js";import"./clsx-B-dksMZM.js";import"./index-Du1kNfMe.js";import"./ActionBatch-BZcBHaPT.js";import"./useOverlayController-CtyPLm8k.js";import"./useStatic-DUMwmPN3.js";import"./browser-BGhQMCSV.js";import"./getActionGroupSlot-C9frEoU7.js";import"./FieldDescription-DYlFjdjq.js";import"./Text-D3xXIOyH.js";import"./EmulatedBoldText-CQEy9dVT.js";import"./Text-D1LgYL-c.js";import"./utils-CPzpSZL2.js";import"./Tooltip-NCeAv1JB.js";import"./OverlayArrow-DkMjnDr5.js";import"./useFocus-O4uYrVbU.js";import"./ProgressBar-DV5MetAr.js";import"./Label-DeWWh5Nd.js";import"./Hidden-C_zHVHDn.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DicB4RC2.js";import"./context-2EfdQWx2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-wtbg8X8X.js";import"./useControlledState-MMDjipcl.js";import"./useFocusable-DwbuT13T.js";import"./useLocalizedStringFormatter-BAIjrI3d.js";import"./ContextualHelpTrigger-DCzrbHVf.js";import"./Popover-DJnPn-3r.js";import"./OverlayContextProvider-BBwaePGz.js";import"./Dialog-BW6BpcVd.js";import"./Button-BneP87GG.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BrmD8Kf2.js";import"./RSPContexts-YUPb13EG.js";import"./Collection-BNpysMuG.js";import"./CollectionBuilder-Bu0heHOT.js";import"./SelectionIndicator-vr7baVWi.js";import"./Separator-Dz7Bhpa-.js";import"./SelectionManager-BVOuQNja.js";import"./useEvent-Brb253L4.js";import"./useCollator-CsE89UJT.js";import"./FocusScope-7k8F4i3d.js";import"./VisuallyHidden-C7EnMW_k.js";import"./OverlayTrigger-C08PeZoT.js";import"./Heading-BMwLGtkc.js";import"./Heading-Dg4rLfib.js";import"./useFieldComponent-D_KC3UxI.js";import"./FieldError-DDTF9njD.js";import"./FieldError-DA6JIYnG.js";import"./AlertText-DYOBaLM3.js";import"./AlertIcon-B9QySSBk.js";import"./useControlledHostValueProps-DVj9QfFb.js";import"./TextField-CGK7TyGn.js";import"./Form-C_NaUn2t.js";import"./Group-j7ZfmdDn.js";import"./Input-B5OLadjP.js";import"./useTextField-Du5NSzvr.js";import"./useFormReset-BdRaO3QH.js";import"./useFormValidation-DV5s_XV1.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DIaaAh-V.js";import"./remote-w8RrxnGT.js";import"./react-children-utilities-D1MqO9RH.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
