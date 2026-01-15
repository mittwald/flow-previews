import{r as h,j as r}from"./iframe-pcvtdEGM.js";import{P as m}from"./PasswordCreationField-Biu0Fw0k.js";import{L as u}from"./Label-CRIab_7x.js";import{B as g}from"./Button-uyxj5lKX.js";import{m as C}from"./IconWarning-BUxMadyi.js";import{C as w}from"./CopyButton-CMbAJlH4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CjFFErYF.js";import"./flowComponent-BsMfbHRX.js";import"./index-qOUwp4oz.js";import"./clsx-B-dksMZM.js";import"./index-YznY-g7A.js";import"./Action-DJjvSFsd.js";import"./context-rIsit77n.js";import"./useStatic-BCDrLUdV.js";import"./browser-DdUrC3oM.js";import"./getActionGroupSlot-CPo9rPQE.js";import"./FieldDescription-Q7UMdTIm.js";import"./Text-B9qmJggM.js";import"./EmulatedBoldText-BoMrbuLQ.js";import"./Text-DqkI-mFO.js";import"./utils-fsWZtkeO.js";import"./Tooltip-By81RDgR.js";import"./OverlayArrow-KSA73Rxs.js";import"./useFocus-B8eWYfgC.js";import"./ProgressBar-BJtj52rd.js";import"./Label-BTMeT-8z.js";import"./Hidden-DReGI82W.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-D_iN71C8.js";import"./context-We2COa_S.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CJg030Qn.js";import"./useFocusable-3pO1u96t.js";import"./useFocusRing-Zb0us3UP.js";import"./useLocalizedStringFormatter-vFyNiPiP.js";import"./ContextualHelpTrigger-XZ8-h-8o.js";import"./Popover-DAaX80Bn.js";import"./useOverlayController-DYra3gnv.js";import"./OverlayContextProvider-B8OuVkDx.js";import"./Dialog-DwYtEz4y.js";import"./Button-C7g9LfsB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dv_EQiAe.js";import"./RSPContexts-DZfuqB-R.js";import"./Collection-CigrVSlS.js";import"./CollectionBuilder-Bto5ITGH.js";import"./SelectionIndicator-PrkU8Fpu.js";import"./Separator-CvwRIy8P.js";import"./SelectionManager-DshmmqnA.js";import"./useEvent-D-kKKOwz.js";import"./useCollator-BbVXsX3o.js";import"./FocusScope-Da3nqOUO.js";import"./VisuallyHidden-DxWu5xEc.js";import"./OverlayTrigger-AmfCki8T.js";import"./Heading-BaRKstVM.js";import"./Heading-BBMu1zEG.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DX_YsVYS.js";import"./FieldError-Brj1PtAW.js";import"./FieldError-DSNAXrm1.js";import"./AlertText-B5gACMbu.js";import"./AlertIcon-CRV-RQ9G.js";import"./useControlledHostValueProps-DDcvOf9E.js";import"./TextField-DqPYw359.js";import"./Form-e5z3-mU_.js";import"./Group-DcVE6dEM.js";import"./Input-OfkHEYOp.js";import"./useTextField-Cc5HjTsD.js";import"./useFormReset-D7xZNI6Q.js";import"./useFormValidation-6fXj-s64.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CRozfiA2.js";import"./remote-O2EONUZN.js";import"./react-children-utilities-CJQgD6VA.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
