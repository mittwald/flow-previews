import{r as A,j as r}from"./iframe-5e2kPeup.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-DGw4Us_B.js";import{L as h}from"./Label-rQ1K5PG1.js";import{u as z,F as U,a as Y}from"./Form-BRRqFQyb.js";import{s as Z}from"./Action-DcYaOngB.js";import{B as u}from"./Button-BSAdG0Rb.js";import{m as $}from"./IconWarning-CAYwnCqi.js";import{C as k}from"./CopyButton-CnnQAMr8.js";import"./PropsContextProvider-DEH0t7hl.js";import"./mergeRefs-uY3blBsM.js";import"./index-lLG5KW4n.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CADLGuZ8.js";import"./utils-Bj-e-2L9.js";import"./Text-DiRiFDT_.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CcUvI-aQ.js";import"./Hidden-DMXZYlYz.js";import"./useFocusRing-Xasmxdld.js";import"./useFocus-CgJ_pcIH.js";import"./TextField-bzeDf3ll.js";import"./Form-Dy9v5K9J.js";import"./useLabel-uzLes6Tz.js";import"./Label-68vOnyUK.js";import"./useTextField-B1rPS-0t.js";import"./useFormReset-SVEOBZG_.js";import"./useControlledState-CITgxuHh.js";import"./useFocusable-Dvdn958o.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CL__YS6Z.js";import"./FieldDescription-Sok04slJ.js";import"./Text-CEKkIKYs.js";import"./browser-D35eJ3ID.js";import"./EmulatedBoldText-DjgxRs5N.js";import"./Tooltip-Cyy8qUEM.js";import"./OverlayArrow-GmN5SuYH.js";import"./ProgressBar-Cw08Slz6.js";import"./context-BlWBKAs5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BSu4az1l.js";import"./ReactAriaControlledValueFix-DxOdoahG.js";import"./ContextualHelpTrigger-DRdd2tXE.js";import"./Popover-D55kjhkB.js";import"./DialogTriggerView-BuVkX4hm.js";import"./context-B0hGlOln.js";import"./useStatic-8VbMuKEU.js";import"./Dialog-BrwhBbGd.js";import"./Button-DovRDHW7.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CrwMQoq0.js";import"./RSPContexts-DWx74BAe.js";import"./Collection-AOfdJwwW.js";import"./CollectionBuilder-BEe1h0VT.js";import"./Separator-C6iA2-Vt.js";import"./SearchField-BRz9qbLc.js";import"./useEvent-WpBbrSIs.js";import"./SelectionManager-C5ZwUPgy.js";import"./useCollator-BVV2o25k.js";import"./FocusScope-BoeQH_qo.js";import"./VisuallyHidden-DW4vMZrD.js";import"./Heading-Da8IGzQL.js";import"./Heading-0mE3T3ep.js";import"./getActionGroupSlot-BumiIRNm.js";import"./LoadingSpinner-D5xWaFe2.js";import"./react-children-utilities-BRVzhRC2.js";import"./onlyText-Z6zrHIpA.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
