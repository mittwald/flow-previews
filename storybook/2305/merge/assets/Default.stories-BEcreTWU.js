import{r as h,j as r}from"./iframe-nlVW-CPZ.js";import{P as m}from"./PasswordCreationField-CXPPO11B.js";import{L as u}from"./Label-BuWy1qrT.js";import{B as g}from"./Button-_Sn69Jgj.js";import{m as C}from"./IconWarning-VZ7ITFqu.js";import{C as w}from"./CopyButton-C0dn9_Da.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Dsm5lbml.js";import"./flowComponent-HOniYMNn.js";import"./index-C9GmpRgu.js";import"./clsx-B-dksMZM.js";import"./index-DrBjklCk.js";import"./Action-VhJyCQWd.js";import"./context-DJb9q1Xr.js";import"./useStatic-C5UephlJ.js";import"./browser-BoEfPalF.js";import"./getActionGroupSlot-C4UrWJhX.js";import"./FieldDescription-a2tRS2_K.js";import"./Text-BzuDjaz9.js";import"./EmulatedBoldText-DYHVi4jR.js";import"./Text-sEy-KTn9.js";import"./utils-CyuEFqip.js";import"./Tooltip-DQ-xB6OR.js";import"./OverlayArrow-xJgx9UYQ.js";import"./useFocus-CD1ZzMvo.js";import"./ProgressBar-CIT85dGK.js";import"./Label-txjD4aFE.js";import"./Hidden-B4CC7Km1.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUbax7la.js";import"./context-CIGB7i0H.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-0Z36i33d.js";import"./useControlledState-ywoEmBU4.js";import"./useFocusable-DHxyzauV.js";import"./useLocalizedStringFormatter-CkS4VLgI.js";import"./ContextualHelpTrigger-CF9guurq.js";import"./Popover-D2O_yi7O.js";import"./useOverlayController-52PC3yWy.js";import"./OverlayContextProvider-CMO4Tng6.js";import"./Dialog-zXGOOBEm.js";import"./Button-BXbNlZWB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BSHzPeES.js";import"./RSPContexts-DlUCcPRc.js";import"./Collection-VsHvURZ5.js";import"./CollectionBuilder-BC18ROL9.js";import"./SelectionIndicator-DdhOYUUY.js";import"./Separator-Ei4AiFvo.js";import"./SelectionManager-BMKEE2dl.js";import"./useEvent-C_UmhbA0.js";import"./useCollator-CE-FIC6l.js";import"./FocusScope-DihhZg9P.js";import"./VisuallyHidden-44O2XzGD.js";import"./OverlayTrigger-DTUPogrt.js";import"./Heading-BvsEXDXR.js";import"./Heading-Bfj0TRqM.js";import"./useFieldComponent-DOzg870F.js";import"./FieldError-C-5FG0Dy.js";import"./FieldError-BpjEpOFY.js";import"./AlertText-tAApf57I.js";import"./AlertIcon-Dr5phtoY.js";import"./useControlledHostValueProps-C--TiKRF.js";import"./TextField-D0tY8Qlz.js";import"./Form-DSPAlIu9.js";import"./Group-w-lYdjjN.js";import"./Input-BlMpicf_.js";import"./useTextField-C4USa82P.js";import"./useFormReset-J8eUPjf8.js";import"./useFormValidation-DqSMo-uw.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-X7Xu_AAn.js";import"./remote-D3GclicH.js";import"./react-children-utilities-DO_39U4f.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
