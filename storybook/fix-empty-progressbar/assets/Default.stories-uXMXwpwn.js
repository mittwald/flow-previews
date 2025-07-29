import{r as A,j as r}from"./iframe-Drlrrc6u.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-DdCoqeCM.js";import{L as h}from"./Label-B_vkKa-h.js";import{u as z,F as U,a as Y}from"./Form-4_IeeoQr.js";import{s as Z}from"./Action-C167ofiw.js";import{B as u}from"./Button-BZh4lcUb.js";import{m as $}from"./IconWarning-DFClu02m.js";import{C as k}from"./CopyButton-DtD0BJ2y.js";import"./PropsContextProvider-7APwv9TL.js";import"./mergeRefs-z-jxhhpD.js";import"./index-Cm4rxf6Y.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-C-dEABlD.js";import"./utils-44JLHIVv.js";import"./Text-CC4u2Qzg.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-gluLjbwr.js";import"./Hidden-DD5LsL7x.js";import"./useFocusRing-CzFnztZj.js";import"./useFocus-CnY09QFt.js";import"./TextField-5_ge-qCO.js";import"./Form-C4Z2UYxX.js";import"./useLabel-BHWpzQCP.js";import"./Label-DVK5kxKu.js";import"./useTextField-CgGM2M3-.js";import"./useFormReset-DMyooaze.js";import"./useControlledState-CdXpD3vz.js";import"./useFocusable-DohvcnRv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CPYhddP5.js";import"./FieldDescription-DO_Q9Cso.js";import"./Text-BpnYQtuA.js";import"./browser-BFksgo5g.js";import"./EmulatedBoldText-Wx7CRY9w.js";import"./Tooltip-DK7oRYuJ.js";import"./OverlayArrow-CassYJzw.js";import"./ProgressBar-BADn2VXC.js";import"./context-DT5m7DRa.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BDZHKril.js";import"./ReactAriaControlledValueFix-CL04ZSp5.js";import"./ContextualHelpTrigger-CYXg722z.js";import"./Popover-PSW42Ml5.js";import"./DialogTriggerView-CkmkgVup.js";import"./context-B6ETq0Vi.js";import"./useStatic-CAY7QlrT.js";import"./Dialog-D4Yh2V4Y.js";import"./Button-BmpQ_XRw.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dk26gxo5.js";import"./RSPContexts-BD-SnrRU.js";import"./Collection-DU8MwyJ0.js";import"./CollectionBuilder-DAHNGdP0.js";import"./Separator-DU5iT2Hb.js";import"./SearchField-Do9rWkb6.js";import"./useEvent-CTzW67zj.js";import"./SelectionManager-DSfIplwJ.js";import"./useCollator-DFRy-0H3.js";import"./FocusScope-Bhoog2Cx.js";import"./VisuallyHidden-CSm48NDs.js";import"./Heading-BNUsyeWI.js";import"./Heading-DHv6Y5yQ.js";import"./getActionGroupSlot-DLBNnVP5.js";import"./LoadingSpinner-Btgpjn0K.js";import"./react-children-utilities-DorCTfeK.js";import"./onlyText-uzi54LW7.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
