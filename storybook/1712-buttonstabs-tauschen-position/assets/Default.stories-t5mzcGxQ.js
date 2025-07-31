import{r as A,j as r}from"./iframe-DLPMA2Jy.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-B7qK2Fko.js";import{L as h}from"./Label-njveXq1g.js";import{u as z,F as U,a as Y}from"./Form-Br4WFxUW.js";import{s as Z}from"./Action-BCWbF5ob.js";import{B as u}from"./Button-Bg9EI6ke.js";import{m as $}from"./IconWarning-BZNHqQOv.js";import{C as k}from"./CopyButton-wGnzT4h5.js";import"./PropsContextProvider-Cw3WmaAV.js";import"./mergeRefs-aO6HcVoY.js";import"./index-CivGAYnp.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Cgq9toxC.js";import"./utils-b1QyYEgl.js";import"./Text-DL4PvoSo.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-CGwZZGNH.js";import"./Hidden-Ba5oTT5z.js";import"./useFocusRing-DFqScG39.js";import"./useFocus-rX-PXuLl.js";import"./TextField--NLdPxFk.js";import"./Form-DfIg0xpy.js";import"./useLabel-D3WVZ9yP.js";import"./Label-tqYGMXcy.js";import"./useTextField-CpoClV52.js";import"./useFormReset-L6ko3eQg.js";import"./useControlledState-Btp8qCFq.js";import"./useFocusable-CToQXnw-.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-C4PtmRqe.js";import"./FieldDescription-C9CGNDRE.js";import"./Text-BHcv_RSt.js";import"./browser-Bc43_gVJ.js";import"./EmulatedBoldText-BMpcVoTB.js";import"./Tooltip-DI4LK304.js";import"./OverlayArrow-3BLRTQic.js";import"./ProgressBar-DSj6SBtF.js";import"./context-BFBvnlV1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-BX1Rg6Wn.js";import"./ReactAriaControlledValueFix-dLaU_eDY.js";import"./ContextualHelpTrigger-Bg7XXy5s.js";import"./Popover-BbAmJ5oq.js";import"./DialogTriggerView-DAw6tYdk.js";import"./context-DC5SRHlZ.js";import"./useStatic-m6uLMmhn.js";import"./Dialog-ClROTFho.js";import"./Button-D9zXVRa2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DwtsQH2c.js";import"./RSPContexts-ClqXx4oa.js";import"./Collection-B7eLtKl3.js";import"./CollectionBuilder-CE08yFAM.js";import"./Separator-BudPJPnA.js";import"./SearchField-CSx5BdQ3.js";import"./useEvent-PyKag1Em.js";import"./SelectionManager-D0ySastt.js";import"./useCollator-DMUqz4RZ.js";import"./FocusScope-DA4TfNEK.js";import"./VisuallyHidden-C4Kk4Esh.js";import"./Heading-aUvczpdy.js";import"./Heading-DVrRK9po.js";import"./getActionGroupSlot-C-GBSGDA.js";import"./LoadingSpinner-BpI0Au67.js";import"./react-children-utilities-IxC6-iKF.js";import"./onlyText-LvQVwmcF.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
