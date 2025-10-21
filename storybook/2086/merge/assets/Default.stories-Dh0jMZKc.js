import{r as h,j as r}from"./iframe-CMcq8v1f.js";import{P as m}from"./PasswordCreationField-D83WkYeG.js";import{L as u}from"./Label-BIfXBQMD.js";import{B as g}from"./Button-CRhbM7FI.js";import{l as C}from"./IconWarning-pzLTBmMV.js";import{C as w}from"./CopyButton-DIn7mGa8.js";import"./index-nuYtCEEu.js";import"./dynamic-FUMijUiW.js";import"./flowComponent-DAEI1NYm.js";import"./index-UsNUevoW.js";import"./clsx-B-dksMZM.js";import"./index-Tcjlyiep.js";import"./useFieldComponent-B7IsP0qp.js";import"./utils-B4_KO4f3.js";import"./Text-CkmSClwy.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-CDk9z-7u.js";import"./ClearPropsContext-CU9ecYMv.js";import"./Group-Cj4tB1lx.js";import"./useFocusRing-CoJ5esee.js";import"./useFocus-B0Qlm3zv.js";import"./Input-D43W09OA.js";import"./Hidden-BSe2pCrZ.js";import"./TextField-Bw4pYMEF.js";import"./RSPContexts-DoqEYCaI.js";import"./Form-BA9ATDJW.js";import"./useLabel-MLAtSIJy.js";import"./Label-CtMkNZ5K.js";import"./useTextField-2CL4Bwhs.js";import"./useFormReset-DUTu2q8R.js";import"./useControlledState-C8UmWEhe.js";import"./useFocusable-DlaONHPB.js";import"./useFormValidation-C01Q1Aoq.js";import"./Action-DzVfKIry.js";import"./context-haW4s5UJ.js";import"./useStatic-CKvWQ5ch.js";import"./browser-BnbqEoZX.js";import"./getActionGroupSlot-CSYISPXH.js";import"./FieldDescription-CUyjOtFz.js";import"./Text-DOkc_YZA.js";import"./EmulatedBoldText-DAg28Pal.js";import"./Tooltip-B5NXJQzH.js";import"./ClearPropsContextView-Cy6OLcLC.js";import"./OverlayArrow-Czusrgg9.js";import"./ProgressBar-DGR0UqD3.js";import"./context-Bckjq63R.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BoDSEWEG.js";import"./ReactAriaControlledValueFix-GWCaGKNm.js";import"./ContextualHelpTrigger-B7gMTMIy.js";import"./Popover-B0yZiuHu.js";import"./useOverlayController-B6qJG6eL.js";import"./OverlayContextProvider-CrE8gLZT.js";import"./Dialog-Drh022ms.js";import"./Button-qWTNe4li.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Bqdsvk60.js";import"./Collection-lzDPGY_z.js";import"./CollectionBuilder-DClya-CG.js";import"./SelectionIndicator-npitMQ6K.js";import"./Separator-B5umkblU.js";import"./SelectionManager-CYX1bfTV.js";import"./useEvent-DWTRHc2N.js";import"./useCollator-DTERHYIY.js";import"./FocusScope-BZyWBR-T.js";import"./VisuallyHidden-Dy6kQkYD.js";import"./OverlayTrigger-CxCtI9-h.js";import"./ControlledNotification-B4XPi9m7.js";import"./Heading-B3YRxumr.js";import"./Heading-CmiL6R02.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-CcA7aBmQ.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-DgAvzAIP.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
