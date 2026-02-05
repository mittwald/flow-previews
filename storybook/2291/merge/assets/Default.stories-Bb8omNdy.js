import{r as h,j as r}from"./iframe-DCk1dltx.js";import{P as m}from"./PasswordCreationField-DYvTun2l.js";import{L as u}from"./Label-CoyrnT1D.js";import{B as g}from"./Button-DZuynozn.js";import{m as C}from"./IconWarning-Dty0OPVS.js";import{C as w}from"./CopyButton-DvidLTSd.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BisWu7fc.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./clsx-B-dksMZM.js";import"./index-CPFdYWIc.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./useStatic-CBlVxf-j.js";import"./browser-CviVsCbd.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./FieldDescription-Dyuwn7yW.js";import"./Text-BrHbgyhX.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./utils-dLBbTpD9.js";import"./Tooltip-CXU9dzCj.js";import"./OverlayArrow-hOch9Zrk.js";import"./useFocus-Dg1ABCcr.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./context-Dv1e9MPf.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CTkZzC5s.js";import"./useControlledState-8RsR_43b.js";import"./useFocusable-CjQRw48Z.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./ContextualHelpTrigger-r34QL9NK.js";import"./Popover-D29W9ttZ.js";import"./useOverlayController-ChlOSDc8.js";import"./OverlayContextProvider-D8VTtXin.js";import"./Dialog-Cwy0OKAE.js";import"./Button-DjraAkXw.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BwKHWgOu.js";import"./RSPContexts-DsTbr3uT.js";import"./Collection-X351L5bt.js";import"./CollectionBuilder-B_m-ERV7.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./Separator-CBxzGoiC.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";import"./OverlayTrigger-B_1pmhgA.js";import"./Heading-DeB9aMje.js";import"./Heading-CMNPfOZB.js";import"./useFieldComponent-DRONwAvB.js";import"./FieldError-CH94tTsu.js";import"./FieldError-BprKDa8q.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";import"./useControlledHostValueProps-CdKWKK9K.js";import"./TextField-BOQwYKzc.js";import"./Form-DaC80i58.js";import"./Group-BdCjqrPc.js";import"./Input-B3blwCao.js";import"./useTextField-DpI6Ye3-.js";import"./useFormReset-BYlFqKoc.js";import"./useFormValidation-BQhs4ME7.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CKOTMV9B.js";import"./remote-DvlevvD7.js";import"./react-children-utilities-C5wuDm4Y.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Vr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
