import{r as h,j as r}from"./iframe-DBKYLzDC.js";import{P as m}from"./PasswordCreationField-C00WDZ3Z.js";import{L as u}from"./Label-Dsk_CpOI.js";import{B as g}from"./Button-BFOZVdd1.js";import{m as C}from"./IconWarning-BvGiLcXk.js";import{C as w}from"./CopyButton-Bk8c_52Q.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C4GhTGlQ.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./clsx-B-dksMZM.js";import"./index-Dr37f313.js";import"./Action-CPy4r2qq.js";import"./context-Duo0MdiJ.js";import"./useStatic-DlOT-tNl.js";import"./browser-DhKn1UU2.js";import"./getActionGroupSlot-BnE40Egr.js";import"./FieldDescription-CjIQL23v.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./utils-BUG9eo0Q.js";import"./Tooltip-BWFvmCKn.js";import"./OverlayArrow-DgtaOzAt.js";import"./useFocus-TYDADYlM.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./context-DJBj5fN2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BksqeYWz.js";import"./useControlledState-CAANpQPW.js";import"./useFocusable-C-cRLAom.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./ContextualHelpTrigger-bxdjZ5pl.js";import"./Popover-Chm2p3nv.js";import"./useOverlayController-CTM47RfB.js";import"./OverlayContextProvider-hZPIV4rO.js";import"./Dialog-DCNro2wm.js";import"./Button-Cx-eUYHB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BZ5qqTtf.js";import"./RSPContexts-Dx0AtfwO.js";import"./Collection-CxTKYF8C.js";import"./CollectionBuilder-6XtVclM0.js";import"./SelectionIndicator-DEY3TFv1.js";import"./Separator-CmMmdds6.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";import"./OverlayTrigger-Db-Qe3Sn.js";import"./Heading-DJddY0uQ.js";import"./Heading-BsK-SIF5.js";import"./useFieldComponent-DRt8IUS_.js";import"./FieldError-BpFJPqyd.js";import"./FieldError-DtV1i0Hc.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./useControlledHostValueProps-v0KkbD9s.js";import"./TextField-D3roR9vT.js";import"./Form-CPSCXeOA.js";import"./Group-eKP5WoY_.js";import"./Input-DeboNFfQ.js";import"./useTextField-EejmEUEW.js";import"./useFormReset-BczjDhHV.js";import"./useFormValidation-DNSyvwAg.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CHsn4uBv.js";import"./remote-CY71mNcv.js";import"./react-children-utilities-DaShkaJS.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
