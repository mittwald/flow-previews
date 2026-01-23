import{r as h,j as r}from"./iframe-iY_Mn_oy.js";import{P as m}from"./PasswordCreationField-BoKjHrwC.js";import{L as u}from"./Label-3EuxSz5j.js";import{B as g}from"./Button-BXdn408E.js";import{m as C}from"./IconWarning-B803z1sh.js";import{C as w}from"./CopyButton-04bNBKIV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CDOrKiJc.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./clsx-B-dksMZM.js";import"./index-IKthRYIx.js";import"./Action-iMWR4bsW.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./browser-DK9hE6UN.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./FieldDescription-DHPoAUPt.js";import"./Text-C2ZCo6gl.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./utils-C-pMCGM-.js";import"./Tooltip-DiQGUJKk.js";import"./OverlayArrow-KAH5W0sM.js";import"./useFocus-Nxno6ZgW.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./context-DIbVk5_z.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DUH-ni6I.js";import"./useFocusable-Bi19l3La.js";import"./useFocusRing-BNNZSKMh.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./ContextualHelpTrigger-DouULUw9.js";import"./Popover-CTmqafGM.js";import"./useOverlayController-B66mlXsj.js";import"./OverlayContextProvider-CEfkP99K.js";import"./Dialog-BSCAVunC.js";import"./Button-BELa7hv8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-B5dXj1sU.js";import"./RSPContexts-CRnPLFal.js";import"./Collection-p0j0j4rV.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./SelectionIndicator-C9Y7msNP.js";import"./Separator-DvCWPy9d.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./VisuallyHidden-DEFkQEyo.js";import"./OverlayTrigger-D-Sv7Auh.js";import"./Heading-GKx2aQmx.js";import"./Heading-BsXYKZvI.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useFieldComponent-Cxjop7r-.js";import"./FieldError-rrdHjYdT.js";import"./FieldError-BP_EVNQV.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";import"./useControlledHostValueProps-7A2CJ7V9.js";import"./TextField-I3iQ5THw.js";import"./Form-2TpMp3Y3.js";import"./Group-CDmjKrYo.js";import"./Input-B3denzrL.js";import"./useTextField-BqkIOSVN.js";import"./useFormReset-DJj-QXR5.js";import"./useFormValidation-B6OmY3vR.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C14k5CPB.js";import"./remote-CIrN4__o.js";import"./react-children-utilities-CMUhtctB.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Tr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
