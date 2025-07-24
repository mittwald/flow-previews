import{r as A,j as r}from"./iframe-vEDY1jTX.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-BoIMSAoi.js";import{L as h}from"./Label-DkEv0v7K.js";import{u as z,F as U,a as Y}from"./Form-C1ZoBlgQ.js";import{s as Z}from"./Action-B7TuOJwt.js";import{B as u}from"./Button-xQdRWtXu.js";import{m as $}from"./IconWarning-Br_z56yn.js";import{C as k}from"./CopyButton-DS9YjF3l.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-QhGTfIPV.js";import"./utils-gfhUS_KB.js";import"./Text-C6tNNGeu.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-Bwqfb8JX.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocus-bOn2kcoo.js";import"./Input-CX0hj3qY.js";import"./Hidden-Bejm4KRb.js";import"./TextField-wFSW5he1.js";import"./Form-CA3We__k.js";import"./useLabel-DgiwqdF_.js";import"./Label-DboWEm2w.js";import"./useTextField-DyXRlqMQ.js";import"./useFormReset-CgZBEhDH.js";import"./useControlledState-CQf3r7ZL.js";import"./useFocusable-ChYDg6I2.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BpiRfXIY.js";import"./FieldDescription-cIrJEjrj.js";import"./Text-75grQ_r_.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";import"./Tooltip-C_qqXhRb.js";import"./OverlayArrow-twlWLGKk.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./context-DTpTEKQR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./ReactAriaControlledValueFix-G-bJsIDm.js";import"./ContextualHelpTrigger-fE4vdEpT.js";import"./Popover-C5GydJN0.js";import"./DialogTriggerView-BCIqYBll.js";import"./context-CCKbj613.js";import"./useStatic-BCP0-isc.js";import"./Dialog-BJmoKeFy.js";import"./Button-CkK3LebK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./RSPContexts-DWSs-nZQ.js";import"./Collection-CGUFB12f.js";import"./CollectionBuilder-Czcc5V6M.js";import"./Separator-CcFrx14D.js";import"./SearchField-CjtC4DwQ.js";import"./SelectionManager-Co-ck4zL.js";import"./useEvent-7vAcQsYf.js";import"./useCollator-F0CDxzTU.js";import"./FocusScope-DqjTzzUX.js";import"./VisuallyHidden-Dyzng5Uc.js";import"./Heading-Db4wCs5d.js";import"./Heading-DtsmO95s.js";import"./getActionGroupSlot-qWDEZv5e.js";import"./LoadingSpinner-DEOdZhCL.js";import"./react-children-utilities-BLixHVy_.js";import"./onlyText-DNp-FcWC.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,de as default};
