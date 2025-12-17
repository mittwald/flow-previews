import{r as h,j as r}from"./iframe-D0TBPZEN.js";import{L as u}from"./Label-CR6zfnlP.js";import{B as g}from"./Button-KdCw7j9H.js";import"./IconChevronDown-Bbj4kj6E.js";import{I as C}from"./IconDanger-CMO1pm9n.js";import{C as w}from"./CopyButton-BGXQb-fH.js";import{P as m}from"./PasswordCreationField-CEa410Og.js";import"./preload-helper-PPVm8Dsz.js";import"./Label.module-CUYTf9Jc.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BJZeh5dT.js";import"./index-BDPp8Owz.js";import"./index-Cimb1y_J.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./context-qsxormAC.js";import"./Label-B3MDDK1W.js";import"./utils-D99Vyo1b.js";import"./Hidden-BgnID2na.js";import"./IconX-CN6PeFmZ.js";import"./IconCheck-BEy8YdgR.js";import"./Text-eR7t4eab.js";import"./browser-BxCdUhN6.js";import"./EmulatedBoldText-D0EAgwUh.js";import"./Text-CculVWnY.js";import"./LoadingSpinner-DmqGaBhS.js";import"./ariaLive-BIzH68Db.js";import"./LiveAnnouncer-Cy654hVN.js";import"./remote-Dx3xetcp.js";import"./Button-DCdA3b5l.js";import"./ProgressBar-NoiT46hC.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXxZPVNQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ccmkzzzz.js";import"./useFocus-DX98yPkU.js";import"./useFocusRing-BVlc85iC.js";import"./useFocusable-BcHjS_A6.js";import"./IconCopy-DKinRr1N.js";import"./Tooltip-BK8k68Q6.js";import"./OverlayArrow-CuTWjvt2.js";import"./useControlledState-3iFUkpdV.js";import"./react-children-utilities-B-h2c5Ia.js";import"./Action-CXRsCf2v.js";import"./useStatic-DuuDvcGk.js";import"./getActionGroupSlot-5-XTFZFu.js";import"./context-Dojx0CKD.js";import"./dynamic-CjDg1E9a.js";import"./FieldDescription-DEgmMoME.js";import"./TranslationProvider-BrDxpmZv.js";import"./IconCircleCheck-DWgIaBkt.js";import"./ContextualHelpTrigger-DbHDYOE3.js";import"./Popover-DwgDd9R7.js";import"./OverlayContextProvider-DnKHH9W8.js";import"./Dialog-iVAnmgSo.js";import"./RSPContexts-CV0e_82S.js";import"./Collection-CLyoYIQ6.js";import"./CollectionBuilder-Dei-INuS.js";import"./SelectionIndicator-BBQRBzIb.js";import"./Separator-Cr3smolU.js";import"./SelectionManager-B6gd3fvk.js";import"./useEvent-pwKWzrmw.js";import"./useCollator-CtMATBZL.js";import"./FocusScope-CRIWFmvd.js";import"./VisuallyHidden-C_1XSOyM.js";import"./useOverlayController-C5iE1soR.js";import"./OverlayTrigger-CcYJWA0m.js";import"./IconInfo-DeIr2rQw.js";import"./Heading-C0f3iUVO.js";import"./Heading-D4_SSoqk.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-DYlCWX6Y.js";import"./FieldError-DRFaZQOT.js";import"./FieldError-Cjpxpmri.js";import"./useControlledHostValueProps-BdlOn5qd.js";import"./TextField-CkZ4UrnV.js";import"./Form-D2JDP56m.js";import"./Group-C6ggJjLc.js";import"./Input-PPWc-_80.js";import"./useTextField-D7lDzWg0.js";import"./useFormReset-VuRi1k16.js";import"./useFormValidation-RMTjWMUG.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,kr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},p={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},a={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...a.parameters?.docs?.source}}};const zr=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithCopyButton"];export{t as Default,e as Disabled,s as Required,a as WithCopyButton,p as WithCustomButtons,i as WithPlaceholder,zr as __namedExportsOrder,kr as default};
