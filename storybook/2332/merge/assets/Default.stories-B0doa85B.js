import{r as h,j as r}from"./iframe-CDsKaBRg.js";import{P as m}from"./PasswordCreationField-WVnKAx9c.js";import{L as u}from"./Label-D5EyKl2G.js";import{B as g}from"./Button-DrVGXfuQ.js";import{m as C}from"./IconWarning-BO7Rp0Xm.js";import{C as w}from"./CopyButton-BMymGVdq.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CtOpUuGK.js";import"./flowComponent-CuU7ZQj2.js";import"./index-C6JQHEhq.js";import"./clsx-B-dksMZM.js";import"./index-RjKRi-BV.js";import"./ActionBatch-Jyp25YdZ.js";import"./useOverlayController-B7-u35xe.js";import"./useStatic-B_kqalTp.js";import"./browser-CeRuCCb_.js";import"./getActionGroupSlot-DeDfHS7N.js";import"./FieldDescription-CzKLx4Mc.js";import"./Text-BC05_GH2.js";import"./EmulatedBoldText-D5k4nusE.js";import"./Text-Ara-YSvE.js";import"./utils-D_LVRUjq.js";import"./Tooltip-B-Kh4MNQ.js";import"./OverlayArrow-DUsbU_k4.js";import"./useFocus-DLB8Ejx4.js";import"./ProgressBar-HELWPhB_.js";import"./Label-PkZPP5nP.js";import"./Hidden-kPYjxK5s.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIho-35Z.js";import"./context-BPMj9VV_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BBPUeOqt.js";import"./useControlledState-daUq4f0n.js";import"./useFocusable-C6i2fSTk.js";import"./useLocalizedStringFormatter-lsSx1U8y.js";import"./ContextualHelpTrigger-DtQI41zq.js";import"./Popover-EJFu47Qz.js";import"./OverlayContextProvider-C6_d12zo.js";import"./Dialog-C4SGct0D.js";import"./Button-BshsCdLp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dan0bPtD.js";import"./RSPContexts-B8A9jPpa.js";import"./Collection-C8L6dRd5.js";import"./CollectionBuilder-CUH6PT6u.js";import"./SelectionIndicator-Dg52EWqk.js";import"./Separator-DOC4rouP.js";import"./SelectionManager-DOsWkSmS.js";import"./useEvent-7orQvKiF.js";import"./useCollator-2vs6SVKa.js";import"./FocusScope-BDZMZ6lz.js";import"./VisuallyHidden-BzY4kZPn.js";import"./OverlayTrigger-CHFi1X1A.js";import"./Heading-DaIr1sLA.js";import"./Heading-CTLIsxjY.js";import"./useFieldComponent-CC8SHRwT.js";import"./FieldError-CR7kl2wA.js";import"./FieldError-CoNTUoG6.js";import"./AlertText-BdJT91v6.js";import"./AlertIcon-BRHbbzl7.js";import"./useControlledHostValueProps-9pbYA7lC.js";import"./TextField-CjTwPU2X.js";import"./Form-CsNQY4H6.js";import"./Group-B8kqqSOi.js";import"./Input-BDN5Bs6G.js";import"./useTextField-C1uNYa88.js";import"./useFormReset-CxPQXG_K.js";import"./useFormValidation-B4cT2hyf.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-COR3vr_l.js";import"./remote-CceIEVln.js";import"./react-children-utilities-Dw_VGQqn.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
