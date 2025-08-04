import{r as A,j as r}from"./iframe-CuW8Z7cC.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-CjAYcvFj.js";import{L as h}from"./Label-BtRITTXP.js";import{u as z,F as U,a as Y}from"./Form-8TUpIfT1.js";import{s as Z}from"./Action-BEJscuVN.js";import{B as u}from"./Button-D9Fw6D0O.js";import{m as $}from"./IconWarning-zrofpdfr.js";import{C as k}from"./CopyButton-tR_VbSoi.js";import"./PropsContextProvider-Dp8IGOOw.js";import"./mergeRefs-B4ZkK10W.js";import"./index-GWM6ljsm.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-C4CBNnNe.js";import"./utils-CgS8DRaE.js";import"./Text-DWn8KR_S.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Dq-TZzFP.js";import"./Hidden-Cabgeqjz.js";import"./useFocusRing-DouDeddi.js";import"./useFocus-D7WquFnz.js";import"./TextField-z_7EUq5A.js";import"./Form-CVKq_8tp.js";import"./useLabel-C7dUje6t.js";import"./Label-CGUx7qQt.js";import"./useTextField-D2_5QzKr.js";import"./useFormReset-BUJ4pXgh.js";import"./useControlledState-BloqaAdM.js";import"./useFocusable-GYH2Xp93.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-B4QQkVwM.js";import"./FieldDescription-D568jYBZ.js";import"./Text-BVSFkmOJ.js";import"./browser-DxBOFXa_.js";import"./EmulatedBoldText-CK46MGsP.js";import"./Tooltip-De6k99q9.js";import"./OverlayArrow-CyeHV5yR.js";import"./ProgressBar-BpIwFtNJ.js";import"./context-BYWbGN2W.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-6gozqQnX.js";import"./ReactAriaControlledValueFix-CwToo6fE.js";import"./ContextualHelpTrigger-9ebTDQ3W.js";import"./Popover-D_vujyJZ.js";import"./DialogTriggerView-C2lPzY4b.js";import"./context-DcAOWEDn.js";import"./useStatic-MQhSGK4y.js";import"./Dialog-D1kraT3B.js";import"./Button-XBmqNEFP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChUiq42t.js";import"./RSPContexts-Cf0WAJYH.js";import"./Collection-DVSzmKrY.js";import"./CollectionBuilder-B5oNNMRo.js";import"./Separator-BVlyHbVt.js";import"./SearchField-BtIhQoeP.js";import"./useEvent-CYDGvwkU.js";import"./SelectionManager-C2yhE_X5.js";import"./useCollator-B1wFiJa6.js";import"./FocusScope-C5C0qsLJ.js";import"./VisuallyHidden-DEeOB75f.js";import"./Heading-BwmXbbPu.js";import"./Heading-CwPuVFMm.js";import"./getActionGroupSlot-DTumxqx2.js";import"./LoadingSpinner-Cg9hyS_b.js";import"./react-children-utilities-BTeev_hI.js";import"./onlyText-F0_DdOEJ.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,W,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,O,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
