import{r as h,j as r}from"./iframe-EUG4rdOg.js";import{P as m}from"./PasswordCreationField-Cduhq6_x.js";import{L as u}from"./Label-CkXKJRQj.js";import{B as g}from"./Button-CEake6G1.js";import{m as C}from"./IconWarning-CN_aXaJM.js";import{C as w}from"./CopyButton-BoKfbAWe.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-NoN6qZ.js";import"./flowComponent-C1dTLmWR.js";import"./index-DTdnl-5o.js";import"./clsx-B-dksMZM.js";import"./index-Dmbpubym.js";import"./Action-DJ1WPhSw.js";import"./context-B_Qm6y3p.js";import"./useStatic-uvHDPGza.js";import"./browser-Dr5hWFfi.js";import"./getActionGroupSlot-nY47Clec.js";import"./FieldDescription-CfDsKzz3.js";import"./Text-DlICJI4S.js";import"./EmulatedBoldText-wvGqieyl.js";import"./Text-BNRjjFE0.js";import"./utils-DJPQq0Ir.js";import"./Tooltip-CExrcI7T.js";import"./OverlayArrow-D1DBrKZH.js";import"./useFocus-Ca80QzG_.js";import"./ProgressBar-CixwbPNP.js";import"./Label-D6dDxJKJ.js";import"./Hidden-CsejW8LP.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddt3ftMp.js";import"./context-DxYQrQkA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-pMATsfPY.js";import"./useControlledState-DorIVmrH.js";import"./useFocusable-YuTP7Rcp.js";import"./useLocalizedStringFormatter-8TMbmljG.js";import"./ContextualHelpTrigger-CN7Q62Gz.js";import"./Popover-CaMCpQGe.js";import"./useOverlayController-8UNjRd9m.js";import"./OverlayContextProvider-bBBj8Jql.js";import"./Dialog-ClYDKCvQ.js";import"./Button-_TVwxj4G.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CyxS_pZ-.js";import"./RSPContexts-DeOxvpD0.js";import"./Collection-D08qzwe9.js";import"./CollectionBuilder-B2OL-l6X.js";import"./SelectionIndicator-CBEc_uRa.js";import"./Separator-Hxx-CpzA.js";import"./SelectionManager-l6xAmoDy.js";import"./useEvent-KRKJPCS3.js";import"./useCollator-DB4dbnWY.js";import"./FocusScope-BEv8tYIC.js";import"./VisuallyHidden-DwLUyGt6.js";import"./OverlayTrigger-CAZY-Adw.js";import"./Heading-Bi7E6SrE.js";import"./Heading-DsDU_kOR.js";import"./useFieldComponent-Bs969hQl.js";import"./FieldError-D_yigqvG.js";import"./FieldError-CVa256dc.js";import"./AlertText-D2qcucoC.js";import"./AlertIcon-C4O6kAyM.js";import"./useControlledHostValueProps-CMq5JcbC.js";import"./TextField-USkkGb9p.js";import"./Form-DdP99ZP3.js";import"./Group-BRdCtfwm.js";import"./Input-BJHxReEX.js";import"./useTextField-DlJ5_TSW.js";import"./useFormReset-BWBNxDQ8.js";import"./useFormValidation-OWtbzU_T.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CJqmAtLp.js";import"./remote-Bl5KctCq.js";import"./react-children-utilities-C7IwA1_i.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
