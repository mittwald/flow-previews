import{r as h,j as r}from"./iframe-COJ9RE48.js";import{P as m}from"./PasswordCreationField-C0Lz9lh6.js";import{L as u}from"./Label-B42D24b-.js";import{B as g}from"./Button-CMQanS4m.js";import{m as C}from"./IconWarning-BMwiqmvN.js";import{C as w}from"./CopyButton-Cn5dEySq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CTxK5DLa.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./clsx-B-dksMZM.js";import"./index-D5EZb4o9.js";import"./ActionBatch-BL-a0sfJ.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./browser-DOjt7J27.js";import"./getActionGroupSlot-CmDqFskk.js";import"./FieldDescription-D-lJXb1O.js";import"./Text-Bzpr-GrC.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Text-De8BGzPh.js";import"./utils-mqorQ4Bj.js";import"./Tooltip-Bq2W0Ls1.js";import"./OverlayArrow-BueQpaoQ.js";import"./useFocus-C0sdQCtL.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./context-6fEx4cd5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CTczndmn.js";import"./useControlledState-BKL31WKE.js";import"./useFocusable-_fwbj2-b.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./ContextualHelpTrigger-XcG00QN1.js";import"./Popover-BIPjdJIA.js";import"./OverlayContextProvider-CBc03cFF.js";import"./Dialog-Bn1iAsfr.js";import"./Button-BX1Wpmoy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CI06DRQW.js";import"./RSPContexts-CacVUoYW.js";import"./Collection-Cj7qUdsZ.js";import"./CollectionBuilder-BBRIkTLo.js";import"./SelectionIndicator-D_pnQduh.js";import"./Separator-JpTraE0Z.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";import"./OverlayTrigger-CWnPf4Dw.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./useFieldComponent-C2vXV8Pm.js";import"./FieldError-CCI4UyFC.js";import"./FieldError-GKNsJ0Cn.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";import"./useControlledHostValueProps-DuU1EZGK.js";import"./TextField-BD9pjh8M.js";import"./Form-DdhXtOmH.js";import"./Group-BNuj0FFe.js";import"./Input-CNxbrx0W.js";import"./useTextField-BWRUvHBZ.js";import"./useFormReset-BVeU8GRO.js";import"./useFormValidation-DQ8UK_oB.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-CBTolouR.js";import"./remote-BHpqvLOn.js";import"./react-children-utilities-USj9CO2u.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
