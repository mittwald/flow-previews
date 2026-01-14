import{r as h,j as r}from"./iframe-ByN7k_Da.js";import{P as m}from"./PasswordCreationField-DeeGYcHH.js";import{L as u}from"./Label-BBHPfwM0.js";import{B as g}from"./Button-DLduC619.js";import{m as C}from"./IconWarning-DZTSBBmw.js";import{C as w}from"./CopyButton-DgjUgou4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CwJG9Kct.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./clsx-B-dksMZM.js";import"./index-bUl7c0HC.js";import"./Action-BmGz2Z1M.js";import"./context-D7USXnL-.js";import"./useStatic-BKQ_69l_.js";import"./browser-Co1wUnJx.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./FieldDescription-Brq0GRUO.js";import"./Text-Cb-8LAS5.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./Text-j0nufsIB.js";import"./utils-D8xEYOuW.js";import"./Tooltip-BUJrgHIB.js";import"./OverlayArrow-DDuz5amj.js";import"./useFocus-CetkVqMR.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./context-rGL7bC8_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-kSDz6lD9.js";import"./useFocusable-D-qYSNYm.js";import"./useFocusRing-BkJgNFf3.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./ContextualHelpTrigger-eFhUVosc.js";import"./Popover-C4a2YCNk.js";import"./useOverlayController-B-zt5KRt.js";import"./OverlayContextProvider-CJmTzcIB.js";import"./Dialog-Cvkq5YiV.js";import"./Button-CAFU8pmb.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BphJYqm5.js";import"./RSPContexts-BhXs16ev.js";import"./Collection-BxxE3IdU.js";import"./CollectionBuilder-DO_zs8-i.js";import"./SelectionIndicator-C44R85aV.js";import"./Separator-DEoWRh-q.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./VisuallyHidden-CV3OLvgc.js";import"./OverlayTrigger-CEg2Xl2L.js";import"./Heading-CXqr_WQ4.js";import"./Heading-Ds7RnOJz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DAKvP2zf.js";import"./FieldError-Dqic_FOg.js";import"./FieldError-JBJ_RfAm.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";import"./useControlledHostValueProps-Qs5xXZ1D.js";import"./TextField-BLk0EyLn.js";import"./Form-Ccgq6KTF.js";import"./Group-DdqPhRGU.js";import"./Input-BhhO42Bj.js";import"./useTextField-C-YehVVB.js";import"./useFormReset-Bc5cKrWY.js";import"./useFormValidation-C6EqEf55.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./remote-DfUdRpIa.js";import"./react-children-utilities-DUMPCH1V.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
