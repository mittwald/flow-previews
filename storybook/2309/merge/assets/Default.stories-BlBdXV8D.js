import{r as h,j as r}from"./iframe-BAXQY30e.js";import{P as m}from"./PasswordCreationField-B0mHaOHW.js";import{L as u}from"./Label-DhF_BRrp.js";import{B as g}from"./Button-CvDqM7Lu.js";import{m as C}from"./IconWarning-NY-vs6K4.js";import{C as w}from"./CopyButton-DEnuM8mh.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-0Mu-qEnq.js";import"./flowComponent-BWoWQ3Dz.js";import"./index-D8IPWXYD.js";import"./clsx-B-dksMZM.js";import"./index-BAu7LBGH.js";import"./Action-CDH3oaiQ.js";import"./context-DKCDV3-b.js";import"./useStatic-rplOn2Qs.js";import"./browser-7M05TLI2.js";import"./getActionGroupSlot-CKOsA57z.js";import"./FieldDescription-LY8oqjwS.js";import"./Text-CsFAJPGd.js";import"./EmulatedBoldText-RGEYlPNA.js";import"./Text-CgyRU_jx.js";import"./utils-CPq9a2_3.js";import"./Tooltip-1P8nbn9B.js";import"./OverlayArrow-DrnF7GNT.js";import"./useFocus-Bjv2U0Px.js";import"./ProgressBar-DOlyg40u.js";import"./Label-CoIwZGGV.js";import"./Hidden-CaIV9czF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-XkQiS-6W.js";import"./context-Ch7cvv9N.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-eOVByyHK.js";import"./useControlledState-BIans2ur.js";import"./useFocusable-B7f7k6Nb.js";import"./useLocalizedStringFormatter-D2lE0ZvY.js";import"./ContextualHelpTrigger-B3-AuJjw.js";import"./Popover-QPtZRDcu.js";import"./useOverlayController-BH8EoD-J.js";import"./OverlayContextProvider-CtvKPXhV.js";import"./Dialog-BnZvghEV.js";import"./Button-Ca5Nx2F5.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-0WoXV1eK.js";import"./RSPContexts-D7b7jdF8.js";import"./Collection-C9Jq2g2r.js";import"./CollectionBuilder-B4l66tZC.js";import"./SelectionIndicator-m0lWLhXd.js";import"./Separator-5yzWA0zP.js";import"./SelectionManager-DXFhF9eC.js";import"./useEvent-KMkh1PvS.js";import"./useCollator-DxEFZJkY.js";import"./FocusScope-PoiaPb2X.js";import"./VisuallyHidden-qM1rInXZ.js";import"./OverlayTrigger-CKjWJPQI.js";import"./Heading-B7OcLMTv.js";import"./Heading-o5Ph-k-z.js";import"./useFieldComponent-RBMXOPsB.js";import"./FieldError-D1QPRlMW.js";import"./FieldError-RUpMVejq.js";import"./AlertText-Do_swE0s.js";import"./AlertIcon-C4A5rqth.js";import"./useControlledHostValueProps-CmFn52YM.js";import"./TextField-CuJT36W8.js";import"./Form-CMcE9GN0.js";import"./Group-DP8yEYC_.js";import"./Input-Dt_0h10s.js";import"./useTextField-1DppJzBw.js";import"./useFormReset-CqoQKslx.js";import"./useFormValidation-DAvMLm6e.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-JX83AFJj.js";import"./remote-X8ibHJNw.js";import"./react-children-utilities-CYakpWqM.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
