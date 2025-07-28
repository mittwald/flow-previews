import{r as A,j as r}from"./iframe-ABGSKs5r.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-joGQlWLJ.js";import{L as h}from"./Label-B_lAnajd.js";import{u as z,F as U,a as Y}from"./Form-B-B81hdU.js";import{s as Z}from"./Action-CUvrUwti.js";import{B as u}from"./Button-Q43F_r8t.js";import{m as $}from"./IconWarning-CrQ4Sq1v.js";import{C as k}from"./CopyButton-vYS0xsKa.js";import"./PropsContextProvider-I2hhpXOk.js";import"./mergeRefs-ARavDgvF.js";import"./index-DcXxLGBR.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B1yCOr13.js";import"./utils-DiDGDlBS.js";import"./Text-BcmTaKwf.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-WLHEG_qD.js";import"./Hidden-B4dLwXdT.js";import"./useFocusRing-Q7Twgd_z.js";import"./useFocus-Dg7gZngi.js";import"./TextField-CYxV6_KF.js";import"./Form-CvEoesSu.js";import"./useLabel-DcKqU1cs.js";import"./Label-BwOKtJNA.js";import"./useTextField-A3YOYzMp.js";import"./useFormReset-CDcF8HBQ.js";import"./useControlledState-Un3rm8eO.js";import"./useFocusable-BAjBFm0a.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-C4jPbCeF.js";import"./FieldDescription-IjkSN3jj.js";import"./Text-DtVn_38U.js";import"./browser-BJO6t65z.js";import"./EmulatedBoldText-GSAm8QjJ.js";import"./Tooltip-B901JYlO.js";import"./OverlayArrow-bYgiNorp.js";import"./ProgressBar-CGoCl-ZJ.js";import"./context-DyJmA51t.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CvJCn7rq.js";import"./ReactAriaControlledValueFix-CADqCVYh.js";import"./ContextualHelpTrigger-nekGkUV5.js";import"./Popover-fCyYaW3S.js";import"./DialogTriggerView-D7J_WAXm.js";import"./context-D7oi58C7.js";import"./useStatic-CcRZhvyK.js";import"./Dialog-BtJFOPGU.js";import"./Button-iaRAOLSz.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BBkNBI46.js";import"./RSPContexts-fBWTPx9Q.js";import"./Collection-Dxy4s6rJ.js";import"./CollectionBuilder-COEyccke.js";import"./Separator-CSQ2PCE5.js";import"./SearchField-C3LVCaj4.js";import"./useEvent-D4qKx0m_.js";import"./SelectionManager-_MA_Xqcw.js";import"./useCollator-W9bifTbC.js";import"./FocusScope-CeShPDZQ.js";import"./VisuallyHidden-DZthTgNa.js";import"./Heading-D-Oz3E6h.js";import"./Heading-CwqpXkmg.js";import"./getActionGroupSlot-GvSmty2r.js";import"./LoadingSpinner-Dzzm5nCT.js";import"./react-children-utilities-DNMNe2ED.js";import"./onlyText-B9xj9XxP.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
