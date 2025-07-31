import{r as A,j as r}from"./iframe-Cf8YTZ8I.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-0hRDMCJI.js";import{L as h}from"./Label-D1xaprCz.js";import{u as z,F as U,a as Y}from"./Form-CfmK70vm.js";import{s as Z}from"./Action-tsI3lj2n.js";import{B as u}from"./Button-BNQl0TTz.js";import{m as $}from"./IconWarning-qh9NwBsS.js";import{C as k}from"./CopyButton-DGyJ8udZ.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CCTqX3Np.js";import"./utils-mApyKjAg.js";import"./Text-CQanMjNI.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-DhHWVTLL.js";import"./Hidden-CFe2gnmC.js";import"./useFocusRing-WtizUsSm.js";import"./useFocus-_Kohxctg.js";import"./TextField-BlSj4EDo.js";import"./Form-C0YUiO3s.js";import"./useLabel-kBnuahGK.js";import"./Label-CYpSb4aj.js";import"./useTextField-Bh5lkpvQ.js";import"./useFormReset-Ctmxo4kM.js";import"./useControlledState-J34_Aqnk.js";import"./useFocusable-n963r6Th.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-rTkgz3KB.js";import"./FieldDescription-DUC1vBpE.js";import"./Text-CzCYKR38.js";import"./browser-DfZCu7HF.js";import"./EmulatedBoldText-5p9uCxGs.js";import"./Tooltip-CFhN5Z2z.js";import"./OverlayArrow-HeKEp-x3.js";import"./ProgressBar-rV3H6G0W.js";import"./context-D-u3TSjV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./ReactAriaControlledValueFix-ZES-PpH9.js";import"./ContextualHelpTrigger-BEwVoUDW.js";import"./Popover-CiGSAkfw.js";import"./DialogTriggerView-CQZB8ThO.js";import"./context-ByqUf3rB.js";import"./useStatic-B_n6r0Ik.js";import"./Dialog-6YoxT38u.js";import"./Button-BRubt609.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjpkCDJv.js";import"./RSPContexts-Dm9xNQ69.js";import"./Collection-CMDC5_M-.js";import"./CollectionBuilder-CsDuHlxm.js";import"./Separator-DLSAHNez.js";import"./SearchField-Diw_8zQw.js";import"./useEvent-ZIquWn1z.js";import"./SelectionManager-CdSvY_6Y.js";import"./useCollator-C0E035kT.js";import"./FocusScope-Bp1tS9Sq.js";import"./VisuallyHidden-CDGiYjfo.js";import"./Heading-wniAMg2X.js";import"./Heading-BTyyAlZI.js";import"./getActionGroupSlot-BFOZlr1C.js";import"./LoadingSpinner-CGCXLsJe.js";import"./react-children-utilities-CU6zwtUB.js";import"./onlyText-DcrNucVG.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
