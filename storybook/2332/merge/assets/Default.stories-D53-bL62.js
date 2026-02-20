import{r as h,j as r}from"./iframe-B-dt22EB.js";import{P as m}from"./PasswordCreationField-Be4in3xs.js";import{L as u}from"./Label-DPQ9pprY.js";import{B as g}from"./Button-Cfktl1nd.js";import{m as C}from"./IconWarning-BbozUbXF.js";import{C as w}from"./CopyButton-CEV04uKi.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Ci7OcZKZ.js";import"./flowComponent-etctvabC.js";import"./index-DAMyqNwe.js";import"./clsx-B-dksMZM.js";import"./index-D5JlC3xK.js";import"./ActionBatch-DMUImU48.js";import"./useOverlayController-CgZod_MY.js";import"./useStatic-CMEoTlaq.js";import"./browser-CJi_ki0i.js";import"./getActionGroupSlot-DUUveJ77.js";import"./FieldDescription-DkcWcefH.js";import"./Text-BCqKdXYs.js";import"./EmulatedBoldText-fVR6kGZs.js";import"./Text-vBmBwiIT.js";import"./utils-DoxtMd58.js";import"./Tooltip-CecfhBpp.js";import"./OverlayArrow-Drn8uqTb.js";import"./useFocus-9GLlZYuH.js";import"./ProgressBar-Cko_rEpF.js";import"./Label-FcJtXcx4.js";import"./Hidden-bM58ni_l.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BKpYilGg.js";import"./context--H9enp2q.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-6FfHDt87.js";import"./useControlledState-jk51FjyI.js";import"./useFocusable-C0Z9ZNeY.js";import"./useLocalizedStringFormatter-CCZK-pLP.js";import"./ContextualHelpTrigger-C-hCqxiL.js";import"./Popover-52nhHqtt.js";import"./OverlayContextProvider-COc2hxmN.js";import"./Dialog-C7TrFuKD.js";import"./Button-CjYcjBnT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CgYKrzfD.js";import"./RSPContexts-pIsu_52Z.js";import"./Collection-Dsfmn2f2.js";import"./CollectionBuilder-D1rtQOhv.js";import"./SelectionIndicator-Di9XKJuy.js";import"./Separator-CiuJS_mH.js";import"./SelectionManager-11E2v_vu.js";import"./useEvent-BnoPZq-r.js";import"./useCollator-Bf7H5Mv5.js";import"./FocusScope-CfFOF-ar.js";import"./VisuallyHidden-CZH0CwBW.js";import"./OverlayTrigger-MgjR2AzX.js";import"./Heading-8-mNxmV-.js";import"./Heading-jN8dhiFm.js";import"./useFieldComponent-D2j3Q6-m.js";import"./FieldError-B26pZzZe.js";import"./FieldError-BkuObk6W.js";import"./AlertText-DjlqIQ0W.js";import"./AlertIcon-B1kQf0Ru.js";import"./useControlledHostValueProps-AfSNk-Xd.js";import"./TextField-D0alrL8F.js";import"./Form-DTBJD-53.js";import"./Group-Cgb--nht.js";import"./Input-1avyZMmc.js";import"./useTextField-Dar2ncjY.js";import"./useFormReset-BwldCtpD.js";import"./useFormValidation-Ds3P2hMN.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-ISzATTs8.js";import"./remote-D6Q14pEz.js";import"./react-children-utilities-CTFJsJ-X.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,Mr={title:"Form Controls/PasswordCreationField",component:m,render:o=>{const[n,d]=h.useState("");return r.jsx(m,{value:n,onValidationResult:l("onValidationResult"),onChange:c=>{l("onChange"),d(c)},...o,children:r.jsx(u,{children:"Password"})})}},t={},e={args:{isDisabled:!0}},s={args:{isRequired:!0}},i={args:{placeholder:"helloMoto"}},a={render:o=>r.jsxs(m,{...o,children:[r.jsx(u,{children:"Password"}),r.jsx(g,{children:r.jsx(C,{})})]})},p={render:o=>{const[n,d]=h.useState("");return r.jsxs(m,{onChange:c=>d(c),...o,children:[r.jsx(u,{children:"Password"}),r.jsx(w,{text:n})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
