import{r as h,j as r}from"./iframe-qTztDmQ9.js";import{P as m}from"./PasswordCreationField-BrohEiHh.js";import{L as u}from"./Label-B_HtseH-.js";import{B as g}from"./Button-B4S912ZH.js";import{z as C}from"./IconWarning-DPAJHOeD.js";import{C as w}from"./CopyButton-Dz14HXMW.js";import"./index-nuYtCEEu.js";import"./dynamic-BKe9EJ7U.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./clsx-B-dksMZM.js";import"./index-_9O3yG_2.js";import"./useFieldComponent-DGEmXGQh.js";import"./utils-CdWUsvaa.js";import"./Text-B9fEov2V.js";import"./filterDOMProps-i7L6S0l1.js";import"./react-children-utilities-C8dGDy-T.js";import"./ClearPropsContext-CkWIpOjD.js";import"./Group-C0OfF-as.js";import"./useFocusRing-hzSL5p2c.js";import"./useFocus-CdJCReig.js";import"./Input-DABpozkM.js";import"./Hidden-B1UrvXuA.js";import"./TextField-bPRfky--.js";import"./RSPContexts-C3w4xSHJ.js";import"./Form-D5uPTAwc.js";import"./useLabel-uF6YmIyy.js";import"./Label-Bo8Flsc_.js";import"./useTextField-CGOKXVnS.js";import"./useFormReset-CmjicI53.js";import"./useControlledState-tlJilXH9.js";import"./useFocusable-Q1pEG0eK.js";import"./useFormValidation-DR7MCNfC.js";import"./Action-DjajA33V.js";import"./context-Cf3mID_7.js";import"./useStatic-CJuuYRzf.js";import"./browser-D-RoGxAl.js";import"./getActionGroupSlot-CA2czWAm.js";import"./FieldDescription-M_rJr44b.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Tooltip-B1TI40R5.js";import"./ClearPropsContextView-UvqASDld.js";import"./OverlayArrow-CaJ_i3sf.js";import"./ProgressBar-BBefMTke.js";import"./context-bFJEZtp8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./ReactAriaControlledValueFix-bx83Hzv3.js";import"./ContextualHelpTrigger-BZEvoIFo.js";import"./Popover-Cs9RVKWs.js";import"./OverlayContextProvider-g6FpQG7e.js";import"./Dialog-a9xsPkPz.js";import"./Button-BJWArbVY.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-Dljjmf_y.js";import"./Collection-CQdjy6gf.js";import"./CollectionBuilder-B-XA9uLm.js";import"./SelectionIndicator-gGCk-Q46.js";import"./Separator-Duld6zlz.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./VisuallyHidden-DWMxxCWQ.js";import"./OverlayTrigger-Bw3qBN6u.js";import"./ControlledNotification-BCXQpFCZ.js";import"./Heading-BY9Ux7Jv.js";import"./Heading-BEEVnEbY.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./useManagedValue-6ybja-rS.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C5H0hepe.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
