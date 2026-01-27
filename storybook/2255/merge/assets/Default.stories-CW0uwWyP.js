import{r as h,j as r}from"./iframe-DRxscI9O.js";import{P as m}from"./PasswordCreationField-n9KRXkAP.js";import{L as u}from"./Label-QYcCSLyK.js";import{B as g}from"./Button-Cn0kN-cE.js";import{m as C}from"./IconWarning-B0GCVytt.js";import{C as w}from"./CopyButton-HcuUHXmq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CC7KPApC.js";import"./flowComponent-cRsKi5gV.js";import"./index-tYubnSWL.js";import"./clsx-B-dksMZM.js";import"./index-1XGI-8ge.js";import"./Action-BUOqPppc.js";import"./context-CkpccYw3.js";import"./useStatic-DhnGFhXh.js";import"./browser-D6b-4R0j.js";import"./getActionGroupSlot-BLOtZzsx.js";import"./FieldDescription-WQfxWtB-.js";import"./Text-8YV9_ufN.js";import"./EmulatedBoldText-BJ7pd3K2.js";import"./Text-C61ezR9Z.js";import"./utils-CR6NBPUA.js";import"./Tooltip-DHwwi-Zz.js";import"./OverlayArrow-CnZ26m-G.js";import"./useFocus-CSD6pEXF.js";import"./ProgressBar-KolsJC9x.js";import"./Label-CmD6OfqR.js";import"./Hidden-B1W2VzXU.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D6Iwc6BC.js";import"./context-B7-PA0L6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CvH2MSRC.js";import"./useFocusable-_DeXT1Pt.js";import"./useFocusRing-Dd30mTT2.js";import"./useLocalizedStringFormatter-BVeqf5XE.js";import"./ContextualHelpTrigger-C6h8XTIo.js";import"./Popover-BKzwq5Pz.js";import"./useOverlayController-CJT4z6k_.js";import"./OverlayContextProvider-CoboHbSN.js";import"./Dialog-Ds8Y2vRW.js";import"./Button-Cf4nBLFb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-87CEVAU1.js";import"./RSPContexts-O0Lvzjxz.js";import"./Collection-Tvviv49U.js";import"./CollectionBuilder-BZH3zSXW.js";import"./SelectionIndicator-BPr02Xgn.js";import"./Separator-BIe6_98T.js";import"./SelectionManager-CY_OS_Gu.js";import"./useEvent-Dkz3YFeV.js";import"./useCollator-2RpDHACH.js";import"./FocusScope-CRHoWMnL.js";import"./VisuallyHidden-hMszIaj5.js";import"./OverlayTrigger-CijLEP7N.js";import"./Heading-xcTY6oLo.js";import"./Heading-IJ9Uopg1.js";import"./useFieldComponent-B2FoAAf9.js";import"./FieldError-DD28rleL.js";import"./FieldError-qzmmAdqz.js";import"./AlertText-BjP2ge3Y.js";import"./AlertIcon-CLPvczjb.js";import"./useControlledHostValueProps-D7RpmGIg.js";import"./TextField-Cf9gVelS.js";import"./Form-Ct55O5fT.js";import"./Group-CHdsrmB5.js";import"./Input-CIOy3WO5.js";import"./useTextField-B623kUWD.js";import"./useFormReset-Ewuleuhs.js";import"./useFormValidation-BZc6xO6n.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner--1cga6s1.js";import"./remote-5HtQVd9k.js";import"./react-children-utilities-BVkMaYnK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
