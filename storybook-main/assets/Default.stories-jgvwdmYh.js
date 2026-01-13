import{r as h,j as r}from"./iframe-rOlqB43H.js";import{P as m}from"./PasswordCreationField-UhE8xWXO.js";import{L as u}from"./Label-DjfUIXm4.js";import{B as g}from"./Button-Bjmah8F5.js";import{m as C}from"./IconWarning-Di5b70C_.js";import{C as w}from"./CopyButton-DoKpTiwA.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DIoaqwvI.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./clsx-B-dksMZM.js";import"./index-DzmHy0yH.js";import"./Action-CHaj31Fl.js";import"./context-BHPibtfH.js";import"./useStatic-B2jLjEI4.js";import"./browser-DeRtoS4T.js";import"./getActionGroupSlot-PZdeRoTE.js";import"./FieldDescription-DkDvm_UR.js";import"./Text-CXuVairg.js";import"./EmulatedBoldText-td0NnrMW.js";import"./Text-CjxKuecI.js";import"./utils-Ccj3VlSZ.js";import"./Tooltip-CY1K5Gep.js";import"./OverlayArrow-OpojsIn2.js";import"./useFocus-B5EXjvsK.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./context-C0IlT2TZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BGrTDRws.js";import"./useFocusable-vYreZ1I2.js";import"./useFocusRing-lBaj0PQL.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./ContextualHelpTrigger-CeuDqs9U.js";import"./Popover-BlI-7oje.js";import"./useOverlayController-Dp5_YYyg.js";import"./OverlayContextProvider-D43YjdGu.js";import"./Dialog-B6AZQFUz.js";import"./Button-CW-dJdjv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-D4qdaxsz.js";import"./RSPContexts-D_fvST6z.js";import"./Collection-CVOOSTzg.js";import"./CollectionBuilder-ClYuAlnm.js";import"./SelectionIndicator-CrjLUeul.js";import"./Separator-ClOd3Ug2.js";import"./SelectionManager-ewEKpYWO.js";import"./useEvent-Cj6N6ygk.js";import"./useCollator-BzTQk6BT.js";import"./FocusScope-BxWeftc5.js";import"./VisuallyHidden-CY9UiAKH.js";import"./OverlayTrigger-BdoRRXtX.js";import"./Heading-D93Lplv4.js";import"./Heading-Ds9JRynb.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-sAEQMV1g.js";import"./FieldError-B7iskscN.js";import"./FieldError-CnSkRhK3.js";import"./AlertText-DG4pRxN7.js";import"./AlertIcon-BISUoRMj.js";import"./useControlledHostValueProps-658OjKDK.js";import"./TextField-QNCfzxQC.js";import"./Form-C-fbNo1l.js";import"./Group-DT2FxViN.js";import"./Input-DoF-1MyK.js";import"./useTextField-CM0Sin4-.js";import"./useFormReset-BZ2QXIUx.js";import"./useFormValidation-DWvRQI9h.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-BbLFRhi0.js";import"./remote-DT0xwqhP.js";import"./react-children-utilities-BlVvZ_ce.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
