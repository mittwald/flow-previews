import{r as h,j as r}from"./iframe-Ci26vI3B.js";import{P as m}from"./PasswordCreationField-Dd1HKzmD.js";import{L as u}from"./Label-RXEJnYkv.js";import{B as g}from"./Button-Bgg1raPB.js";import{m as C}from"./IconWarning-CM9E6h9H.js";import{C as w}from"./CopyButton-B9ocCuZb.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CWUTf5k8.js";import"./flowComponent-BCoZzahf.js";import"./index-3wEtqLOq.js";import"./clsx-B-dksMZM.js";import"./index-BgjIHz1Y.js";import"./Action-BUuW9nUE.js";import"./context-BCzJciSx.js";import"./useStatic-wckFiMZJ.js";import"./browser-CkG7QNAh.js";import"./getActionGroupSlot--c77iWbK.js";import"./FieldDescription-DnqWWk67.js";import"./Text-BThwDV_-.js";import"./EmulatedBoldText-TNvCnD2A.js";import"./Text-BBkEKRDK.js";import"./utils-Prtw8tAI.js";import"./Tooltip-BDCO_YKz.js";import"./OverlayArrow-G0bNf6l9.js";import"./useFocus-BemMoN-v.js";import"./ProgressBar-Cd-gbxhy.js";import"./Label-CzTNGA-w.js";import"./Hidden-Bh4pa2b3.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D7Kjovyf.js";import"./context-21njfTP5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-IT4cpc8M.js";import"./useControlledState-B4ASThyn.js";import"./useFocusable-C470YARL.js";import"./useLocalizedStringFormatter-D463xrfM.js";import"./ContextualHelpTrigger-DNwlnpbw.js";import"./Popover-DZyVF07N.js";import"./useOverlayController-BSQ_oo1O.js";import"./OverlayContextProvider-Df7HHBCA.js";import"./Dialog-DpyFyuBj.js";import"./Button-B-v9WAC7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BIn545i6.js";import"./RSPContexts-wYlI8WBg.js";import"./Collection-B2Ssnxvf.js";import"./CollectionBuilder-BZqHFZmJ.js";import"./SelectionIndicator-DzwumZRP.js";import"./Separator-D2dDCvgZ.js";import"./SelectionManager-3iDEc--o.js";import"./useEvent-DLiSbdt5.js";import"./useCollator-BE-Xf4hi.js";import"./FocusScope-ByCQWjTm.js";import"./VisuallyHidden-BSnmZ3mx.js";import"./OverlayTrigger-BQgQEM-6.js";import"./Heading--cJO5BZg.js";import"./Heading-CXYj_MKW.js";import"./useFieldComponent-DlKim18O.js";import"./FieldError-CpZGKwRg.js";import"./FieldError-C8ji9kGw.js";import"./AlertText-CW-S-5R1.js";import"./AlertIcon-CQS_iHVq.js";import"./useControlledHostValueProps-B1kNlUL3.js";import"./TextField-ZGHANY0-.js";import"./Form-DDqIZ7ds.js";import"./Group-CueZt5qh.js";import"./Input-D6UBTZXc.js";import"./useTextField-ErgkhbMw.js";import"./useFormReset-CoDGZCB3.js";import"./useFormValidation-DbMZQ9P7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CiE2xtQ-.js";import"./remote-BeH756Ak.js";import"./react-children-utilities-C72H5SrX.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
