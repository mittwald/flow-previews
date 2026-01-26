import{r as h,j as r}from"./iframe-DqoQz6HB.js";import{P as m}from"./PasswordCreationField-CZyIMCAz.js";import{L as u}from"./Label-Bciq9MXz.js";import{B as g}from"./Button-TzxOXnkY.js";import{m as C}from"./IconWarning-CoQAKsWX.js";import{C as w}from"./CopyButton-Cek5dBSx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-uyvUxMs1.js";import"./flowComponent-D6vhYXOR.js";import"./index-DYypvI_A.js";import"./clsx-B-dksMZM.js";import"./index-BvQFjuk4.js";import"./Action-DgtVbOuJ.js";import"./context-DlAFKpyv.js";import"./useStatic-DhkP1cmF.js";import"./browser-CwaVi4T-.js";import"./getActionGroupSlot-6JauDhjj.js";import"./FieldDescription-BKQMjDZO.js";import"./Text-CYiIq5CT.js";import"./EmulatedBoldText-DhB0ijlY.js";import"./Text-78LD2Kdh.js";import"./utils-OqNg9teq.js";import"./Tooltip-Dg88Z6Fk.js";import"./OverlayArrow-8MHoSxw7.js";import"./useFocus-zlQbWpmC.js";import"./ProgressBar-C57Cfwin.js";import"./Label-B_OqtZ_p.js";import"./Hidden-DWz6zm5D.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CCbYr5fG.js";import"./context-BlYILeGE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CN54iNBt.js";import"./useFocusable-CZXIUH7h.js";import"./useFocusRing-B1e51Uuh.js";import"./useLocalizedStringFormatter-DTNQU4JA.js";import"./ContextualHelpTrigger-DrOum0LA.js";import"./Popover-Cy3iouQi.js";import"./useOverlayController-rufURv7M.js";import"./OverlayContextProvider-D9Ss5hpb.js";import"./Dialog-D_XSL9SB.js";import"./Button-CY3jZXsw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DK4IO0uy.js";import"./RSPContexts-C8plwG6a.js";import"./Collection-BKZaABnx.js";import"./CollectionBuilder-CCjg17Je.js";import"./SelectionIndicator-CdYNTPNo.js";import"./Separator-DUOURVJm.js";import"./SelectionManager-UV_-jhfP.js";import"./useEvent-Dki6vxlR.js";import"./useCollator-DdiKTCc8.js";import"./FocusScope-DUYZjiaL.js";import"./VisuallyHidden-BJ3P8dgA.js";import"./OverlayTrigger-DI9kGsc2.js";import"./Heading-BXT238vs.js";import"./Heading-BOKCcgdn.js";import"./useFieldComponent-X8YFoMoP.js";import"./FieldError-eFMpVXMe.js";import"./FieldError-WaBW2_7-.js";import"./AlertText-DJCCvPqw.js";import"./AlertIcon-DE1EJRfD.js";import"./useControlledHostValueProps-BkJGNwZt.js";import"./TextField-pxufkl_I.js";import"./Form-JBdB4aYd.js";import"./Group-NaJr1bQi.js";import"./Input-C72DEuZz.js";import"./useTextField-CnwBOLmd.js";import"./useFormReset-BpNr6OOM.js";import"./useFormValidation-CMGs1DuG.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DERXhFNJ.js";import"./remote-BY0bWN8b.js";import"./react-children-utilities-CabIK64i.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
