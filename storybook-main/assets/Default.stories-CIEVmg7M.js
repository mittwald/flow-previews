import{r as A,j as r}from"./iframe-CXqVlE5o.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-fTTphqtY.js";import{L as h}from"./Label-CVPCngVS.js";import{u as z,F as U,a as Y}from"./Form-D0aauVQY.js";import{s as Z}from"./Action-Fouht4PW.js";import{B as u}from"./Button-Du00uc9D.js";import{m as $}from"./IconWarning-DQKg17Kq.js";import{C as k}from"./CopyButton-Dz_GRjwK.js";import"./PropsContextProvider-NXXeTbsd.js";import"./mergeRefs-DQ42lkDZ.js";import"./index-ClGSVCJF.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CFZuL0-a.js";import"./utils-DhntlPo5.js";import"./Text-Bve5DhhS.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-Q7U48ggJ.js";import"./useFocusRing-B7D_5WWT.js";import"./useFocus-GvwPC70C.js";import"./Input-Bbua86z1.js";import"./Hidden-DGVcGJhp.js";import"./TextField-CHQyl2Bp.js";import"./Form-WS4i-nO-.js";import"./useLabel-BoMX0OaP.js";import"./Label-CEgZ5zSu.js";import"./useTextField-YoCmK9Gk.js";import"./useFormReset-BNnepUUT.js";import"./useControlledState-CFQ9Vv_1.js";import"./useFocusable-Be_5Opbr.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-ClDhNlNJ.js";import"./FieldDescription-BhpgNnW8.js";import"./Text-CH29UKf3.js";import"./browser-C-6Px3BF.js";import"./EmulatedBoldText-sAcZVeZh.js";import"./Tooltip-Ct88Dm_u.js";import"./OverlayArrow-DyP_8nEw.js";import"./ProgressBar-vJhN7QSw.js";import"./context-b4vYPaxO.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CWaF9vId.js";import"./ReactAriaControlledValueFix-Bqax2hbY.js";import"./ContextualHelpTrigger-DYIA46kk.js";import"./Popover-CTOMC3qA.js";import"./DialogTriggerView-CiNaj0jt.js";import"./context-DB5D0RgA.js";import"./useStatic-CfGR59On.js";import"./Dialog-B8n0JlRf.js";import"./Button-DUPqVliB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIfqd23k.js";import"./RSPContexts-ChZvsbky.js";import"./Collection-BFmkHyuD.js";import"./CollectionBuilder-BNyKaLrq.js";import"./Separator-p7bJa_SD.js";import"./SearchField-CXyAr8lf.js";import"./SelectionManager-B3YIcTuf.js";import"./useEvent-D6qlNMlI.js";import"./useCollator-BhxnC7fV.js";import"./FocusScope-BugPP909.js";import"./VisuallyHidden-CCMgatrd.js";import"./Heading-BkRj0gZS.js";import"./Heading-CsjHJOwP.js";import"./getActionGroupSlot-DtIGCXnZ.js";import"./LoadingSpinner-RoF3sq9N.js";import"./react-children-utilities-DM9s4Kj8.js";import"./onlyText-BRXeRJyZ.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},de={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
