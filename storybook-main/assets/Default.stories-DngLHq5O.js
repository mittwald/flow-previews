import{r as M,j as r}from"./iframe-BTcUxdaq.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-DMrXphMX.js";import{L as h}from"./Label-Bgrifxv0.js";import{u as N,F as z,a as U}from"./Form-cnWxryyK.js";import{s as Y}from"./Action-BD0CTwd4.js";import{B as u}from"./Button-SMMW9b8C.js";import{m as Z}from"./IconWarning-DQhgAuti.js";import{C as G}from"./CopyButton-hU6Q8J04.js";import"./PropsContextProvider-BPMxDVmu.js";import"./mergeRefs-Cmhxncmf.js";import"./index-BEbRwPxl.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-CZwoNVbm.js";import"./utils-QQf7G53U.js";import"./Text-DQ5f9mUM.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Bij86ZzX.js";import"./Hidden-C0wGKKFL.js";import"./useFocusRing-C1MTD0-W.js";import"./useFocus-BGyfOFlp.js";import"./TextField-BAMKAOQn.js";import"./Form-BWd8hqS-.js";import"./useLabel-COrOgVB9.js";import"./Label-N2lNAPH4.js";import"./useTextField-BAW13dg9.js";import"./useFormReset-WxrNhhec.js";import"./useControlledState-UFVvdmji.js";import"./useFocusable-BavwL0Gh.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BsnxNcFL.js";import"./FieldDescription-6nNRgJSl.js";import"./Text-Cyud7aU0.js";import"./browser-B8OJoPhG.js";import"./EmulatedBoldText-CDVaFR1M.js";import"./Tooltip-CaNFe0b6.js";import"./OverlayArrow-BOe63Seg.js";import"./ProgressBar-DujcM5UT.js";import"./context-DPBkKLSs.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CloaMtl1.js";import"./ReactAriaControlledValueFix-BWQyDzhM.js";import"./ContextualHelpTrigger-Clttl1X9.js";import"./Popover-cq_CoGS1.js";import"./DialogTriggerView-vV1bA8CD.js";import"./context-BOTu0wPK.js";import"./useStatic-D47W8BT_.js";import"./Dialog-Cp_7H9MS.js";import"./Button-R5yzYc06.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CFIgJOpO.js";import"./RSPContexts-BdDzjtbv.js";import"./Collection-CCOeQAim.js";import"./CollectionBuilder-BMhklLUE.js";import"./Separator-jw0blZZr.js";import"./SearchField-BjsA91o0.js";import"./useEvent-CkvJPork.js";import"./SelectionManager-aQw9Fg0e.js";import"./useCollator-BEdiRQuO.js";import"./FocusScope-_yP39RaH.js";import"./VisuallyHidden-17OXXq4D.js";import"./Heading-DyYm4rdv.js";import"./Heading-BleUsbwQ.js";import"./getActionGroupSlot-CRqbjcra.js";import"./LoadingSpinner-DQ2VKIPI.js";import"./react-children-utilities-Ce2Td5gY.js";import"./onlyText-CNrRXgp3.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,j,S;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(S=(j=m.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var B,D,V;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(V=(D=p.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var R,v,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(v=l.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var T,W,q;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var _,O,E;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
