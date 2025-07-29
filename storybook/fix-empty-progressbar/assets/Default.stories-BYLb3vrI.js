import{r as A,j as r}from"./iframe-BmySKFCq.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-C1pV9GV9.js";import{L as h}from"./Label-D07kElwt.js";import{u as z,F as U,a as Y}from"./Form-CpYKQ6ml.js";import{s as Z}from"./Action-Dkxo0LVM.js";import{B as u}from"./Button-wwRASOhM.js";import{m as $}from"./IconWarning-DwPTlpqV.js";import{C as k}from"./CopyButton-CRTSwRn3.js";import"./PropsContextProvider-BOmyjk4c.js";import"./mergeRefs-B6V94bK_.js";import"./index-BzrGOqLm.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-l_dSmRSM.js";import"./utils-DoYwLUW3.js";import"./Text-DabCaf9H.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DXKI6wUk.js";import"./Hidden-CRzIvDGy.js";import"./useFocusRing-C4oIu2i3.js";import"./useFocus-XVtYQ6Ak.js";import"./TextField-EWYq_6o7.js";import"./Form-mecE9jTR.js";import"./useLabel-DH0aVX1E.js";import"./Label-BqzVWqzc.js";import"./useTextField-CAqvvnqS.js";import"./useFormReset-LQ-kKN_o.js";import"./useControlledState-CAYoIw9O.js";import"./useFocusable-DwzVkHoA.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DoR06PZF.js";import"./FieldDescription-DZSCJ8f9.js";import"./Text-VzeX0aJg.js";import"./browser-Bc8vbUyQ.js";import"./EmulatedBoldText-DPhJV8kT.js";import"./Tooltip-C_OG2HhY.js";import"./OverlayArrow-RMxusYD6.js";import"./ProgressBar-CRcrCKjd.js";import"./context-CMcVAeGU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DQn86H97.js";import"./ReactAriaControlledValueFix-CzAP8Z_t.js";import"./ContextualHelpTrigger-B47tAZud.js";import"./Popover-BPmkp0NS.js";import"./DialogTriggerView-MdBspzTk.js";import"./context-BePneJT8.js";import"./useStatic-D7ToV0Cs.js";import"./Dialog-BeGSh39F.js";import"./Button-PXGB-mGz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DMuaLZjl.js";import"./RSPContexts-BM6OcLSl.js";import"./Collection-Cyg6AXNz.js";import"./CollectionBuilder-D9VQY6hP.js";import"./Separator-Dtd7OmID.js";import"./SearchField-w_ZoQukU.js";import"./useEvent-BQlUDiGM.js";import"./SelectionManager-DI5u0v70.js";import"./useCollator-CmZhOI3C.js";import"./FocusScope-Bruj9SRJ.js";import"./VisuallyHidden-CTALs_-h.js";import"./Heading-h4oVigYb.js";import"./Heading-CpGWYKg1.js";import"./getActionGroupSlot-BOTGlhaL.js";import"./LoadingSpinner-8ONEDUJ3.js";import"./react-children-utilities-BsqvbX0e.js";import"./onlyText-B9Y8Tc80.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
