import{r as h,j as r}from"./iframe-Du65Ph_c.js";import{P as m}from"./PasswordCreationField-C3XA4vgU.js";import{L as u}from"./Label-BClS0qAd.js";import{B as g}from"./Button-2wmaPnFC.js";import{n as C}from"./IconWarning-CGSd0Gik.js";import{C as w}from"./CopyButton-BM5FvJfe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtEU0XPC.js";import"./flowComponent-CYbHZhXg.js";import"./index-XI88kJrR.js";import"./clsx-B-dksMZM.js";import"./index-c0t27COx.js";import"./Action-BMmoeCN3.js";import"./context-Cb5nHwHn.js";import"./useStatic-B95N-aRU.js";import"./browser-57tL9X_d.js";import"./getActionGroupSlot-BXwxo_QL.js";import"./FieldDescription-PWJKvGgj.js";import"./Text-CtX5enn3.js";import"./EmulatedBoldText-CITvecLd.js";import"./Text-Cl831mKA.js";import"./utils-xIJEb5Gc.js";import"./Tooltip-DiiP1ySp.js";import"./OverlayArrow-CbRWYOrW.js";import"./useFocus-mAbeDdRN.js";import"./ProgressBar-B4qFtVbo.js";import"./Label-D_GXaE34.js";import"./Hidden-BV9iY75y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BdNff0XI.js";import"./context-BMDcuGwa.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cdt3oZ6_.js";import"./useFocusable-RoNPbAVl.js";import"./useFocusRing-B7cLewIC.js";import"./useLocalizedStringFormatter-Dhvhyrh1.js";import"./ContextualHelpTrigger-BU6WmVM_.js";import"./Popover-a0_blwO0.js";import"./useOverlayController-D5h8n75v.js";import"./OverlayContextProvider-CsKpo_xf.js";import"./Dialog-BO9iihOE.js";import"./Button-CjwwJrCh.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyOin5iy.js";import"./RSPContexts-CGKyxyrO.js";import"./Collection-C5ltbjdX.js";import"./CollectionBuilder-d6KQwCFJ.js";import"./SelectionIndicator-Cb43LM7W.js";import"./Separator-DKPq8LUH.js";import"./SelectionManager-BR7dbQPM.js";import"./useEvent-D0wfQKUV.js";import"./useCollator-DYYkh59M.js";import"./FocusScope-DUOtKQcD.js";import"./VisuallyHidden-rhukFLga.js";import"./OverlayTrigger-CM2nLyXn.js";import"./Heading-t4nXMG5j.js";import"./Heading-BTx9jAYe.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-XbdbUfvB.js";import"./FieldError-VBXyMAIR.js";import"./FieldError-cRzcLKxU.js";import"./useControlledHostValueProps-BIH1ZGPM.js";import"./TextField-CT_QddQu.js";import"./Form-CLANTGFM.js";import"./Group-Bc65Crwm.js";import"./Input-CyqTlZ7V.js";import"./useTextField-D01-3X5s.js";import"./useFormReset-D830YkJ7.js";import"./useFormValidation-DAWFGl74.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DEfGApvw.js";import"./remote-D3fYDNUY.js";import"./react-children-utilities-BMgEwt4y.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
