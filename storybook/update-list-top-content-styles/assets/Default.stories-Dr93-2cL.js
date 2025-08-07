import{r as M,j as r}from"./iframe-C7QIGs8p.js";import{d as I,e as k,P as a,V as A,n as s,r as K}from"./PasswordCreationField-CdJv7i3B.js";import{L as h}from"./Label-Bc44wfjj.js";import{u as N,F as z,a as U}from"./Form-CYUunjPS.js";import{s as Y}from"./Action-CyofG-Bf.js";import{B as u}from"./Button-BGr41c7E.js";import{m as Z}from"./IconWarning-X_5SFXzD.js";import{C as G}from"./CopyButton-Cq4jCyQk.js";import"./PropsContextProvider-BLMgZptu.js";import"./mergeRefs-CRedkLlp.js";import"./index-CQXo9c0q.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-DNXr8e-i.js";import"./utils-BtsnBH_L.js";import"./Text-FQKaNMRy.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-C1WKhAvj.js";import"./Hidden-DWOQ1i8d.js";import"./useFocusRing-DKwzelHt.js";import"./useFocus-ypxUxEvE.js";import"./TextField-BQAs_udX.js";import"./Form-BYQvXm3I.js";import"./useLabel-D-QYQdwI.js";import"./Label-BSYnHYDD.js";import"./useTextField-DceDZrVQ.js";import"./useFormReset-DrAuwzZe.js";import"./useControlledState-KNtUQTSK.js";import"./useFocusable-C2Z9oquv.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BirN45_p.js";import"./FieldDescription-Dzb0uNYE.js";import"./Text-CTrM2jC7.js";import"./browser-C2BAwQT3.js";import"./EmulatedBoldText-_WA-B4P4.js";import"./Tooltip-BK31S5di.js";import"./OverlayArrow-ZcBTChKb.js";import"./ProgressBar-IpWCr7qx.js";import"./context-C2AKAduY.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DOPRUnFZ.js";import"./ReactAriaControlledValueFix-BeIThg3D.js";import"./ContextualHelpTrigger-DvK0zv5Q.js";import"./Popover-D8n-M6I0.js";import"./DialogTriggerView-wftUC24y.js";import"./context-BDfHuVBm.js";import"./useStatic-BWe9m1of.js";import"./Dialog-J3EA-UkZ.js";import"./Button-B7-ATyHT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Bh987CF2.js";import"./RSPContexts-vCu29erK.js";import"./Collection-Boesk9-D.js";import"./CollectionBuilder-DmHyKuX1.js";import"./Separator-l8xhzRbI.js";import"./SearchField-D_-o_-wM.js";import"./useEvent-DpcPK9yZ.js";import"./SelectionManager-jQp60uSJ.js";import"./useCollator-AgXB0Oy1.js";import"./FocusScope-BUYOglmY.js";import"./VisuallyHidden-DORJbjtt.js";import"./Heading-BgFfgKFR.js";import"./Heading-BkMKkvZn.js";import"./getActionGroupSlot-Bx6JDBXT.js";import"./LoadingSpinner-Ce2BrOYf.js";import"./react-children-utilities-D3hsbfti.js";import"./onlyText-TC94BaOd.js";const H=(e=I)=>async o=>{if(!o)return!0;const t=await e.validate(o);return k(t.isValid)?await t.isValid:t.isValid},{action:w}=__STORYBOOK_MODULE_ACTIONS__,J={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"^[0-9]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:s.charPool,charPools:["numbers"],min:1,max:2},{ruleType:s.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=M.useState("");return r.jsx(a,{value:o,onValidationResult:w("onValidationResult"),onChange:P=>{w("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Z,{})})]})},d={render:()=>{const e=A.fromDeclaration(J),o=N({defaultValues:{password:""}});return r.jsxs(z,{form:o,onSubmit:async t=>{await Y(2e3),console.log("submitted",t)},children:[r.jsx(U,{rules:{required:!0,validate:H(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=M.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var x,b,g;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(g=(b=i.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var y,f,C;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
