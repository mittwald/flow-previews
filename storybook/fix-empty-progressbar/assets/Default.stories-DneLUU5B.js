import{r as A,j as r}from"./iframe-DJR6bG_N.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-ByXAfv_7.js";import{L as h}from"./Label-43dyzUgI.js";import{u as z,F as U,a as Y}from"./Form-BcMLIMK7.js";import{s as Z}from"./Action-DUsQfaLv.js";import{B as u}from"./Button-BcHxSHOm.js";import{m as $}from"./IconWarning-TBIhG4gU.js";import{C as k}from"./CopyButton-CdCvVYmK.js";import"./PropsContextProvider-BL9cdq29.js";import"./mergeRefs-Hpx63azc.js";import"./index-C22qm2g8.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Cb0gzYqD.js";import"./utils-DRP6LXVD.js";import"./Text-BqN-_O45.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CE0iASVZ.js";import"./Hidden-BHSOAXCo.js";import"./useFocusRing-CfOOnzfL.js";import"./useFocus-BcpzqQNe.js";import"./TextField-CZNDqobz.js";import"./Form-BkELhqZm.js";import"./useLabel-DhfP4m7A.js";import"./Label-sZvCZMuk.js";import"./useTextField-CXWfURMQ.js";import"./useFormReset-DJO_Tyel.js";import"./useControlledState-CYpB0MkV.js";import"./useFocusable-BEA6ccjd.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-eo7y5sCy.js";import"./FieldDescription-BQWYRjpu.js";import"./Text-CxYW3yHX.js";import"./browser-B_AF4VAW.js";import"./EmulatedBoldText-DOjRM7Xy.js";import"./Tooltip-Ddeixmam.js";import"./OverlayArrow-Dty9UTNu.js";import"./ProgressBar-B9rixrKR.js";import"./context-DgBdWYay.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DqMJYvZV.js";import"./ReactAriaControlledValueFix-XAEHa8Nn.js";import"./ContextualHelpTrigger-CX-qsmzx.js";import"./Popover-DLNqBLfZ.js";import"./DialogTriggerView-DkospgpI.js";import"./context-tBw8Lqjb.js";import"./useStatic-CIf-dq2E.js";import"./Dialog-B2WyxH4W.js";import"./Button-C47dkwdH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CnK8r-az.js";import"./RSPContexts-DiuHitS7.js";import"./Collection-Bn5uLIdX.js";import"./CollectionBuilder-Kei65M9q.js";import"./Separator-43LoEa0E.js";import"./SearchField-CR0mUJzd.js";import"./useEvent-SSoNVoxa.js";import"./SelectionManager-DV-un0OH.js";import"./useCollator-CQl6CZ5b.js";import"./FocusScope-nXLL4j6O.js";import"./VisuallyHidden-Capsm3hZ.js";import"./Heading-BkblK8MO.js";import"./Heading-BJxiU0-g.js";import"./getActionGroupSlot-CudkwBxb.js";import"./LoadingSpinner-BP8XYJb-.js";import"./react-children-utilities-hZqVIpee.js";import"./onlyText-B2yN5gW1.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
